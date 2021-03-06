<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <select class="from-control" v-model="activeEffect">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Kutuyu Göster / Gizle</button>
        <br><br>
        <!--transition sadece bir element üzerinde kullanılır birden fazla element kullanımı için transition-group kullanılır.-->
        <transition v-bind:name="activeEffect">
          <div class="alert alert-success" v-if="show">Bu Alert Kutusudur...</div>
        </transition>
        <hr>
        <!--burada v-show ile v-if aynı görevi görür ,appear sayfa yüklendiğinde gelmesini sağlar.tetikleyiciye ihtiyaç yoktur.-->
        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-show="show">Bu Alert Kutusudur...</div>
        </transition>
        <hr>
        <transition
          enter-class=""
          enter-active-class="animated shake"
          leave-class=""
          leave-active-class="animated swing"
          appear>
          <div class="alert alert-warning" v-show="show">Bu Alert Kutusudur...</div>
        </transition>
        <hr>
        <transition name="fade" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">Bu Alert Kutusudur...</div>
          <div class="alert alert-danger" v-else key="danger">Bu Alert Kutusudur...</div>
        </transition>
        <hr>


        <!--javascript ile animation yapmak: -->
        <button class="btn btn-primary" @click="showJs = !showJs">Kutuyu Göster / Gizle</button>
        <br>
        <!-- v-bind:css=false ile vue.js css in kullanılmayacağını anlar ve style içine bakmaz.-->
        <transition
          v-bind:css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled">
          <div style="width: 100px;background-color: #fbbd08;border: 1px solid #666;height: 100px" v-if="showJs">Bu Alert Kutusudur...</div>
        </transition>
        <hr>
        <h3>Dinamik Componentler Arası Geçiş..</h3>
        <button class="btn btn-danger" @click="activeComponent = 'home'">Home</button>
        <button class="btn btn-info" @click="activeComponent = 'post'">Post</button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component  :is="activeComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-danger" @click="addItem">Yeni eleman ekle</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <!--list de en önemli key!!-->
            <li :key="item" class="list-group-item" v-for="(item,index) in numberList" @click="removeItem(index)">Number : {{item}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post";
import Home from "./components/Home";

export default {
  components: {
    home:Home,
    post:Post
  },
  data(){
    return {
      show : false,
      activeEffect: "fade",
      showJs: false,
      elementWidth:100,
      activeComponent : "post",
      numberList : [1,2,3,4,5]
    }
  },
  methods:{
    addItem(){
      const position = Math.floor(Math.random() * this.numberList.length);
      this.numberList.splice(position,0,this.numberList.length+1);
    },
    removeItem(index){
      this.numberList.splice(index,1);
    },
    beforeEnter(el){
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el,done){
      let round = 1
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth + round * 10) + "px";
        round++;
        if (round > 20){
          clearInterval(interval);
          done();
        }
      },50)
      done();
    },
    afterEnter(el){},
    afterEnterCancelled(el){},
    //before leave den itibaren eski haline dönüş başlar.width i enter daki son boyutundan başlatıp ilk boyutuna getirilir.
    beforeLeave(el){
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el,done){
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + "px";
        round++;
        if (round > 20){
          clearInterval(interval);
          done();
        }
      },50)
    },
    afterLeave(el){},
    afterLeaveCancelled(el){}
  }
}
</script>

<style>

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s; /*burada opacity 1 oldu*/
}
.fade-leave{
  /* opacity: 1 */
}
.fade-leave-active{
  transition: opacity 1s;
   opacity: 0;
}


.slide-enter{
  opacity: 0;
}
.slide-enter-active{
 animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
/*keyframes içinde başlangıç ve bitiş noktalarını yazdığımız için slide-leave ve slide-enter de bir şey yazmaya gerek kamadı.*/
.slide-leave{}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
  /*absolute ile diğer elementler daha güzel kayma işlemi yaparak giden elemanın yerini alır*/
}

/*transition-group elemenlarının hareketi durumunda kullanılır.*/
.slide-move{
  transition: transform 1s;
}

@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}

</style>
