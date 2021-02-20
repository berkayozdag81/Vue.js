<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">adımı değiştir</button>
    <p>child component üzerinden gelen veri : {{childData}}</p>
    <hr>
    <div class="row">
      <app-user-detail v-bind:age="age" @data="childData= $event" v-bind:name="title"></app-user-detail>
      <app-user-edit @ageWasEdited="age =$event" v-bind:age="age"></app-user-edit>
    </div>
  </div>
</template>
<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  components : {
    appUserDetail : UserDetail,
    appUserEdit : UserEdit,
  },
  data:function (){
    return{
      title : "Berkay",
      childData:"",
      age: 30,
    }
  },
  methods:{
    changeName : function (){
      this.title = "Burak";
    }
  }
}
</script>

<style>
div.container{
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border: 1px solid #666;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
