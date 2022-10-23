<template>
<ChildComponent @send-message="sendMessage" ref="childComponent"/>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "ParentComponent",
  components: {ChildComponent},
  mounted() {
    this.$refs.childComponent.$refs.btn.click();
  }
}
</script>

<style scoped>

</style>