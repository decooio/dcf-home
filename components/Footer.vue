<template>
  <div class="main-footer mobile">
    <div class="logo" />
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="'footer-tab-' + index"
        class="m-btn"
        @click="onClickTab(tab)"
      >
        {{ tab }}
      </div>
    </div>
    <div class="contact">
      <div class="title">Contact Us</div>
      <input class="input-email" disabled :value="email" />
      <div
        v-clipboard:copy="email"
        v-clipboard:success="onCopied"
        v-tooltip="{
          content: 'Copied',
          show: showCopied,
          trigger: 'manual',
          autoHide: true,
        }"
        class="copy-btn"
      >
        Copy
      </div>
      <div class="copyright">
        Copyright Ⓒ Decentralised Cloud Foundation 2021 All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../utils"
const TAB_MAP = {
  Initiatives: ".description",
  Technologies: ".application",
  "Support Program": ".support-program",
  About: ".about",
}
export default {
  name: "MainFooter",
  data() {
    return {
      tabs: ["Initiatives", "Technologies", "Support Program", "About"],
      email: "hi@decloud.foundation",
      showCopied: false,
      lastTimer: null,
    }
  },
  methods: {
    onClickTab(text) {
      utils.scrollIntoView(TAB_MAP[text])
    },
    onCopied() {
      this.showCopied = true
      if (this.lastTimer) clearTimeout(this.lastTimer)
      this.lastTimer = setTimeout(() => {
        this.lastTimer = null
        this.showCopied = false
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-footer {
  width: 100%;
  height: 319px;
  background: url("../assets/images/back-4.png") no-repeat top;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 60px 0;

  .logo {
    width: 70px;
    height: 84px;
    background: url("../assets/images/logo.png") no-repeat;
    background-size: contain;
  }

  .tabs {
    display: block;
    margin-top: -10px;
    margin-left: 65px;
    margin-right: 109px;
    .m-btn {
      display: block;
      font-size: 22px;
      width: min-content;
      white-space: nowrap;
      font-weight: bold;
      line-height: 50px;
      color: white;
      //padding: 0 30px;
      //border-radius: 30px;
      outline: none;
      cursor: pointer;
      //&:hover {
      //  background: #2dacd1;
      //  color: white;
      //}
      //
      //&:focus {
      //  color: white;
      //}
    }
  }

  .contact {
    .title {
      font-size: 24px;
      font-weight: 500;
      color: white;
      line-height: 34px;
    }

    .input-email {
      margin-top: 11px;
      display: inline-block;
      width: 401px;
      height: 53px;
      background: white;
      border-radius: 5px;
      border: 1px solid #979797;
      font-size: 19px;
      font-weight: 400;
      color: #333333;
      line-height: 26px;
      padding-left: 20px;
    }

    .copy-btn {
      display: inline-block;
      font-size: 22px;
      line-height: 48px;
      color: white;
      margin-top: 11px;
      height: 48px;
      background: #2ca8cc;
      border-radius: 5px;
      padding: 0 30px;
      cursor: pointer;
    }

    .copyright {
      font-size: 22px;
      font-weight: 400;
      color: white;
      line-height: 30px;
      margin-top: 20px;
    }
  }
}

@media (max-width: 600px) {
  .mobile {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 10rem;
    padding: 1.2rem;
    .logo {
      display: none;
    }
    .tabs {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 0;
      .m-btn {
        font-size: 0.63rem;
        font-weight: 500;
        line-height: 0.75rem;
        margin-right: 1rem;
      }
    }
    .contact {
      .title {
        font-size: 0.75rem;
        line-height: 1rem;
        margin-top: 1.2rem;
      }
      .input-email {
        width: 12rem;
        height: 1.88rem;
        padding-left: 0.75rem;
        font-size: 0.63rem;
        margin-top: 0.6rem;
      }
      .copy-btn {
        margin-top: 0.6rem;
        padding: 0 1.44rem;
        line-height: 1.88rem;
        height: 1.88rem;
        font-size: 0.63rem;
        margin-left: 0.38rem;
      }
      .copyright {
        font-size: 0.5rem;
        line-height: 0.69rem;
      }
    }
  }
}
</style>
