<template>
  <div class="loginBox">
    <img src="../assets/images/read.jpg" class="userLogin"/>
    <p><span>账号：</span><input type="text" placeholder="手机号/微信账号" v-model="namer"/></p>
    <p><span>密码：</span><input type="password"  v-model="word"/></p>
    <p><span>确认密码：</span><input type="password"  v-model="sword"/></p>
    <p> <input type="button" value="注  册" id="zhuce" @click="zhuce"/></p>
    <p><router-link to="/user/login" >已有账号，去登录！</router-link></p>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              namer:'',
              word:'',
              sword:''
          }
      },
      methods:{
          zhuce(){
              this.$http.get("http://localhost:80/data/reg.php",{'username':this.namer,'password':this.word,'repassword':this.sword}).then((res)=>{
                  console.log(res);
                  console.log(this.namer);
                  console.log(this.word);
                  console.log(this.sword)
              })
          }
      },
  }
</script>


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
  .loginBox p span{
    width: 100px;
    text-align: right;
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