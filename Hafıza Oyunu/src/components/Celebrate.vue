<template>
  <div class="container">
    <h1>Tebrikler Bildiniz!!!</h1>
    <button @click="newGame">Yeni Oyun</button>
  </div>
</template>
<script>
export default {
  methods:{
    newGame (){
     this.$emit("activeComponentEvent","appGame");
    }
  }
}

</script>

<style scoped>
.container{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container h1{
  text-align: center;
  font-size: 100px;
  background-color: chocolate;
}

</style>
