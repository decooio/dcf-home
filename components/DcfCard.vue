<template>
  <div class="card-container">
    <div class="card-title">{{ title }}</div>
    <ul class="card-ul">
      <li v-for="(item, index) in options" :key="'card-option-' + index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DcfCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  background: white;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.14);
  width: 347px;
  height: 368px;
  padding: 36px 30px;
}
.card-title {
  font-size: 26px;
  font-weight: 600;
  color: #333333;
}
.card-ul {
  margin-left: 20px;
  li {
    margin-top: 20px;
    font-size: 19px;
    font-weight: 400;
    color: #333333;
    &::marker {
      content: " - ";
      color: #333333;
    }
  }
}
@media (max-width: 600px) {
  .card-container {
    width: calc(100vw - 2rem);
    height: max-content;
    margin-top: 1rem;
  }
  .card-title {
    font-size: 1.2rem;
  }
  .card-ul {
    li {
      font-size: 1rem;
    }
  }
}
</style>
