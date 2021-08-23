<template>
  <div class="support-program">
    <div class="title">Crust Key Technologies Support Program</div>
    <div class="world-map">
      <div class="point p1">
        <div class="v-line"></div>
        <div class="card">
          <div class="card-title">North America</div>
          <div class="sub-title">DSM and chain modules</div>
          <div class="team">—— UC Berkeley Team</div>
        </div>
      </div>
      <div class="point p2">
        <div class="v-line"></div>
        <div class="card">
          <div class="card-title">Europe</div>
          <div class="sub-title">Toolkit & API</div>
          <div class="team">—— Socbay.io Team</div>
        </div>
      </div>
      <div class="point p3">
        <div class="v-line"></div>
        <div class="card">
          <div class="card-title">Shanghai</div>
          <div class="sub-title">GPoS, Substrate and related technologies</div>
          <div class="team">—— Clouderium Team</div>
        </div>
      </div>
      <div class="point p4">
        <div class="v-line"></div>
        <div class="card">
          <div class="card-title">Singapore</div>
          <div class="sub-title">MPoW and TEE related technologies</div>
          <div class="team">—— SkyKiwi Team</div>
        </div>
      </div>
    </div>
    <div class="cards">
      <dcf-card2
        title="Crust Network"
        sub-title="a decentralized storage network of Web3.0 ecosystem"
      />
      <dcf-card2
        title="Encrypted IPFS"
        sub-title="an encrypted storage layer of IPFS that supports customized encryptor"
      />
      <dcf-card2
        title="Decentralized Attestation Network"
        sub-title="a decentralized TEE enclave attestation service network built on blockchain"
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
import DcfCard2 from "./DcfCard2"

export default {
  name: "SupportProgram",
  components: { DcfCard2 },
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
  .title {
    width: 1280px;
    font-size: 48px;
    line-height: 48px;
    font-weight: bold;
  }
  .world-map {
    margin-top: 314px;
    position: relative;
    overflow: visible;
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
      left: 350px;
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
    margin-right: calc(50% - 680px);
    align-self: flex-end;
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
  .support-program {
    padding: 1rem !important;
  }
  .title {
    font-size: 1.2rem !important;
    width: unset !important;
  }
  .world-map {
    transform: scale(0.5);
  }
  .cards {
    width: 100% !important;
    overflow: auto !important;
  }
}
</style>
