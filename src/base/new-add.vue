<template>
  <div>
  <swiper :options="swiperOption" class="container-slider">
    <swiper-slide class="start-conteiner" v-for="(item, index) in selectInfo.addedProducts" :key="index">
        <div class="start-content-list">
          <div class="goods-img">
            <img src="../assets/image/caiimg1.png"/>
            <span class="goods-money">{{item.price}}</span>
          </div>
          <div class="content-description">
            <h2>{{item.productName}}</h2>
            <p>备注： <span class="remark">{{item.description}}</span></p>
            <div class="content-count">
              <span class="content-add" @click.stop="decreaseCart(item)"/></span>
	            <span class="content-num" v-show="!item.addcount"> {{item.number}} </span>
	            <span class="content-num" v-show="item.addcount"> {{item.addcount}} </span>
	            <span class="content-reduce" @click.stop="addCart(item)"/></span>
            </div>
          </div>
          <span class="discover-Menu" v-show="selectInfo.status == 3"></span>
        </div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script type="application/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        showPerson: 0,
        swiperOption: {
          touchRatio: 1,
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 0
        }
//      slides: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    props: {
      selectInfo: {
        type: Object
    	}
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
    	addCart (item) {
	    	item.addcount++
	    },
	    decreaseCart (item) {
	    	if (item.addcount) {
	    		item.addcount--
	    		if (item.addcount == 0) {
	    			this.selectInfo.addedProducts.splice(this.selectInfo.addedProducts.indexOf(item), 1)
	    		}
	    	}
	    }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .container-slider
    height: 80px
    cursor: pointer
    overflow: hidden
    .start-conteiner
      width: 239px
      height: 80px
      overflow: hidden
      position: relative
      .start-content-list
        height: 78px
        width: 237px
        float: left
        border: 1px dashed #e9f0f3
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
      .discover-Menu
        display: block
        width: 100%
        height: 100%
        background-color: transparent
        position: absolute
        left: 0
        top: 0
        z-index: 999
</style>
