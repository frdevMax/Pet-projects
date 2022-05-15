<template>
  <div class="cart">
    <div class="carttable col-8" v-if="$store.state.cart.length">
      <h4>Товары в корзине</h4>
      <div class="table">
        <div class="oneprod col-12" v-for="item in $store.state.cart" :key="item.id">
          <div id="item"></div>
          <div>
            <img :src="item.img" height="100">
          </div>
          <router-link :to="{name:'OneProduct', params:{id: item.id}}" class="name">
            {{ item.name }}
          </router-link>
          <div>Цена: {{ item.price }} ₽</div>
          <div>
            <button class="cartbut" @click="less(item)">-</button>
            {{ item.quantity }}
            <button class="cartbut" @click="more(item)">+</button>
          </div>
          <div>
            <button class="butdel" type="button" @click="deleteItem(item)">x</button>
          </div>
        </div>
      

        <div class="price">
          Сумма: {{ $store.state.totalSum }} ₽
        </div>
      </div>

      <button class="button" type="button" @click="clearCart">Очистить корзину</button>

    </div>

    <div v-else class="noitems">
          <h4>В корзине пока нет товаров</h4>
          <router-link to="/catalog">
          <button class="btncatalog">Перейти в каталог</button>
          </router-link>
    </div>

  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    name: 'Cart',

    methods: {
      less(item){
            this.$store.commit('getLess', {product: item});
        },
      more(item){
            this.$store.commit('getMore', {product: item});
        },
      deleteItem(item){
          this.$store.commit('removeFromCart', {product: item});
        },
      ...mapMutations(['clearCart'])
    }

}
</script>

<style scoped>
  .cart {
    
    display: flex;
    justify-content: center;
  }

  .carttable {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
  }

  .table {
    display: flex;
    flex-direction:column;
  }

  .oneprod {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
  }

  .butdel {
    border-radius: 7px;
    border-style: none;
    background-color: rgb(238, 109, 109);
  }

  .cartbut {
    border-style: none;
  }

  span {
    cursor: pointer;
  }

  a {
    color: black;
    font-weight: bold;
  }

  .button {
    border-style: none;
    border-radius: 10px;
    height: 40px;
  }

  .noitems {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btncatalog {
    border-style: none;
    border-radius: 10px;
    background-color:lightgreen;
    height: 40px;
    width: 300px;
  }
</style>
