<template>
  <div class="hello">
    <img src="../assets/logo.png" />
    <h2>{{ msg }}<span> there.</span></h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a,
h2 {
  color: #42b983;
}
span {
  color: black;
}
</style>
