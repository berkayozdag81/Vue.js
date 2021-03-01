
<!--Filter data yı kullanıcıya gösterirken değişiklik yapmamızı sağlar arka planda data yı değiştirmez.örnek yazıyı kullanıcıya büyük harflerle göstermek.-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
         <p>{{title | toUpper}}</p>
        <hr>
        <!--mixin içerisindeki property,method vs üzerinde değişiklik yaparsak sadece bu componenti etkiler aynı mixin i kullanan her componenti eklemez.-->
        <button class="btn btn-primary" @click="products.push('Kamyon')">Ürün Ekle !!! </button>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="item in filtered">{{item}}</li>
        </ul>
        <filterList></filterList>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from "./FilterList";
import {productMixin} from "./ProductMixin";

export default {
  mixins: [productMixin],
  components : {
    filterList : FilterList
  },
  data(){
    return{
      title: "Selamlar!!",
      searchText: ''
    }
  },
  //local filter tanımı:
  filters:{
    toUpper(value){
      return value.toUpperCase();
    }
  },
}
</script>

<style>

</style>
