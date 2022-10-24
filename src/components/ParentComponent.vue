<template>
<ChildComponent @send-message="sendMessage" ref="childComponent"/>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "ParentComponent",
  components: {ChildComponent},
  mounted() {
    this.$refs.childComponent.childFunc();
  }
}
</script>

<style scoped>

</style>