<template>
  <div class="card-container">
    <div class="card-title">{{ title }}</div>
    <div class="card-sub-title">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: "DcfCard2",
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  background: white;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.14);
  width: 348px;
  height: 242px;
  padding: 36px 30px;
}
.card-title {
  font-size: 26px;
  font-weight: 600;
  color: #333333;
}
.card-sub-title {
  margin-top: 20px;
  font-size: 19px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
}
</style>
