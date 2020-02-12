<template>
  <div class="elTable">
    <el-table :data="productData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              :default-sort = "{prop: 'id', order: 'ascending'}" class="elT">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="el-table-expand">
            <el-form-item label="商品ID:">
              <span>{{props.row.id}}</span>
            </el-form-item>
            <el-form-item label="商品名称:">
              <span>{{props.row.name}}</span>
            </el-form-item>
            <el-form-item label="商品分类:">
              <span>{{props.row.brand}}</span>
            </el-form-item>
            <el-form-item label="商品颜色:">
              <span>{{props.row.color}}</span>
            </el-form-item>
            <el-form-item label="商品单价:">
              <span>{{props.row.cost}}</span>
            </el-form-item>
            <el-form-item label="商品销售:">
              <span>{{props.row.sales}}</span>
            </el-form-item>
            <el-form-item label="所属店铺:">
              <span>{{props.row.shop}}</span>
            </el-form-item>
            <el-form-item label="店铺地址:">
              <span>{{props.row.address}}</span>
            </el-form-item>
            <el-form-item label="商品描述:">
              <span>{{props.row.describe}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品ID" prop="id" width="150" sortable></el-table-column>
      <el-table-column label="商品分类"
                       prop="brand"
                       width="150"
                       :filters="brandFilters"
                       :filter-method="filterTag"
                       filter-placement="bottom-end">

      </el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="商品描述" prop="describe"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100px">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index,productData)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination :current-page.sync="currentPage"
                     :page-size="pagesize"
                     layout="total, prev, pager, next, jumper"
                     :total="productData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import productData from '../../mock/product'
export default {
  data() {
    return {
      productData,
      currentPage: 1,
      pagesize: 13,
      brandFilters: [
        {
          text: '华为',
          value: '华为'
        },
        {
          text: '苹果',
          value: '苹果'
        },
        {
          text: '努比亚',
          value: '努比亚'
        },
        {
          text: '三星',
          value: '三星'
        },
        {
          text: '小米',
          value: '小米'
        },
        {
          text: '诺基亚',
          value: '诺基亚'
        }
      ]
    }
  },
  computed: {
    brands() {
      return this.$store.getters.brands;
    }
  },
  methods: {
    deleteRow(index, row) {
      row.splice(index,1);
    },
    filterTag(value, row) {
      return row.brand === value;
    }
  }
}
</script>

<style scoped>
.elTable {
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
}
.elT {
  border-radius: 10px;
}
.block {
  float: left;
  margin-top: 20px;
  margin-left: 50%;
}
.el-table-expand {
  font-size: 0;
  margin-left: 80px;
}
.el-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.el-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>