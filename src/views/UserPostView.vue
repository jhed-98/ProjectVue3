<template>
  <h1>Vista de post {{ $route.params.post }} del usuario {{ $route.params.user }}</h1>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style></style>
