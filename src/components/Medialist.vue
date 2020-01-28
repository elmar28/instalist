<template>
  <div class="hello">
    <p>
      投稿一覧
    </p>
    <ul class="userMediaList">
      <pictCasset v-for="item in mediaAll" v-bind:key="item.id" :item="item" />
      <li class="userMediaListNext" v-if="dataAll && dataAll.media.paging.next">
        <a href="dataAll.media.paging.next">続きを読み込む</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';
import pictCasset from '@/components/ui/PictCasset'

export default {
  name: 'Medialist',
  components: {
    pictCasset
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
    
  },
  computed: {
    ...mapState(['mediaAll',`dataAll`])
  },
  created () {
    this.getMediaList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  margin: 0;
  padding: 0;
}
img{
  vertical-align: bottom;
}
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
    margin-bottom: 15px;
    border: 1px solid #ccc;
  }
}
.userMediaListNext{
  a{
    padding: 10px 5px;
    display: block;
  }
}
</style>
