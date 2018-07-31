<template>
    <section class="container">
        <div class="list-item">
            <shop v-for="item in items" :item="item" :key="item.name" />
        </div>
    </section>
</template>

<script>
    import Shop from '@/components/Shop'

    export default {
        components: {
            Shop
        },
        computed: {
            items: function () {
                return this.$store ? this.$store.state.items : null
            }
        }
    }
</script>


<style scoped>
    .container {
        width: 100%;
    }
    .list-item {
        display: flex;
        flex-direction: row;
        overflow-y: auto;
    }
</style>