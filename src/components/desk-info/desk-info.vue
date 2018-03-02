<template>
<div class="m-eatin clearfix" id="m-eatin">
  <div class="eatin-left">
    <div class="eatin-left-top">
      <div class="top-eatin">
        <span>堂食</span>
        <img src="../../assets/image/jiantouxia1.png" />
      </div>
    </div>
    <!--桌内信息-->
	  <div class="eatin-left-inner">
    	<div class="eatin-deskpage">
        <div class="deskpage-top">
          <h2>{{selectInfo.tableNo}}号桌</h2><span class="desk-info" :class="{'desk-orange': selectInfo.status != 2}">{{deskState[selectInfo.status]}}</span></div>
        <div class="deskpage-ordertime">
          <span class="eatin-timer">下单时间: </span>
          <span class="eatin-timer-count">15:37:00</span>
          <p class="eatin-person">(<span>{{selectInfo.peopleNumber}}</span>/{{selectInfo.capacity}})</p>
        </div>
        <div class="deskpage-progress">
          <div class="progress-top">
            <p>上菜进度</p>
            <p class="eatin-oredercount">总量： <span>{{totalCount}}(份)</span></p>
            <div class="progress-bar">
              <div class="progress-img">
                <span class="progress-count">20%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="start-person" v-show="selectInfo.status == 0 || selectInfo.status == 1">
	        <p>用餐人数 <span>NUMBER</span></p>
	        <span class="start-person-dot dot-active">1</span>
	        <span class="start-person-dot">2</span>
	        <span class="start-person-dot">3</span>
	        <span class="start-person-dot">4</span>
        </div>
	      <div class="start-content">
	        <p class="start-content-title">菜单内容
	          <span class="menu-detail"> MENU DETAIL</span>
	          <span class="state-font" v-show="selectInfo.status ==2 ">已下单</span><span v-show="selectInfo.status ==3" class="state-com">已完结</span></p>
	        <no-start :selectFoods="selectInfo"></no-start>
	      </div>
	      <div class="new-content">
	        <p class="new-add">新增内容<span>VEWLY ADDED</span></p>
	        <div class="new-content-list" v-show="selectInfo.status ==0 || selectInfo.status == 1">
	        </div>
	        <new-add v-show="selectInfo.status ==2 || selectInfo.status == 3" :selectInfo="selectInfo"></new-add>
	      </div>
	      <div class="footer-submit">
	        <p>¥ <span class="footer-money">{{parseInt(totalPrice)}}.00</span></p>
	        <div class="submit-button" :class="{'complate-bg': selectInfo.status ==3}">
	          <span v-show="selectInfo.status ==0 || selectInfo.status ==1" @click="ordering">下单</span>
	          <span v-show="selectInfo.status ==2 || selectInfo.status ==3">结算</span>
	        </div>
	      </div>
      </div>
	  </div>

    <!--<div class="eatin-left-inner">
      <div class="eatin-content">
        <div class="eatin-deskpage">
          <div class="deskpage-top">
            <h2>1号桌</h2><span class="desk-info">待结算</span></div>
          <div class="deskpage-ordertime">
            <span class="eatin-timer">下单时间: </span>
            <span class="eatin-timer-count">15:37:00</span>
            <p class="eatin-person">(<span>3</span>/4)</p>
          </div>
          <div class="deskpage-progress">
            <div class="progress-top">
              <p>上菜进度</p>
              <p class="eatin-oredercount">总量： <span>4(份)</span></p>
              <div class="progress-bar">
                <div class="progress-img">
                  <span class="progress-count">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <no-start></no-start>
      </div>
    </div>-->


  </div>
  <div class="eatin-right">
  	<!--<component v-show="selectInfo.state != 3" :is="rightCon"></component>-->
  	<order-list v-show="selectInfo.status != 3" @addMenuSelect='addMenuSelect' @startMenuSelect='startMenuSelect' :allMenu="allMenu" :selectInfo="selectInfo" ref="orderList"></order-list>
  	<history-order v-show="selectInfo.status == 3"></history-order>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import noStart from 'base/no-start'
import orderList from 'base/order-list'
import newAdd from 'base/new-add'
import historyOrder from 'base/history-order'

export default {
  data () {
    return {
      deskInfo: {
        table_no: '1', // 桌位编码
        table_type: '大桌', // 桌位类型
        capacity: '6', // 可容纳人数
        region: '西北角', // 桌子所在片区
        state: '2' // 桌子状态 0=空闲,1=已入座,2=已预订,3=已下线
      },
      deskState: ['未开台', '已预订', '待结算', '已完结'],
//    rightCon: orderList,
      startCart: [],
      allMenu: []
    }
  },
  props: {  //接收点击的该桌信息
  	selectInfo: {
  		type: Object,
  		default () {
  			return {
  				tableNo: 0
  			}
  		}
  	}
  },
  components: {
    noStart,
    orderList,
    newAdd,
    historyOrder
  },
//created () {
//	if (this.state == 3) {
//		this.rightCon = historyOrder
//	}
//},
  computed: {
  	totalPrice () {
  		if (!this.selectInfo.orderedProducts) { //设置默认数据的 
  			return
  		}else if (this.selectInfo.status ==3) {
  			return this.selectInfo.totalOrderAmount
//	    }else if (this.selectInfo.status ==2) {
//	 	  let total = this.selectInfo.totalOrderAmount
//		  this.selectInfo.addedProducts.forEach((food) => {
//			total += food.price * food.number
//		  })
//		  return total
  	  }else {
  	  	let total = 0
  	  	this.selectInfo.addedProducts.forEach((food) => {
  	  		if (food.number) {
  	  			total += food.price * food.number
  	  		}else if (food.addcount) {
  	  			total += food.price * food.addcount
  	  		}
  		  })
	  		this.selectInfo.orderedProducts.forEach((food) => {
	  			total += food.price * food.number
	  		})
	  		return total
  	  }
  	},
  	totalCount () {
  		if (!this.selectInfo.orderedProducts) {
  			return
  		}
  		let number = 0
  		this.selectInfo.orderedProducts.forEach((food) => {
  			number += food.number
  		})
  		this.selectInfo.addedProducts.forEach((food) => {
  			number += food.number
  			if (food.addcount) {
  				number += food.addcount
  			}
  		})
  		return number
  	},
//	allMenu () {
//		return this.selectInfo.orderedProducts.concat(this.selectInfo.addedProducts)
//	}
  },
  methods: {
  	addMenuSelect (menu) {  //加菜传递过来的菜的数据
  		this.selectInfo.addedProducts = menu   //已下单过的复制给新增组件
  	},
  	ordering () {
  		//提交到服务器
  	  this.selectInfo.status = 2
  	},
  	startMenuSelect (startItem) {   //初次下单的菜数据
  		this.selectInfo.orderedProducts = startItem
  	}
  },
  watch: {
		selectInfo: {
			handler: function (val, oldVal) {
				let allMenu = val.orderedProducts.concat(val.addedProducts)
				this.allMenu = allMenu
//				this.$refs.orderList.changCount(allMenu)
			},
	      deep: true
		},
  	'selectInfo.tableNo': function(val, oldval) {
//		this.allMenu = this.selectInfo.orderedProducts.concat(this.selectInfo.addedProducts)
		  this.$refs.orderList.changMsg()
		  this.$refs.orderList.addMenu.length = 0
  	}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

.m-eatin
  width: 1204px
  margin: 0 auto
  .eatin-left
    width: 326px
    height: 664px
    float: left
    margin-left: 25px
    .eatin-left-top
      background: url(../../assets/image/forhere.png) no-repeat
      width: 195px
      height: 28px
      background-size: 195px 28px
      background-position: left 2px
      .top-eatin
        padding: 20px 0 0 20px
        span
          color: #566471
          font-size: 18px
          font-weight: bold
        img
          width: 10px
          height: 5px
          margin-left: 5px
    .eatin-left-inner
      width: 260px
      height: 526px
      margin-top: 50px
      margin-left: 30px
      position: relative
      .eatin-deskpage
        width: 260px
        height: 526px
        background: url(../../assets/image/ordertop.png) no-repeat
        background-size: 259px 72px
        box-shadow: 5px 5px 10px #e8e8e8
        background-color: #fff
        .deskpage-top
          padding: 20px 20px 0 16px
          overflow: hidden
          h2
            font-size: 18px
            font-weight: bold
            color: #fff
            float: left
          .desk-info
            float: right
            width: 68px
            height: 26px
            background-color: #fff
            border-radius: 13px
            text-align: center
            line-height: 26px
            color: #fe8525
            font-size: 12px
            font-weight: bold
          .desk-orange
            color: #2f384b
        .deskpage-ordertime
          padding: 44px 13px 0 13px
          font-size: 12px
          overflow: hidden
          color: #2f384b
          .eatin-timer-count
            font-weight: bold
        .eatin-person
          float: right
          font-size: 18px
          color: #aab8c6
          letter-spacing: 3px
          span
            color: #d63e2a
            font-size: 18px
        .progress-top
          padding: 17px 12px
          padding-bottom: 5px
          color: #aab8c6
          height: 35px
          p
            font-size: 7px
            float: left
          .eatin-oredercount
            float: right
            span
              color: 9px
              font-weight: bold
          .progress-bar
            width: 100%
            height: 5px
            float: left
            background-color: #e7e7e7
            margin-top: 5px
            border-radius: 2.5px
            position: relative
            .progress-img
              width: 150px
              height: 5px
              background-color: #f0462f
              position: absolute
              border-radius: 2.5px
              .progress-count
                position: absolute
                left: 150px
                bottom: -15px
      .start-person
        padding-left: 13px
        p
          color: #aab8c6
          span
            color: #d3d9e0
            font-family: Arial
        .start-person-dot
          display: inline-block
          width: 24px
          height: 24px
          border: 1px solid #d63f2b
          border-radius: 50%
          text-align: center
          line-height: 24px
          margin: 9px 2px 11px 2px
          color: #e49387
          font-weight: bold
        .dot-active
          background-color: #f0462f
          color: #fff
      .start-content
        width: 100%
        height: 180px
        .start-content-title
          color: #aab8c6
          padding-left: 13px
          padding-bottom: 3px
          .menu-detail
            color: #d3d9e0
            font-family: Arial
          .state-font
            color: #5ac55f
            font-size: 9px
            margin-left: 70px
          .state-com
            color: #d3d9e0
            font-size: 9px
            margin-left: 70px
      .new-content
        padding: 15px 10px
        .new-add
          color: #aab8c6
          padding-bottom: 5px
          span
            color: #d3d9e0
            font-family: Arial
            margin-left: 6px
        .new-content-list
          width: 237px
          height: 46px
          background: url(../../assets/image/new_bg.jpg)
          background-size: 1px 46px
          background-repeat: repeat-x
          border: 1px dashed #e9f0f3
          border-bottom: none
      .footer-submit
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 38px
        p
          color: #6d6d78
          font-size: 18px
          float: left
          padding-left: 10px
          /*padding-top: 0px*/
          .footer-money
            font-size: 30px
            color: #2f384b
        .submit-button
          float: left
          background: url(../../assets/image/submit_bj.png) no-repeat
          width: 72px
          height: 35px
          background-size: 72px 35px
          float: right
          margin-top: -2px
          margin-right: 16px
          span
            line-height: 35px
            padding-left: 30px
            padding-top: 11px
            color: #fff
            font-size: 15px
            font-family: 'SimHei'
            letter-spacing: 3px
        .complate-bg
          width: 72px
          height: 35px
          background: url(../../assets/image/yijiesuan_03.png) no-repeat
          background-size: 72px 35px
  .eatin-right
    float: left
    width: 630px
    height: 614px
    margin-left: 44px
    background-color: #f4f7f7








</style>
