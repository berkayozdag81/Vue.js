import Vue from 'vue'
import App from './App.vue'

//global olarak filter tanımı:
Vue.filter("toLower",(value)=>{
  return value.toLowerCase();
})


new Vue({
  el: '#app',
  render: h => h(App)
})
