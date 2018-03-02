<template>
	<div class="m-main">
		<div class="m-main-top">
			<div class="main-left">
			<div class="kongxian">
			  <span @click="allkong">空闲（10）</span>
			  <i class="main-down" @click="tabShowClick"></i>
			</div>
			<ul class="li-item" v-show="tabShow">
				<li class="li-null"></li>
				<li @click="allShow">全部(50)</li>
				<li @click="allEating">待结算(15)</li>
				<li @click="allReading">已预订(10)</li>
				<li @click="allClear">待清理(15)</li>
			</ul>
			</div>
			<div class="main-center">
				<div class="eat-in current">
					<span>堂食 FOR HERE</span>
				</div>
				<router-link tag="div" to="/takeout" class="sell-out">
					<span>外卖 TAKE OUT</span>
				</router-link>
				<router-link tag="div" to="/eatin" class="order-search">
					<span>订单查询 SEARCH</span>
				</router-link>
			</div>
			<div class="main-right">
				<img src="../../assets/image/shezhi.png"/>
				<span>设置</span>
			</div>
		</div>
		
			<main-menu :newList = "newList" @tableContent="tableContent"></main-menu>
		<main-footer></main-footer>
	</div>
</template>

<script type="text/ecmascript-6">
import mainMenu from 'base/main-menu'
import mainFooter from 'base/main-footer'

export default {
	data () {
  	return {
  	  tabShow: false,
  	  Eating: 11,
  	  tableList: [       // table.md
        {
          region: "一楼大厅",       //餐桌所在区域
          capacity: "6",             //餐桌最大用餐人数
          peopleNumber: "4",             //实际用餐人数
          status: 2,               //餐桌当前状态: 0=未开台/空闲,1=已预订,2=待结算,3=待清理
          tableNo: "1",          //餐桌编号
          orderNo: "201801062106043217977", //最近订单号(无关联订单时为NULL)
          orderTime: "2018-01-06 21:06:04", //最近下单时间(无关联订单时为NULL)
          totalOrderAmount: 65.01,        //最近订单金额
          orderedProducts: [
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 20,        //菜品单价(单位分)
	            process: 2,        //菜品状态(1=制作中,2=已上菜)
	            productName: "经典拿铁",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232000",  //菜品编号
	            number: 3,        //菜品数量
	            tableNo: "1",   //餐桌编号
	            version: 1,         //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          },
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 15,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "木须小炒肉",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232001",  //菜品编号
	            number: 1,        //菜品数量
	            tableNo: "1",   //餐桌编号
	            version: 1,     //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          }
          ],
          addedProducts:[
          ]
         },
        {
          region: "一楼大厅",       //餐桌所在区域
          capacity: "6",             //餐桌最大用餐人数
          peopleNumber: "4",             //实际用餐人数
          status: 2,               //餐桌当前状态: 0=未开台/空闲,1=已预订,2=待结算,3=待清理
          tableNo: "2",          //餐桌编号
          orderNo: "201801062106043217977", //最近订单号(无关联订单时为NULL)
          orderTime: "2018-01-06 21:06:04", //最近下单时间(无关联订单时为NULL)
          totalOrderAmount: 65.01,         //最近订单金额
          orderedProducts: [
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 15,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "特色酸菜鱼",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232002",  //菜品编号
	            number: 2,        //菜品数量
	            tableNo: "2",   //餐桌编号
	            version: 1,     //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          },
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 18,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "红烧里脊",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232003",  //菜品编号
	            number: 2,        //菜品数量
	            tableNo: "2",   //餐桌编号
	            version: 1,   //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          }
          ],
          addedProducts:[
            {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 23,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "娃娃鱼",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232004",  //菜品编号
	            number: 2,        //菜品数量
	            tableNo: "2",   //餐桌编号
	            version: 1,        //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          },
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 14,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "青椒炒蛋",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232005",  //菜品编号
	            number: 2,        //菜品数量
	            tableNo: "2",   //餐桌编号
	            version: 1,        //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          }
          ]
         },
        {
          region: "一楼大厅",       //餐桌所在区域
          capacity: "6",             //餐桌最大用餐人数
          peopleNumber: "4",             //实际用餐人数
          status: 3,               //餐桌当前状态: 0=未开台/空闲,1=已预订,2=待结算,3=待清理
          tableNo: "3",          //餐桌编号
          orderNo: "201801062106043217977", //最近订单号(无关联订单时为NULL)
          orderTime: "2018-01-06 21:06:04", //最近下单时间(无关联订单时为NULL)
          totalOrderAmount: 65.01,         //最近订单金额
          orderedProducts: [
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 25,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "西红柿炒蛋",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232006",  //菜品编号
	            number: 1,        //菜品数量
	            tableNo: "3",   //餐桌编号
	            version: 1,         //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          },
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 36,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "青椒土豆丝",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232007",  //菜品编号
	            number: 1,        //菜品数量
	            tableNo: "3",   //餐桌编号
	            version: 1,         //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          }
          ],
          addedProducts:[
            {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 32,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "红烧小炒",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232008",  //菜品编号
	            number: 1,        //菜品数量
	            tableNo: "3",   //餐桌编号
	            version: 1,         //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          },
	          {
	            id: 1,        //下单菜品ID
	            batch: 1,        //下单批次 (1=初始下单,2=加菜)
	            pictureUrls: "http://oibbr3dli.bkt.clouddn.com/zhaoshaojituifan.jpeg", //菜品图片URL
	            price: 28,        //菜品单价(单位分)
	            process: 1,        //菜品状态(1=制作中,2=已上菜)
	            productName: "红烧小炒2",    //菜品名称
	            productType: "醇咖啡醇咖啡醇咖啡",  //菜品类型
	            productCode: "2223232009",  //菜品编号
	            number: 2,        //菜品数量
	            tableNo: "3",   //餐桌编号
	            version: 1,         //下单状态 1=当前下单
	            createTime: "2018-01-06 21:06:04",    //创建时间
	          }
          ]
         },
        {
          region: "一楼大厅",       //餐桌所在区域
          capacity: "6",             //餐桌最大用餐人数
          peopleNumber: "0",             //实际用餐人数
          status: 0,               //餐桌当前状态: 0=未开台/空闲,1=已预订,2=待结算,3=待清理
          tableNo: "4",          //餐桌编号
          orderNo: null, //最近订单号(无关联订单时为NULL)
          orderTime: null, //最近下单时间(无关联订单时为NULL)
          totalOrderAmount: 0,          //最近订单金额
          orderedProducts: [],
          addedProducts:[]
         },
        {
          region: "一楼大厅",       //餐桌所在区域
          capacity: "6",             //餐桌最大用餐人数
          peopleNumber: "0",             //实际用餐人数
          status: 0,               //餐桌当前状态: 0=未开台/空闲,1=已预订,2=待结算,3=待清理
          tableNo: "5",          //餐桌编号
          orderNo: null, //最近订单号(无关联订单时为NULL)
          orderTime: null, //最近下单时间(无关联订单时为NULL)
          totalOrderAmount: "0",        //最近订单金额
          orderedProducts: [],
          addedProducts:[]
         },
        {
          region: "一楼大厅",       //餐桌所在区域
          capacity: "6",             //餐桌最大用餐人数
          peopleNumber: "4",             //实际用餐人数
          status: 1,               //餐桌当前状态: 0=未开台/空闲,1=已预订,2=待结算,3=待清理
          tableNo: "6",          //餐桌编号
          orderNo: "null", //最近订单号(无关联订单时为NULL)
          orderTime: "null", //最近下单时间(无关联订单时为NULL)
          totalOrderAmount: "0",        //最近订单金额
          orderedProducts: [],
          addedProducts:[]
         },
        {
          region: "一楼大厅",       //餐桌所在区域
          capacity: "6",             //餐桌最大用餐人数
          peopleNumber: "4",             //实际用餐人数
          status: 1,               //餐桌当前状态: 0=未开台/空闲,1=已预订,2=待结算,3=待清理
          tableNo: "7",          //餐桌编号
          orderNo: "201801062106043217977", //最近订单号(无关联订单时为NULL)
          orderTime: "2018-01-06 21:06:04", //最近下单时间(无关联订单时为NULL)
          totalOrderAmount: "65.01",        //最近订单金额
          orderedProducts: [],
          addedProducts:[]
         }
//      {
//        table_no: '2', // 桌位编码
//        table_type: '大桌', // 桌位类型
//        capacity: '12', // 可容纳人数
//        region: '西北角', // 桌子所在片区
//        state: '0'// 桌子状态 0=空闲,1=已入座,2=已预订,3=已下线
//      }
      ],
      newList: []
  	}
  },
  components: {
    mainMenu,
    mainFooter
  },
  created () {
  	for (var i = 0; i < this.tableList.length; i++) {
  			if (this.tableList[i].status == 0) {
  				this.newList.push(this.tableList[i])
  			}
  		}
  },
  methods: {
  	tabShowClick () {
  		this.tabShow = !this.tabShow
  	},
  	allEating () {
  		this.newList = []
  		this.tableList.forEach((table) => {
  			if (table.status == 1) {
  				this.newList.push(table)
  			}
  		}),
  		this.tabShow = false
  	},
  	allShow () {
  		this.newList = []
  		this.newList = this.tableList
  		this.tabShow = false
  	},
  	allReading () {
  		this.newList = []
  		this.tableList.forEach((table) => {
  			if (table.status == 2) {
  				this.newList.push(table)
  			}
  		})
  		this.tabShow = false
  	},
  	allClear () {
  		this.newList = []
  		this.tableList.forEach((table) => {
  			if (table.status == 3) {
  				this.newList.push(table)
  			}
  		})
  		this.tabShow = false
  	},
  	allkong () {
  		this.newList = []
  		this.tableList.forEach((table) => {
  			if (table.status == 0) {
  				this.newList.push(table)
  			}
  		})
  		this.tabShow = false
  	},
  	tableContent (item) {
  	  this.$emit('selectContent', item)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet">
@import '~common/stylus/mixin'
.m-main
  width: 1024px
  margin-top: 28px
  /*1280-15*/
  .m-main-top
    padding: 3px 48px 0 44px
    /*overflow: hidden*/
    margin-bottom: 30px
    .main-left
      width: 102px
      height: 28px
      border: 1px solid #d44128
      border-radius: 14px
      line-height: 28px
      float: left
      position: relative
      .kongxian
        position: absolute
        left: 0
        top: 0
        z-index: 1000002
	      span
	        display: inline-block
	        padding-left: 13px
	        line-height: 28px
	        font-size: 12px
	        color: #e49287
	      .main-down
	        display: inline-block
	        width: 10px
	        height: 5px
	        background: url(../../assets/image/jiantouxia1.png) no-repeat
	        background-size: 10px 5px
	        extend-click()
      .li-item
        width: 104px
        position: absolute
        left: -2px
        top: 15px
        z-index: 100000
        border: 1px solid #ee422e
        border-top: none
        li
          width: 104px
          height: 28px
          line-height: 28px
          text-align: center
          color: #e59387
          background-color: #fff
          cursor: pointer
        .li-null
          height: 14px
          background-color: transparent
    .main-center
      float: left
      line-height: 28px
      font-size: 12px
      margin-left: 162px
      text-align: center
      color: #e49489
      .eat-in
        width: 122px
        height: 28px
        float: left
        border: 1px solid #d5412a
        border-radius: 14px 0 0 14px
      .sell-out
        width: 108px
        height: 28px
        float: left
        border: 1px solid #d5412a
        margin: 0 2px
      .order-search
        width: 148px
        height: 28px
        float: left
        border: 1px solid #d5412a
        border-radius: 0 14px 14px 0
        cursor: pointer
      .current
        color: #fff
        background-color: #ef462f
        box-shadow: 5px 5px 25px #fde0da
    .main-right
      float: right
      border: 1px solid #d44128
      line-height: 28px
      width: 85px
      height: 28px
      font-size: 14px
      text-align: center
      border-radius: 14px
      color: #e49387
      img
        width: 15px
        height: 15px
        vertical-align: middle
        margin-right: 3px
</style>