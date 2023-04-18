import Vue from 'vue'
import Button from '../src/button'
import Icon from '../src/icon'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
})