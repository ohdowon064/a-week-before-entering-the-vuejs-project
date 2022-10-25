<template>
<h2 :key="i" v-for="(product, i) in productList">{{product.product_name}}</h2>
</template>

<script>
import ApiMixin from '../api.js'
export default {
  name: "Mixins_",
  mixins: [ApiMixin],
  data() {
    return {
      productList: []
    }
  },
  async mounted() {
    this.productList = await this.$callAPI('https://7e78f595-1897-430e-a8de-5c5c0a8ce7fe.mock.pstmn.io/list', 'get');
    console.log(this.productList);
  }
}
</script>

<style scoped>

</style>