<script lang="ts">
import { ref, defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const email = ref<string>('');
    const messageSubscription = ref<string>('');
    const subscript = () => {
      axios
        .get('https://api.palmare.io/', {
          params: {
            email: email,
          },
          insecureHTTPParser: true,
          headers: { 'Access-Control-Allow-Origin': '*' },
        })
        .then(function (response) {
          messageSubscription.value = response.data.data;
        })
        .catch((e: any) => {
          messageSubscription.value =
            'Error! An error occurred. Please try again later';
        });
    };
    return {
      email,
      messageSubscription,
      subscript,
    };
  },
});
</script>
<template>
  <div class="product-demo" id="howtoearn">
    <div class="container">
      <div class="row product-demo-item">
        <div class="col-md-6 col-sm-12">
          <div class="product-demo-content">
            <p>
              <strong>Start by purchasing your NFT gear</strong> and convert
              your burining calories to PAS token, the more you train the more
              income you gain
            </p>
            <a href="#" class="btn-product-demo-item btn--read-more">
              <img
                src="@/assets/images/icons/arrow-right-white.png"
                alt="arrow-right"
              />
              <span>Read more</span>
            </a>
          </div>
        </div>
        <div class="col-md-5 offset-md-1 col-sm-12">
          <img
            class="product-demo-item__img"
            src="@/assets/images/product-demo/demo1.png"
            alt="item"
          />
        </div>
      </div>
      <div class="row product-demo-item product-demo-item--reverse">
        <div class="col-md-6 offset-md-1 col-sm-12">
          <div class="product-demo-content">
            <p>
              Each user profile is a NFT itself. It controls the data, and thus,
              its owner becomes the controller of the given profile.
              <strong
                >In Palmare, you can truly own and manage your training & social
                data</strong
              >
            </p>
            <a href="#" class="btn-product-demo-item btn--read-more">
              <img
                src="@/assets/images/icons/arrow-right-white.png"
                alt="arrow-right"
              />
              <span>Read more</span>
            </a>
          </div>
        </div>
        <div class="col-md-5 col-sm-12">
          <img
            class="product-demo-item__img product-demo-item__img--demo2"
            src="@/assets/images/product-demo/demo2.png"
            alt="item"
          />
        </div>
      </div>
      <div class="row product-demo-item">
        <div class="col-md-6 col-sm-12">
          <div class="product-demo-content">
            <p>
              Creating new Customer Experience & increasing engagement to
              Palmare community from top industry brands's by
              <strong>Checkin to Earn and Daily Quests</strong>
            </p>
            <a href="#" class="btn-product-demo-item btn--read-more">
              <img
                src="@/assets/images/icons/arrow-right-white.png"
                alt="arrow-right"
              />
              <span>Read more</span>
            </a>
          </div>
        </div>
        <div class="col-md-5 offset-md-1 col-sm-12">
          <img
            class="product-demo-item__img"
            src="@/assets/images/product-demo/demo4.png"
            alt="item"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="roadmap" id="roadmap">
    <div class="container">
      <h2 class="roadmap__heading">Roadmap</h2>
      <ul class="roadmap__list">
        <li class="roadmap__item roadmap__item--1">
          <div class="roadmap__milestone"></div>
          <div class="card2">
            <h3 class="card2__heading">Q4 2021</h3>
            <ul class="card2__list">
              <li class="card2__item">Team Setup</li>
              <li class="card2__item">Project Ideation</li>
            </ul>
          </div>
        </li>
        <li class="roadmap__item roadmap__item--2">
          <div class="roadmap__milestone"></div>
          <div class="card2">
            <h3 class="card2__heading">Q1 2022</h3>
            <ul class="card2__list">
              <li class="card2__item">Product Specs</li>
              <li class="card2__item">Roadmap</li>
              <li class="card2__item">Establishment - UI & UX</li>
              <li class="card2__item">Creation</li>
            </ul>
          </div>
        </li>
        <li class="roadmap__item roadmap__item--3">
          <div class="roadmap__milestone"></div>
          <div class="card2">
            <h3 class="card2__heading">Q2 2022</h3>
            <ul class="card2__list">
              <li class="card2__item">Community Event</li>
              <li class="card2__item">Marketing Kickoff</li>
              <li class="card2__item">Genesis NFTs</li>
              <li class="card2__item">Partnerships</li>
            </ul>
          </div>
        </li>
        <li class="roadmap__item roadmap__item--4">
          <div class="roadmap__milestone"></div>
          <div class="card2">
            <h3 class="card2__heading">Q3 2022</h3>
            <ul class="card2__list">
              <li class="card2__item">IPO</li>
              <li class="card2__item">NFT Market Launch</li>
              <li class="card2__item">Beta Launch</li>
              <li class="card2__item">In-app Trade System</li>
            </ul>
          </div>
        </li>
        <li class="roadmap__item roadmap__item--5">
          <div class="roadmap__milestone"></div>
          <div class="card2">
            <h3 class="card2__heading">Q4 2022</h3>
            <ul class="card2__list">
              <li class="card2__item">IP and Brand</li>
              <li class="card2__item">Mainnet Launch</li>
              <li class="card2__item">Challenge Center Launch</li>
              <li class="card2__item">
                Listing on Gate.io, Mexc, Digifinex, Coinsbit, Huobi
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="subcribe">
    <div class="container">
      <div class="subcribe-wrap">
        <div class="subcribe__heading">Subcribe now</div>
        <div class="subcribe__body">
          <div class="subcribe__input">
            <input
              class=""
              type="email"
              placeholder="Email Address"
              v-model="email"
            />
            <span class="btn-goto" @click="subscript">Goto</span>
            <span>{{ messageSubscription }}</span>
          </div>
          <div class="subcribe__desc">
            If you have any business request or feedback, you can send to
            support@palmare.io
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  <div class="publicsale" id="publicsale">-->
  <!--    <div class="container">-->
  <!--      <div class="heading">Get your early bird discount by buying your PAL <strong>in our ongoing Public-->
  <!--        Sale</strong>-->
  <!--      </div>-->
  <!--      <div class="lived-phase-table">-->
  <!--        <div class="row">-->
  <!--          <div class="col-lg-6 lived-phase-content">-->
  <!--            <h3>Phase 1 is comingsoon</h3>-->
  <!--            <p>After a phase is finished, token price will increase 10%.<br/>If deadline is met, we will-->
  <!--              launch on-->
  <!--              Pancake with latest price.</p>-->
  <!--            <div class="lived-phase-bar">-->
  <!--              <div class="progress-bar">-->
  <!--                <div class="current js-current-bar"></div>-->
  <!--              </div>-->
  <!--              <span class="filled-number">-->
  <!--                    <span class="js-filled-number">0</span>% filled </span>-->
  <!--            </div>-->
  <!--            <a href="#" class="palmare-btn btn-black btn-buy-pal">-->
  <!--              <img src="@/assets/images/icon/arrow-right-black.png" alt="arrow-right">-->
  <!--              <span>Buy PAL - Coming Soon</span>-->
  <!--            </a>-->
  <!--          </div>-->
  <!--          <div class="col-lg-6 lived-phase-figure">-->
  <!--            <div class="lived-phase-figure-item">-->
  <!--              <p>Current Price</p>-->
  <!--              <p>$0.0406 per PAL</p>-->
  <!--            </div>-->
  <!--            <div class="lived-phase-figure-item">-->
  <!--              <p>Price in next phase</p>-->
  <!--              <p>$0.0476 per PAL</p>-->
  <!--            </div>-->
  <!--            <div class="lived-phase-figure-item">-->
  <!--              <p>Current Round</p>-->
  <!--              <p>$1,931,000</p>-->
  <!--            </div>-->
  <!--            <div class="lived-phase-figure-item">-->
  <!--              <p>Total Raised</p>-->
  <!--              <p>$0</p>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <div class="team">-->
  <!--    <div class="container">-->
  <!--      <h2 class="team-heading">The Team</h2>-->
  <!--      <div class="row team-items">-->
  <!--        <div class="col-xxl-3 col-sm-6 col-xl-3">-->
  <!--          <div class="team-member text-center">-->
  <!--            <img-->
  <!--              class="team-member-avatar"-->
  <!--              src="@/assets/images/teams/ricky_mcneill.png"-->
  <!--              alt="member"-->
  <!--            />-->
  <!--            <div class="team-member-name">Cullum Mcneill</div>-->
  <!--            <div class="team-member-role">Founder</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-xxl-3 col-sm-6 col-xl-3">-->
  <!--          <div class="team-member text-center">-->
  <!--            <img-->
  <!--              class="team-member-avatar"-->
  <!--              src="@/assets/images/teams/eren_devlin.png"-->
  <!--              alt="member"-->
  <!--            />-->
  <!--            <div class="team-member-name">Eren Devlin</div>-->
  <!--            <div class="team-member-role">Lead Developer</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-xxl-3 col-sm-6 col-xl-3">-->
  <!--          <div class="team-member text-center">-->
  <!--            <img-->
  <!--              class="team-member-avatar"-->
  <!--              src="@/assets/images/teams/raymond_cantrel.png"-->
  <!--              alt="member"-->
  <!--            />-->
  <!--            <div class="team-member-name">Jacky Lous</div>-->
  <!--            <div class="team-member-role">COO</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-xxl-3 col-sm-6 col-xl-3">-->
  <!--          <div class="team-member text-center">-->
  <!--            <img-->
  <!--              class="team-member-avatar"-->
  <!--              src="@/assets/images/teams/andrew_kang.png"-->
  <!--              alt="member"-->
  <!--            />-->
  <!--            <div class="team-member-name">Steven Andrew</div>-->
  <!--            <div class="team-member-role">CMO</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="row team-items">-->
  <!--        <div class="col"></div>-->
  <!--        <div class="col-xxl-3 col-xl-3">-->
  <!--          <div class="team-member text-center">-->
  <!--            <img-->
  <!--              class="team-member-avatar"-->
  <!--              src="@/assets/images/teams/dorothy.png"-->
  <!--              alt="member"-->
  <!--            />-->
  <!--            <div class="team-member-name">Kaylin Bartlett</div>-->
  <!--            <div class="team-member-role">UI/UX Designer</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-xxl-3 col-xl-3">-->
  <!--          <div class="team-member text-center">-->
  <!--            <img-->
  <!--              class="team-member-avatar"-->
  <!--              src="@/assets/images/teams/cadi_bartlett.png"-->
  <!--              alt="member"-->
  <!--            />-->
  <!--            <div class="team-member-name">Delwyn</div>-->
  <!--            <div class="team-member-role">Tester</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col-xxl-3 col-xl-3">-->
  <!--          <div class="team-member text-center">-->
  <!--            <img-->
  <!--              class="team-member-avatar"-->
  <!--              src="@/assets/images/teams/0xsPark.png"-->
  <!--              alt="member"-->
  <!--            />-->
  <!--            <div class="team-member-name">0xsPark</div>-->
  <!--            <div class="team-member-role">Connector</div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="col"></div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <div class="our-connection block-logo">
    <div class="container">
      <h2 class="block-logo-heading our-connection-heading">
        Audit Contract & KYC
      </h2>
      <div class="block-logo-items">
        <div class="block-logo-items">
          <a
            href="https://bscscan.com/address/0xEC143f87E8C2166F0405158677b84A10C045479a"
            target="_blank"
            class="block-logo__item"
          >
            <img src="@/assets/images/logo/partners/binance.png" alt="bsc" />
          </a>
          <a
            href="https://github.com/solidproof/projects/tree/main/Palmare"
            target="_blank"
            class="block-logo__item"
          >
            <img src="@/assets/images/logo/partners/solid.png" alt="audit" />
          </a>

          <a
            href="https://novos.tech/Palmare_Token_KYC.html"
            target="_blank"
            class="block-logo__item"
          >
            <img src="@/assets/images/logo/partners/novos.png" alt="novos" />
          </a>
        </div>
      </div>
    </div>

    <div class="feature block-logo">
      <div class="container">
        <h2 class="block-logo-heading feature--heading">As Feature in</h2>
        <div class="block-logo-items feature-body">
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/yahoo.png" alt="yahoo" />
          </a>
          <a href="#" class="block-logo__item">
            <img
              src="@/assets/images/logo/partners/coindoo.png"
              alt="sequoia"
            />
          </a>
          <a href="#" class="block-logo__item">
            <img
              src="@/assets/images/logo/partners/Marketwatch.png"
              alt="folius-ventures"
            />
          </a>
        </div>
        <div class="block-logo-items feature-body">
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/digital_journal.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/fox43.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/fox40.png" />
          </a>
        </div>
      </div>
    </div>

    <div class="our-connection block-logo">
      <div class="container">
        <h2 class="block-logo-heading our-connection-heading">
          Our Partner & Connect
        </h2>
        <div class="block-logo-items block-logo-items--1">
          <a href="#" class="block-logo__item">
            <img class="" src="@/assets/images/logo/partners/coincarp.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/mdex.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/okx.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/probit.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/digifinex.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/huobi.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/coingecko.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/did.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/coinsbit.png" />
          </a>
        </div>
        <div class="block-logo-items block-logo-items--2">
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/peardao.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/uponly.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/ikonic.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/truserland.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/lossless.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/hoolder.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/burger_cities.png" />
          </a>
        </div>
        <div class="block-logo-items block-logo-items--3">
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/refinable.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/nabox.png" />
          </a>
          <a href="#" class="block-logo__item">
            <img src="@/assets/images/logo/partners/nuls.png" />
          </a>
        </div>
        <div class="text-center m-4">
          <a
            href="https://medium.com/@PalmareOfficial"
            target="_blank"
            class="btn btn--read-more"
            >View more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
