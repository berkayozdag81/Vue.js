<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı : {{name}}</p>
    <p>Kullanıcı yaşı : {{age}}</p>
    <button @click="sendToParent">Veriyi parent a gönder</button>
  </div>
</template>
<script>
import {eventBus} from "../main";
export default {
  props : {
    name : {
      type : String,
      default:" ",
    },
    age : {
      default:20,
    }
  },  //props olarak oluşturduğumuz değişkenleri buradaki methodlarda vs. kullanabiliriz.Yani buradaki props bir data property si gibi kullanılır.
  methods:{
    sendToParent (){
       this.$emit("data","Beşiktaş");
    }
  },
  //eventBus kullanarak işlem yapıldığında parent componentteki age değişmez sadece child componentlerdeki age güncellenir.
  created() {
    eventBus.$on("ageWasEdited", (age) => {
      this.age = age;
    })
  }
}
</script>
<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
