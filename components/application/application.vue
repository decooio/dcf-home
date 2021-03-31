<template>
  <div class="application">
    <div class="application-container">
      <div
        v-for="(item, t) in list"
        :key="`application-${item.name}`"
        class="application-container-col"
      >
        <div
          class="application-container-col-left"
          v-html="$t(`application.${item.name}.title`)"
        ></div>
        <div class="application-container-col-right">
          <div
            v-for="(i, c) in item.children"
            :key="`application-${item.name}-${i.name}`"
          >
            <div
              class="application-container-col-right-title"
              :style="{ 'margin-top': c === 0 ? '20px' : '70px' }"
            >
              {{ $t(`application.${item.name}.${i.name}.title`) }}
            </div>
            <div class="application-container-col-right-col">
              <div
                v-for="j in i.children"
                :key="`application-${item.name}-${i.name}-${j.name}`"
                class="application-container-col-right-col-item"
                :style="`width: ${j.width}px`"
              >
                {{ $t(`application.${item.name}.${i.name}.${j.name}`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <custom-button
        :text="$t('application.seeEligibleProjects')"
        :on-click="onClick"
        style="align-self: flex-end"
      ></custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "~/components/CustomButton.vue"
import jumpTo from "~/utils"
export default {
  name: "Application",
  components: {
    CustomButton,
  },
  data() {
    return {
      list: [
        {
          name: "L3",
          children: [
            {
              name: "userBasedApplications",
              children: [
                {
                  name: "NFT",
                  width: 240,
                },
                {
                  name: "contentStorageDelivery",
                  width: 350,
                },
                {
                  name: "cloudStorage",
                  width: 310,
                },
              ],
            },
            {
              name: "blockchainBasedApplications",
              children: [
                {
                  name: "explorers",
                  width: 620,
                },
                {
                  name: "wallets",
                  width: 310,
                },
              ],
            },
          ],
        },
        {
          name: "L2",
          children: [
            {
              name: "developmentTools",
              children: [
                {
                  name: "multiLanguageSDKs",
                  width: 480,
                },
                {
                  name: "APIDocuments",
                  width: 451,
                },
              ],
            },
          ],
        },
        {
          name: "L1",
          children: [
            {
              name: "strategy",
              children: [
                {
                  name: "storageManagement",
                  width: 480,
                },
                {
                  name: "diskManagement",
                  width: 451,
                },
              ],
            },
          ],
        },
        {
          name: "L0",
          children: [
            {
              name: "fileSystems",
              children: [
                {
                  name: "IPFS",
                  width: 437,
                },
                {
                  name: "bitTorrent",
                  width: 493,
                },
              ],
            },
            {
              name: "chainProtocols",
              children: [
                {
                  name: "MPoW",
                  width: 240,
                },
                {
                  name: "GPoS",
                  width: 167,
                },
                {
                  name: "decentralizedStorageMarket",
                  width: 494,
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    onClick() {
      jumpTo("eligible")
    },
  },
}
</script>

<style lang="scss" scoped>
.application {
  background: url("~/assets/images/back-3.png");
  width: 100%;
  margin: auto;
  height: 1460px;
  background-repeat: no-repeat;
  background-position: bottom;
  position: relative;
  top: -155px;
  .application-container {
    max-width: 1360px;
    margin-left: calc((100% - 1360px + 80px) / 2);
    padding: 44px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    color: $color-black;

    .application-container-col {
      display: flex;
      margin-bottom: 24px;

      .application-container-col-left {
        padding-top: 11px;
        font-size: 30px;
        font-weight: bold;
        color: #222222;
        line-height: 48px;
        opacity: 0.6;
        flex-grow: 1;
      }

      .application-container-col-right {
        width: 1021px;
        background: #ffffff;
        border: 1px solid rgba(31, 31, 31, 0.6);
        display: flex;
        flex-direction: column;
        padding: 0px 30px 30px 30px;
        .application-container-col-right-title {
          font-size: 30px;
          font-weight: bold;
          color: #222222;
          line-height: 28px;
          margin: 20px 0 20px 0;
        }

        .application-container-col-right-col {
          display: flex;
          justify-content: space-between;
          .application-container-col-right-col-item {
            background: #ffffff;
            border: 1px solid rgba(31, 31, 31, 0.6);
            font-size: 24px;
            font-weight: bold;
            color: #222222;
            line-height: 24px;
            padding: 18px 22px 36px 22px;

            &:hover {
              background: #2dacd1;
              color: white;
              border: none;
            }
          }
        }
      }

      &:nth-child(1) {
        .application-container-col-left {
          color: white;
          opacity: 1;
        }
      }
    }

    .custom-button {
      margin-top: 56px;
      padding: 0 23px 0 23px;
    }
  }
}
</style>
