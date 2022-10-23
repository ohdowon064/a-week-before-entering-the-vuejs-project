<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <button type="button" @click="setZero(0)">Zero</button>
    <p>The counter is {{counter}}</p>
  </div>
</template>

<script>
export default {
  name: "EventClick",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    setZero(zero) {
      this.counter = zero;
    }
  }
}
</script>

<style scoped>

</style>