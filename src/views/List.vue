<template>
  <div class="list-view">
    <app-header title="货源列表"></app-header>
    <filter></filter>
    <div v-if="goods.length">
      <list class="goods-list">
        <cell v-for="(item,index) in goods">
          <list-item :corsdata="item"></list-item>
        </cell>
      </list>
    </div>
    <empty v-if="!goods.length"></empty>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'
  import Filter from '../components/filter.vue'
  import ListItem from '../components/list-item.vue'
  import Empty from '../components/empty.vue'
  import Options from '../components/options.vue'

  export default {
    components:{ AppHeader,Filter,ListItem,Empty,Options},
    data (){
      return {
        loading:true,
        goods:[
          {
            id:1001,
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
            date:'2017/2/28 11:11:19',
            avatar:'',
            name:'天下行物流',
            view:64,
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
            date:'2017/2/28 11:11:19',
            avatar:'',
            name:'天下行物流',
            view:64,
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
            desc:'普货',
            date:'2017/2/28 11:11:19',
            avatar:'',
            name:'天下行物流',
            view:64,
            tel:'17069554359'
          }  
        ]   
      }
    }
  }
</script>

<style scoped>

</style>
