<template>
  <div id="app">
  	<m-header></m-header>
  	<keep-alive>
  		<router-view @selectContent="selectContent" :selectInfo="selectInfo"></router-view>
  	</keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import mHeader from 'components/m-header/m-header'
export default {
  name: 'app',
  data () {
  	return {
  		selectInfo: {}
  	}
  },
  components: {
    mHeader
  },
  methods: {
  	selectContent (item) {
  		this.selectInfo = item
  	}
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet">
#app
  width: 1024px
  margin: 0 auto
</style>
