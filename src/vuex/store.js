import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4'

Vue.use(Vuex)

const state = {
    items: [
        {
            id: uuid(),
            name: 'Cursor',
            cookiePerSecond: 300,
            price: parseInt(localStorage.getItem("item"+uuid()+"price")) || 30,
            purchased: parseInt(localStorage.getItem("item"+uuid()+"purchased")) || 0,
            cookiePerSeconds: 1,
        },
        {
            id: uuid(),
            name: 'Grandma',
            price: parseInt(localStorage.getItem("item"+uuid()+"price")) || 100,
            purchased: parseInt(localStorage.getItem("item"+uuid()+"purchased")) || 0,
            cookiePerSeconds: 5,
        },
        {
            id: uuid(),
            name: 'Cookie Farm',
            price: parseInt(localStorage.getItem("item"+uuid()+"price")) || 500,
            purchased: parseInt(localStorage.getItem("item"+uuid()+"purchased")) || 0,
            cookiePerSeconds: 20,
        },
        {
            id: uuid(),
            name: 'Cookie Tree',
            price: parseInt(localStorage.getItem("item"+uuid()+"price")) || 1500,
            purchased: parseInt(localStorage.getItem("item"+uuid()+"purchased")) || 0,
            cookiePerSeconds: 100,
        },
        {
            id: uuid(),
            name: 'Cookie Factory',
            price: parseInt(localStorage.getItem("item"+uuid()+"price")) || 3000,
            purchased: parseInt(localStorage.getItem("item"+uuid()+"purchased")) || 0,
            cookiePerSeconds: 250,
        },
    ],
    cookies: parseFloat(localStorage.getItem('cookies')) || 0.0,

}

const mutations = {
    BUY_PRODUCER (state, { itemId }) {
        state.items = state.items.map(item => {
            if (item.id === itemId) {
                item.purchased++
                state.cookies -= item.price
                item.price = 1.22 * item.price
                localStorage.setItem("item" + itemId + "price", item.price)
                localStorage.setItem("item" + itemId + "purchased", item.purchased)
            }

            return item
        })
    },
    CLICK_COOKIE (state) {
        state.cookies++
        localStorage.setItem("cookies", state.cookies)

    },
    ADD_COOKIES (state, { cookies }) {
        state.cookies += cookies
        localStorage.setItem("cookies", state.cookies)
    }
}

const actions = {}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store