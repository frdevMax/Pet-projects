<template>
    <menu-header :background="background"  :tabs="tabs"></menu-header>
    <div>
      <router-view></router-view>
    </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader';

export default {
  components: {MenuHeader},
  data(){
    return{
      tabs: [
        {name: 'Главная', path: '/'},
        {name: 'Каталог', path: '/catalog'},
        {name: 'Корзина', path: '/cart'},
        {name: 'Войти', path: '/enter'},
      ],
      background: 'lightgreen'
    }
  }
}
</script>


<style>
  #app{
    font-family: Arial, Helvetica, sans-serif;
  }
</style>