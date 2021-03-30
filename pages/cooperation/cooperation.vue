<template>
  <div class="container">
    <Title text="Cooperation"></Title>
    <b-form @submit="handleSubmit">
      <b-row>
        <b-col
          v-for="item in itemList"
          cols="12"
          sm="10"
          md="6"
          lg="6"
          xl="6"
          :key="item"
          v-if="item !== 'detail'"
        >
          <b-form-group id="normalItemList" :label="item" :label-for="item">
            <b-form-input
              :id="item"
              :key="item"
              required
              :placeholder="'Enter ' + item"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="12" xl="12" v-else key="detail">
          <b-form-group id="details" label="detail" label-for="detail">
            <b-form-textarea
              id="detail"
              key="detail"
              required
              :placeholder="'Enter details'"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button
        style="
           {
            margin: 0 auto;
          }
        "
        type="submit"
        variant="primary"
        >Submit</b-button
      >
    </b-form>

    <!--    <div class="form-wrapper">-->
    <!--      <div-->
    <!--        v-for="item in itemList"-->
    <!--        :key="item"-->
    <!--        :class="item === 'detail' ? 'detail' : ''"-->
    <!--        class="item"-->
    <!--      >-->
    <!--        <div class="title">-->
    <!--          {{ item + ": " }}-->
    <!--        </div>-->
    <!--        <input v-if="item !== 'detail'" v-model="formList[item]" type="text" />-->
    <!--        <el-input v-else v-model="formList[item]" :rows="5" type="textarea">-->
    <!--        </el-input>-->
    <!--      </div>-->
    <!--      <div class="btn-wrapper">-->
    <!--        <el-button-->
    <!--          type="primary"-->
    <!--          style="display: inline-block; background: #ffc986; border: none;"-->
    <!--          @click="handleSubmit"-->
    <!--        >-->
    <!--          submit-->
    <!--        </el-button>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<script>
import Title from "~/components/title"
const normalItemList = {
  name: "",
  phone: "",
  email: "",
  detail: "",
}
const companyItemList = {
  name: "",
  phone: "",
  email: "",
  company: "",
  post: "",
  purpose: "",
  detail: "",
}

export default {
  name: "FeedBack",
  components: {
    Title,
  },
  data() {
    return {
      formList: this.isFeedBack ? normalItemList : companyItemList,
    }
  },
  computed: {
    isFeedBack() {
      return this.$router.currentRoute.name === "feedBack"
    },
    itemList() {
      return Object.keys(this.isFeedBack ? normalItemList : companyItemList)
    },
  },
  mounted() {},
  methods: {
    async handleSubmit(evt) {
      setTimeout(() => {
        evt.preventDefault()
        alert("Submit Success")
      }, 1000)

      // const type = this.isFeedBack ? "advise" : "business"
      // try {
      //   const res = await this.$axios.$post("/v1/business/add", {
      //     ...this.formList,
      //     type,
      //   })
      //   this.resetForm()
      //   if (res && res.code === 200) {
      //     this.fullscreenLoading = false
      //     this.$message.success(
      //       `${this.$store.state.locale === "zh" ? "发表成功" : "post success"}`
      //     )
      //   } else {
      //     this.$message.error(
      //       `${
      //         this.$store.state.locale === "zh" ? "服务器正忙" : "server error"
      //       }`
      //     )
      //   }
      // } catch (e) {
      //   this.$message.error(
      //     `${this.$store.state.locale === "zh" ? "服务器正忙" : "server error"}`
      //   )
      // }
    },
    resetForm() {
      this.itemList.forEach((a) => {
        this.$set(this.formList, a, "")
      })
    },
    handleClick() {},
  },
}
</script>
