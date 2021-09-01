<template>
  <div v-if="modalShow" class="wrapper">
    <div class="desc">
      We use cookies to offer you a better browsing experience, analyze site
      traffic, personalize content, and serve targeted advertisements. If you
      continue to use this site, you consent to our use of cookies.
    </div>
    <div class="btn-wrapper">
      <button class="btn" @click="closeModal">Accept cookies</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CookieAccept",
  data() {
    return {
      modalShow: true,
    }
  },
  mounted() {
    this.modalShow = localStorage.getItem("cookie-accept") !== "1"
  },
  methods: {
    closeModal() {
      this.modalShow = false
      localStorage.setItem("cookie-accept", "1")
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  z-index: 999;
  background-color: #4b5563;
  position: fixed;
  opacity: 0.9;
  color: #fff;
  bottom: 5px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  min-height: 100px;
  align-items: center;
  .desc {
    width: 70%;
  }
  .btn-wrapper {
    .btn {
      width: 200px;
      height: 36px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      background-color: #34d399;
      &:hover {
        background-color: #1b8862;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    .desc {
      width: 100%;
    }
    .btn-wrapper {
      .btn {
        height: 36px;
        width: auto;
      }
    }
  }
}
</style>
