<template>
<li>
  <a :href="item.permalink">
    <div class="media">
      <div class="mediaThum"><img :src="item.media_url" width="250"></div>
      <div class="mediaDetails">
        <p class="mediaTimestamp">{{item.timestamp.split('T')[0]}}</p>
        <p v-if="item.caption.split('#')[0]">{{item.caption.split('#')[0]}}</p>
        <p class="mediaTag" v-if="item.caption.split('#')[1]">タグ: {{this.replace(item.caption.split('#'))}}</p>
      </div>
    </div>
  </a>
</li>
</template>

<script>

export default {
  name: 'pictCasset',
  props: ['item'],
  data: () => ({
  }),
  methods:{
    replace: function(array){
      let data = array.slice();
      data.shift();

      return data.join(',')
    }
  },
  computed: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  color: #333;
  text-decoration: none;
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

  .mediaTimestamp{
    font-size: 17px;
    font-weight: bold;
  }

  .mediaTag{
    padding-top: 10px;
  }

  &:after{
    content: '';
    clear: both;
    height: 0;
    display: block;
  }
}
</style>
