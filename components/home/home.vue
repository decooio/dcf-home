<template>
  <div class="index">
    <nav-bar> </nav-bar>
    <div class="index-container">
      <div class="index-container-title">
        <p>{{ $t("home.title") }}</p>
      </div>
      <div class="index-container-subtitle">{{ $t("home.subtitle") }}</div>
    </div>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue"
export default {
  name: "Index",
  components: {
    NavBar,
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 600px) and (max-width: 1440px) {
  .index {
    height: 133.33vh;
  }
  <!if safari_webkit>
  .index {
    height: 100vh;
  }
  <![endif]>
}

@media (min-width: 1441px) {
  .index {
    height: 100vh;
  }
}

@media (min-width: 600px) {
  .index {
    background: url("~/assets/images/back-1.png");
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .index-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .index-container-title {
        width: 100%;
        height: 240px;
        background: rgba(45, 172, 209, 0.5);
        padding-left: calc((100% - 1350px) / 3.8);

        p {
          font-size: 86px;
          font-weight: bold;
          color: white;
          line-height: 240px;
        }
      }

      .index-container-subtitle {
        margin-top: 43px;
        font-size: 36px;
        font-weight: bold;
        color: white;
        line-height: 48px;
        max-width: 1200px;
        padding-left: calc((100% - 1350px) / 3.8);
      }
    }
  }
}

@media (max-width: 600px) {
  .index {
    background: url("~/assets/images/back-1.png");
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .index-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .index-container-title {
        width: 100%;
        height: 6.25rem;
        background: rgba(45, 172, 209, 0.5);
        padding-left: 1.25rem;
        display: flex;
        align-items: center;

        p {
          font-size: 1.5rem;
          color: white;
          letter-spacing: 0;
          line-height: 2rem;
          margin: 0;
        }
      }
      .index-container-subtitle {
        font-size: 0.75rem;
        letter-spacing: 0;
        color: white;
        line-height: 1rem;
        padding: 1rem 1.25rem;

      }
    }
  }
}
</style>
