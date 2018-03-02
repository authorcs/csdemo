<template>
	<div class="no-start">
		<!--下单底部内容-->
		<!--用餐人数-->
		<!--<div class="start-person">-->
			<!--<p>用餐人数 <span>NUMBER</span></p>-->
			<!--<span class="start-person-dot dot-active">1</span>-->
			<!--<span class="start-person-dot">2</span>-->
			<!--<span class="start-person-dot">3</span>-->
			<!--<span class="start-person-dot">4</span>-->
		<!--</div>-->
		<!--菜单内容-->
		<!--<div class="start-content">-->
			<!--<p class="start-content-title">菜单内容 <span class="menu-detail"> MENU DETAIL</span><span class="state-font" v-show="">已下单</span><span class="state-com">已完结</span></p>-->
			<!--菜品列表-->
	<swiper :options="swiperOption" class="container-slider">
	  <swiper-slide class="start-conteiner" v-for="(item, index) in selectFoods.orderedProducts" :key="index">
	    <div class="start-content-item">
	      <div class="start-content-list">
	        <div class="goods-img">
	          <!--<img :src="item.pictureUrls"/>-->
	          <img src="../assets/image/caiimg1.png"/>
	          <span class="goods-money">¥{{item.price}}</span>
	        </div>
	        <div class="content-description">
	          <h2>{{item.productName}}</h2>
	          <p>备注： <span class="remark">{{item.description}}</span></p>
	          <div class="content-count">
	            <span class="content-add" @click.stop="decreaseCart(item)"/></span>
	            <span class="content-num"> {{item.number}} </span>
	            <span class="content-reduce" @click.stop="addCart(item)" :disabled="selectFoods.status == 2"/></span>
	          </div>
	        </div>
	        <!--<img class="delete-img" src="../assets/image/delete_bg.jpg"/>-->
	      </div>
	      <span class="discover-Menu" v-show="selectFoods.status ==2 || selectFoods.status ==3"></span>
	      <img class="delete-img" src="../assets/image/delete_bg.jpg"/>
	    </div>
	  </swiper-slide>
	</swiper>

			<!--<div class="container-slider">-->
				<!--<div class="start-conteiner">-->
				<!--<div class="start-content-item">-->
					<!--<div class="start-content-list">-->
						<!--<div class="goods-img">-->
							<!--<img src="../assets/image/caiimg1.png"/>-->
							<!--<span class="goods-money">¥40.00</span>-->
						<!--</div>-->
						<!--<div class="content-description">-->
							<!--<h2>铁板牛排</h2>-->
							<!--<p>备注： <span class="remark">不要香菜</span></p>-->
							<!--<div class="content-count">-->
								<!--<img class="content-add" src="../assets/image/cartreduce.png"/>-->
								<!--<span> 1 </span>-->
								<!--<img class="content-reduce" src="../assets/image/cartadd.png"/>-->
							<!--</div>-->
						<!--</div>-->
					<!--</div>-->
					<!--<img class="delete-img" src="../assets/image/delete_bg.jpg"/>-->
				<!--</div>-->
			<!--</div>-->
			<!--</div>-->
		<!--</div>-->

		<!--<div class="new-content">-->
			<!--<p class="new-add">新增内容<span>VEWLY ADDED</span></p>-->
			<!--<div class="new-content-list"></div>-->
		<!--</div>-->
		<!--<div class="footer-submit">-->
			<!--<p>¥ <span class="footer-money">75.00</span></p>-->
			<!--<div class="submit-button">-->
				<!--<span>下单</span>-->
			<!--</div>-->
		<!--</div>-->
	</div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        showPerson: 0,
        swiperOption: {
          touchRatio: 1,
          direction: 'vertical',
          slidesPerView: 2,
          spaceBetween: 0,
          slidesOffsetBefore: 4
        },
        cartGoods: {
			    productsTotalPrice: 72.00,           // 商品总费用 
			    productList:[
	          {
	            productCode: 121212,  // 产品编号
              productName: '蓝山咖啡',  // 产品名称
	            number: 2,            // 份数
              type: '咖啡'             // 产品类型
	          },
	          {
	            productCode: 121212,  // 产品编号
              productName: '铁板牛肉',  // 产品名称
	            number: 1,            // 份数
              type: '咖啡'             // 产品类型
	          },
	          {
	            productCode: 121212,  // 产品编号
              productName: '青椒炒肉',  // 产品名称
	            number: 1,            // 份数
              type: '咖啡'             // 产品类型
	          },
	          {
	            productCode: 121212,  // 产品编号
              productName: '三鲜汤',  // 产品名称
	            number: 2,            // 份数
              type: '咖啡'             // 产品类型
            }
          ]
        }
      }
    },
    props: {
    	selectFoods: {
    		type: Object
    	}
    },
    computed: {
    	totalPrice () {
    		let total = 0
    		this.selectFoods.orderedProducts.forEach((food) => {
    			total += food.price * food.count
    		})
    		return total
    	},
    	totalCount () {
    		let count = 0
    		this.selectFoods.orderedProducts.forEach((food) => {
    			count += food.count
    		})
    		return count
    	}
    },
    methods: {
    	addCart (item) {
	    		item.number++
	    },
//	    	this.$emit('carMenuSelect', this.addMenu)
	    decreaseCart (item) {
	    	if (item.number) {
	    		item.number--
	    		if (item.number == 0) {
	    			this.selectFoods.orderedProducts.splice(this.selectFoods.orderedProducts.indexOf(item), 1)
	    		}
	    	}
	    }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .no-start
    height: 373px
    width: 260px
    .container-slider
      height: 170px
      cursor: pointer
      .start-conteiner
        margin-left: 10px
        width: 239px
        height: 80px
        overflow: hidden
        position: relative
          /*控制删除*/
        .start-content-item
          width: 279px
          height: 80px
          position: absolute
          left: 0
          top: 0
          .start-content-list
            height: 78px
            width: 237px
            border: 1px dashed #e9f0f3
            float: left
            position: relative
            .goods-img
              width: 90px
              height: 78px
              float: left
              position: relative
              img
                width: 57px
                height: 57px
                padding-top: 10px
                padding-left: 10px
                float: left
                border-radius: 50%
              .goods-money
                position: absolute
                top: 40px
                left: 42px
                width: 38px
                height: 19px
                background-color: #ed3b2e
                color: #fff
                font-size: 9px
                font-family: Arial
                border-radius: 7px
                text-align: center
                line-height: 19px
            .content-description
              float: left
              h2
                font-size: 12px
                font-weight: bold
                padding: 14px 0 5px
                color: #6d6d78
              p
                color: #b0afb6
                font-size: 9px
              .content-count
                height: 16px
                margin-top: 8px
                .content-add
                  display: inline-block
                  background: url(../assets/image/cartreduce.png) no-repeat
                  background-size: 16px 16px
                  width: 16px
                  height: 16px
                  vertical-align: middle
                .content-reduce
                  display: inline-block
                  background: url(../assets/image/cartadd.png) no-repeat
                  background-size: 16px 16px
                  width: 16px
                  height: 16px
                  vertical-align: middle
                .content-num
                  line-height: 16px
                  padding: 0 14px
                  vertical-align: middle
                  font-weight: bold
          .delete-img
            float: left
            width: 40px
            height: 80px
            vertical-align: middle
          .discover-Menu
            display: block
            width: 100%
            height: 100%
            background-color: transparent
            position: absolute
            left: 0
            top: 0
            z-index: 999
    .new-content
      padding: 15px 10px
      .new-add
        color: #aab8c6
        span
          color: #d3d9e0
          font-family: Arial
          margin-left: 6px
      .new-content-list
        width: 237px
        height: 46px
        background: url(../assets/image/new_bg.jpg)
        background-size: 1px 46px
        background-repeat: repeat-x
        border: 1px dashed #e9f0f3
        border-bottom: none







</style>
