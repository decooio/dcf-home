<template>
  <div class="main">
    <home />
    <description />
    <application />
    <apply />
  </div>
</template>
<script>
import VueScrollTo from "vue-scrollto"
export default {
  components: {},
  mounted() {
    if(this.$route.query.scrollto === "description") {
      VueScrollTo.scrollTo(document.querySelector(".description"))
    }
  }
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
  }
}
</style>
