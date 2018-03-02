<template>
	<div>
		<swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in newtabList" class="main-list" :key="index">
    	  <div v-for="(item, indext) in slide" class="main-list-dest" :class="{'main-list-shadow': item.status==3||item.status==2}" :key="indext" ref="slideswiper">
					<div class="list-top">
						<img v-if="item.status == 0" class="dest-img" src="../assets/image/menulist0.jpg"/>
						<img v-if="item.status == 2" class="dest-img" src="../assets/image/menulist1.jpg"/>
						<img v-if="item.status == 1" class="dest-img" src="../assets/image/menulist2.jpg"/>
						<img v-if="item.status == 3" class="dest-img" src="../assets/image/menulist3.jpg"/>
						<div class="dest-info">
							<span class="dest-order">{{item.tableNo}}号桌</span>
							<span class="dest-pay" :class="{'dest-pay-orange': item.status==2, 'dest-pay-green': item.status==3}">{{deskState[item.status]}}</span>
						</div>
						<div class="dest-timer">
							<span class="eat-out">已用餐</span>
							<span class="eat-time">{{item.status == 2 ? '1 h 2 min' : '----'}}</span>
							<img src="../assets/image/desktimer.png"/>
						</div>
					</div>
				<div class="list-bottom">
					<div class="bottom-time">
						<span>下单时间：</span><span class="bottom-time-order">15:23</span>
						<p class="order-person">(<span class="order-count">{{item.peopleNumber}}</span>/{{item.capacity}})</p>
					</div>
					<div class="bottom-img">
						<router-link tag="div" to="/eatin" class="orderico" @click.native="queryDesk(item)"></router-link>
						<img class="order-eat" src="../assets/image/order_eat.jpg"/>
					</div>
    	  </div>
    	  </div>
      </swiper-slide>
    	<div class="swiper-pagination" slot="pagination"></div>
   </swiper>

<!--<div class="main-list-dest">
				<div class="list-top">
					<img class="dest-img" src="../assets/image/menulist1.jpg"/>
					<div class="dest-info">
						<span class="dest-order">1号桌</span>
						<span class="dest-pay">待结算</span>
					</div>
					<div class="dest-timer">
						<span class="eat-out">已用餐</span>
						<span class="eat-time">1 h 2 min</span>
						<img src="../assets/image/desktimer.png"/>
					</div>
				</div>
				<div class="list-bottom">
					<div class="bottom-time">
						<span>下单时间：</span><span class="bottom-time-order">15:37</span>
						<p class="order-person">(<span class="order-count">3</span>/4)</p>
					</div>
					<div class="bottom-img">
						<img class="orderico" src="../assets/image/orderico.jpg"/>
						<img class="order-eat" src="../assets/image/order_eat.jpg"/>
					</div>
				</div>
			</div>-->
	
<!--<ul class="main-dots">
			<li></li>
			<li class="active"></li>
			<li></li>
		
		</ul>-->
	</div>
</template>

<script type="text/ecmascript-6">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
    	tabNo: 0,
      deskState: ['未开台', '已预订', '待结算', '待清理'],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        touchRatio: 1
      },
    }
  },
  props: {
  	newList: {
  		type: Array
  	}
  },
  computed: {
    newtabList: function () {
      var result = []
      for (var i = 0; i < this.newList.length; i += 12) {
        result.push(this.newList.slice(i, i + 12))
      }
      return result
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
//  tableClick ($event) {
//  	console.log($event.target)
//  },
    queryDesk (item) {
    	this.$emit('tableContent', item)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin'
.swiper-container
  overflow: hidden
  background-color: #fefbfb
  height: 451px
  position: relative
  width: 972px
  z-index: 1000
	.main-list
	  /*width: 972px*/
	  overflow: hidden
	  .main-list-dest
	    width: 132px
	    height: 173px
	    float: left
	    margin: 15px
	    box-shadow: 5px 5px 25px #fde0da
	    .list-top
	      width: 132px
	      height: 97px
	      position: relative
	      .dest-img
	        width: 132px
	        height: 97px
	        position: absolute
	        z-index: 1
	      .dest-info
	        position: absolute
	        left: 0
	        top: 0
	        width: 132px
	        z-index: 4
	        .dest-order
	          display: inline-block
	          font-size: 15px
	          font-weight: bold
	          color: #fff
	          padding: 8px 0 0 8px
	        .dest-pay
	          display: inline-block
	          width: 43px
	          height: 18px
	          background: #fff
	          text-align: center
	          line-height: 18px
	          font-size: 8px
	          color: #2f374c
	          border-radius: 10px
	          float: right
	          margin: 5px 5px 0 0
	        .dest-pay-orange
	          color: #ff8424
	        .dest-pay-green
	          color: #0ab600
	      .dest-timer
	        position: absolute
	        width: 112px
	        height: 24px
	        bottom: 9px
	        left: 9px
	        padding-bottom: 5px
	        z-index: 5
	        .eat-out
	          font-size: 9px
	          color: #fff
	          display: block
	          width: 50px
	          margin-bottom: 5px
	        .eat-time
	          font-size: 12px
	          color: #fff
	          font-family: Arial
	        img
	          position: absolute
	          bottom: 0
	          right: 0
	          width: 21px
	          height: 20px
	          float: right
	    .list-bottom
	      width: 100%
	      height: 76px
	      font-size: 8px
	      background-color: #fcfcfc
	      .bottom-time
	        padding: 15px 0
	        padding-left: 3px
	        color: #3d4557
	        .bottom-time-order
	          font-weight: bold
	          color: #2f384b
	        .order-person
	          float: right
	          margin-right: 4px
	          font-family: Arial
	          .order-count
	            color: #d63e2a
	            font-family: Arial
	      .bottom-img
	        .orderico
	          width: 27px
	          height: 27px
	          background: url(../assets/image/orderico.jpg) no-repeat
	          background-size: 27px 27px
	          display: inline-block
	          margin: 0 0 12px 8px
	          cursor: pointer
	          extend-click()
	        .order-eat
	          width: 27px
	          height: 27px
	          float: right
	          padding: 0 8px 12px 0
	          cursor: pointer
	.main-list
	  .main-list-shadow
	    box-shadow: 5px 5px 25px #d6d9f0
  .swiper-pagination
    span.wiper-pagination-bullet-active
      width: 10px
      height: 10px
      background-color: #f60


	/*.main-dots
	  position: absolute
	  left: 50%
	  margin-left: -30px
	  bottom: 23px*/
	  /*.main-dots
	    width: 7px
	    height: 7px
	    background-color: #cab8b6
	    border-radius: 50%
	    float: left
	    margin-right: 12px
	    display: inline-block
	    vertical-align: middle
	  li.active
	    width: 10px
	    height: 10px
	    background-color: #ee3c2e
	    border-radius: 50%*/




</style>
