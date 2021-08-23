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
          <template
            v-for="(i, c) in item.children"
          >
            <div
              class="application-container-col-right-title"
            >
              {{ $t(`application.${item.name}.${i.name}.title`) }}
            </div>
            <div class="application-container-col-right-col">
              <div
                v-for="j in i.children"
                :key="`application-${item.name}-${i.name}-${j.name}`"
                class="application-container-col-right-col-item"

              >
                {{ $t(`application.${item.name}.${i.name}.${j.name}`) }}
              </div>
            </div>
          </template>
        </div>
      </div>
      <custom-button class="button-1"
        :text="$t('application.seeEligibleProjects')"
        :on-click="onClick"
      ></custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "~/components/CustomButton.vue"
import utils from "~/utils"
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
                },
                {
                  name: "contentStorageDelivery",
                },
                {
                  name: "cloudStorage",
                },
              ],
            },
            {
              name: "blockchainBasedApplications",
              children: [
                {
                  name: "explorers",
                },
                {
                  name: "wallets",
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
                },
                {
                  name: "APIDocuments",
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
                },
                {
                  name: "diskManagement",
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
                },
                {
                  name: "bitTorrent",
                },
              ],
            },
            {
              name: "chainProtocols",
              children: [
                {
                  name: "MPoW",
                },
                {
                  name: "GPoS",
                },
                {
                  name: "decentralizedStorageMarket",
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
      utils.jumpTo("eligible")
    },
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 600px) {
  .application {
    padding-top: 340px;
    margin-top: -340px;
    padding-bottom: 84px;
    background: url("~/assets/images/back-3.png");
    width: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
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

        &:nth-child(1) {
          .application-container-col-right {
            .application-container-col-right-col {
              &:nth-child(2) {

                :nth-child(1) {
                  width: 240px;
                }

                :nth-child(2) {
                  width: 350px;
                }

                :nth-child(3) {
                  width: 310px;
                }
              }

              &:nth-child(4) {

                :nth-child(1) {
                  width: 620px;
                }

                :nth-child(2) {
                  width: 310px;
                }

              }
            }
          }
        }

        &:nth-child(2), &:nth-child(3) {
          .application-container-col-right {
            .application-container-col-right-col {
              &:nth-child(2) {

                :nth-child(1) {
                  width: 480px;
                }

                :nth-child(2) {
                  width: 451px;
                }

              }
            }
          }
        }

        &:nth-child(4) {
          .application-container-col-right {
            .application-container-col-right-col {
              &:nth-child(2) {

                :nth-child(1) {
                  width: 437px
                }

                :nth-child(2) {
                  width: 493px;
                }
              }

              &:nth-child(4) {

                :nth-child(1) {
                  width: 240px;
                }

                :nth-child(2) {
                  width: 167px;
                }

                :nth-child(3) {
                  width: 494px;
                }
              }
            }
          }
        }

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
            margin: 70px 0 20px 0;
            &:nth-child(1) {
              margin-top: 20px;
            }
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
                border: 1px solid transparent;
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

      .button-1 {
        align-self: flex-end;
      }
    }
  }
}

@media (max-width: 600px) {
  .application {
    background: url("~/assets/images/back-3-mobile.png");
    width: 100%;
    margin: auto;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    margin-top: -5.3rem;
    .application-container {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      color: $color-black;

      .application-container-col {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.875rem;

        &:nth-child(1) {
          .application-container-col-right {
            .application-container-col-right-col {
              &:nth-child(2) {

                :nth-child(1) {
                  width: 4.75rem;
                }

                :nth-child(2) {
                  flex-grow: 1;
                }

                :nth-child(3) {
                  width: 9rem;
                }
              }

              &:nth-child(4) {

                :nth-child(1) {
                  width: 4.75rem;
                }

                :nth-child(2) {
                  flex-grow: 1;
                }

              }
            }
          }
        }

        &:nth-child(2), &:nth-child(3) {
          .application-container-col-right {
            .application-container-col-right-col {
              &:nth-child(2) {

                :nth-child(1) {
                  /*width: 7.56rem;*/
                }

                :nth-child(2) {
                  flex-grow: 1;
                }

              }
            }
          }
        }

        &:nth-child(4) {
          .application-container-col-right {
            .application-container-col-right-col {
              &:nth-child(2) {

                :nth-child(1) {
                  width: 7.56rem;
                }

                :nth-child(2) {
                  flex-grow: 1;
                }
              }

              &:nth-child(4) {

                :nth-child(1) {
                  width: 7.56rem;
                }

                :nth-child(2) {
                  flex-grow: 1;
                }

                :nth-child(3) {
                  width: 100%;
                }
              }
            }
          }
        }

        .application-container-col-left {
          font-size: 0.75rem;
          color: #222222;
          line-height: 1.06rem;
          margin-bottom: 0.875rem;
        }

        .application-container-col-right {
          background: #ffffff;
          border: 1px solid rgba(31, 31, 31, 0.6);
          display: flex;
          flex-direction: column;
          padding: 0 0 0.875rem 0.875rem;

          .application-container-col-right-title {
            font-size: 0.75rem;
            color: #222222;
            line-height: 1.06rem;
            margin: 0.875rem 0  0.625rem;
            &:nth-child(1) {
              margin-top: 0.625rem;
            }
          }
          .application-container-col-right-col {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .application-container-col-right-col-item {
              background: #ffffff;
              border: 1px solid rgba(31, 31, 31, 0.6);
              font-size: 0.625rem;
              color: #222222;
              line-height: 1.06rem;
              padding: 0.25rem 0.5rem 0.625rem 0.5rem;
              margin-bottom: 0.625rem;
              margin-right: 0.875rem;

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
    }
  }
}
</style>
