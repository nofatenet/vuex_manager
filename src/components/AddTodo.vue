<template>
  <div>
      <h3>Add Todo</h3>
      <div class="add">
          <form @submit="onSubmit">
              <input id="inputed" type="text" v-model="title" placeholder="add Todo..." style="text-transform:uppercase">
              <input class="btn" type="submit" value="Submit">
          </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "AddTodo",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);
            document.getElementById("inputed").value = '';
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    font-family: 'TheGoodMonolith','Major Mono Display', "Jura","dos", DOS, Monaco, Menlo, Consolas, "Courier New", monospace;
    flex: 10;
    padding: 8px;
    outline: 0;
    font-size: 16px;
    background-color: #666;
    color: transparent ;
    border: 0px;
    text-shadow: 0px 0px 1px #fff;
    margin-bottom: 20px;
}

input[type="text"]:focus{
    background-color: #000;
}

input::-webkit-input-placeholder {
    color: #999;
}
input:focus::placeholder {
    color: #000;
    text-shadow: 0px 0px 1px #000;
}

input[type="submit"] {
    flex: 2;
    background-color: #085f5f;
    color: #eee;
    cursor: pointer;
    border: 0px;
}

input[type="submit"]:focus {
  background-color: #828;
  border: 0px;
}

</style>