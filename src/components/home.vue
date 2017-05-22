<template>
  <div class="home">
    <div style="display: none">
      {{arr2}}
    </div>
    <ul class="contents">
      <li v-for="val in tem">
        <p v-html="val"></p>
      </li>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery'
  import {mapGetters} from 'vuex';
  export default{
    data(){
      return {
        arr:[],
        tem:['<div id="left">欢迎订阅NCRE等考在线</div>'],
      }
    },
    mounted(){
      let url='./src/data/shuju.json';
      this.$http.get(url).then((res)=>{
        this.arr=res.data;
      }).catch((res)=>{
        console.log(res)
      });
    },
    computed:{
      //获取数据的一种方法a
//      we(){
//        return this.$store.getters['getState'];
//      },
      arr2(){
        let str='';
        this.arr.forEach((item,index)=>{
          if(this.$store.getters['getState'].indexOf(item.key)!=-1){
//            str=this.arr[index].content;
//            str=`<a href="`+数据详情链接+`"><div id="left"><p><img src="`+图片地址+`"/><span>`+数据标题+`</span></p><p class="dataContent">`+数据简要内容+`</p></div></a>`
            str=`<a href="javascript:;" id="left"><div><p class="titles"><img src="/src/assets/images/c.png" class="Img"/><span>${this.arr[index].title}</span></p><p class="dataContent">${this.arr[index].content}</p></div></a>`
          }
        });
        this.tem.push(this.$store.getters['getState']);
        this.tem.push(str);
      }
//      ...mapGetters(
//        ['getState']
//      )
    }
  }
</script>



<style>
  .home{
    flex: 1;
    padding: 20px;
    overflow: scroll;
  }
  .contents li{
    margin:10px;
    overflow: hidden;
  }
  .contents li p{
    text-indent: 2em;
  }
  #right{
    float: right;
    border: 2px solid #55a532;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    text-indent: 0;
  }
  #left{
    text-align: left;
  }
  #left .titles{
    height: 50px;
    display: flex;
    padding: 10px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5% 5% 0 0;
  }
  #left .titles span{
    border-left: 1px solid #000;
    margin-left: 20px;
  }
  #left .Img{
    width: 50px;
  }
  #left .dataContent{
    border: 1px solid #cccccc;
    padding: 10px;
    border-top: none;
    border-radius: 0 0 5% 5%;
  }
</style>