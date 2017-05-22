<template>
  <div id="app">
    <titles></titles>
    <router-view></router-view>
    <div class="input-box" v-show="iptState">
      <div class="ipt-box">
        <a href="javascript:;"><i class="iconfont">&#xe656;</i></a>
        <a href="javascript:;" class="hide"><i class="iconfont">&#xe635;</i></a>
      </div>
      <div class="ipt-con">
        <tab></tab>
        <ipt></ipt>
      </div>
    </div>
  </div>
</template>
<script>
  import titles from './components/title.vue';
  import tab from './components/tab.vue'
  import ipt from './components/ipt.vue'
  import {mapGetters} from 'vuex';
export default {
  name: 'app',
  components:{
    titles,tab,ipt
  },
  computed:mapGetters(
    ['iptState']
  ),
  watch:{
    $route(to){
      this.routeChange(to.path);
    }
  },
  methods:{
    routeChange(path){
        path=path.substring(1);
        if(path=='home'){
             this.$store.dispatch('showIpt');
             this.$store.state.msg='NCRE等考在线';
        }else{
          this.$store.dispatch('hideIpt');
        }
        if(path == 'user'){
          this.$store.state.msg='我的';
        }
        if(path.indexOf('reg')!=-1){
        this.$store.state.msg='注册';
      }
        if(path.indexOf('login')!=-1){
        this.$store.state.msg='登录';
      }
    }
  },
  mounted(){
      let that=this;
    $('.ipt-box a').click(function(){
        if(that.$store.getters['changeLogin']){
            $(this).css({display:"none"}).siblings().css({display:"block"});
            $('.ipt-con').children().eq($(this).index()).css({display:"none"}).siblings().css({display:"block"})
        }else {
            if(confirm("您未登录，未获得输入框权限,是否要登录?")){
                location.href="http://localhost:8080/#/user/login";
            }
        }

    });
    this.routeChange(this.$route.path)
  }
}
</script>
<style>
  .hide{
    display: none;
  }
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .input-box{
    background: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    border-top:1px solid #000;
  }
  .ipt-box{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .ipt-box a i{
    font-size: 22px;
  }
  .ipt-con{flex: 1;}
</style>
