<template>
  <div class="shell">
    <p class="result">
      <span>{{ count }} </span>
    </p>
    <div class="btn-group-sm btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary" v-on:click="increment">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary" v-on:click="decrement">
          <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../vuex/store'
import { increment, decrement } from '../vuex/action'
export default {
  store,
  vuex: {
    getters: {
      count: state => state.count
    },
    actions: {
      increment,
      decrement
    }
  }
}
</script>

<style>
.shell {
  margin:  300px auto;
  width: 300px;
}
.result {
  padding:  10px;
  height: 48px;
  line-height: 32px;
  font-size: 26px;
  color:  #000;
  box-shadow: 0 0 6px #8a8a8a inset;
  margin:  0;
}
button{
  height: 50px;
  font-size: 30px;
}
</style>
