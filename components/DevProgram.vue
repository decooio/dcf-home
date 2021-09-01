<template>
  <div class="dev-program mobile">
    <div class="title">Crust Ecosystem Development Program</div>
    <div class="m-card">
      <div class="card-title">Crust Grants</div>
      <div class="sub-title">
        Crust Grants program provides financial, technical and resource support
        to Crust ecosystem development and research. Crust Grants program mainly
        targets projects of protocol layer, and applications that serve wide
        range of users. The program offers funding up to $30,000 for each
        recipient.
      </div>
      <div class="btn-base" @click="jumpTo('CrustGrants')">
        <span>Apply Now</span>
        <img src="../assets/svgs/arrow-2.svg" />
      </div>
    </div>
    <div class="m-card" @click="jumpTo('CrustBounty')">
      <div class="card-title">Crust Bounty</div>
      <div class="sub-title">
        Crust Bounty program provides waves of bounties on Gitcoin, mainly on
        specific development and documentation tasks. Take the tasks and earn
        crypto!
      </div>
      <div class="btn-base">
        <span>View Bounties</span>
        <img src="../assets/svgs/arrow-2.svg" />
      </div>
    </div>
    <div id="growth" class="m-card">
      <div class="card-title">Crust Ecosystem Growth</div>
      <div class="sub-title mt-4">
        Crust Ecosystem Growth program collects information of ecosystem
        projects, and provides a wide range of support including technical,
        marketing, and investment resources.
      </div>
      <div class="btn-base btn-2" @click="jumpTo('RegisterSupport')">
        <span>Register and Get Support</span>
        <img src="../assets/svgs/arrow-2.svg" />
      </div>
      <div class="sub-title mt-4">
        Crust Ecosystem Growth program also facilitates developers to apply for
        operational cost via Crust Treasury Proposal.
      </div>
      <div class="btn-base btn-2" @click="jumpTo('CrustTreasuryProposal')">
        <span>Crust Treasury Proposal</span>
        <img src="../assets/svgs/arrow-2.svg" />
      </div>
      <div class="sub-title mt-4">
        Crust Ecosystem Growth program encourages wider community to join and
        contribute on making contents, hosting online and offline events and
        organizing meet-ups. The program will facilitates contributors to apply
        for Crust Tips.
      </div>
      <div class="btn-base btn-2" @click="jumpTo('ApplyCrustTips')">
        <span>Apply for Crust Tips</span>
        <img src="../assets/svgs/arrow-2.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../utils";

export default {
  name: "DevProgram",
  methods: {
    jumpTo: utils.jumpTo,
  },
}
</script>

<style lang="scss" scoped>
.dev-program {
  width: 100%;
  padding-top: 86px;
  padding-bottom: 86px;
  background-color: white;
  background-image: url("../assets/images/back-2.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 403px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .title {
    width: 1280px;
    font-size: 48px;
    line-height: 48px;
    font-weight: bold;
    margin-bottom: 38px;
    color: white;
  }
  .m-card {
    width: 1280px;
    margin-top: 38px;
    background: white;
    border-radius: 0;
    box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.14);
    padding: 20px 34px 38px 34px;
    .card-title {
      font-size: 34px;
      font-weight: 600;
      color: #333333;
      line-height: 48px;
    }
    .sub-title {
      font-size: 19px;
      font-weight: 400;
      color: #333333;
      line-height: 26px;
      margin-top: 16px;
    }
    .btn-base {
      margin-top: 22px;
      width: 254px;
      height: 53px;
      display: flex;
      font-size: 20px;
      padding: 0 20px;
      border: 1px solid rgba(31, 31, 31, 0.6);
      cursor: pointer;
      color: $color-black;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      img {
        width: 32px;
        height: 16px;
      }
      &:hover {
        background: #2dacd1;
        color: white;
        fill: white;
        border: none;
      }
    }
    .btn-2 {
      width: 346px;
    }
  }
}

@media (max-width: 600px) {
  .mobile {
    padding: 1.8rem 1.2rem;
    background-size: 100% 10.5rem;

    .title {
      width: 100%;
      font-size: 1.13rem;
      line-height: 1.56rem;
      font-weight: bold;
      margin-bottom: 0.6rem;
      color: white;
    }

    .m-card {
      width: 100%;
      margin-top: 1.25rem;
      padding: 1.13rem 1.5rem;

      .card-title {
        font-size: 1.13rem;
        font-weight: 600;
        line-height: 1.56rem;
      }

      .sub-title {
        font-size: 0.88rem;
        font-weight: 400;
        line-height: 1.25rem;
        margin-top: 0.88rem;
      }

      .btn-base {
        margin-top: 1.13rem;
        width: 10rem;
        height: 1.5rem;
        display: flex;
        font-size: 0.88rem;
        padding: 0 0.6rem;

        img {
          width: 1rem;
          height: 0.5rem;
        }
      }

      .btn-2 {
        width: 14rem;
      }
    }
  }
}
</style>
