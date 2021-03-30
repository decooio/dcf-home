<template>
  <div class="apply">
    <div class="apply-container">
      <div class="apply-container-title">
        {{ $t("apply.title") }}
      </div>
      <div class="apply-container-subtitle">
        {{ $t("apply.content") }}
      </div>
      <custom-button
        :text="$t('apply.applyNow')"
        :on-click="onClick"
      ></custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "~/components/CustomButton.vue"
import jumpTo from "~/utils"
export default {
  name: "Apply",
  components: {
    CustomButton,
  },
  methods: {
    onClick() {
      jumpTo("apply")
    },
  },
}
</script>

<style lang="scss" scoped>
.apply {
  background: url("~/assets/images/back-4.png");
  width: 100%;
  margin: auto;
  height: 1030px - 155px;
  background-repeat: no-repeat;
  background-position: bottom;
  .apply-container {
    max-width: 1280px;
    height: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: $color-black;
    .apply-container-title {
      font-size: 48px;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 48px;
      margin-bottom: 60px;
    }

    .apply-container-subtitle {
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 48px;
      padding-bottom: 80px;
    }
  }
}
</style>
