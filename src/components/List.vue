<template>
  <div v-show="list.length" class="product-list">
    <Product v-for="item in list.slice((currentPage-1)*pagesize,currentPage*pagesize)" :info="item" :key="item.id"></Product>
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     :page-size="pagesize"
                     layout="total, prev, pager, next, jumper"
                     :total="list.length">
      </el-pagination>
    </div>
    
  </div>
</template>

<script>
import Product from '../common/product'
import productData from '../../mock/product'
export default {
  components: {
    Product
  },
  data() {
    return {
      list: productData,
      currentPage: 1,
      pagesize: 10
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
}
</script>

<style scoped>

.product-list {
  margin-left: 20%;
  margin-right: 20%;
}
.block {
  float: left;
  margin: 30px 0 30px 50%; 
}
</style>