<template>
  <div class="custom-button" @click="onClick">
    <div class="custom-button-text">{{ text }}</div>
    <img width="32" height="16" src="../assets/svgs/arrow-2.svg" />
  </div>
</template>

<script>
import arrow from "~/assets/svgs/arrow-2.svg?raw"
export default {
  name: "CustomButton",
  components: {},
  props: {
    text: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return { arrow }
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 600px) {
  .custom-button {
    height: 53px;
    display: flex;
    align-items: center;
    width: 343px;
    background: white;
    border: 1px solid rgba(31, 31, 31, 0.6);
    padding: 0 20px;
    font-size: 20px;
    justify-content: space-between;
    cursor: pointer;
    color: $color-black;
    fill: $color-black;

    &:hover {
      background: #2dacd1;
      color: white;
      fill: white;
      border: none;
    }

    .custom-button-arrow {
      margin-left: 9px;
    }
  }
}

@media (max-width: 600px) {
  .custom-button {
    height: 1.5rem;
    display: flex;
    align-items: center;
    width: fit-content;
    line-height: 0.875rem;
    background: white;
    border: 1px solid rgba(31, 31, 31, 0.6);
    padding: 0 0.5rem 0 0.5rem;
    font-size: 0.625rem;
    cursor: pointer;
    color: $color-black;
    fill: $color-black;

    &:hover {
      background: #2dacd1;
      color: white;
      fill: white;
      border: none;
    }

    .custom-button-arrow {
      margin-left: 9px;
      /deep/ .icon {
        width: 19px;
      }
    }
  }
}
</style>
