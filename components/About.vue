<template>
  <div class="about mobile">
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
        object-fit: cover;
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

@media (max-width: 600px) {
  .mobile {
    padding: 1.8rem 1.2rem;
    .title {
      width: 100%;
      font-size: 1.13rem;
      line-height: 1.56rem;
      margin-bottom: 0.6rem;
    }
    .leadership {
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: auto;
      width: 100%;
      align-items: flex-start;
      padding: 0;
      .leader-item {
        width: 14rem;
        margin: 0 3rem;
        .avatar {
          width: 12rem;
          height: 12rem;
          border-radius: 6rem;
          margin: 1.5rem 0;
        }
        .leader-desc {
          font-size: 0.88rem;
          line-height: 1.25rem;
        }
        .split-line {
          width: 100%;
          height: 0.25rem;
          margin-top: 1rem;
          margin-bottom: 0.3rem;
        }
        .leader-name {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .leader-tag {
          font-size: 1rem;
          line-height: 1.38rem;
        }
      }
    }
  }
}
</style>
