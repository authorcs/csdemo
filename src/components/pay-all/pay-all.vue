<template>
	<div class="pay-all">
		<div class="main-center clearfix">
			<div class="eat-in current">
				<span>日 DAY</span>
			</div>
			<router-link tag="div" to="/takeout" class="sell-out">
				<span>周 WEEK</span>
			</router-link>
			<router-link tag="div" to="/takeout" class="sell-out">
				<span>月 MONTH</span>
			</router-link>
			<router-link tag="div" to="/takeout" class="sell-out">
				<span>季度 QUARTER</span>
			</router-link>
			<router-link tag="div" to="/eatin" class="order-search">
				<span>年 YEAR</span>
			</router-link>
		</div>
		<div class="day-top clearfix">
			<div class="top-left">
				<p class="top-title">累计有效订单</p>
				<div class="all-count">
					<span class="count">390</span><i></i>
				</div>
				<div class="top-bottom clearfix">
					<div class="top-b-l">
						<p class="b-title">昨日有效订单(单)</p>
						<span class="count">689</span>
					</div>
					<div class="hr"></div>
					<div class="top-b-r">
						<p class="b-title">昨日同时段有效订单(单)</p>
						<span class="count">367</span>
					</div>
				</div>
			</div>
			<div class="top-left top-c">
				<p class="top-title">累计订单收入(元)</p>
				<div class="all-count">
					<span class="count">7500,000</span><i></i>
				</div>
				<div class="top-bottom clearfix">
					<div class="top-b-l">
						<p class="b-title">昨日订单总收入(元)</p>
						<span class="count">8890,000</span>
					</div>
					<div class="hr"></div>
					<div class="top-b-r">
						<p class="b-title">昨日同时段订单收入(元)</p>
						<span class="count">7569,0000</span>
					</div>
				</div>
			</div>
			<div class="top-left top-right">
				<p class="top-title">累计无效订单</p>
				<div class="all-count">
					<span class="count">0</span><i></i>
				</div>
				<div class="top-bottom clearfix">
					<div class="top-b-l">
						<p class="b-title">昨日无效订单(单)</p>
						<span class="count">0</span>
					</div>
					<div class="hr"></div>
					<div class="top-b-r">
						<p class="b-title">昨日同时段无效订单(单)</p>
						<span class="count">0</span>
					</div>
				</div>
			</div>
		</div>
		<div class="line-img">
			<div id="container" style="height: 100%; -moz-user-select: none; position: relative; background: transparent none repeat scroll 0% 0%;" _echarts_instance_="ec_1517041734441">
				<div class="inner" style="position: relative; overflow: hidden; width: 1920px; height: 947px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
					<canvas class="canvas" style="position: absolute; left: 0px; top: 0px; width: 1920px; height: 947px; -moz-user-select: none; padding: 0px; margin: 0px; border-width: 0px;" data-zr-dom-id="zr_0" width="1920" height="947"></canvas>
				</div>
			<div>
			</div></div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.pay-all
  padding: 0 85px
  .main-center
    line-height: 28px
    font-size: 12px
    text-align: center
    color: #e49489
    margin-left: 187px
    margin-bottom: 25px
    .eat-in
      width: 83px
      height: 28px
      float: left
      border: 1px solid #d5412a
      border-radius: 14px 0 0 14px
    .sell-out
      padding: 0 14px 0 15px
      height: 28px
      float: left
      border: 1px solid #d5412a
      margin: 0 2px
    .order-search
      width: 82px
      height: 28px
      float: left
      border: 1px solid #d5412a
      border-radius: 0 14px 14px 0
      cursor: pointer
    .current
      color: #fff
      background-color: #ef462f
      box-shadow: 5px 5px 25px #fde0da
  .day-top
    text-align: center
    margin-top: 30px
    .top-left
      color: #fff
      background: url(../../assets/image/tj_06.png) no-repeat
      background-size: 254px 105px
      width: 254px
      height: 105px
      float: left
      margin-top: 6px
      .top-title
        font-size: 8px
        margin-top: 14px
        margin-bottom: 14px
      .all-count
        font-family: Arial
        .count
          font-size: 27px
          margin-right: 17px
        i
          display: inline-block
          width: 13px
          height: 18px
          background: url(../../assets/image/tjwu_15.png) no-repeat
          background-size: 13px 18px
      .top-bottom
        margin-top: 12px
        margin-left: 43px
        .top-b-l
          float: left
          .b-title
            margin-bottom: 6px
            font-size: 6px
          .count
            font-size: 12px
            font-family: Arial
        .hr
          width: 1px
          height: 27px
          float: left
          background-color: #fff
          margin-left: 33px
          margin-right: 17px
        .top-b-r
          float: left
          .b-title
            font-size: 6px
            margin-bottom: 6px
          .count
            font-size: 12px
            font-family: Arial
    .top-c
      color: #fff
      background: url(../../assets/image/tj_03.png) no-repeat
      background-size: 282px 167px
      width: 282px
      height: 117px
      float: left
      border-radius: 12px
      margin: 0 32px
      .top-title
        font-size: 9px
      .all-count
        font-family: Arial
        .count
          font-size: 30px
      .top-bottom
        .top-b-l
          .b-title
            font-size: 7px
    .top-right
      background: url(../../assets/image/tj_09.png) no-repeat
      background-size: 254px 105px
      width: 254px
      height: 105px
  .line-img
    #container
	    height: 100%
	    -webkit-tap-highlight-color: transparent
	    position: relative
	    background: transparent
	    .inner
	      position: relative
	      overflow: hidden
	      width: 900px
	      height: 600px
	      padding: 0
	      margin: 0
	      border-width: 0
	      cursor: default
		    .canvas
		      position: absolute
		      left: 0
		      top: 0
		      width: 900px
		      height: 600px
		      -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
		      padding: 0
		      margin: 0
		      border-width: 0
    
</style>