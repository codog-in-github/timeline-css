<template>
  <div id="app">
    <introduce />
  </div>
</template>

<script>
import Introduce from './components/Introduce.vue'

export default {
  components: { Introduce },
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 100vw;
  height: 100vh;
}
</style>
