<template>
   <div>
   		<app-header title="货源详情"></app-header>
   		<div class="regions" @click="jump(`/detail/${corsdata.id}`)">
   			
   		</div>
   </div>
</template>

<script>
  	import AppHeader from '../components/app-header.vue'
  	export default {
    	components:{ AppHeader},
    	data (){
    		return {

    		}
    	},
    	created (){
    		console.log(this.$router.query.id);
    	}
	}
</script>

<style scoped>
 	
</style>
