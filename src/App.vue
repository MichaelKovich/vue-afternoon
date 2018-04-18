<template>
  <div id="app">
    <nav>
      <router-link tag="span" to="/">Home</router-link>
      <router-link tag="span" to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'This is a test message.'
    };
  },
  name: 'app',
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
nav {
  display: flex;
  background-color: black;
  color: white;
  justify-content: space-around;
  padding: 10px;
}
nav span {
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
