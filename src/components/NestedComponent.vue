<template>
<div>
  <PageTitle :title="title"/>
</div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
export default {
  name: "NestedComponent",
  components: {PageTitle},
  data() {
    return {
      title: "123"
    }
  }
}
</script>

<style scoped>

</style>