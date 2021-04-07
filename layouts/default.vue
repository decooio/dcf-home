<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import NavBar from "~/components/NavBar"

export default {
  components: {
    NavBar,
  },
  mounted() {
    console.log(this.$route)
  },
  head() {
    return {
      title:
        this.$store.state.locale === "en"
          ? "Decentralized Cloud Foundation / DCF"
          : "Decentralized Cloud Foundation / DCF",
    }
  },
  computed: {
    showFooter() {
      return this.$route.name === "index"
    },
  },
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


nav-bar {
  position: absolute;
}

@media only screen and (max-width: 1600px) and (min-width: 640px){
  body { zoom: 0.75}
}
@media only screen and (max-width: 640px) { html, body { font-size: 32px; } }
/* for 540 px width screen */
@media only screen and (max-width: 540px) { html, body { font-size: 27px; } }
/* for 480 px width screen */
@media only screen and (max-width: 480px) { html, body { font-size: 24px; } }
/* for 450 px width screen */
@media only screen and (max-width: 450px) { html, body { font-size: 22.5px; } }
/* for 414 px width screen */
@media only screen and (max-width: 414px) { html, body { font-size: 20.7px; } }
/* for 375 px width screen */
@media only screen and (max-width: 375px) { html, body { font-size: 18.75px; } }
/* for 320 px width screen */
@media only screen and (max-width: 320px) { html, body { font-size: 16px; } }
</style>
