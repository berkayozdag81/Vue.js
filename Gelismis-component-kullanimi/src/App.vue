<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br><br>
        <button @click="selectedComponent = 'appMemory'" class="btn-sml btn btn-primary">appMemory</button>
        <button @click="selectedComponent = 'appNewMemory'" class="btn-sml btn btn-primary">appNewMemory</button>
        <button @click="selectedComponent = 'appAuthor'" class="btn-sml btn btn-primary">appAuthor</button>

        <keep-alive> <!--keep alive sayesinde componentler her seferinde yenilenmiyor yani render edilmiyor.-->
          <component v-bind:is="selectedComponent">
            <h1 slot="heading">Başlık</h1>
            <p slot="content">Bu çok güzel bir anıdır</p>
          </component>
        </keep-alive>

        <!--<appMemory>
          <h1 slot="heading">Başlık</h1>
          <p slot="content">Bu çok güzel bir anıdır</p>
        </appMemory>-->
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import NewMemory from "./components/NewMemory";
import Author from "./components/Author";

export default {
  data:function (){
    return{
      selectedComponent : "appMemory"
    }
  },
  components: {
    appMemory : Memory,
    appNewMemory: NewMemory,
    appAuthor:Author
  }
}
</script>

