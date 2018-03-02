<template>
	<div class="date-ri">
    <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
    <div class="year-all">
	    <span class="arrow-left" @click="pickPre(currentYear,currentMonth, 1)"><</span>
	    <span class="current-year">{{currentYear}}</span>
	    <span class="arrow-right" @click="pickNext(currentYear, currentMonth, 1)">></span>
    </div>
    <ul class="choose-month">
    	<li v-for="monthItem in months" :class="{'active': currentMonth === monthItem}" @click="changMonth(monthItem)">{{monthItem}}</li>
    </ul>
    <div class="choose-day">
      <div class="every-day" v-for="item in dayMonth" @click="changDay(item)">
      	<p class="weekday">{{weeks[item.week-1]}}</p>
      	<span class="one-day">{{item.day}}</span>
      </div>
    </div>
	</div>
</template>

<script type="application/ecmascript-6">
	export default {
		data () {
			return {
				currentDay: 1,
        currentMonth: 1,
        currentYear: 1970,
        currentWeek: 1,
        dayMonth: [],
        weeks: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
			}
		},
		created: function() {  //在vue初始化时调用
      this.initData(null);
		},
		methods: {
      initData: function(cur) {
          var leftcount=0; //存放剩余数量
          var date;
          if (cur) {
            var change = new Date(cur);
            var d = new Date(change.getFullYear(), change.getMonth()+1, 0);
            date = new Date(this.formatDate(change.getFullYear(), change.getMonth() + 1, 1));
          } else {
            var now=new Date();
            var d = new Date(now.getFullYear(), now.getMonth(), 0);
            date = new Date(this.formatDate(now.getFullYear(), now.getMonth() + 1, 1));
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
          this.currentDay = date.getDay();
          this.currentYear = date.getFullYear();
          this.currentMonth = date.getMonth() + 1;
      },
      pickPre: function(year, month, day) {
          // setDate(0); 上月最后一天
          // setDate(-1); 上月倒数第二天
          // setDate(dx) 参数dx为 上月最后一天的前后dx天
        this.currentYear -= 1
        this.initData(this.formatDate(this.currentYear, month, 1));
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
      },
      changDay (item) {
      	var str = this.formatDate(this.currentYear, this.currentMonth, item.day);
      	console.log(str)
      }
    }
	}
</script>

<style scoped lang="stylus" ref="stylesheet">
  .date-ri
    width: 100px
    height: 90px
    background-color: #fff
    .year-all
      width: 100%
      height: 30px
      line-height: 30px
      text-align: center
      background-color: #e8742e
	    .arrow-left, .arrow-right
	      display: block
	      width: 20px
	      height: 30px
	      font-size: 18px
	      float: left
	    .current-year
	      display: block
	      width: 60px
	      height: 30px
	      float: left
	  .choose-month
	    li
	      width: 50px
	      height: 20px
	      float: left
	      line-height: 20px
	      text-align: center
	    li.active
	      background-color: red
	      border-radius: 50%
	  .choose-day
	    width: 800px
	    height: 30px
	    .every-day
	      width: 50px
	      height: 30px
	      float: left
	      .weekday, .one-day
	        width: 50px
	        height: 15px
	        display: block
	        line-height: 15px
	        text-align: center
      
</style>