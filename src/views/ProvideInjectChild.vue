<template>
<h2>{{itemLength}}</h2>
  <tr :key="i" v-for="(item, i) in items">
    <td>{{item}}</td>
  </tr>
</template>

<script>
export default {
  name: "ProvideInjectChild",
  inject: ["itemLength", "items"]
}
</script>

<style scoped>

</style>