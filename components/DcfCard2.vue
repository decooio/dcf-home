<template>
  <div class="card-container mobile" @click="click">
    <div class="card-title">{{ title }}</div>
    <div class="card-sub-title">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: "DcfCard2",
  emits: ["click"],
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
  methods: {
    click() {
      this.$emit("click")
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  cursor: pointer;
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

@media (max-width: 600px) {
  .mobile {
    width: 100%;
    height: max-content;
    margin-top: 1rem;

    .card-title {
      font-size: 1.2rem;
    }

    .card-ul {
      li {
        font-size: 1rem;
      }
    }
  }
}
</style>
