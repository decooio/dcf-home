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
@media (min-width: 600px) {
  .apply {
    background: url("~/assets/images/back-4.png");
    width: 100%;
    margin: auto;
    height: 1030px - 155px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 50%;
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
        font-weight: bold;
        line-height: 48px;
        margin-bottom: 60px;
      }

      .apply-container-subtitle {
        font-size: 36px;
        font-weight: bold;
        line-height: 48px;
        padding-bottom: 80px;
      }
    }
  }
}

@media (max-width: 600px) {
  .apply {
    background: url("~/assets/images/back-4-mobile.png");
    width: 100%;
    height: 21rem;
    padding: 1.875rem 1.25rem 0 1.25rem;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    .apply-container {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: $color-black;
      .apply-container-title {
        font-size: 1.125rem;
        line-height: 1.56rem;
        padding-bottom: 0.875rem;
      }

      .apply-container-subtitle {
        font-size: 0.75rem;
        line-height: 1.0625rem;
        padding-bottom: 1.5rem;

      }
    }
  }
}
</style>
