<template>
  <div class="list-view">
    <app-header title="货源列表"></app-header>
    <filter></filter>
    <list class="goods-list" v-if="goods.length" @loadmore="fetch" loadmoreoffset="84">
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
        <text class="refresh-indicator">···</text>
      </refresh>
      <cell v-for="(item,index) in goods" class="goods-cell">
        <list-item :corsdata="item"></list-item>
      </cell>
      <cell class="loading">
        <text class="indicator">{{indicator}}</text>
      </cell>
    </list>
    <empty v-if="!goods.length"></empty>
  </div>
</template>

<style scoped>
  .goods-list{
    flex:1;
    -webkit-overflow-scrolling:touch;
  }
  .goods-cell{
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
  }
  .loading{
    justify-content: center;
  }
  .indicator {
    color: #999;
    font-size: 32px;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
  }
  .refresh-indicator{
    color: #999;
    font-size: 42px;
    padding-top: 30px;
    text-align: center;
    font-weight: bold;   
  }
</style>

<script>
  import AppHeader from '../components/app-header.vue'
  import Filter from '../components/filter.vue'
  import ListItem from '../components/list-item.vue'
  import Empty from '../components/empty.vue'
  import Options from '../components/options.vue'

  const stream = weex.requireModule('stream');
  let defaultAddData = {
        id:1001,
        formInfo:{
        province:'山东',
        city:'德州',
        county:'夏津'
      },
      toInfo:{
        province:'北京',
        city:'海淀区'
      },
      cate:'高栏车',
      length:'13',
      desc:'普货',
      date:'2017-2-28',
      avatar:'http://temp.im/120x120',
      name:'天下行物流',
      views:354,
      tel:'17069554359'
    };
  export default {
    components:{ AppHeader,Filter,ListItem,Empty,Options},
    data (){
      return {
        page:1,
        end:false,
        indicator:'加载中···',
        loadingVisible:false,
        refreshing:false,
        goods:[
          {
            id:1001,
            formInfo:{
              province:'山东',
              city:'德州',
              county:'夏津'
            },
            toInfo:{
              province:'北京',
              city:'海淀区'
            },
            cate:'高栏车',
            length:'13',
            desc:'普货',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:354,
            tel:'17069554359'
          },
          {
            id:1002,
            formInfo:{
              province:'山东',
              city:'德州',
              county:'夏津'
            },
            toInfo:{
              province:'河北',
              city:'唐山',
              county:'明得'
            },
            cate:'高栏车',
            length:'13',
            desc:'普货',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:164,
            tel:'17069554359'
          },
          {
            id:1003,
            formInfo:{
              province:'山东',
              city:'德州',
              county:'夏津'
            },
            toInfo:{
              province:'河北',
              city:'唐山',
              county:'明得'
            },
            cate:'高栏车',
            length:'13',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:64,
            tel:'17069554359'
          },
          {
            id:1004,
            formInfo:{
              province:'湖北',
              city:'武汉'
            },
            toInfo:{
              province:'河北',
              city:'唐山',
              county:'明得'
            },
            cate:'高栏车',
            length:'13',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:64,
            tel:'17069554359'
          },
          {
            id:1001,
            formInfo:{
              province:'山东',
              city:'德州',
              county:'夏津'
            },
            toInfo:{
              province:'北京',
              city:'海淀区'
            },
            cate:'高栏车',
            length:'13',
            desc:'普货',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:354,
            tel:'17069554359'
          },
          {
            id:1002,
            formInfo:{
              province:'山东',
              city:'德州',
              county:'夏津'
            },
            toInfo:{
              province:'河北',
              city:'唐山',
              county:'明得'
            },
            cate:'高栏车',
            length:'13',
            desc:'普货',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:164,
            tel:'17069554359'
          },
          {
            id:1003,
            formInfo:{
              province:'山东',
              city:'德州',
              county:'夏津'
            },
            toInfo:{
              province:'河北',
              city:'唐山',
              county:'明得'
            },
            cate:'高栏车',
            length:'13',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:64,
            tel:'17069554359'
          },
          {
            id:1004,
            formInfo:{
              province:'湖北',
              city:'武汉'
            },
            toInfo:{
              province:'河北',
              city:'唐山',
              county:'明得'
            },
            cate:'高栏车',
            length:'13',
            date:'2017-2-28',
            avatar:'http://temp.im/120x120',
            name:'天下行物流',
            views:64,
            tel:'17069554359'
          }  
        ]   
      }
    },
    methods:{
      fetch (){
        if(this.loadingVisible) return;
        let that = this;
        this.loadingVisible = true;
        setTimeout(function(){
          that.goods.push(defaultAddData)
          that.loadingVisible = false;
        },500)   
      },
      onrefresh (){
        if(this.refreshing) return;
        let that = this;
        this.refreshing = true;
        setTimeout(function(){
          that.goods.splice(0,0,defaultAddData)
          that.refreshing = false;
        },1e3)
      }
    }
  }
</script>


