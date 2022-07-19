<script lang="ts">
import {defineComponent, type Ref, ref} from "vue";
import {shortenAddress, useBoard, useEthers} from "vue-dapp";
import {PublicSaleService, type Round} from "@/services/PublicSaleService";
import {ethers} from "ethers";
import {PalConstant} from "@/common/Constant";

export default defineComponent({
  setup() {
    const {isActivated, address, signer} = useEthers();
    const refShort: Ref = ref();
    const refFull: Ref = ref();
    const publicSaleService = new PublicSaleService(signer.value);
    const currentRound: Ref = ref();
    const round: Ref = ref<Round>();
    const addressContract = `https://testnet.bscscan.com/address/` + PalConstant.TESTNET.PUBLIC_SALE;

    const {open} = useBoard();

    const onCopy = (e: any) => {
      alert("You copied: " + e.text);
    };
    const onError = (e: any) => {
      alert("Error copy");
    };

    return {
      open,
      isActivated,
      address,
      shortenAddress,
      onCopy,
      onError,
      refShort,
      refFull,
      signer,
      publicSaleService,
      currentRound,
      round,
      addressContract
    };
  },
  beforeUpdate() {
    this.handleLink();
  },
  mounted() {
    this.handleLink();
    this.getIdRound().then(() => {
      this.getRound();
    });
  },
  methods: {
    handleLink(): void {
      this.refShort = `https://palmare.io/?ref=` + shortenAddress(this.address);
      this.refFull = `https://palmare.io/?ref=` + this.address;
    },
    async getIdRound() {
      this.currentRound = await this.publicSaleService.getId();
    },
    async getRound() {
      let {
        totalRaised_,
        pricePerToken_,
        totalAllocation_,
        endDate_,
        maxAllocation_,
        minAllocation_,
        startDate_,
        vestingLength_,
        vestingPercentOfFirst_
      } = await this.publicSaleService.getRound(this.currentRound);

      totalAllocation_ = ethers.utils.formatEther(totalAllocation_);
      totalRaised_ = ethers.utils.formatEther(totalRaised_);
      pricePerToken_ = ethers.utils.formatEther(pricePerToken_);
      endDate_ = new Date(Number(ethers.utils.formatUnits(endDate_,0))).toISOString().slice(0, 19).replace('T', ' ');
      minAllocation_ = ethers.utils.formatEther(minAllocation_);
      maxAllocation_ = ethers.utils.formatEther(maxAllocation_);

      this.round = {
        totalRaised_,
        pricePerToken_,
        totalAllocation_,
        maxAllocation_,
        minAllocation_,
        endDate_,
      }
    },
  },
});
</script>
<template>
  <div v-if="round" class="public-sale">
    <section class="pool-main">
      <div class="container">
        <div class="row">
          <div class="text-center pool-switch">
            <button class="btn active">Buy PAL</button>
            <button class="btn">Claim PAL</button>
          </div>
        </div>
        <div class="row">
          <div class="pool-summary">
            <div class="pool-description">
              <div class="pool-description-header">
                <h3 class="pool-description-title">Initial Phase Offering</h3>
                <div>
                  <img class="btn--live" src="@/assets/images/icons/icon-live.png">Phase {{ currentRound }} is Live<span
                    class="pool-description-header__view-scan"
                ><a v-bind:href="addressContract" target="_blank">View Bscscan</a></span
                >
                </div>
              </div>
              <div class="pool-description-max">
                <div class="pool-description-line-1">
                  <div class="pool-description-max-pal">
                    <h3 class="pool-description-heading">Min Purchase</h3>
                    <span class="pool-description-quantity">{{round.minAllocation_}} PAL</span>
                  </div>
                  <div class="pool-description-close-in">
                    <h3 class="pool-description-heading">Price per token</h3>
                    <span class="pool-description-quantity">{{round.pricePerToken_}} BUSD</span>
                  </div>
                </div>
                <div class="pool-description-line-2">
                  <div class="pool-description-max-spal">
                    <h3 class="pool-description-heading">Max Purchase</h3>
                    <span class="pool-description-quantity">{{round.maxAllocation_}} PAL</span>
                  </div>
                  <div class="pool-description-close-in">
                    <h3 class="pool-description-heading">Close in</h3>
                    <span class="pool-description-quantity"
                    >{{round.endDate_}}</span
                    >
                  </div>
                </div>
              </div>
              <div class="pool-progress">
                <h3 class="pool-description-heading mb-2">Swap progress</h3>
                <div class="pool-description-progress-bar"></div>
                <div class="pool-description-progress-bar-sub">
                  <span>{{round.totalRaised_ / round.totalAllocation_ * 100}}%</span>
                  <span>{{round.totalRaised_}}/{{round.totalAllocation_}} PAL</span>
                </div>
              </div>
            </div>
            <div class="pool-swap">
              <div class="pool-swap-in-out">
                <div class="pool-swap-in-out-top">
                  <div class="pool-swap-in-out-top-from-to">From</div>
                  <div class="pool-swap-in-out-top-balance">Balance: 1000</div>
                </div>
                <div class="pool-swap-in-out-input">
                  <input
                      class="pool-swap-in-out-input-amount"
                      type="text"
                      placeholder="0.00"
                      value="0.00"
                  />
                  <div class="pool-swap-in-out-input-icon">
                    <img src="@/assets/images/icons/max.png" alt="" style="margin-right: 5px"/>
                    <img src="@/assets/images/icons/busd.png" alt=""/>
                  </div>
                </div>
              </div>
              <div class="pool-swap-nav">
                <img
                    src="@/assets/images/icons/icon-pool-swap-nav.png"
                    alt=""
                />
              </div>
              <div class="pool-swap-in-out">
                <div class="pool-swap-in-out-top">
                  <div class="pool-swap-in-out-top-from-to">To</div>
                  <div class="pool-swap-in-out-top-balance">Balance: 1000</div>
                </div>
                <div class="pool-swap-in-out-input">
                  <input
                      class="pool-swap-in-out-input-amount"
                      type="text"
                      placeholder="0.00"
                      value="0.00"
                  />
                  <div class="pool-swap-in-out-input-icon">
                    <img src="@/assets/images/icons/sPAL.png" alt=""/>
                  </div>
                </div>
              </div>
              <div class="pool-swap-sub">
                <div>Rate</div>
                <div>{{round.pricePerToken_}} BUSD = 1 PAL</div>
              </div>
              <div class="pool-swap-footer">
                <button
                    v-if="!isActivated"
                    class="pool-swap-footer-button pool-swap-footer-button--connect"
                    @click="open"
                >
                  Connect wallet
                </button>
                <button
                    v-if="isActivated"
                    class="pool-swap-footer-button pool-swap-footer-button--approve"
                    disabled
                >
                  Approve
                </button>
                <button
                    v-if="isActivated"
                    class="pool-swap-footer-button pool-swap-footer-button--swap"
                    disabled
                >
                  Swap
                </button>
              </div>
            </div>
          </div>
          <div class="pool-detail">
            <ul class="nav nav-tabs" id="pool-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="pool-content-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pool-content"
                    type="button"
                    role="tab"
                    aria-controls="pool-content"
                    aria-selected="true"
                >
                  Pool Detail
                </button>
              </li>
<!--              <li class="nav-item" role="presentation">-->
<!--                <button-->
<!--                    class="nav-link"-->
<!--                    id="history-tab"-->
<!--                    data-bs-toggle="tab"-->
<!--                    data-bs-target="#history"-->
<!--                    type="button"-->
<!--                    role="tab"-->
<!--                    aria-controls="history"-->
<!--                    aria-selected="false"-->
<!--                >-->
<!--                  Your Allocation-->
<!--                </button>-->
<!--              </li>-->
            </ul>
            <div class="tab-content" id="pool-tab-content">
              <div
                  class="tab-pane fade show active"
                  id="pool-content"
                  role="tabpanel"
                  aria-labelledby="pool-content-tab"
              >
                <p>
                  After purchasing the PAL token, you can instantly claim sPAL
                  (wrap and yield bearing version of the PAL token). You can use
                  sPAL as governance power which helps you get a better chance
                  to win an NFT genesis event, get a bigger airdrop reward or
                  stake to get PAL with high APY. If you want to swap to PAL
                  token (1:1 ratio), check out this Token Release Schedule to
                  swap back. Note: Swapping sPAL will make you lost your
                  governance power and chance to participate in future event.
                </p>
                <div class="tab-content-table-info">
                  <div class="tab-content-table-info-1">
                    <table>
                      <tr>
                        <td class="fw-bold">Price per token</td>
                        <td>$0,248 per PAL</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">Total allocation</td>
                        <td>70,209,000 PAL</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">Accept currency</td>
                        <td>BUSD</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">Network</td>
                        <td>Binance Smart Chain</td>
                      </tr>
                      <tr>
                        <td class="fw-bold">Vesting Schedule</td>
                        <td>15% unlock instanly after purchasing, 85% vesting monthly in 15 months</td>
                      </tr>
                    </table>
                  </div>
                  <div class="tab-content-table-info-2">
                    <div v-if="isActivated" class="pool-referral-user">
                      <div class="pool-referral-user-link">
                        <h2 class="pool-referral-heading">Referral to Earn</h2>
                        <p class="pool-referral-user-desc">
                          Refer any participant to join the IPO, and then you
                          can earn up to 6% commission on their deposits!
                          Commission will be airdrop to your wallet in BUSD
                          after phase 10 ends.
                        </p>
                        <h2 class="pool-referral-heading">
                          Your Referral Link
                        </h2>
                        <div class="pool-referral-user-link-url">
                          {{ refShort }}
                          <i
                              class="icon-copy"
                              style="cursor: pointer"
                              v-clipboard:copy="refFull"
                              v-clipboard:success="onCopy"
                              v-clipboard:error="onError"
                          ></i>
                        </div>
                        <div>
                          <a class="pool-referral-user-btn">View more</a>
                        </div>
                      </div>
                    </div>
                    <div v-else class="pool-referral-guest">
                      <h2 class="pool-referral-guest-heading">
                        Referral to Earn
                      </h2>
                      <div class="pool-referral-guest-desc">
                        Refer any participant to join the IPO, and then you can
                        earn up to 6% commission on their deposits in BUSD!
                      </div>
                      <a class="btn pool-referral-guest-btn" @click="open"
                      >Generate Referral Link</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                  class="tab-pane fade"
                  id="history"
                  role="tabpanel"
                  aria-labelledby="history-tab"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="text-center m-4">Loading...</div>
</template>
