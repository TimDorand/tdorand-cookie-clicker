<template>
    <div class="store" @click="buy">
        <div class="desc">
            <h4>{{ item.name }}</h4>
            <small>+{{ item.cookiePerSeconds.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }} cookies/s</small>
            <div class="price">
                <img class="icon" src="../assets/cookie.png" alt="">
                <div :class="{'text-green': canBuy === true, 'text-red': canBuy === false }">{{ item.price.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }}</div>
            </div>
        </div>
        <div class="count" ref="count">
            <span>{{ item.purchased }}</span>
        </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import animate from '@/assets/js/animate'

    export default {
        props: ['item'],
        computed: {
            totalCookies: function () {
                return this.$store.state.cookies
            },
            canBuy: function () {
                return this.totalCookies >= this.item.price
            }
        },
        methods: {
            buy () {
                if (this.canBuy) {
                    this.$store.commit('BUY_PRODUCER', { itemId: this.item.id})
                    animate(this.$refs.count, 'scale-up', 100)
                }
            }
        }
    }
</script>

<style scoped>
    .store {
        position: relative;
        font-family: 'Lato', cursive;
        padding: 20px;
        border-bottom: solid 2px rgba(255, 255, 255, .2);
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        overflow-x: auto;
    }

    .popup {
        position: absolute;
        transform: translateX(-100%);
    }

    .store:hover {
        background: #444;
    }

    .price {
        padding-top: 10px;
        display: flex;
        align-items: center;
        font-family: 'Lato', sans-serif;
    }

    .desc {
        flex: 1;
    }

    .count {
        font-size: 30px;
        opacity: 0.3;
        transition: transform .1s;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .text-green {
        color: green;
    }

    .text-red {
        color: red;
    }

    small {
        color: #777;
        font-weight: normal;
        font-size: 12px;
    }

</style>