<template>
	<div class="list-item">
		<div class="header">
			<div class="region">
				<text class="region-text">{{formInfo}}</text>	
			</div>
			<div class="corner"></div>
			<div class="region">
				<text class="region-text">{{toInfo}}</text>	
			</div>	
		</div>
		<div class="info">
			<text class="desc">{{desc}}</text>
			<text class="date">{{corsdata['date']}}</text>	
		</div>
		<div class="footer">
			<image :src="corsdata.avatar" class="avatar" v-if="corsdata.avatar"></image>
			<text class="name">{{corsdata.name}}</text>
			<text class="views" v-if="corsdata.views > 0">{{corsdata.views}}车主查看</text>
		</div>
		<div class="tel" @click="makePhoneCall">
			<image src="https://s.kcimg.cn/app/icon/weex/tel.png" class="call-icon"></image>
		</div>
	</div>
</template>

<style scoped>
	.list-item{
		position: relative;
		padding-top:30px;
		padding-right:30px;
		padding-bottom:20px;
		padding-left:30px;
	}
	.header{
		flex-direction: row;
	}
	.region{
		height:40px;
	}
	.region-text{
		font-size: 40px;
	}
	.corner{
		margin-top:20px;
		margin-left:15px;
		margin-right:15px;
		width: 40px;
		height:3px;
		background-color: #999
	}
	.info{
		margin-top:30px;
		flex-direction: row;
	}
	.desc{
		font-size:32px;
		color:#10AEFF;
	}
	.date{
		margin-top:2px;
		margin-left:20px;
		font-size: 28px;
		color:#999;
	}
	.footer{
		margin-top:20px;
		height:60px;
		flex-direction: row;
	}
	.avatar{
		width:60px;
		height:60px;
		border-radius: 50%;
	}
	.name{
		margin-left:20px;
		margin-top:14px;
		font-size: 32px;
	}
	.views{
		margin-left:20px;
		margin-top:16px;
		font-size: 28px;
		color:#999;
	}
	.tel{
		position: absolute;
		right:30px;
		bottom:30px;
		width:80px;
		height:80px;
		border-radius: 50%;
		background-color:#09BB07;
	}
	.call-icon{
		margin-top:24px;
		margin-left:24px;
		width:32px;
		height:32px;
	}
</style>

<script>
	function Region(o){			// 组合地区
		let p = o.province,
			c = o.city,
			d = o.county;
		return d ? `${p}·${c}·${d}` : (c ? `${p}·${c}` : p);
	};
	function desc(l,c,d){		// 组合描述
		let s = `${l}/${c}`;
		return d ? `${s}/${d}` : s;
	};
	/*function computDate(d){
		let now = +new Date(),
			old = +new Date(`${d} 00:00:00`),
			hour = 0,
			day = 0;
		let diff = now - old;
		if(diff < 864E5){ // 一天之内
			if(diff < 36E5){
				return '刚刚'
			}else{
				hour = parseInt(diff/36E5);
				return `${hour}小时前`
			}
		}else if(diff < 6048E5){
			day = parseInt(diff/864E5);
			return `${day}天前`	
		}else{
			return d
		}
	}*/
	//import 'Nat' from 'weex-nat'
	export default {
		props:{
			corsdata:{
				type: Object,
        		required: true	
			}
		},
		data (){
			return {
				loading:true,
				formInfo:Region(this.corsdata['formInfo']),
				toInfo:Region(this.corsdata['toInfo']),
				desc: desc(this.corsdata['length'],this.corsdata['cate'],this.corsdata['desc'])
			}
		},
		methods:{
			makePhoneCall (){
				Nat.call(corsdata.tel)
			}
		}
	}

</script>
