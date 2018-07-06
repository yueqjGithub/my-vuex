<template>
  <div class="hello">
    <!--//input实时改变wrd的值, 并且会实时改变box里的内容-->
    <input type="text" v-model="wrd">
    <h2>{{chifan}}</h2>
    <box :word.sync="wrd" :word2.sync="chifan"></box>
  </div>
</template>

<script>
import box from './box'
// 引入box子组件
export default {
  name: 'father',
  data () {
    return {
      wrd: '',
      chifan: '吃饭原值'
    }
  },
  components: {
    box
  }
}
</script>

<style scoped>

</style>
