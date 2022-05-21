<template>
  <div id="app">
      <HeadNavBar></HeadNavBar>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeadNavBar from './components/HeadNavBar.vue';


export default {
  data() {
    return {
      circleUrl: "",
    };
  },

  components: {
    HeadNavBar,
  },

  methods: {
    pushHomePage() {
      this.$router.push({
        name: "homePage",
      });
    },
    pushLoginPage() {
      this.$router.push({
        name: "login",
      });
    },
  },

};
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
