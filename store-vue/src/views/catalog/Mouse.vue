<template>
  <router-view></router-view>

  <div class="all">
      <div class="one" v-for="mou in mouse" :key="mou.id">
          <h2>{{ mou.name }}</h2>
          <img :src="mou.img">
          <p>Цена: {{ mou.price }} ₽</p>
          <button>
              <router-link :to="{name: 'OneProduct', params: {id: mou.id}}">Подробнее</router-link>
          </button>
          
          <button type="button" @click="cart(mou)">В корзину</button>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Mouse',
    computed: {
        ...mapGetters(['mouse'])
    },
    methods: {
        cart(mou){
            this.$store.commit('addToCart', {product: mou});
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