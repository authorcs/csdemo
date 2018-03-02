<template>
	<div class="history-slide">
		<swiper :options="swiperOption" class="list-count">
      <swiper-slide class="list-page" v-for="(item, index) in slides" :key="index">
		    <div class="list-desk">
					<div class="desk-top">
						<p class="order-count">订单编号:<span class="order-num">201711031726250392876</span></p>
						<p class="order-time">订单时间: 2017/11/25 15:37:00 </p>
						<i class="icon-xx"></i>
	          <i class="icon-xx"></i>
	          <i class="icon-xx"></i>
	          <i class="icon-xx"></i>
	          <i class="icon-xx"></i>
	          <span class="icon-score">5.0</span>
	          <p class="order-desc">订单详情 MAIN MENU</p>
          </div>
          <div class="img-container">
          	<div class="img-slider">
          		<img src="../assets/image/history_11.png"/>
          		<img src="../assets/image/history_13.png"/>
          		<img src="../assets/image/history_11.png"/>
          	</div>
          </div>
          <div class="list-num">01</div>
				</div>
		  </swiper-slide>
		  <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
	</div>
</template>

<script type="application/ecmascript-6">
	import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data () {
      return {
      	swiperOption: {
	      	pagination: {
	          el: '.swiper-pagination'
	        },
	        touchRatio: 1,
			    slidesPerView: 3,
			    spaceBetween: 0,
			    slidesPerColumn : 2,
	        slidesPerColumnFill : 'row'
	      },
	      slides: [1,2,3,4,5,6,7,8,9,10]
      }
		}
	}
</script>

<style scoped ref="stylesheet" lang="stylus">
.history-slide
  width: 629px
  .list-count
    width: 629px
    overflow: hidden
    .list-page
      overflow: hidden
      .list-desk
        width: 220px
        /*width: 214px*/
        height: 175px
        background-color: #fff
        margin: 16px
        float: left
        position: relative
        .desk-top
          padding-top: 20px
          padding-left: 10px
	        .order-count
	          margin-bottom: 7px
	          color: #6d6d78
	          font-weight: bold
	          .order-num
	            font-size: 9px
	            color: #6d6d78
	            font-weight: bold
	        .order-time
	          font-size: 7px
	          color: #b0afb6
	        .icon-xx
		        display: inline-block
		        width: 12px
		        height: 12px
		        background: url(../assets/image/xx.png) no-repeat
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
		      .order-desc
		        font-size: 7px
		        color: #919191
		    .img-container
		      margin-top: 7px
		      margin-left: 3px
		      height: 63px
		      .img-slider
		        height: 63px
		        margin: 0 10px
		        img
		          width: 63px
		          height: 63px
		          border-radius: 3px
		    .list-num
		      position: absolute
		      top: -12px
		      left: 91px
		      font-size: 24px
		      font-weight: bold
		      color: #6d6d78
		.swiper-pagination
		  bottom: 0
</style>