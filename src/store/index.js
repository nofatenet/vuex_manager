/*jshint esversion: 6 */
// Basicly the Entry-Point of VUEX, we bring in all the modules and at them to the store
import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

// Load Vuex
    Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        todos
    }
});
