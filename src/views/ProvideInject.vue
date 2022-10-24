<template>
<ProvideInjectChild/>
</template>

<script>
import ProvideInjectChild from "@/views/ProvideInjectChild";

export default {
  name: "ProvideInject",
  components: {ProvideInjectChild},
  data() {
    return {
      items: ["A", "B"]
    }
  },
  provide() {
    return {
      items: this.items,
      itemLength: this.items.length
    }
  }
}
</script>

<style scoped>

</style>