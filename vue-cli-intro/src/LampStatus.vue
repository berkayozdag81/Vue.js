<template>
  <div>
    <p>Lamba durumu : {{status}} </p>
    <button @click="openLambs">Lambayı aç</button>
    <hr>
  </div>
</template>

<script>
export default {
  data : function (){
    return {
      status : "kapalı"
    }
  },
  methods : {
    openLambs(){
      this.status = "açık";
    }
  }
}
</script>
