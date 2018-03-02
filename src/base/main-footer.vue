<template>
	<div class="main-footer">
		<div class="footer-top">
			<p class="footer-income">INCOME &amp; EXPENSES</p>
			<p class="footer-runtime">实时营业收支</p>
		</div>
		<div class="footer-bottom">
			<div class="footer-bottom-order">
				<span class="current-order">75</span><img src="../assets/image/arrow-up.png"/>
				<p>当前有效订单(单)</p>
			</div>
			<i class="footer-icon-left"></i>
			<div class="footer-bottom-order footer-all">
				<span class="current-order">7,500,000</span><img src="../assets/image/arrow_down.png"/>
				<p>当前累计订单收入(元)</p>
			</div>
			<i class="footer-icon-right"></i>
			<div class="footer-bottom-order">
				<span class="current-order footer-current">0</span>
				<p>当前无效订单(单)</p>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.main-footer
  width: 1024px
  height: 164px
  background-color: #e7ecef
  .footer-top
    position: relative
    margin: 0 auto
    width: 450px
    padding-top: 20px
    padding-bottom: 32px
    .footer-income
      font-size: 36px
      color: #fff
      font-weight: bold
    .footer-runtime
      position: absolute
      left: 145px
      top: 45px
      font-size: 15px
      font-weight: bold
      letter-spacing: 2px
      color: #55636f
  .footer-bottom
    width: 850px
    margin: 0 auto
    .footer-bottom-order
      float: left
      .current-order
        font-size: 30px
        font-family: Arial
        padding: 0 10px 0 17px
        color: #d63e2a
      img
        width: 15px
        height: 22px
      p
        margin-top: 15px
        font-size: 9px
        color: #55636f
      .footer-current
        padding-left: 30px
    .footer-all
      width: 356px
      text-align: center
    .footer-icon-left,.footer-icon-right
      float: left
      display: inline-block
      width: 4px
      height: 55px
      background: url(../assets/image/bottom_left.png)
      background-size: 4px 55px
      margin-left: 115px
    .footer-icon-right
      margin-left: auto
      margin-right: 80px

        
        
    
      
  
</style>