<template>
  <div id="Cinema2">
    <div class="top" @click="leap(movie.id)">
      <div class="left">
        <img :src="movie.img" alt="" width="100px" />
      </div>
      <div class="middle">
        <div class="m-name">{{ movie.nm }}</div>
        <div class="m-ename">{{ movie.enm }}</div>
        <div class="m-score">
          <span>{{ movie.sc }}分</span>
          <span>({{ movie.snum }}人评)</span>
        </div>
        <!-- <div class="m-snum"></div> -->
        <div class="m-cat">{{ movie.cat }}</div>
        <div class="m-date">{{ movie.onlineDate }}</div>
      </div>
      <div class="right"><router-link to="/"></router-link><i class="iconfont icon-jinru" style="color:white"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    leap(id) {
      this.$router.push("/film/" + id);
    },
  },
};
</script>

<style scoped>
.top {
  background: radial-gradient(rgb(179, 171, 171), gray);
  display: flex;
  padding: 20px 0 20px 15px;
  position: relative;
}

.top .middle {
  margin-top: 5px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}

.top .middle > div {
  margin-bottom: 10px;
  color: white;
  font-size: 10px;
}

.top .middle .m-name {
  font-size: 20px;
  font-weight: 700;
}

.top .middle .m-score {
  font-size: 20px;
  color: orange;
  font-weight: 700;
}

.top .middle .m-score span:nth-of-type(2) {
  margin-left: 5px;
  color: white;
  font-size: 10px;
}

.top .right {
  position: absolute;
  top: 80px;
  right: 20px;
}
</style>