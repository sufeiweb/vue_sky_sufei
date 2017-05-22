<template>
  <div class="loginBox">
    <img v-bind:src="imgSrc" class="userLogin"/>
    <p><span>账号：</span><input type="text" placeholder="手机号/微信账号" v-model="namer"/></p>
    <p><span>密码：</span><input type="password" v-model="word"/></p>
    <p> <input type="button" value="登  录" id="denglu" @click="denglu"/></p>
    <p><router-link to="/user/reg" >没有账号，去注册!</router-link></p>
    <p><a href="javascript:;">登录遇到问题？</a></p>
    <p><a href="javascript:;">忘记密码？</a></p>
  </div>
</template>
<style>
  .loginBox{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
  }
  .userLogin{
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    padding: 5px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .loginBox p{
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }
  .loginBox p input{
    height: 30px;
    font-size: 20px;
    border:none;
    background: #eaffea;
  }
  .loginBox p a{
    text-decoration: underline;
    font-size: 16px;
    color:#bd2c00;
  }
  #denglu{
    height: 100%;
    width: 200px;
    padding: 10px 30px;
    background: #55a532;
    color: #fff;
    border-radius: 8px;

  }

</style>
<script>
  export default{
      data(){
          return{
              namer:'',
              word:'',
              imgSrc:''
          }
      },
      methods: {
          denglu(){
              console.log(this.$store.getters['changeLogin'])
              let url='./src/data/login.json';
              this.$http.get(url).then((res)=>{
                  if(res.data.code ==1){
                      if(this.namer == res.data.user.username ||this.word==res.data.user.password){
                          this.$store.commit('changeLogin');
                          this.$store.commit("changeUsers",res.data.user);
                       console.log(this.$store.getters['changeLogin'])
                          this.imgSrc=this.$store.getters['changeUsers'].imgSrc;
                       location.href="http://localhost:8080/#/home";
                      }
                  }else{
                      alert("请求错误！")
                  }
              })

          }
      },
      mounted(){
          this.imgSrc=this.$store.getters['changeUsers'].imgSrc;
      }
  }
</script>