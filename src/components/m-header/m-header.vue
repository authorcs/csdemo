<template>
  <div class="m-header">
    <div class="header-top"></div>
    <div class="header-left">
      <div class="header-img"></div>
      <div class="header-title">
        <h2>星巴克_总店</h2>
        <span class="header-timer">2017/11/25 16:35</span>
      </div>
	  <span class="arrow-down"></span>
    </div>
    <div class="header-center">
    	<img src="../../assets/image/arrowleft.png" class="arrow-left"/>
    	<img class="center-font" src="../../assets/image/zhenshenghuo.png"/>
    	<img src="../../assets/image/arrowright.png" class="arrow-right"/>
    </div>
    <div class="header-right">
    	<div class="header-menu" @click="headMenuShow"><img src="../../assets/image/xuanxiang1.png"/></div>
    	<div class="header-search"><img src="../../assets/image/search.png"/></div>
    	<div class="header-select"><img src="../../assets/image/mainselect.png"/></div>
    </div>
    	<menu-dialog v-show="headMenu.headMenuState" :headMenu="headMenu"></menu-dialog>
    
  </div>
</template>

<script type="text/ecmascript-6">
import menuDialog from 'base/menu-dialog'
export default {
	components: {
		menuDialog
	},
	data () {
		return {
			headMenu: {
				headMenuState: false
			}
		}
	},
	methods: {
		headMenuShow () {
			this.headMenu.headMenuState = true
		}
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin.styl'
  .m-header
    width: 1024px
    height: 79px
    overflow: hidden
    margin-bottom: 17px
    .header-top
      width: 100%
      height: 5px
      background-image: url(../../assets/image/top_bg.jpg)
      background-size: 100% 5px
    .header-left
      overflow: hidden
      margin-top: 17px
      margin-left: 20px
      width: 175px
      float: left
      .header-img
        width: 27px
        height: 27px
        background-image: url(../../assets/image/heander_img.png)
        background-size: 27px 27px
        border-radius: 50%
        float: left
      .header-title
        margin-left: 11px
        padding-top: 2px
        display: block
        float: left
        h2
          font-size: 9px
          margin-bottom: 5px
          font-weight: bold
        .header-timer
          font-size: 7px
          color: #a8b8c7
      .arrow-down
        display: inline-block
        float: left
        width: 10px
        height: 5px
        margin-top: 10px
        margin-left: 9px
        background: url(../../assets/image/jiantouxia1.png) no-repeat
        background-size: 10px 5px
        cursor: pointer
        extend-click()
    .header-center
      float: left
      margin-top: 29px
      margin-left: 164px
      width: 307px
      height: 30px
      background: url(../../assets/image/mystore.png) no-repeat
      background-size: 181px 28px
      background-position: 65px 4px
      text-align: center
      .arrow-left
        width: 16px
        height: 28px
        margin-top: 8px
        float: left
      .center-font
        float: left
        width: 100px
        height: 28px
        margin-left: 90px
        margin-top: 14px
      .arrow-right
        width: 16px
        height: 28px
        float: right
        margin-top: 8px
    .header-right
      float: right
      .header-menu
        width: 19px
        height: 20px
        float: left
        padding: 15px
        margin: 5px 3px 0 0
        cursor: pointer
        img
          width: 19px
          height: 20px
      .header-search
        width: 12px
        height: 11px
        float: left
        padding: 15px
        margin-top: 9px
        img
          width: 12px
          height: 11px
      .header-select
        width: 4px
        height: 13px
        float: left
        padding: 15px
        margin: 9px 6px 0 1px
        img
          width: 4px
          height: 13px

</style>