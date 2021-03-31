<template>
  <div class="header">
    <b-navbar fixed="true" toggleable="lg" type="dark">
      <b-navbar-brand>
        <img :src="require('~/assets/images/logo.png')" alt="" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-for="item in navList">
            <b-nav-item-dropdown
              v-if="item.hasChild"
              :key="item.name"
              :text="
                item.name === 'Locales' ? locale : $t(`header.${item.name}`)
              "
              :class="{
                active:
                  item.children
                    .map((name) => name.toLowerCase())
                    .indexOf(activeNav) > -1,
              }"
              menu-class="drop"
              right
            >
              <template v-for="child in item.children">
                <b-dropdown-item :key="child" href="#" @click="jump(child)">
                  {{ $t(`header.${child}`) }}</b-dropdown-item
                >
              </template>
            </b-nav-item-dropdown>
            <b-nav-item
              v-else
              :key="item.name"
              :active="item.name.toLowerCase() === activeNav"
              @click="jump(item.name)"
              >{{ $t(`header.${item.name}`) }}</b-nav-item
            >
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto"
import jumpTo from "../utils"

export default {
  data() {
    return {
      activeNav: "home",
      navList: [
        {
          name: "Grants",
          hasChild: false,
        },
        {
          name: "Technology",
          hasChild: false,
        },
        {
          name: "Projects",
          hasChild: true,
          children: ["CrustNetwork"],
        },

        // {
        //   name: "Locales",
        //   hasChild: true,
        //   children: ["En", "Zh"],
        // },
      ],
    }
  },
  computed: {
    routerName() {
      let name = this.$route.name
      if (name === "index" || name === "/") {
        name = "home"
      }
      return name
    },
    locale() {
      return this.$store.state.locale === "zh" ? "中文" : "En"
    },
  },
  watch: {
    routerName() {
      this.activeNav = this.routerName
    },
  },
  methods: {
    jump(name) {
      switch (name) {
        case "Zh":
          this.setLocale("zh")
          break
        case "En":
          this.setLocale("en")
          break
        case "Grants":
          VueScrollTo.scrollTo(document.querySelector(".description"))
          break
        case "Technology":
          VueScrollTo.scrollTo(document.querySelector(".application"))
          break
        default:
          jumpTo(name)
      }
    },
    setLocale(name) {
      this.$i18n.locale = name
      // 将当前语言保存到cookie 中，
      document.cookie = "locale=" + name
      return this.$store.commit("SET_LANG", name)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  /deep/ .nav-link {
    font-size: 24px;
    font-weight: bold;
    color: white;
    line-height: 60px;
    padding: 0 35px 0 35px;
    border-radius: 30px;
    outline: none;
    &:hover {
      background: #2dacd1;
      color: white;
    }
    &:focus {
      color: white;
    }
  }

  /deep/ .dropdown-item:active {
    color: black;
    text-decoration: none;
    background-color: white;
  }

  /deep/ .dropdown-toggle::after {
    content: none;
  }

  .navbar {
    position: absolute;
    width: 100%;
    min-width: 1440px;
    min-height: 110px;
    z-index: 10;
    padding: 0 55px 0 85px;
    .navbar-nav {
      font-size: 24px;
      font-weight: bold;
      color: white;
      .nav-item {
        height: 60px;
        margin-left: 20px;
        background: transparent;

        .nav-link {
          color: white;
          padding: 0 35px 0 35px;
        }
      }
    }
  }
}
</style>
