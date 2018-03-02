<template>
	<div class="menu-dialog">
		<div class="dialog-top"><i class="select-icon" @click="hiddenMenu"></i><span>菜单</span></div>
			<ul class="dialog-content" ref="dialogContent">
				<li class="select-active"><i class="icon-index icon-index1 icon-sy"></i><span class="font-active">臻云首页</span></li>
				<li><i class="icon-index icon-hyk"></i><span>会员卡</span></li>
				<li><i class="icon-index icon-index3  icon-dp"></i><span>店铺管理</span></li>
				<li><i class="icon-index icon-index4"></i><span>营运中心</span></li>
				<li><i class="icon-index icon-index5"></i><span>财务管理</span></li>
				<li><i class="icon-index icon-index6 icon-yx"></i><span>营销中心</span></li>
				<li><i class="icon-index icon-index7"></i><span>行业集市</span></li>
				<li><i class="icon-index icon-index8 icon-ts"></i><span>特色服务</span></li>
				<li><i class="icon-index icon-index9 icon-sz"></i><span>系统管理</span></li>
			</ul>
	</div>
</template>

<script type="application/ecmascript-6">
	export default {
		props: {
			headMenu: {
				type: Object
			}
		},
		methods: {
			hiddenMenu () {
				this.headMenu.headMenuState = false
			}
		},
		mounted () {
			console.log(this.$refs.dialogContent.children)
		}
	}
</script>

<style scoped ref="stylesheet" lang="stylus">
@import '~common/stylus/mixin'
  .menu-dialog
    position: fixed
    left: 50%
    margin-left: 368px
    top: 0
    width: 144px
    height: 755px
    background-color: rgba(0,0,0,0.9)
    z-index: 9999
    .dialog-top
      color: #fff
      margin-left: 30px
      margin-top: 25px
      margin-bottom: 55px
      .select-icon
        display: inline-block
        background: url(../assets/image/select-w.png) no-repeat
        background-size: 16px 14px
        width: 16px
        height: 14px
        margin-right: 9px
        vertical-align: bottom
        cursor: pointer
        extend-click()
    .dialog-content
      li
        display: block
        width: 120px
        height: 28px
        border: 1px solid #d63f2b
        margin: 25px 9px 25px 13px
        border-radius: 14px
        line-height: 28px
	      .icon-index
	        font-size: 18px
	        margin-left: 24px
	        margin-right: 8px
	        line-height: 28px
	        vertical-align: middle
	      .icon-index1
	        font-size: 20px
	        margin-left: 20px
	        margin-right: 5px
	      .icon-index3
	        font-size: 15px
	      .icon-index4
	        display: inline-block
	        background: url(../assets/image/syy-icon_22.png) no-repeat
	        background-size: 12px 12px
	        width: 12px
	        height: 12px
	      .icon-index5
	        display: inline-block
	        background: url(../assets/image/syy-icon_25.png) no-repeat
	        background-size: 12px 12px
	        width: 12px
	        height: 12px
	      .icon-index6
	        font-size: 13px
	      .icon-index7
	        display: inline-block
	        background: url(../assets/image/syy-icon_29.png) no-repeat
	        background-size: 12px 12px
	        width: 12px
	        height: 12px
	      .icon-index8
	        font-size: 13px
	      .icon-index9
	        font-size: 15px
	      span
	        color: #c93b28
	        vertical-align: middle
	      .font-active
	        color: #fff
	    .select-active
	      background-color: #f1492f
		    .icon-index1
		      color: #fff
</style>