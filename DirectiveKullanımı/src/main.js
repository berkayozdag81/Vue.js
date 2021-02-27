import Vue from 'vue'
import App from './App.vue'
//directive in global tanımlanması:
/*Vue.directive("color", {
  //directiv içerisinde 3 tür veri alabiliriz: value,argüman,modifier.
  bind(el,binding,vnode){

    if(binding.modifiers["delay"]){
      setTimeout(() => {
        if(binding.arg == 'background'){
          el.style.backgroundColor = binding.value; //binding.value yaptığımızda bu directive in kullanıldığı yerden gönderilen değeri alır.

        }else{
          el.style.color = binding.value;
        }
      },2000)
    }else{
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value; //binding.value yaptığımızda bu directive in kullanıldığı yerden gönderilen değeri alır.

      }else{
        el.style.color = binding.value;
      }
    }
  }
});*/
new Vue({
  el: '#app',
  render: h => h(App)
})
