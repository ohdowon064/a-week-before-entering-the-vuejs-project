<template>
<button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
  <child-component ref="child_component"></child-component>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "ParentComponent",
  components: {ChildComponent},
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    }
  },
  methods: {
    checkChild() {
      alert(this.msg);
    }
  }
}
</script>

<style scoped>

</style>