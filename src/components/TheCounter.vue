<template>
  <h1>Hola desde component Counter.</h1>
  <button @click="decrementar()">-</button>
  {{ contador }}
  <button @click="incrementar()">+</button>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    incrementar() {
      this.contador++
    },
    decrementar() {
      this.contador--
    }
  }
}
</script>

<style></style>
