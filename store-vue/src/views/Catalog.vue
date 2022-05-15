<template>
    Выберите категорию товаров
    <menu-header background="lightgreen" :tabs="tabs"></menu-header>
    <router-view></router-view>

</template>

<script>
import MenuHeader from '@/components/MenuHeader';

export default {
    name: 'Catalog',
    components: {MenuHeader},
    data(){
        return {
            tabs: [
                {name: 'Компьютеры', path: '/catalog/computers'},
                {name: 'Мыши', path: '/catalog/mouse'},
                {name: 'Клавиатуры', path: '/catalog/keyboards'}
            ]
        }
    }
}
</script>

<style>

</style>