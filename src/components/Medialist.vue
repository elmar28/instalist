<template>
  <ul class="userMediaList">
    <PictCasset
      v-for="item in mediaAll"
      v-bind:key="item.id"
      :item="item"
    />
    <li class="userMediaListNext"
      v-if="dataAll && dataAll.media.paging.next"
      @click.prevent="getNext"
    >
      <a href="javascript:void(0)">続きを読み込む</a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';
import PictCasset from '@/components/ui/PictCasset'

export default {
  name: 'Medialist',
  components: {
    PictCasset
  },
  data: () => ({
    callMediaList: false
  }),
  methods:{
    getMediaList: function(url){
      let self = this;
      if(self.callMediaList){
        return;
      }

      self.callMediaList = true;

      const ApiPath = url ? url : "./instagram.json";
      const config = {
        headers:{
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type':'application/x-www-form-urlencoded'
        },
        responseType: 'json',
        withCredentials:true,
      };

      axios.get(ApiPath, {params: config})
        .then(function(res){
          //console.info(res.data)
          self.$store.dispatch('updateMediaAll', res.data);
          self.callMediaList = false;
        })
        .catch(function(/*res*/){
          //chachでエラーの挙動を定義
          //console.log(res)
          self.callMediaList = false;
        })
    },
    getNext: function(){
      let url = this.dataAll.media.paging.next;

      this.getMediaList(url);
    },
    closest: function (el, selector) {
      let matchesFn;

      // find vendor prefix
      ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector']
        .some(function(fn) {
          if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
          }
          return false;
        })

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }

      return null;
    }
  },
  computed: {
    ...mapState(['mediaAll','dataAll'])
  },
  created () {
    this.getMediaList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.media{
  .mediaThum{
    float: left;
    margin-right: 10px;
  }

  &:after{
    content: '';
    clear: both;
    height: 0;
    display: block;
  }
}
.userMediaList{
  li{
    border: 1px solid #ccc;
    background: #fff;
    margin-top: 10px;
  }
}
.userMediaListNext{
  a{
    padding: 10px 5px;
    display: block;
  }
}
</style>
