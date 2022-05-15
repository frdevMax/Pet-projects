<template>
  <router-view></router-view>

  <div class="all">
      <div class="one" v-for="comp in computers" :key="comp.id">
        <h2>{{ comp.name }}</h2>
        <img :src="comp.img">
        <p>Цена: {{ comp.price }} ₽</p>
        <button>
            <router-link :to="{name: 'OneProduct', params: {id: comp.id}}">Подробнее</router-link>
        </button > 
        <button type="button" @click="cart(comp)">В корзину</button>
          
          
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Computers',
    computed: {
        ...mapGetters(['computers'])
    },
    methods: {
        cart(comp){
            this.$store.commit('addToCart', {product: comp});
        }
    }

}
</script>

<style scoped>
    .all {
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
    }

    .one {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: black;
    }

    button {
        background-color: lightgreen;
        border-style: none;
        border-radius: 10px;
        width: 150px;
        height: 40px;
        margin-bottom: 0.5rem;
        
    }

    p {
        margin: 0.5rem;
    }

    img {
        height: 200px;
    }
</style>