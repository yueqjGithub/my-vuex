<template>
  <div class="hello">
    <!--//input实时改变wrd的值, 并且会实时改变box里的内容-->
    <h1>{{msg1}}</h1>
    <h2>{{$store.getters.msg2}}</h2>
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
import {mapState} from 'vuex'
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
  // eslint-disable-next-line
//  computed: {
  // eslint-disable-next-line
//    msg1: function () {
  // eslint-disable-next-line
//      return this.$store.state.msg
  // eslint-disable-next-line
//    },
  // eslint-disable-next-line
//    setwrd: {
  // eslint-disable-next-line
//      get: function () {
  // eslint-disable-next-line
//        return this.wrd + '/' + this.$store.state.dialog2.count
  // eslint-disable-next-line
//      },
  // eslint-disable-next-line
//      set: function (newvalue) {
  // eslint-disable-next-line
//        this.wrd += newvalue
  // eslint-disable-next-line
//      }
  // eslint-disable-next-line
//    }
  // eslint-disable-next-line
//  }
  computed: mapState({
    msg1: state => state.msg,
    setwrd (state) {
      return this.wrd + '/' + state.dialog2.count
    }
  })
}
</script>

<style scoped>

</style>
