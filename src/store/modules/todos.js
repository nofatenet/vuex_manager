/*jshint esversion: 8 */
import axios from "axios";

const state = {
    todos: [
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    //Axios GET:
    async fetchTodos({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

        console.log(response.data);
        commit("setTodos", response.data);
    },
    //Axios POST:
    async addTodo({ commit }, title) {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", { title,
        completed: false });

        commit("newTodo", response.data);
    },
    // Delete:
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit("delTodo", id);
    },
    // Filter the limit:
    async filterTodos({ commit }, e) {

        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit("setTodos", response.data);

        //console.log(e);
        //console.log(commit);
    },
    // Update the ToDo:
    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);

        commit("updateTodo", response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    delTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};