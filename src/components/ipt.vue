<template>
  <div class="ipt">
      <input type="text" class="ipt-text" v-model="num" @keyup="keyup($event)"/>
      <input type="button" value="发送" class="ipt-send" @click="setDate" />
  </div>
</template>
<script>
  export default{
    data(){
      return{
        num:""
      }
    },
    methods:{
      setDate(){
        let userIpt=`<div id="right">${this.num}</div>`;
        this.$store.commit('getData',userIpt);
        this.num='';
      },
      keyup(ev){
        if(ev.keyCode==13){
          let userIpt=`<div id="right">${this.num}</div>`;
          this.$store.commit('getData',userIpt);
          this.num='';
        }
      }
    }
  }
</script>

<style>
    .ipt{
      display: none;
      border-left: 1px solid #ccc;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
  .ipt-text{
    margin: 0 10px;
    width:70% ;
    height: 90%;
  }
  .ipt-send{
    height: 34px;
    padding: 0 10px;
  }
</style>