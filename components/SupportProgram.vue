<template>
  <div class="support-program mobile">
    <div class="title">Crust Key Technologies Support Program</div>
    <div class="world-map-container">
      <div class="world-map">
        <div class="point p1">
          <div class="v-line"></div>
          <div class="card" @click="jumpTo('teamNorthAmerica')">
            <div class="card-title">North America</div>
            <div class="sub-title">DSM and chain modules</div>
            <div class="team">—— Sediment-tech Team</div>
          </div>
        </div>
        <div class="point p2">
          <div class="v-line"></div>
          <div class="card" @click="jumpTo('teamEurope')">
            <div class="card-title">Europe</div>
            <div class="sub-title">Toolkit & API</div>
            <div class="team">—— Socbay.io Team</div>
          </div>
        </div>
        <div class="point p3">
          <div class="v-line"></div>
          <div class="card" @click="jumpTo('teamShanghai')">
            <div class="card-title">Shanghai</div>
            <div class="sub-title">
              GPoS, Substrate and related technologies
            </div>
            <div class="team">—— Clouderium Team</div>
          </div>
        </div>
        <div class="point p4">
          <div class="v-line"></div>
          <div class="card" @click="jumpTo('teamSingapore')">
            <div class="card-title">Singapore</div>
            <div class="sub-title">MPoW and TEE related technologies</div>
            <div class="team">—— SkyeKiwi Team</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cards">
      <dcf-card2
        title="Crust Network"
        sub-title="a decentralized storage network of Web3.0 ecosystem"
        @click="jumpTo('CrustNetwork')"
      />
      <dcf-card2
        title="Encrypted IPFS"
        sub-title="an encrypted storage layer of IPFS that supports customized encryptor"
        @click="jumpTo('encryptedIPFS')"
      />
      <dcf-card2
        title="Decentralized Attestation Network"
        sub-title="a decentralized TEE enclave attestation service network built on blockchain"
        @click="jumpTo('DAN')"
      />
    </div>
    <div class="apply-btn">
      <span class="def">Apply For Support</span>
      <img src="../assets/svgs/arrow-2.svg" width="32" height="16" />
      <span class="hover">Open Soon</span>
    </div>
  </div>
</template>

<script>
import utils from "../utils";
import DcfCard2 from "./DcfCard2";

export default {
  name: "SupportProgram",
  components: { DcfCard2 },
  methods: {
    jumpTo: utils.jumpTo,
  },
}
</script>

<style lang="scss" scoped>
.support-program {
  width: 100%;
  margin: auto;
  background-color: white;
  background-image: url("../assets/images/back-gray.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 343px;
  padding-bottom: 67px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -50px;
  .title {
    width: 1280px;
    font-size: 48px;
    line-height: 48px;
    font-weight: bold;
  }
  .world-map-container {
    overflow: auto;
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
  }
  .world-map {
    position: relative;
    overflow: visible;
    margin-top: 314px;
    height: 553px;
    width: 1390px;
    background: url("../assets/images/back-world.png") no-repeat bottom;
    background-size: contain;
    .point {
      width: 29px;
      height: 29px;
      border-radius: 15px;
      background-color: #3f7e91;
      position: absolute;
      overflow: visible;
      .v-line {
        width: 3px;
        height: 80px;
        background-color: #3f7e91;
        position: absolute;
        top: -80px;
        left: 13px;
      }
      .card {
        border: 3px solid #3f7e91;
        position: absolute;
        border-radius: 0;
        width: 328px;
        display: flex;
        flex-direction: column;
        padding: 19px;
        cursor: pointer;
        .card-title {
          font-size: 26px;
          font-weight: 500;
          color: #333333;
        }
        .sub-title {
          font-size: 19px;
          color: #333333;
          margin-top: 5px;
        }
        .team {
          @extend .sub-title;
          margin-top: 22px;
          align-self: flex-end;
        }
      }
    }
    .p1 {
      left: 190px;
      top: 193px;
      .card {
        top: -255px;
        left: -204px;
      }
    }
    .p2 {
      left: 694px;
      top: 98px;
      .card {
        top: -255px;
        left: -128px;
      }
    }
    .p3 {
      left: 1182px;
      top: 156px;
      .card {
        top: -275px;
        left: -193px;
      }
    }
    .p4 {
      left: 1094px;
      top: 263px;
      .v-line {
        top: 29px !important;
      }
      .card {
        left: -256px;
        top: 109px !important;
      }
    }
  }
  .cards {
    margin-top: 53px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1280px;
    padding: 67px 20px;
  }
  .apply-btn {
    align-self: center;
    width: 336px;
    height: 58px;
    display: flex;
    font-size: 24px;
    padding: 0 20px;
    border: 1px solid rgba(31, 31, 31, 0.6);
    cursor: pointer;
    color: $color-black;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .hover {
      display: none;
    }
    img {
      margin-left: 10px;
    }
    &:hover {
      background: #2dacd1;
      color: white;
      fill: white;
      border: none;
      justify-content: center;
      .def,
      img {
        display: none;
      }
      .hover {
        display: block;
      }
    }
  }
}
@media (max-width: 600px) {
  .mobile {
    padding: 1rem;
    background-size: 100% 7.5rem;
    .title {
      font-size: 1.2rem;
      width: unset;
    }
    .world-map-container {
      overflow: auto;
      width: 100%;
      height: 33.42rem;
      display: flex;
      justify-content: flex-start;
    }
    .world-map {
      flex-shrink: 0;
      margin-top: 9rem;
      height: 14.44rem;
      width: 36.29rem;
      .point {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 0.375rem;
        .v-line {
          width: 0.13rem;
          height: 3.3rem;
          top: -3.3rem;
          left: 0.31rem;
        }
        .card {
          border: 0.13rem solid #3f7e91;
          width: 16.63rem;
          padding: 0.75rem;
          .card-title {
            font-size: 1.13rem;
          }
          .sub-title {
            font-size: 0.88rem;
            margin-top: 0.25rem;
          }
          .team {
            margin-top: 1rem;
            align-self: flex-end;
          }
        }
      }
      .p1 {
        left: 4.56rem;
        top: 6.06rem;
        .card {
          top: -8.94rem;
          left: -3.94rem;
        }
      }
      .p2 {
        left: 17.75rem;
        top: 2.75rem;
        .v-line {
          height: 10rem !important;
          top: 0.74rem !important;
        }
        .card {
          top: 10rem;
          left: -12rem;
        }
      }
      .p3 {
        left: 31rem;
        top: 3.75rem;
        .card {
          top: -11.94rem;
          left: -9.94rem;
        }
      }
      .p4 {
        left: 28.5rem;
        top: 8rem;
        .v-line {
          top: 0.74rem !important;
        }
        .card {
          top: 3.5rem !important;
          left: -3rem;
        }
      }
    }
    .cards {
      width: 100%;
      flex-direction: column;
      margin-top: 0;
      padding: unset;
    }
    .apply-btn {
      align-self: center;
      margin-right: unset;
      width: 8.9rem;
      height: 1.5rem;
      font-size: 0.63rem;
      margin-top: 1.5rem;
      margin-bottom: 1.25rem;
      padding: 0 0.5rem;
      white-space: nowrap;
      img {
        width: 1.06rem;
        height: 0.56rem;
      }
    }
  }
}
</style>
