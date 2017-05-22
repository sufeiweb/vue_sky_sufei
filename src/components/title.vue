<template>
  <p class="headers">
    <router-link to="/home" ><i class="iconfont">&#xe64f;</i></router-link>
    <span>{{changeState}}</span>
    <router-link to="/user"><i class="iconfont">&#xe62e;</i></router-link>
  </p>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    computed:mapGetters(
      ['changeState']
    ),
  }
</script>
<style>
  .headers{
    width: 100%;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #000;
    color:#fff;
  }
  .headers a{ color: #fff; display: flex;align-items: center;}
  .headers a:nth-of-type(2){text-align: right;}
  .headers .iconfont{
    font-size: 26px;
  }
</style>