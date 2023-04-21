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
//引入这个spies包， 用chai的use方法使用这个间谍
import spies from 'chai-spies'
chai.use(spies)
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
    const vm = new Constructor({
        propsData: {
            icon: 'shezhi',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')

    vm.$el.remove()
    vm.$destroy()
}
//测试order
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'shezhi',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {
        order
    } = window.getComputedStyle(svg)
    expect(order).to.eq('1')

    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'shezhi',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {
        order
    } = window.getComputedStyle(svg)
    expect(order).to.eq('2')

    vm.$el.remove()
    vm.$destroy()
}
//测试监听click事件
{
    //mock   npm i -D chai-spies
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'shezhi',
        }
    })
    vm.$mount()
    let spy = chai.spy(function () {})

    vm.$on('click2', spy)
    //希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()

}