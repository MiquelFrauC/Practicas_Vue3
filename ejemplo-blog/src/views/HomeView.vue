<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'HomeView',
  setup() {

    const search = ref("")

    const names = ref(["Mario", "Yoshi", "Luigi", "Toad", "Bowser", "Koopa", "Peach"])

    // Usar valores computados para permitir filtrar la lista de nombres en función
    // de un término de búsqueda especificado por el usuario.
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, matchingNames }

    /* // Template Reference.
    // const p = ref(null)

    // Hacer que las variables y constantes sean reactivas en el template mediante Template References.
    const name = ref("Mario")
    const age = ref(30)

    // Función.
    const handleClick = () => {
      name.value = "Luigi"
      age.value = "35"
    }

    return { name, age, handleClick } */

    /* const ninjaOne = ref({ name: "Mario", age: 30}) //Usando Refs
    const ninjaTwo = reactive({ name: "Luigi", age: 35}) //Usando Reactive

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo } */
  }
}
</script>
