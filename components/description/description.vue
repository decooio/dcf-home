<template>
  <div class="description">
    <div class="description-container padding-top-90">
      <div class="description-container-title">
        {{ $t("description.program.title") }}
      </div>
      <div
        class="description-container-subtitle"
        v-html="$t('description.program.content')"
      ></div>
      <div class="description-cards-container">
        <dcf-card
          v-for="(item, index) in cardsData"
          :key="'dcf-card-' + index"
          :title="item.title"
          :options="item.options"
          :on-click="item.onClick"
        />
      </div>
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
import utils from "../../utils"
import DcfCard from "../DcfCard"

export default {
  name: "Description",
  utils,
  data() {
    return {
      cardsData: [
        {
          title: "Crust Key Technologies Support Program",
          onClick: () => {
            utils.scrollIntoView(".support-program")
          },
          options: [
            "Supports core dev teams that focus on key technologies",
            "Supports open source projects in decentralized cloud field",
          ],
        },
        {
          title: "Crust Ecosystem Development Program",
          onClick: () => {
            utils.scrollIntoView(".dev-program")
          },
          options: ["Crust Grants", "Crust Bounty", "Crust Ecosystem Growth"],
        },
        {
          title: "Crust Council Conferences Facilitate Program",
          options: [
            "Facilitate Crust Council operation",
            "Organize Crust Council conferences and open documentation",
          ],
        },
      ],
    }
  },
  components: { DcfCard },
}
</script>

<style lang="scss" scoped>
@media (min-width: 600px) {
  .description {
    width: 100%;
    margin: auto;
    background: url("../../assets/images/back-5.png") no-repeat bottom;
    background-size: 100% 36%;
    padding-bottom: 175px;
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
        line-height: 48px;
      }

      .description-cards-container {
        display: flex;
        width: 100%;
        flex-direction: row;
        overflow: auto;
        padding: 30px 20px;
        align-self: center;
        justify-content: space-around;
        margin: 20px 0;
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
        font-size: 1.125rem;
        line-height: 1.56rem;
        margin-bottom: 0.875rem;
      }

      .description-container-subtitle {
        font-size: 0.75rem;
        line-height: 1.06rem;
      }
    }

    .description-background {
      background: url("../../assets/images/back-2.png") no-repeat center;
      background-size: cover;
      padding-bottom: 6.3rem;
    }
  }
}
</style>
