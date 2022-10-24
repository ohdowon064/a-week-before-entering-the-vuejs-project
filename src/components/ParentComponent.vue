<template>
<ChildComponent @send-message="sendMessage" ref="childComponent"/>
  <button type="button" @click="changeChildData">Change Child Data</button>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "ParentComponent",
  components: {ChildComponent},
  methods: {
    changeChildData() {
      this.$refs.childComponent.msg = "부모 컴포넌트가 변경한 데이터"
    }
  }
}
</script>

<style scoped>

</style>