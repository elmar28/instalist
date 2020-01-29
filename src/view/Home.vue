<template>
  <div class="initScreen">
    <h2>投稿一覧</h2>
    <Medialist/>
  </div>
</template>

<script>
import Medialist from '@/components/Medialist.vue'

export default {
  name: 'Home',
  components: {
    Medialist
  },
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
