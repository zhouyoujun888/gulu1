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

//单元测试
import chai from 'chai'
const expect = chai.expect
//测试icon
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'shezhi'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-shezhi')

    vm.$el.remove()
    vm.$destroy()
}
//测试loading
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'shezhi',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')

    button.$el.remove()
    button.$destroy()
}
//测试order
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'shezhi',
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {
        order
    } = window.getComputedStyle(svg)
    expect(order).to.eq('1')

    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'shezhi',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {
        order
    } = window.getComputedStyle(svg)
    expect(order).to.eq('2')

    button.$el.remove()
    button.$destroy()
}
//测试监听click事件
{
    //mock
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData: {
            icon: 'shezhi',

        }
    })
    gButton.$mount()
    gButton.$on('click', function () {
        console.log(1)
    })
    let button = gButton.$el
    button.click()



    // button.$el.remove()
    // button.$destroy()
}