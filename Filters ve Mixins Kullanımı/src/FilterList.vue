<template>
  <div>
    <hr>
    <input type="text" v-model="searchText">
    <ul>
      <li v-for="item in filtered">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {productMixin} from "./ProductMixin";

export default {
  mixins: [productMixin]
}
</script>
