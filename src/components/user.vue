<template>
  <div class="userBox">
    <div class="userShow">
      <img v-bind:src="imgSrc"/>
      <p>
        <span class="userName">姓名：{{user}}</span>
        <span class="userWeCat">微信号：{{weHat}}</span>
      </p>
    </div>
    <div class="userCaozuo" v-show="loginClose">
      <router-link to="/user/login"  class="iptBg">登 录</router-link>
      <router-link to="/user/reg" >注 册</router-link>
    </div>
      <ul class="tuichu">
        <li class="iptControl">
          <span @click="close">设置</span>
          <ul class="iptClose">
            <li><a href="javascript:;" @click="tuilogin">退出登录</a></li>
          </ul>
        </li>
      </ul>
  </div>
</template>
<style>
  .userBox{
    padding: 20px;
  }
  .userShow{
    display: flex;
    border: 1px solid #ccc;
    align-items: center;
    padding: 10px 0;
    border-left: none;
    border-right: none;
  }
  .userShow img{
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border: 1px solid #ccc;
    padding: 5px;
    background: #fff;
  }
  .userShow p span{
    margin-bottom: 10px;
  }
  .userShow p .userName{
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }
  .userCaozuo{
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .userCaozuo a{
    font-size: 24px;
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 20px;
  }
  .iptBg{
    background: #0086b3;
    color:#fff;
    border-radius: 8px;
  }
  .tuichu{
    margin-top: 100px;
  }
  .tuichu>li span{
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
    padding: 5px 0;
    font-size: 20px;;
  }
  .tuichu>li ul{
    padding: 5px 40px;
    font-size: 18px;
    display: none;
  }
</style>
<script>
    import {mapGetters} from 'vuex';
  export default{
      data(){
          return{
              imgSrc:'',
              user:'',
              weHat:''
          }
      },
    methods:{
      close(){
        if($('.iptClose').css('display')=="block"){
          $('.iptClose').css({display:"none"});
        }else{
          $('.iptClose').css({display:"block"});
        }
      },
        tuilogin(){
          if(this.$store.getters['changeLogin']){
              this.$store.commit('changeLogins');
              this.$store.commit("changeUsers","");
              this.$store.dispatch('showLogin');
              location.href="http://localhost:8080/#/user/login"
          }
        }
    },
      mounted(){
          this.imgSrc=this.$store.getters['changeUsers'].imgSrc;
          this.user=this.$store.getters['changeUsers'].username;
          this.weHat=this.$store.getters['changeUsers'].password;
          if(this.$store.getters['changeLogin']){
              this.$store.dispatch('hideLogin');
          }
      },
      computed:mapGetters(
          ['loginClose']
      ),
  }
</script>