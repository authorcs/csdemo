<template>
	<div class="order-list">
		<!--菜品顶部-->
		<div class="list-top">
			<h2>MENU DETAIL</h2>
			<div class="list-top-content">
				<router-link tag="div" class="list-top-arrow" to="/"></router-link>
				<!--<div class="list-top-arrow"></div>-->
				<!--<img class="list-top-arrow" src="../assets/image/red_left.png"/>-->
				<div class="list-top-title">
					<img class="list-icon-center" src="../assets/image/xuanxiang1.png"/>
					<span>菜品</span>
				</div>
				<div class="list-top-icon">
					<img class="icon-img-search" src="../assets/image/search.png" @click="searchMenu"/>
					<img class="icon-img-manger" src="../assets/image/icon-manger.png"/>
					<img class="icon-img-select" src="../assets/image/xuanxiang2.png"/>
				</div>
			</div>
		</div>
		<!--点击搜索出现的搜素框-->
		<div  v-show="searchShow" class="list-search">
			<input type="text" name="search" id="search" value="" placeholder="输入菜品名称查找"/>
		</div>
		<!--菜品内容-->
		<div class="list-content">
			<!--左边推荐、主菜、汤羹-->
			<div class="list-content-left">
				<div class="recommend" v-for="(productItem, index1) in productClassifyList" @click="changeMenu(index1)" :class="{'selected': newListIndex == index1 }">
					<img v-show="newListIndex !== index1" src="../assets/image/zan.png"/>
					<img v-show="newListIndex == index1" src="../assets/image/zan1.png"/>
					<span>{{productItem.productType}}</span>
				</div>
				<!--<div class="recommend  selected">-->
					<!--<img src="../assets/image/zan.png"/>-->
					<!--<span>主菜</span>-->
				<!--</div>-->
			</div>
			<!--右边菜品列表-->

    <swiper :options="swiperOption" class="list-content-right">
      <swiper-slide v-for="(menuItem, index) in this.menuList[newListIndex]" :key="index" class="dishes-page">
        <div class="dishes-info" v-for="item in menuItem" :class="{'dishes-select': item.number>0 || item.addcount>0}">
          <div class="dishes-img">
            <img class="dishes-titleimg" src="../assets/image/caiimg1.png"/>
            <span class="dishes-money" :class="{'dishes-money-count': item.quantity ==0}">¥{{item.price}}</span>
          </div>
          <div class="dishes-content">
            <p class="dishes-title" :class="{'dishes-title-select': item.number>0 || item.addcount >0}">{{item.productName}}</p>
            <p class="dishes-remark" :class="{'dishes-remark-select': item.number>0 || item.addcount >0}">{{item.description}}</p>
          </div>
          <div class="dishes-cart">
            <span class="count-btn-re" @click.stop="decreaseCart(item)"/></span>
            <span class="count-num" v-show="!item.number && !item.addcount"> 0 </span>
            <span class="count-num" :class="{'count-num-select': item.number>0 || item.addcount>0}" v-show="!item.addcount && item.number>0"> {{item.number}} </span>
            <span class="count-num" :class="{'count-num-select': item.number>0 || item.addcount>0}" v-show="item.addcount >0 && !item.number"> {{item.addcount}} </span>
            <span class="count-num" :class="{'count-num-select': item.number>0 || item.addcount>0}" v-show="item.addcount >0 && item.number >0"> {{item.addcount + item.number}} </span>
            <span class="count-btn-add" :class="{'count-btn-addSelect': item.number>0 || item.addcount>0}" @click.stop="addCart(item)"/></span>
          </div>
          <div v-show="item.like ==1 " class="dishes-recommend" :class="{'dishes-recommend-black': item.quantity ==0, 'dishes-recommend-count': item.number>0 || item.addcount>0}"></div>
          <!--没货时的覆盖层-->
          <div v-if="item.quantity ==0" class="dishes-covered"></div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

<!--<div class="list-content-right">-->
	<!--&lt;!&ndash;<div class="dishes-container">&ndash;&gt;-->
		<!--<div class="dishes-page">-->
			<!--<div class="dishes-info">-->
		<!--<div class="dishes-img">-->
			<!--<img class="dishes-titleimg" src="../assets/image/caiimg1.png"/>-->
				<!--<span class="dishes-money">¥40.00</span>-->
		<!--</div>-->
		<!--<div class="dishes-content">-->
			<!--<p class="dishes-title">特色牛排</p>-->
			<!--<p class="dishes-remark">特色澳洲牛排，新鲜食材</p>-->
		<!--</div>-->
		<!--<div class="dishes-cart">-->
				<!--<img src="../assets/image/cartreduce.png"/>-->
				<!--<span> 0 </span>-->
				<!--<img src="../assets/image/cartadd.png"/>-->
			<!--</div>-->
		<!--<div class="dishes-recommend"></div>-->
		<!--&lt;!&ndash;没货时的覆盖层&ndash;&gt;-->
		<!--<div v-if="false" class="dishes-covered"></div>-->
	<!--</div>-->

		<!--</div>-->
	<!--&lt;!&ndash;</div>&ndash;&gt;-->
	<!--&lt;!&ndash;小点点&ndash;&gt;-->
	<!--<ul class="dishes-dots">-->
		<!--<li></li>-->
		<!--<li  class="li-current"></li>-->
		<!--<li></li>-->
	<!--</ul>-->
<!--</div>-->
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
    	searchShow: false,
    	startMenu: [],
    	addMenu: [],
    	newMenu: [],
      productClassifyList: [
        {
        productType: '推荐', // 产品类型
        productList:
          [
            {
              productCode: '2223232000', // 产品编码
              productName: '经典拿铁', // 产品名称
              price: 12.53, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232001', // 产品编码
              productName: '木须小炒肉', // 产品名称
              price: 50, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232002', // 产品编码
              productName: '特色酸菜鱼', // 产品名称
              price: 50, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232003', // 产品编码
              productName: '红烧里脊', // 产品名称
              price: 50, // 价格
              state: '售罄', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232004', // 产品编码
              productName: '娃娃鱼', // 产品名称
              price: 50, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232005', // 产品编码
              productName: '青椒炒蛋', // 产品名称
              price: 50, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232006', // 产品编码
              productName: '西红柿炒蛋', // 产品名称
              price: 50, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 10, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232007', // 产品编码
              productName: '青椒土豆丝', // 产品名称
              price: 50, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232008', // 产品编码
              productName: '红烧小炒', // 产品名称
              price: 18, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '2223232009', // 产品编码
              productName: '红烧小炒2', // 产品名称
              price: 18, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232100', // 产品编码
              productName: '饭饭饭111', // 产品名称
              price: 18, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232111', // 产品编码
              productName: '三杯鸡111', // 产品名称
              price: 16, // 价格
              state: '售罄', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            }
          ]
        },
        {
          productType: '热菜', // 产品类型
          productList:
          [
            {
              productCode: '1223232112', // 产品编码
              productName: '热菜222', // 产品名称
              price: 12, // 价格
              state: '售罄', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232113', // 产品编码
              productName: '热菜222', // 产品名称
              price: 1457, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232114', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232115', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232116', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232117', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232118', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232119', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232120', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 0, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232121', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232122', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '122323123', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232124', // 产品编码
              productName: '土豆炒肉222', // 产品名称
              price: 19, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232125', // 产品编码
              productName: '牛肉热菜22', // 产品名称
              price: 78, // 价格
              state: '售罄', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 0, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            }
          ]
        },
        {
          productType: '汤羹', // 产品类型
          productList:
          [
            {
              productCode: '1223232126', // 产品编码
              productName: '汤羹33', // 产品名称
              price: 12.53, // 价格
              state: '售罄', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232127', // 产品编码
              productName: '汤羹33', // 产品名称
              price: 12.53, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232128', // 产品编码
              productName: '汤羹33', // 产品名称
              price: 12.53, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 0, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 0, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232129', // 产品编码
              productName: '汤羹33', // 产品名称
              price: 12.53, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232130', // 产品编码
              productName: '汤羹33', // 产品名称
              price: 12.53, // 价格
              state: '有货', // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg', // 商品图片url
              like: 1, // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3, // 辣椒个数
              discount: 80, // 折扣信息 80%
              quantity: 100, // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            },
            {
              productCode: '1223232131',  // 产品编码
              productName: '汤羹33',  // 产品名称
              price: 12.53,  // 价格
              state: '有货',  // 商品状态
              pictureUrls: 'cai.jpg|ge.jpg',  // 商品图片url
              like: 0,  // 是否点赞, 1 点赞， 0 不赞
              pepperCount: 3,  // 辣椒个数
              discount: 80,  // 折扣信息 80%
              quantity: 100,  // 产品剩余数量
              description: "好喝的不得了",   //描述
              pictureUrls: "http://test.com" //产品图片url
            }
          ]
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        touchRatio: 1
      },
      newListIndex: 0
    }
  },
  props: {
  	allMenu: {
  		type: Array
  	},
  	selectInfo: {
  		type: Object
  	}
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    menuList: function () {
      var result = []
      var temp = []
      for (var i = 0; i < this.productClassifyList.length; i++) {
        for (var j = 0; j < this.productClassifyList[i].productList.length; j += 10) {
          temp.push(this.productClassifyList[i].productList.slice(j, j + 10))
        }
        result[i] = temp
        temp = []
      }
      return result
    },
    allMenuList () {
    	var menuAll = []
    	let all = []
    	for (var i = 0; i < this.productClassifyList.length; i++) {
    		menuAll = menuAll.concat(this.productClassifyList[i].productList)
    	}
    	return menuAll
    }
//  selectFoods () {   //选择的所有菜品
//  	let foods = []
//  	this.productClassifyList.forEach((good)=>{
//  		good.productList.forEach((food)=>{
//  			if (food.number) {
//  				foods.push(food)
//  			}
//  		})
//  	})
//  	return foods
//  }
  },
  methods: {
    changeMenu (index1) {
      this.newListIndex = index1
    },
    searchMenu () {
    	this.searchShow = true
    },
    addCart (item) {
      if (this.selectInfo.status ==2 ) {
      		if (!item.addcount) {
      			Vue.set(item, 'addcount', 1)
      			this.addMenu.push(item)
      		}else {
      			item.addcount++
      		}
      	this.$emit('addMenuSelect', this.addMenu)
      } else{
      	if (!item.number) {
      		Vue.set(item, 'number', 1)
      		this.startMenu.push(item)
      	}else {
      		item.number++
      	}
      	this.$emit('startMenuSelect', this.startMenu)
      }
    },
    decreaseCart (item) {
    	if (this.selectInfo.status ==2 ) {
    		item.addcount--
    		if (item.addcount == 0) {
    			this.addMenu.splice(this.addMenu.indexOf(item), 1)
	    	}else if(item.addcount < 0){
	    		item.addcount == 0
	    	}
  		}else {
    		item.number--
    		if (item.number == 0) {
    			this.startMenu.splice(this.startMenu.indexOf(item), 1)
	    	}
    	}
//  	if (item.number) {
//  		item.number--
//  		if (item.number == 0) {
//  			this.startMenu.splice(this.startMenu.indexOf(item), 1)
//  		}
//  	}
    },
    changMsg () {
    	this.allMenuList.forEach((goods) => {
    		if (goods.number) {
    			goods.number = 0
    		}
    	})
    },
    changCount (val) {
    	val.forEach((food) => {
				this.allMenuList.forEach((goods) => {
					if (food.productCode == goods.productCode) {
						if(!goods.number){
							Vue.set(goods, 'number', 0)
						}
					  goods.number = food.number
				 }
				})
			})
    }
  },
  watch: {
		allMenu: {
			handler: function (val, oldVal) {
				this.changCount(val)
			},
	    deep: true
		}
	}
}
</script>

<style scoped lang="stylus" ref="stylesheet">
@import '~common/stylus/mixin.styl'
  .order-list
    width: 630px
    height: 614px
    box-shadow: -5px 12px 10px #dee4ef
    .list-top
      width: 100%
      height: 63px
      position: relative
      h2
        position: absolute
        left: 127px
        top: 11px
        font-size: 50px
        color: #fff
        letter-spacing: 12px
        font-family: Arial
        font-weight: bold
      .list-top-content
        width: 100%
        height: 96px
        text-align: center
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
          cursor: pointer
        .list-top-title
          float: left
          margin-left: 262px
          margin-top: 30px
          .list-icon-center
            width: 19px
            height: 20px
          .list-icon-center
            margin-right: 9px
            vertical-align: middle
          span
            font-size: 15px
            font-weight: bold
            color: #55636e
            vertical-align: middle
        .list-top-icon
          float: right
          margin-top: 34px
          margin-right: 2px
          .icon-img-search
            display: block
            float: left
            width: 12px
            height: 11px
            padding: 4px 10px 0
            cursor: pointer
          .icon-img-manger
            float: left
            height: 16px
            width: 16px
            padding: 0 10px
            cursor: pointer
          .icon-img-select
            float: left
            height: 16px
            width: 14px
            padding: 2px 10px 0
            cursor: pointer
    .list-search
      width: 486px
      height: 25px
      border-bottom: 1px solid #ced7dc
      margin-left: 118px
      input
        outline: none
        border: none
        background-color: transparent
        margin-left: 153px
        color: #ced8dc
        font-size: 12px
        font-weight: bold
        width: 386px
        height: 25px
    .list-content
      width: 100%
      padding: 5px 21px 0
      .list-content-left
        padding-top: 19px
        float: left
        overflow: hidden
        .recommend
          width: 70px
          height: 28px
          border: 1px solid #d63f2c
          border-radius: 15px
          color: #e39487
          line-height: 28px
          text-align: center
          margin-bottom: 10px
          cursor: pointer
          img
            width: 12px
            height: 12px
            margin-right: 5px
        .selected
          background-color: #f1492f
          color: #fff
      .list-content-right
        float: left
        width: 532px
        height: 534px
        margin-left: 5px
        position: relative
        /*为做滚动准备添加的盒子*/
        .dishes-page
          /*width: 532px*/
          /*height: 476px*/
          overflow: hidden
          .dishes-info
            float: left
            width: 239px
            height: 80px
            margin: 7.5px
            background-color: #fff
            position: relative
            box-shadow: 3px 3px 3px #e8e8ea
            .dishes-img
              float: left
              position: relative
              .dishes-titleimg
                width: 58px
                height: 58px
                margin-top: 11px
                margin-left: 11px
              .dishes-money
                position: absolute
                top: 43px
                left: 43px
                display: block
                width: 43px
                height: 19px
                background-color: #ed3d2e
                line-height: 19px
                text-align: center
                border-radius: 9px
                font-size: 9px
                font-family: Arial
                color: #fff
              .dishes-money-count
                background-color: rgba(0,0,0,0.8)
            .dishes-content
              float: left
              margin-left: 23px
              .dishes-title
                font-size: 12px
                color: #6d6d78
                font-weight: bold
                margin-top: 15px
              .dishes-title-select
                color: #fff
              .dishes-remark
                color: #b0afb6
                font-size: 9px
                margin-top: 5px
              .dishes-remark-select
                color: #Fff
            .dishes-cart
              position: absolute
              right: 18px
              bottom: 10px
              .count-btn-re
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: middle
                background: url(../assets/image/cartreduce.png) no-repeat
                background-size: 16px 16px
                extend-click()
              .count-btn-add
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: middle
                background: url(../assets/image/cartadd.png) no-repeat
                background-size: 16px 16px
                extend-click()
              .count-btn-addSelect
                background: url(../assets/image/cartadd1.png) no-repeat
                background-size: 16px 16px
              .count-num
                color: #6d6d78
                font-weight: bold
                vertical-align: middle
                padding: 0 12px
              .count-num-select
                color: #fff
            .dishes-recommend
              width: 24px
              height: 30px
              background: url(../assets/image/recommend_red.png) no-repeat
              background-size: 24px 30px
              position: absolute
              top: 0
              right: 20px
            .dishes-recommend-count
              background: url(../assets/image/recommend_w.png) no-repeat
              background-size: 24px 30px
            .dishes-recommend-black
              background: url(../assets/image/tuijian_black_03.png) no-repeat
              background-size: 24px 30px
            .dishes-covered
              position: absolute
              top: 0
              left: 0
              width: 239px
              height: 80px
              background-color: rgba(206,214,222,0.4)
              z-index: 50
          .dishes-select
            background: url(../assets/image/menu_bgred_03.png) repeat-x
            background-size: 2px 80px
        .swiper-pagination
          bottom: 30px










</style>
