<template>
  <div class="wrapper">
    <p>User: {{$store.getters['user/fullName']}}</p>
    <div v-for="airport in airports" :key="airport.abbreviation">
      <AirportCard :airport="airport" @click="$store.dispatch('addToFavorites', airport)"/>
    </div>
    <p v-if="$store.state.airports.favorites.length">Favorites</p>
    <div v-for="airport in $store.state.airports.favorites" :key="airport.abbreviation">
      <AirportCard :airport="airport" @click="$store.dispatch('removeToFavorites', airport)"/>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import allAirports from './data/airports.js'
  import AirportCard from './components/AirportCard.vue'

  export default {
    components: {
      AirportCard
    },
    setup() {
      const airports = ref(allAirports)
      return { airports }
    }
  }
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 200px;
    margin: 0 auto
  }

  p, h3 {
    grid-column: span 3;
  }
</style>