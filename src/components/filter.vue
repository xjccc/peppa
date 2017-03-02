<template>
	<div class="filter">
		<div class="category" @click="selectCategory">
			<text class="category-selected">{{category.value}}</text>
		</div>
		<div class="regions">
			<div class="region-item">
				<text class="region-text">出发地</text>
			</div>
			<div class="corner"></div>
			<div class="region-item">
				<text class="region-text">目的地</text>
			</div>
		</div>	
	</div>
</template>

<style scoped>
	.filter{
		padding-top:20px;
		padding-bottom:20px;
		padding-left:30px;
		padding-right:30px;
		height:128px;
		flex-direction: row;
	}
	.category{
		flex:1;
		height:88px;
		border-radius: 10px;
		background-color: #10AEFF
	}
	.category-selected,.region-text{
		padding-top:26px;
		padding-bottom: 26px;
		color:#fff;	
		font-size: 36px;
		text-align: center;
	}
	.regions{
		flex:2;
		height:88px;
		margin-left:20px;
		border-radius: 10px;
		background-color: #09BB07;
		flex-direction: row;
	}
	.region-item{
		flex:1;
	}
	.corner{
		margin-top:43px;
		width: 30px;
		height:3px;
		background-color: #fff;
	}
</style>

<script>
	export default {
		data (){
			return {
				options:{},
				visible:true,
				category:{
					optionIndex:'default',
					value:'车辆类型'
				}
			}
		},
		methods:{
			selectCategory (){
				let that = this;
				picker.pick({
					index:0,
					items:this.categoryOptions
				},function(ret){
					if(ret.result == 'success'){
						console.log(ret.data);
					}
				})
			}	
		}
	}
</script>