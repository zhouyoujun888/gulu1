import Vue from 'vue'
import Button from '../src/button'
import Icon from '../src/icon'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: true,
            loading3: false
        }
    }
})