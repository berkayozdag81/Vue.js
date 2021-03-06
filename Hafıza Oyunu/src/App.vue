<template>
  <component
    @activeComponentEvent ="activeComponent = $event"
    :is="activeComponent">
  </component>
</template>
<script>
import GameCard from "./components/GameCard";
import Failed from "./components/Failed";
import Celebrate from "./components/Celebrate";

export default {
  data(){
    return {
      activeComponent: "appGame"
    }
  },
  components:{
    appCelebrate: Celebrate,
    appGame: GameCard,
    appFail: Failed
  }
}
</script>
<style>
  body{
    font-family: sans-serif;
  }
</style>
