<template>
  <div>
    <h3 class="text-center" v-if="productList.length > 0">Eklenen ürünlerin listesi</h3>
    <hr>
    <div class="row product-container">

      <product v-for="product in productList">
        <!--iki nokta koyuyoruz src vs. önüne vue içindeki veriye erişebilmek için -->
        <img class="card-img-top" :src="product.selectedImage" :alt="product.title">
        <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <small><strong>Adet : </strong> {{product.count}}</small>
          <br>
          <small><strong>Fiyat : </strong> {{product.price}}</small>
          <br>
          <small><strong>Tutar : </strong> {{product.totalPrice}}</small>
        </div>
      </product>
    </div>
  </div>

</template>



<script>
import Product from "./Product";
import {eventBus} from "../main";

export default {
  data(){
    return{
      productList: []
    }
  },
  components: {
    product: Product,
  },
  //created ile eventbus.on yaparak emit yaptığımız yerdeki objeyi alıyoruz.ilk parametre de o olay tetiklendiyse ikinci parametredeki fonksiyonu çalıştır ve o fonksiyona emit den döndürülen objeyi gönder.
  created() {
    eventBus.$on("productAdded",(product) => {
      if (this.productList.length < 2)
      {
        this.productList.push(product);
        eventBus.$emit("progressBarUpdated",this.productList.length);
      }else{
        alert("Daha fazla ürün ekleyemezsiniz!!!");
      }

    });
  }
}
</script>
