<template>
  <div class="order-content">
    <div class="description-bg">
      <div class="description-top">
       <span class="icon-img"></span><span class="title-des">订单详情</span><span class="close-btn"></span>
      </div>
      <div class="description-title clearfix">
        <h2 class="tab-no">1号桌</h2> <p class="tang-font">堂食 <span class="for-font">FOR HERE</span></p>
        <div class="description-content">
          <p class="order-font">订单编号：<span class="orders">201711031726250392876</span></p>
          <p class="order-time">订单时间: 2017/11/25 15:37:00</p>
          <i class="icon-xx"></i>
          <i class="icon-xx"></i>
          <i class="icon-xx"></i>
          <i class="icon-xx"></i>
          <i class="icon-xx"></i>
          <span class="icon-score">5.0</span>
          <div class="description-pay">
            <img class="wxl" src="../assets/image/wxl_03.png"><p class="wxx-font">支付方式: 微信</p>
          </div>
          <p class="menu-font">订单详情 MAIN MENU</p>

          <div class="bg-red">
          <swiper :options="swiperOption" class="container-slider">
            <swiper-slide class="start-conteiner" v-for="(item, index) in slides" :key="index">
              <div class="start-content-list">
                <div class="goods-img">
                  <img src="../assets/image/caiimg1.png"/>
                  <span class="goods-money">¥40.00</span>
                </div>
                <div class="des-list">
                  <h2 class="h2-title">铁板牛排</h2>
                  <p class="des-forget">备注:<span class="remark">不要香菜</span></p>
                  <div class="content-count">
                    <img class="content-add" src="../assets/image/cartreduce.png"/>
                    <span> 1 </span>
                    <img class="content-reduce" src="../assets/image/cartadd.png"/>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          </div>

          <!--<div class="container-slider">-->
            <!--<div class="start-conteiner">-->
              <!--&lt;!&ndash;<div class="start-content-item">&ndash;&gt;-->
                <!--<div class="start-content-list">-->
                  <!--<div class="goods-img">-->
                    <!--<img src="../assets/image/caiimg1.png"/>-->
                    <!--<span class="goods-money">¥40.00</span>-->
                  <!--</div>-->
                  <!--<div class="des-list">-->
                    <!--<h2 class="h2-title">铁板牛排</h2>-->
                    <!--<p class="des-forget">备注:<span class="remark">不要香菜</span></p>-->
                    <!--<div class="content-count">-->
                      <!--<img class="content-add" src="../assets/image/cartreduce.png"/>-->
                      <!--<span> 1 </span>-->
                      <!--<img class="content-reduce" src="../assets/image/cartadd.png"/>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash;<img class="delete-img" src="../assets/image/delete_bg.jpg"/>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</div>-->

            <!--<div class="start-conteiner">-->
              <!--&lt;!&ndash;<div class="start-content-item">&ndash;&gt;-->
                <!--<div class="start-content-list">-->
                  <!--<div class="goods-img">-->
                    <!--<img src="../assets/image/caiimg1.png"/>-->
                    <!--<span class="goods-money">¥40.00</span>-->
                  <!--</div>-->
                  <!--<div class="des-list">-->
                    <!--<h2 class="h2-title">铁板牛排</h2>-->
                    <!--<p class="des-forget">备注:<span class="remark">不要香菜</span></p>-->
                    <!--<div class="content-count">-->
                      <!--<img class="content-add" src="../assets/image/cartreduce.png"/>-->
                      <!--<span> 1 </span>-->
                      <!--<img class="content-reduce" src="../assets/image/cartadd.png"/>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->

          <div class="des-footer">
            <p class="money-all">合计金额: ¥<span class="money-count"> 160.00</span></p>
            <p class="money-all">折扣金额: ¥<span class="money-count"> 0.00</span></p>
            <p class="real-money">实际金额: ¥<span class="real-count"> 160.00</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="application/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          touchRatio: 1,
          direction: 'vertical',
          slidesPerView: 4,
          spaceBetween: 0,
          slidesOffsetBefore: 2
        },
        slides: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped ref="stylesheet" lang="stylus">

.order-content
  width: 1024px
  height: 755px
  background-color: rgba(0,0,0, 0.3);
  position: fixed;
  left: 50%;
  margin-left: -512px;
  z-index: 1000;
  top: 0
  .description-bg
    position: absolute
    top: 0
    right: 0
    width: 299px
    height: 100%
    background-color: rgba(0,0,0, 0.8);
    z-index: 10001
    .description-top
      color: #fff
      height: 75px
      overflow: hidden
      .icon-img
        display: inline-block
        background: url(../assets/image/des01.png) no-repeat
        -webkit-background-size: 13px 14px
        background-size: 13px 14px
        margin: 25px 9px 0 18px
        width: 13px
        height: 14px
        float: left
      .title-des
        float: left
        margin-top: 27px
      .close-btn
        background: url(../assets/image/des03.png) no-repeat
        -webkit-background-size: 27px 27px
        background-size: 27px 27px
        width: 27px
        height: 27px
        display: inline-block
        float: right
        margin-top: 19px
        margin-right: 14px
    .description-title
      .tab-no
        color: #fff
        font-size: 18px
        font-weight: bold
        float: left
        margin-left: 20px
        margin-top: 6px
      .tang-font
        color: #fff
        float: right
        margin-top: 14px
        .for-font
          font-family: Arial
          margin-right: 19px
      .description-content
        width: 244px
        height: 575px
        background-color: #fff
        margin-top: 34px
        margin-left: 17px
        position: relative
        padding: 20px 10px
        .des-no
          position: absolute
          top: -18px
          left: 91px
          font-size: 24px
          font-weight: bold
          color: #6d6d78
      .order-font
        font-weight: bold
        margin-bottom: 8px
        .orders
          font-size: 9px
          font-weight: bold
      .order-time
        color: #b5b4bb
        font-size: 7px
      .icon-xx
        display: inline-block
        width: 12px
        height: 12px
        background: url(../assets/image/xx.png) no-repeat
        -webkit-background-size: 12px 12px
        background-size: 12px 12px
        margin: 7px 2px 12px 0
      .icon-score
        display: inline-block
        width: 21px
        height: 14px
        background-color: #1eb95f
        text-align: center
        line-height: 14px
        border-radius: 4px
        color: #fff
        vertical-align: top
        margin-top: 7px
      .description-pay
        position: absolute
        right: 14px
        top: 47px
        text-align: right
        .wxl
          width: 28px
          height: 23px
          margin-right: 3px
          margin-bottom: 4px
        .wxx-font
          font-weight: bold
          color: #6d6d78
      .menu-font
        font-weight: bold
        font-size: 7px
        color: #919191
        padding-bottom: 3px
      .bg-red
        width: 238px
        height: 400px
        background: url(../assets/image/xiangqing_bg.png) no-repeat
        background-position:  -39px bottom
        background-size: 300px 30px
        z-index: 110
        .container-slider
          width: 238px
          height: 335px
          .start-conteiner
            width: 238px
            height: 80px
            overflow: hidden
            position: relative
            margin: 0
            padding: 0
            .start-content-list
              height: 78px
              width: 236px
              border: 1px dashed #e9f0f3
              float: left
              background: url(../assets/image/des02.png) no-repeat
              background-size: 61px 51px
              background-position: 170px 15px
              .goods-img
                width: 90px
                height: 78px
                float: left
                position: relative
                img
                  width: 57px
                  height: 57px
                  padding-top: 10px
                  padding-left: 10px
                  float: left
                .goods-money
                  position: absolute
                  top: 40px
                  left: 42px
                  width: 38px
                  height: 19px
                  background-color: #ed3b2e
                  color: #fff
                  font-size: 9px
                  font-family: Arial
                  border-radius: 7px
                  text-align: center
                  line-height: 19px
              .des-list
                float: left
                .h2-title
                  font-size: 12px
                  font-weight: bold
                  padding: 14px 0 5px
                  color: #6d6d78
                  margin-left: 0
                .des-forget
                  color: #b0afb6
                  font-size: 9px
                  .remark
                    font-size: 9px
                    margin-left: 5px
                .content-count
                  height: 16px
                  margin-top: 8px
                  .content-add, .content-reduce
                    width: 16px
                    height: 16px
                    vertical-align: middle
                  span
                    line-height: 16px
                    padding: 0 6px
                    vertical-align: middle
                    font-weight: bold                /*.content-count*/
                    height: 16px
                    margin-top: 8px
                  .content-add, .content-reduce
                    width: 16px
                    height: 16px
                    vertical-align: middle
    .des-footer
      position: absolute
      right: 18px
      bottom: 19px
      text-align: right
      .money-all
        color: #6d6d78
        .money-count
          font-size: 18px
          font-family: Arial
          display: inline-block
          width: 62px
          height: 22px
          color: #2f384b
          text-align: right
          margin-right: 2px
      .real-money
        font-size: 18px
        color: #6d6d78
        .real-count
          font-size: 30px
          font-family: Arial
          color: #2f384b


</style>
