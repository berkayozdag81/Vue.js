<template>
  <div>
    <h1>NewMemory componenti</h1>
  </div>
</template>
<script>
export default {
  activated() {
     alert("activated");
  },
  deactivated() {
    alert("deactivated");
  }
}
</script>
<!--activated ve deactivated componentlerin aktive olup olmadığını söyler.-->
