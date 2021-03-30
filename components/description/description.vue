<template>
  <div class="description">
    <div class="description-container">
      <div class="description-container-title">
        {{ $t("description.program.title") }}
      </div>
      <div class="description-container-subtitle">
        {{ $t("description.program.content") }}
      </div>
    </div>
    <div class="description-container color-white">
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
      font-family: PingFang SC;
      font-weight: bold;
      margin-bottom: 65px;
    }

    .description-container-subtitle {
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 48px;
    }

  }
}
</style>
