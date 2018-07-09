<template>
  <div class="hello">
    <!--//input实时改变wrd的值, 并且会实时改变box里的内容-->
    <input type="text" v-model="wrd">
    <h2>{{chifan}}</h2>
    <box :word.sync="wrd" :word2.sync="chifan"></box>
    <h3 :style="color">{{$store.state.dialog.show}}</h3>
    <h3 :style="color">{{$store.state.dialog2.count}}</h3>
    <button @click="$store.dispatch('add')">+</button>
    <button @click="$store.dispatch('reduce')">-</button>
    <input type="text" v-model="setwrd">
  </div>
</template>

<script>
import box from './box'
// 引入box子组件
export default {
  name: 'father',
  data () {
    return {
      wrd: 1,
      chifan: '吃饭原值',
      color: {'color': 'red'}
    }
  },
  components: {
    box
  },
  computed: {
    setwrd: {
      get: function () {
        return this.wrd + '/' + this.$store.state.dialog2.count
      },
      set: function (newvalue) {
        this.wrd += newvalue
      }
    }
  }
}
</script>

<style scoped>

</style>
