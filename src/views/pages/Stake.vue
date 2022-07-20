<!-- <script lang="ts">
import {  defineComponent } from "vue";
    export default defineComponent() {
    }
</script> -->
<template>
  <div class="stake" id="stake">
    <div class="container">
      <div class="statistics" id="statistics">
        <div class="statistics-left">
          <h3>Stake</h3>
          <span>Earn stake reward with PAL token</span>
        </div>
        <div class="statistics-list">
          <div class="statistics-item">
            <h6>Current APY</h6>
            <h4>60%</h4>
          </div>
          <div class="statistics-item">
            <h6>Total Amount Staked</h6>
            <h4>$10,629,531</h4>
          </div>
          <div class="statistics-item">
            <h6>Total Amount Claimed</h6>
            <h4>$21,327</h4>
          </div>
        </div>
      </div>
      <div class="events">
        <div class="row">
          <div class="col-lg-4">
            <div class="events-item total-staked">
              <h6>Total Staked</h6>
              <img src="@/assets/images/events/pal-coin 1.svg" />
              <h4>16,980 sPAL</h4>
              <p>Enter 2 weeks lock-up period after staking</p>
              <div class="nav-btn">
                <a class="btn btn-dark btn-unstake">Unstake</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="events-item unclaimed-rewards">
              <h6>Unclaimed Rewards</h6>
              <img src="@/assets/images/events/Gift_2 1.svg" />
              <h4>$6,980</h4>
              <div class="pal">
                <img src="@/assets/images/events/logo.svg" />
                <span>2,324 PAL</span>
              </div>
              <div class="nav-btn">
                <a class="btn btn-dark btn-unstake">Claim</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="events-item total-you-claimed">
              <h6>Total You Claimed</h6>
              <img src="@/assets/images/events/Group 1021.svg" class="logo" />
              <h4>16,980 sPAL</h4>
              <div class="pal">
                <img src="@/assets/images/events/logo.svg" />
                <span>7,109 PAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pool">
        <div class="pool-header">
          <h4>Staking Pool</h4>
          <p>
            * By default, your staking funds will be locked for at least 2 weeks
            after staking
          </p>
        </div>
        <div class="pool-content">
          <div class="row title">
            <div class="col-xl-4">Pool</div>
            <div class="col-xl-3">Total Staked</div>
            <div class="col -xl-5">APR</div>
          </div>
          <div class="row pool-item">
            <div class="col-xl-4 col-multi">
              <div class="row col-multi-row">
                <div class="col-xl-3">
                  <div class="images">
                    <img
                      src="@/assets/images/pool/Group 1047.svg"
                      class="logo"
                    />
                  </div>
                </div>
                <div class="col-xl-9">
                  <div class="names">
                    <strong>$sPALqq</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <strong>$10,629,531</strong>
            </div>
            <div class="col-xl-5 apr">
              <strong>60%</strong>
              <div class="actions">
                <div
                  class="nav-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <a class="btn btn-dark btn-stake">Stake</a>
                </div>
                <i
                  class="bi bi-chevron-down"
                  data-bs-toggle="collapse"
                  href="#sPAL"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sPAL"
                >
                </i>
              </div>
            </div>
          </div>
          <div class="collapse" id="sPAL">
            <div class="card card-header">
              <div class="row">
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-xl-5">
                      <span>Weight</span>
                    </div>
                    <div class="col-xl-7">
                      <strong>20%</strong>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3"></div>
                <div class="col-xl-5">
                  <div class="row">
                    <div class="col-xl-5">
                      <span>Pending rewards</span>
                    </div>
                    <div class="col-xl-7">
                      <strong>1,291 $PAL</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-xl-5">
                      <span>Pool TVL</span>
                    </div>
                    <div class="col-xl-7">
                      <strong>$15,298</strong>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3"></div>
                <div class="col-xl-5">
                  <div class="row">
                    <div class="col-xl-5">
                      <span>My liquidity</span>
                    </div>
                    <div class="col-xl-7">
                      <strong>16,980 $sPAL</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pool-item">
            <div class="col-xl-4 col-multi">
              <div class="row col-multi-row">
                <div class="col-xl-3">
                  <div class="images">
                    <img
                      src="@/assets/images/pool/Group 1023.svg"
                      class="logo logo-pal"
                    />
                    <img
                      src="@/assets/images/pool/image 21.svg"
                      class="logo logo-binance"
                    />
                  </div>
                </div>
                <div class="col-xl-9">
                  <div class="names">
                    <strong>Pancakeswap</strong>
                    <strong>LP $PAL-BNB</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3"><strong>$3,314,881</strong></div>
            <div class="col-xl-5 apr">
              <div><strong>84%</strong></div>
              <div class="actions">
                <div class="nav-btn">
                  <a class="btn btn-dark btn-stake">Stake</a>
                </div>
                <div class="nav-btn view-more">
                  <a class="btn btn-light btn-pal">Buy PAL</a>
                </div>
                <!-- <i
                  class="bi bi-chevron-down"
                  data-bs-toggle="collapse"
                  href="#pal"
                  role="button"
                  aria-expanded="false"
                  aria-controls="pal"
                >
                </i> -->
              </div>
            </div>
          </div>
          <!-- <div class="collapse" id="pal">
            <div class="card card-header">
              <div class="row">
                <div class="col-xl-4">
                  <span>Weight</span>
                  <span>20%</span>
                </div>
                <div class="col-xl-3"></div>
                <div class="col-xl-5">
                  <span>Pending rewards</span>
                  <span>1,291 $PAL</span>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4">
                  <span>Pool TVL</span>
                  <span>$15,298</span>
                </div>
                <div class="col-xl-3"></div>
                <div class="col-xl-5">
                  <span>My liquidity</span>
                  <span>16,980 $sPAL</span>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
