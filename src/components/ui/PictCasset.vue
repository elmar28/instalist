<template>
<li>
  <a :href="item.permalink">
    <div class="media">
      <div class="mediaThum"><img :src="item.media_url" width="250"></div>
      <div class="mediaDetails">
        <p>{{item.caption}}</p>
        <p>{{item.timestamp.split('T')[0]}}</p>
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
  color: #42b983;
}
p{
  margin: 0;
  padding: 0;
}
img{
  vertical-align: bottom;
}
</style>
