<template>
  <div class="main">
    <home />
    <description />
    <application />
    <support-program />
    <dev-program />
    <about />
    <main-footer />
  </div>
</template>
<script>
import VueScrollTo from "vue-scrollto"
import SupportProgram from "../components/SupportProgram"
import DevProgram from "../components/DevProgram"
import About from "../components/About"
import MainFooter from "../components/Footer"
export default {
  components: { MainFooter, About, DevProgram, SupportProgram },
  mounted() {
    if (this.$route.query.scrollto === "description") {
      VueScrollTo.scrollTo(document.querySelector(".description"))
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  min-width: 1440px;
  font-family: "PingFang SC", "Microsoft YaHei";
}

@media (max-width: 600px) {
  .main {
    min-width: initial;
    font-family: "PingFang SC", "Microsoft YaHei";
    font-size: medium;
    width: 100%;
    overflow: hidden;
  }
}
</style>
