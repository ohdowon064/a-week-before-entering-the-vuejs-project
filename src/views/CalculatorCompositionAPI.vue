<template>
<div>
<h2>Calculator</h2>
  <div>
    <input type="text" v-model="num1" />
    <span> + </span>
    <input type="text" v-model="num2" />
    <span> = </span>
    <span>{{result}}</span>
  </div>
</div>
</template>
<script>

import {plushCalculator} from "@/common";

function plusCalculator() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });
  return toRefs(state);
}

export default {
  name: "CalculatorCompositionAPI",
  setup() {
    let {num1, num2, result} = plusCalculator();
    return {
      num1, num2, result
    }
  }
}
</script>

<style scoped>

</style>