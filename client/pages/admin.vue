<template>
<div><button @click="inc()">hey</button>yo {{count}} {{countPlus}}</div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      count: 2
    }
  },
  methods: {
    inc() {
      this.count = 3
    }
  },
  computed: {
    countPlus() {
      return this.count * 2
    }
  }
}
</script>

<style scoped>

</style>