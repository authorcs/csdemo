<template>
	<div class="history-order">
		<div class="list-top">
			<h2 class="history-title">HISTORY</h2>
			<div class="list-top-content">
				<div class="list-top-arrow"></div>
				<div class="rili-icon" @click="yearShow">
					<i class="history-ico"></i><span class="month-font">{{this.currentMonth}}月</span><i class="hicon-down"></i>
				</div>
				<div class="list-top-title">
					<img class="list-icon-center" src="../assets/image/xuanxiang1.png"/>
					<span>历史订单</span>
				</div>
				<div class="list-top-icon">
					<span class="icon-img-search"></span>
					<span class="icon-img-manger"></span>
					<span class="icon-img-select"></span>
				</div>
				<!--日历开始-->
			</div>
		</div>
		<div class="year-all" v-show="yearMonth">
	    <span class="arrow-left" @click="pickPre(currentYear,currentMonth, 1)"><</span>
	    <span class="current-year">{{currentYear}}</span>
	    <span class="arrow-right" @click="pickNext(currentYear, currentMonth, 1)">></span>
	    <ul class="choose-month">
    	  <li v-for="monthItem in months" class="monthList" :class="{'active': currentMonth === monthItem}" @click="changMonth(monthItem)">{{monthItem}}</li>
      </ul>
	  </div>
	  <!--天数滑动-->
	  <swiper :options="swiperOption" class="choose-day">
      <swiper-slide v-for="(item, index) in dayMonth" :key="index">
      	<div class="every-day" @click="changDay(item, $event)">
		      <p class="weekday" :class="{'weekday-qi': item.week-1 ==6}">{{weeks[item.week-1]}}</p>
	        <span class="one-day" :class="{'weekday-qi': item.week-1 ==6, 'day-active': item.day==currentDay}">{{item.day}}</span>
        </div>
	  </swiper-slide>
   </swiper>
   <!--红色时间表-->
   <div class="timer-order">
   	<div class="timer-orderL">
   		<span class="tiemr-iconL"></span>
   		<span class="tiemr-titleL">按时间倒序</span>
   		<span class="timer-arrowL"></span>
   	</div>
   	<div class="timer-orderR">
   		<span class="tiemrR-bg"></span>
   		<span class="tiemr-now" v-for="tim in nowTimes">{{tim}}:00</span>
   		<div class="timer-select">
   			<span class="tiemr-start"></span>
   			<span class="timer-c"></span>
   			<span class="tiemr-end"></span>
   		</div>
   	</div>
   </div>
	  
    <!--<div class="choose-day">
      <div class="every-day" v-for="item in dayMonth" @click="changDay(item)">
      	<p class="weekday">{{weeks[item.week-1]}}</p>
      	<span class="one-day">{{item.day}}</span>
      </div>
    </div>-->
		<history-slide></history-slide>
		<div class="history-all">
			<p class="all-font">共计<span class="total-all">321</span></p>
		</div>
    
		<!--<div class="list-count">
			<div class="list-page">
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
				</div>
			</div>
		</div>-->
		<order-content v-show="false"></order-content>
	</div>
</template>

<script type="application/ecmascript-6">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import orderContent from 'base/order-content'
import historySlide from 'base/history-slide'
	export default {
    data () {
      return {
        swiperOption: {
	        touchRatio: 1,
			    slidesPerView: 13,
			    spaceBetween: 0,
			    initialSlide: 1
	      },
	      currentDay: 1,
        currentMonth: 1,
        currentYear: 1970,
        currentWeek: 1,
        dayMonth: [],
        currentHours: 1,
        weeks: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        yearMonth: false,
        nowTimes: ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24"]
      }
		},
		components: {
			orderContent,
			historySlide
		},
		created: function() {  //在vue初始化时调用
      this.initData(null);
      this.initialSlide = this.currentDay-1   // 初始化预先展示的日期
      
		},
		mounted () {
			this.initTimer()
		},
		methods: {
      initData: function(cur) {
          var leftcount=0; //存放剩余数量
          var date;
          if (cur) {
            var change = new Date(cur);
            var d = new Date(change.getFullYear(), change.getMonth()+1, 0);
            date = new Date(this.formatDate(change.getFullYear(), change.getMonth() + 1, this.currentDay));
          } else {
            var now=new Date();
            var d = new Date(now.getFullYear(), now.getMonth(), 0);
            date = new Date(this.formatDate(now.getFullYear(), now.getMonth() + 1, now.getDate()));
            this.currentHours = now.getHours()  // 获取当前时间来定义红色条
          }
          this.dayMonth.length = 0;
          for (var i = 0; i < d.getDate(); i++) {
          	var dayobject={};
          	dayobject.day= i + 1;
          	dayobject.week = date.getDay() + i
          	if (dayobject.week > 7 && dayobject.week%7 !==0) {
          		dayobject.week = dayobject.week%7
          	}else if(dayobject.week%7 ==0){
          		dayobject.week = 7
          	}
          	this.dayMonth.push(dayobject)
          }
          this.currentDay = date.getDate();
          this.currentYear = date.getFullYear();
          this.currentMonth = date.getMonth() + 1;
      },
      pickPre: function(year, month, day) {
        this.currentYear -= 1
        this.initData(this.formatDate(this.currentYear, month, this.currentDay));
      },
      pickNext: function(year, month, day) {
        this.currentYear += 1
        this.initData(this.formatDate(this.currentYear, month, 1));
      },
      pickYear: function(year, month) {
          alert(year + "," + month);
      },
      formatDate: function(year, month, day){
          var y = year;
          var m = month;
          if(m < 10) m = "0" + m;
          var d = day;
          if(d < 10) d = "0" + d;
          return y+"-"+m+"-"+d
          // 返回 类似 2016-01-02 格式的字符串
      },
      changMonth (monthItem) {
        this.initData(this.formatDate(this.currentYear, monthItem, 1));
        this.yearMonth = false
      },
      changDay (item, $event) {
      	this.currentDay = item.day
      	var str = this.formatDate(this.currentYear, this.currentMonth, item.day);
      	console.log(str)
      	console.log($event.currentTarget)
      },
      yearShow () {
      	this.yearMonth = !this.yearMonth
      },
      initTimer () {
      	var widthTime = this.currentHours+1
      	document.querySelector(".timer-c").style.width = widthTime * 15 + "px"
      }
    }
	}
</script>

<style lang="stylus" scoped ref="stylesheet">
@import '~common/stylus/mixin'
.history-order
  width: 629px
  height: 615px
  position: relative
  overflow: hidden
  .list-top
    width: 629px
    height: 63px
    position: relative
    .history-title
      position: absolute
      left: 190px
      top: 10px
      font-size: 50px
      color: #fff
      letter-spacing: 12px
      font-family: Arial
      font-weight: bold
    .list-top-content
      width: 100%
      height: 63px
      position: absolute
      left: 0
      top: 0
      z-index: 5px
      .list-top-arrow
        width: 15px
        height: 13px
        float: left
        margin: 29px 0 0 27px
        background: url(../assets/image/red_left.png) no-repeat
        background-size: 15px 13px 
      .rili-icon
        float: left
        margin: 28px 0 0 11px
        cursor: pointer
        .history-ico
          display: inline-block
          width: 13px
          height: 13px
          background: url(../assets/image/history_03.png) no-repeat
          background-size: 13px 13px 
        .month-font
          margin: 0 10px 0 10px
          font-size: 15px
          color: #55636e
          font-weight: 600
        .hicon-down
          display: inline-block
          width: 10px
          height: 5px
          background: url(../assets/image/jiantouxia1.png) no-repeat
          background-size: 10px 5px
          vertical-align: middle
          margin-top: -2px
      .list-top-title
        float: left
        margin-left: 162px
        margin-top: 30px
        .list-icon-center
          width: 19px
          height: 20px
          margin-right: 7px
          vertical-align: middle
        span
          font-size: 15px
          font-weight: bold
          color: #55636e
          vertical-align: middle
          letter-spacing: 2px
      .list-top-icon
        float: right
        margin-top: 30px
        margin-right: 2px
        .icon-img-search
          display: block
          float: left
          width: 12px
          height: 11px
          background: url(../assets/image/search.png) no-repeat
          background-size: 12px 11px
          margin: 3px 10px
          extend-click()
          cursor: pointer
        .icon-img-manger
          float: left
          height: 16px
          width: 16px
          background: url(../assets/image/icon-manger.png) no-repeat
          background-size: 16px 16px
          margin: 0 10px
          extend-click()
          cursor: pointer
        .icon-img-select
          float: left
          height: 16px
          width: 14px
          background: url(../assets/image/xuanxiang2.png) no-repeat
          background-size: 16px 14px
          margin: 1px 10px
          cursor: pointer
          extend-click()
  .year-all
    width: 120px
    /*height: 150px*/
    background-color: #f4f6f7
    line-height: 40px
    position: absolute
    left:113px
    top: 38px
    color: #ebb2a9
    z-index: 9999
    border-radius: 5px
    border: 1px solid #ddd
	  .arrow-left,.arrow-right
	    display: block
	    width: 20px
	    height: 40px
	    font-size: 23px
	    float: left
	    text-align: center
	    font-weight: bold
	    color: #55636e
	  .current-year
	    display: block
	    width: 80px
	    height: 40px
	    float: left
	    text-align: center
	    font-weight: bold
	    color: #55636e
	    font-size: 18px
		.choose-month
		  width: 120px
		  .monthList
		    width: 30px
		    height: 30px
		    float: left
		    line-height: 30px
		    text-align: center
		    color: #55636e
		    margin: 0 4px
		  li.active
		    background-color: #ed402f
		    border-radius: 50%
		    color: #fff
	.choose-day
	  /*width: 800px*/
	  height: 52px
	  .every-day
	    width: 44px
	    height: 45px
	    float: left
	    border-right: 1px solid #e2e8eb
	    text-align: center
		  .weekday
		    margin: 4px auto 2px
		    display: block
		    color: #aab8c6
		    font-size: 12px
		    font-weight: bold
		  .one-day
		    margin: 0 auto
		    display: block
		    font-size: 20px
		    width: 32px
		    height: 32px
		    line-height: 32px
		    font-weight: 500
		    color: #aab8c6
			.active
			  color: #e49387
			.weekday-qi
			  color: #e49387
			.day-qi
			  color: #e49387
			.day-active
			  background-color: #ed3c2e
			  border-radius: 50%
			  box-shadow: 3px 3px 5px #f3dcdb
			  color: #fff
	.timer-order
	  width: 629px
	  height: 45px
	  margin: 15px 14px 0 18px
	  .timer-orderL
	    width: 120px
	    height: 28px
	    border: 1px solid #d63f2b
	    border-radius: 14px
	    line-height: 28px
	    float: left
	    .tiemr-iconL
	      display: inline-block
	      background: url(../assets/image/history_07.png) no-repeat
	      background-size: 14px 13px
	      width: 14px
	      height: 13px
	      margin-left: 10px
	      float: left
	      margin-top: 7px
	    .tiemr-titleL
	      color: #e49387
	      margin: 0 7px
	      float: left
	    .timer-arrowL
	      display: inline-block
	      background: url(../assets/image/jiantouxia1.png) no-repeat
	      background-size: 10px 5px
	      width: 10px
	      height: 5px
	      float: left
	      margin-top: 12px
	  .timer-orderR
	    width: 365px
	    float: left
	    margin-left: 100px
	    margin-top: 9px
	    position: relative
	    .tiemrR-bg
        width: 365px
        height: 5px
        display: block
        background-color: #e7e7e7
        margin-bottom: 7px
      .tiemr-now
        font-family: Arial
        color: #aab8c6
        font-size: 7px
        margin-right: 11px
      .timer-select
        width: 365px
        position: absolute
        top: 0
        left: 0
        .tiemr-start,.tiemr-end
          display: inline-block
          width: 12px
          height: 12px
          background-color: #ed3d2e
          border-radius: 50%
          float:left
          margin-top: -4px
        .timer-c
          display: inline-block
          background-color: #ed3d2e
          height: 5px
          width: 60px
          float: left
  .history-all
    position: absolute
    bottom: 15px
    left: 23px
    .all-font
      color: #aab8c6
      font-size: 9px
      .total-all
        color: #ced8dc
        font-size: 30px
    
  
        
			
    
</style>