<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>

  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>

  <Results v-if="showResults" :score="score"/>

</template>

<script>
import Block from "./components/Block.vue"
import Results from "./components/Results.vue"

export default {
  name: 'App',
  components: { Block, Results},
  data() {
    return {
      isPlaying: false, //Saber si el usuario está jugando o no.
      delay: null, //Indica el tiempo de espera que hay entre que se pulsa el botón y se inicia el juego.
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      //Especificar que el usuario está jugando
      this.isPlaying = true

      //Establecer el temporizador en un mínimo de 2 segundos más un tiempo aleatorio que puede aumentar el tiempo hasta los 7 segundos.
      this.delay = 2000 + Math.random() * 5000
      this.showResults = false
    },

    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  background: #0FAF87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
