<template>
<ChildComponent @send-message="sendMessage" ref="childComponent"/>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "ParentComponent",
  components: {ChildComponent},
  methods: {
    sendMessage(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>