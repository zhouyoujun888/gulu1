import Vue from 'vue'
import Button from '../src/button'
import Icon from '../src/icon'
import ButtonGroup from '../src/button-group'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

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