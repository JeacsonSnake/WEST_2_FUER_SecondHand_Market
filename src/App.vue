<template>
  <div id="app">
    <nav class="headNavbar" v-show="ifBar">
      <router-link class="headNavbar-Item" to="/login">Login</router-link>
      <router-link class="headNavbar-Item" to="/rigister">Rigister</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default({
data() {
    return {
        
    }
},

    methods: {
        
    },

    computed: {
        ifBar() {
            return this.$store.state.ifBar;
        }
    },
})
</script>


<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.headNavbar {
  height: 5vh;
}
</style>
