<template>
	<div class="pop">
		<div class="pop-content">
			<div class="selected">
				<text>当前选择车长:{{lengthSelected}}</text>
			</div>	
			<list class="list">
				<cell class="cell" v-for="(cate,index) in cates">
					<text>{{cate}}</text>
				</cell>
			</list>
			<div class="selected">
				<text>当前选择车型:{{cateSelected}}</text>	
			</div>
			<list class="list">
				<cell class="cell" v-for="(l,index) in length">
					<text>{{l}}</text>
				</cell>
			</list>
		</div>
	</div>
</template>

<style scoped>
	.pop{
		position: absolute;
		width:100%;
		background-color:rgba(0,0,0,.8);
		align-items:flex-end;
	}
	.pop-content{
		width:100%;
		background: #fff
	}
</style>

<script>
	export default {
		data (){
			return {
				lengthSelected:'',
				cateSelected:'',
				cates:['不限车型','平板车','栏板车','高栏车','厢式车','冷藏车','槽罐车','骨架车','大件运输','自卸车'],
				length:['不限车长','4.2','6.8','9.6','13','15','17.5']
			}
		}
	}
</script>