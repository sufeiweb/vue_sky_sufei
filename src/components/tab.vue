<template>
    <div class="tab">
      <ul class="tab-one">
        <li class="tab-btn"><i class="iconfont">&#xe634;</i>考试明细
          <ul class="tab-two">
            <li>考试简介</li>
            <li>考试大纲</li>
            <li>考试系统</li>
            <li>查询分数</li>
            <li>考试改革</li>
            <li></li>
          </ul>
        </li>
        <li class="tab-btn"><i class="iconfont">&#xe634;</i>直击真题
          <ul class="tab-two">
            <li>公共基础1</li>
            <li>公共基础2</li>
            <li>操作1</li>
            <li>操作2</li>
            <li>真题下载</li>
            <li></li>
          </ul>
        </li>
        <li class="tab-btn"><i class="iconfont">&#xe634;</i>知识解析
          <ul class="tab-two">
            <li>Excel函数</li>
            <li>复习建议</li>
            <li>扇入点拨</li>
            <li>数据库解析</li>
            <li>二叉树解析</li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
  export default{
      mounted(){
        let that=this;
        $('.tab-btn').click(function () {
         if($(this).find('.tab-two').css("display")=="none") {
           $(this).find('.tab-two').stop().animate({
             top: -190
           }).show();
          }else{
            $(this).find('.tab-two').stop().animate({
              top:0
            }).hide();
          }
          $(this).siblings().find('.tab-two').stop().animate({top:0}).hide();
         $(this).find('.tab-two li').click(function () {
           let Html=`<div style="display: none">`+$(this).html()+`</div>`
           that.$store.commit('getData',Html);
         });
        });
      }
  }
</script>
<style>
.tab-one{
  width: 100%;
  display: flex;
  height: 50px;
  font-size: 16px;
}
.tab-one>li{
  align-items: center;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  border-left:1px solid #ccc;
}
.tab-one li ul{
  background: #fff;
  padding:10px 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 80%;
  position: absolute;
  display: none;
  left:10px;
}
.tab-one>li i{
  color:#ccc;
}
.tab-one li ul li{

  color: #666;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
.tab-one li ul li:last-child {
  height: 0;
  position: absolute;
  border: 10px solid #f6f6f6;
  border-bottom: none;
  border-top-color: #fff;
  bottom: -9px;
  left: 50%;
  margin-left: -10px;
}
</style>
