<template>
    <div class="game">
        <ShopComponent />
        <CookieComponent />
    </div>
</template>

<script>
    import CookieComponent from '@/components/CookieComponent'
    import ShopComponent from '@/components/ShopComponent'

    export default {
        components: {
            CookieComponent,
            ShopComponent
        }
    }
</script>

<style scoped>
    .game {
        /*height: 100%;*/
        /*background: white;*/
        display: flex;
        flex-flow:column;
    }    
</style>
