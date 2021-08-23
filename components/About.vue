<template>
  <div class="about">
    <div class="title">Decentralized Cloud Foundation Leadership</div>
    <div class="leadership">
      <div
        v-for="(leader, index) in leaders"
        :key="'leader-' + index"
        class="leader-item"
      >
        <img :src="leader.avatar" class="avatar" />
        <div class="leader-desc">{{ leader.desc }}</div>
        <div class="split-line" />
        <div class="leader-name">{{ leader.name }}</div>
        <div class="leader-tag">{{ leader.tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    leaders: [
      {
        avatar: "/_nuxt/assets/images/back-1.png",
        desc:
          "He has 15+ yrs experience of financial investment. He started as TMT researcher and then managed several funds as investment director. He founded Winsun Capital and did successful investments in crypto industry.",
        name: "BOVA CHEN",
        tag: "CO-FOUNDER",
      },
      {
        avatar: "/_nuxt/assets/images/back-1.png",
        desc:
          "He has 15+ yrs experience of financial investment. He started as TMT researcher and then managed several funds as investment director. He founded Winsun Capital and did successful investments in crypto industry.",
        name: "BOVA CHEN",
        tag: "CO-FOUNDER",
      },
      {
        avatar: "../assets/images/logo.png",
        desc:
          "He has 15+ yrs experience of financial investment. He started as TMT researcher and then managed several funds as investment director. He founded Winsun Capital and did successful investments in crypto industry.",
        name: "BOVA CHEN",
        tag: "CO-FOUNDER",
      },
      {
        avatar: "../assets/images/logo.png",
        desc:
          "He has 15+ yrs experience of financial investment. He started as TMT researcher and then managed several funds as investment director. He founded Winsun Capital and did successful investments in crypto industry.",
        name: "BOVA CHEN",
        tag: "CO-FOUNDER",
      },
      {
        avatar: "../assets/images/logo.png",
        desc:
          "He has 15+ yrs experience of financial investment. He started as TMT researcher and then managed several funds as investment director. He founded Winsun Capital and did successful investments in crypto industry.",
        name: "BOVA CHEN",
        tag: "CO-FOUNDER",
      },
      {
        avatar: "../assets/images/logo.png",
        desc:
          "He has 15+ yrs experience of financial investment. He started as TMT researcher and then managed several funds as investment director. He founded Winsun Capital and did successful investments in crypto industry.",
        name: "BOVA CHEN",
        tag: "CO-FOUNDER",
      },
      {
        avatar: "../assets/images/logo.png",
        desc:
          "He has 15+ yrs experience of financial investment. He started as TMT researcher and then managed several funds as investment director. He founded Winsun Capital and did successful investments in crypto industry.",
        name: "BOVA CHEN",
        tag: "CO-FOUNDER",
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  background-color: #ededed;
  padding: 67px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .title {
    width: 1280px;
    font-size: 48px;
    line-height: 48px;
    font-weight: bold;
    margin-bottom: 38px;
    color: #333333;
  }
  .leadership {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1344px;
    align-items: flex-start;
    .leader-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 245px;
      margin: 32px;
      .avatar {
        align-self: center;
        width: 210px;
        height: 210px;
        border-radius: 105px;
        overflow: hidden;
        object-fit: contain;
        margin: 29px 0;
      }
      .leader-desc {
        font-size: 17px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
        width: 100%;
      }
      .split-line {
        width: 100%;
        height: 5px;
        background-color: #333333;
        margin-top: 19px;
        margin-bottom: 6px;
      }
      .leader-name {
        font-size: 29px;
        font-weight: 600;
        color: #333333;
        line-height: 40px;
      }
      .leader-tag {
        font-size: 19px;
        font-weight: 400;
        color: #333333;
        line-height: 26px;
      }
    }
  }
}
</style>
