<template>
<h1>Full Name: {{fullName}}</h1>
</template>

<script>
export default {
  name: "ComputedTest",
  data() {
    return {
      firstName: 'Dowon',
      lastName: 'Oh'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>