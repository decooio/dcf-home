<template>
  <div class="description">
    <div class="description-container padding-top-90">
      <div class="description-container-title">
        {{ $t("description.program.title") }}
      </div>
      <div class="description-container-subtitle" v-html="$t('description.program.content')"></div>
    </div>
    <div class="description-container color-white description-background">
      <div class="description-container-title">
        {{ $t("description.stack.title") }}
      </div>
      <div class="description-container-subtitle">
        {{ $t("description.stack.content") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  components: {},
}
</script>

<style lang="scss" scoped>
@media (min-width: 600px) {
  .description {
    background: url("~/assets/images/back-2.png");
    width: 100%;
    margin: auto;
    height: 1080px;
    background-repeat: no-repeat;
    background-position: bottom;
    .description-container {
      padding-top: 127px;
      max-width: 1280px;
      height: 50%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: $color-black;
      .description-container-title {
        font-size: 48px;
        line-height: 48px;
        font-weight: bold;
        margin-bottom: 65px;
      }

      .description-container-subtitle {
        font-size: 36px;
        font-weight: bold;
        line-height: 48px;
      }

    }

    .padding-top-90 {
      padding-top: 90px;
    }
  }
}


@media (max-width: 600px) {
  .description {
    width: 100%;

    .description-container {
      height: 50%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: $color-black;
      padding: 1.875rem 1.25rem 1.875rem 1.25rem;
      .description-container-title {
        font-size: 1.125rem;;
        line-height: 1.56rem;
        margin-bottom: 0.875rem;
      }

      .description-container-subtitle {
        font-size: 0.75rem;
        line-height: 1.06rem;
      }

    }

    .description-background {
      background: url("~/assets/images/back-2.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding-bottom: 6.3rem ;
    }
  }
}
</style>
