<template>
  <div v-if="product">
    <div class="product">
      <div class="product-image">
        <img :src="product.image">
      </div>
      <div class="product-info">
        <h1 class="product-name">{{product.name}}</h1>
        <div class="product-cost">{{product.cost}}</div>
        <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
      </div>
    </div>
    <div class="product-desc">
      <h2>产品介绍</h2>
    </div>
  </div>
</template>

<script>
import productData from '../../mock/product'
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
      product: null
    }
  },
  methods: {
    getProduct() {
      setTimeout(() => {
        this.product = productData.find(item => item.id === this.id);
      }, 500);
    },
    handleAddToCart() {
      this.$store.commit('addCart', this.id)
    }
  },
  mounted() {
    this.getProduct();
  }
}
</script>

<style scoped>
.product {
  background: #fff;
  border: 1px solid #dddee1;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 20% 20px 20%;
}
.product-image {
  width: 50%;
  height:550px;
  float: left;
  text-align: center;
}
.product-image img {
  margin-top: 90px;
  width: 60%;
}
.product-info {
  width: 50%;
  padding: 150px 0 250px;
  height: 150px;
  float: left;
  text-align: center;
}
.product-cost {
  color: #f2352e;
  margin: 8px 0;
}
.product-add-cart {
  display: inline-block;
  padding: 8px 64px;
  margin: 8px 0;
  background: #2d8cf0;
  color:#fff;
  border-radius: 4px;
  cursor: pointer;
}
.product-desc {
  background: #fff;
  padding: 32px;
  border: 1px solid #dddee1;
  border-radius: 10px;
  text-align: center;
  margin: 20px 20% 20px 20%;
}
</style>