<template>
<h1>{{title}}</h1>
</template>

<script>
import {inject} from "vue";

export default {
  name: "CompositionAPIInject",
  setup() {
    const title = inject("title");
    return {title};
  }
}
</script>

<style scoped>

</style>