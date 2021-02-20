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
export default {
  props : {
    name : {
      type : String,
      default:" ",
    },
    age : {
      default:2,
    }
  },  //props olarak oluşturduğumuz değişkenleri buradaki methodlarda vs. kullanabiliriz.Yani buradaki props bir data property si gibi kullanılır.
  methods:{
    sendToParent (){
       this.$emit("data","Beşiktaş");
    }
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
