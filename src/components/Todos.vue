vue <template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
            <span>click to mark as completed</span>
            <span>
                <span class="incomplete-box"></span> = incomplete
            </span>
            <span>
                <span class="complete-box"></span> = complete
            </span>
        </div>
        <div class="todos">
            <div
            @click="completeClick(todo)" 
            v-for="todo in allTodos"
            :key="todo.id"
            class="todo"
            v-bind:class="{'is-complete':todo.completed}">
                {{ todo.title }}
                <p @click="deleteTodo(todo.id)" class="del">[x]</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Todos",
    methods: {
        ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
        completeClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updTodo);
        }
    },
    computed: mapGetters(["allTodos"]),
    created() {
        this.fetchTodos(); //The Axios-GET Function in todos.js
    }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  background: #085f5f;
  color: #aaa;
  padding: 12px;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  margin: 8px;
  box-shadow: 10px 10px 0 #000000;
  text-transform: uppercase;
}
.del {
  position: absolute;
  bottom: -8px;
  right: 12px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 12px;
  height: 24px;
  background: #35495e;
  margin-bottom: -8px;
}
.incomplete-box {
  display: inline-block;
  width: 12px;
  height: 24px;
  background: #085f5f;
  margin-bottom: -8px;
}
.is-complete {
  background: #333;
  color: #ccc;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
    /* https://alligator.io/css/css-grid-layout-fr-unit/ */
  }
}
</style>