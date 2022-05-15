<template>
  <div class="fulldescp">
    <h2>{{ product.name }}</h2>
    <div>
      <div class="bigimg"><img class="mainimg" :src="selected"></div>
      <div class="smallimg">
        <img class="itemimg" :src="product.img1"  @click="getImg(product.img1)">
          <img class="itemimg" :src="product.img2"  @click="getImg(product.img2)">
          <img class="itemimg" :src="product.img3"  @click="getImg(product.img3)">
          <img class="itemimg" :src="product.img"  @click="getImg(product.img)">
      </div>

    </div>
    
    <div class="descp col-6">
      <p> <b>Описание:</b> {{ product.description }}</p>
    </div>
    <p> <b>Цена:</b>  {{product.price}} ₽</p>
    <button @click="cart(product)">В корзину</button>
  </div>
</template>

<script>
export default {
  name: 'OneProduct',
  computed: {
    product(){
      return this.$store.getters.productById(this.$route.params.id);
    }
  },

  data: function(){
    return{
      selected: ''
    }
  },
  beforeMount(){
    this.selected = this.product?.img;
  },

  methods: {
    card(product){
      this.$store.commit('addToCart', {product: product});
    },
    getImg: function getImg(src) {
      this.selected = src;
    },
  },
  
}
</script>

<style scoped>
  .fulldescp{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  .descp{
    margin-top: 1rem;
  }

  button {
    background-color: lightgreen;
    border-style: none;
    border-radius: 10px;
    width: 150px;
    height: 40px;
    margin-bottom: 0.5rem;
    }


    .bigimg{
      display: flex;
      justify-content: center;
    }
    
    .mainimg{
      height: 200px;
    }

    .smallimg{
      display: flex;
      flex-direction: row;
      
    }

    .itemimg {
      height: 80px;

    }
</style>