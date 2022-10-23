<template>
<div>
  <PageTitle :title="post.title" :id="post.id"/>
</div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
export default {
  name: "NestedComponent",
  components: {PageTitle},
  data() {
    return {
      post: {
        id: 1, title: "Vue3 투입 일주일 전"
      }
    }
  }
}
</script>

<style scoped>

</style>