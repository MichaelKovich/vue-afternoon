<template>
  <div class="main-content">
    <img src="../assets/logo.png" height="60
    "/>
    <h2>To-Do List</h2>
    <small>{{tagline}}</small>
    <input class="input" @keydown.enter="addItem" type="text" v-model="userInput" required/>
    <div class="buttons">
      <button class="core-button" @click="addItem">Submit Item</button>
      <button class="core-button" @click="wipeList">Clear List</button>
    </div>
    <hr>
    <div class="item-content">
      <p :key="index" v-for="(item, index) in items" @click="deleteItem(index)" class="item">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: this.$root.$data.items,
      userInput: '',
      tagline: 'building to-do apps since 1992'
    };
  },
  methods: {
    addItem() {
      this.userInput.length > 0
        ? this.$root.$data.items.push(this.userInput)
        : alert('Please enter some text first');
      this.userInput = '';
    },
    wipeList() {
      this.items = [];
      this.$root.$data.items = [];
      this.userInput = '';
    },
    deleteItem(ind) {
      this.$root.$data.items.splice(ind, 1);
      this.userInput = '';
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');

body {
  background-color: black;
}

hr,
h2,
.item-content,
.main-content,
.input {
  margin-top: 1%;
}

.main-content,
.input {
  margin-bottom: 1%;
}

.input,
.buttons {
  width: 10%;
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #42b983;
  font-family: 'Raleway', sans-serif;
}

.input {
  height: 5%;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3%;
}

hr {
  width: 100vw;
}

.item-content {
  min-width: 10%;
}

.item {
  letter-spacing: 1.5px;
  font-weight: 600;
  min-width: 5%;
  margin-bottom: 1%;
}
</style>
