<template>
  <div class="header">
    <div class="menus">
      <a href="/list">
        <img class="header-img" src="https://img.alicdn.com/tfs/TB1atJASVXXXXcPapXXXXXXXXXX-139-103.png">
      </a>
      <router-link to="/list" class="header-title">电商网站示例</router-link>
      <router-link to="/goodsMsg" class="header-title">商品展示</router-link>
      <div class="header-menu">
        <router-link to="/cart" class="header-menu-cart">
          购物车
          <span v-if="cartList.length">{{cartList.length}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  }
}
</script>

<style scoped>

.header {
  width: 100%;
  height: 75px;
  line-height: 75px;
  margin-top: 15px;
  background: #fff;
  
}
.header-img {
  float: left;
  margin-left: 150px;
  margin-right: 100px;
  height: 75px;
}
.header-title {
  padding: 0 50px;
  color: rgb(0,0,0);
  font-size: 16px;
  margin-top: 120px; 
}

.header-menu {
  float: right;
  margin-right: 50px;
}
.header-menu-cart {
  color: rgb(0,0,0);
  font-size: 16px;
}
.header-menu-cart span {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  background: #ff5500;
  color: #fff;
  font-size: 12px;
}
</style>