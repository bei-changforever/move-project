<template>
  <div id="seeone">
    <div class="head">
      <div class="hbox">
        <span @click="back()"> ＜ </span>
        <span>
          <i class="iconfont icon-liebiao" @click="isshow()"></i>
        </span>
      </div>
      猫眼电影
      <ul v-show="show" class="show">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/HotWel">榜单</router-link>
        </li>
        <li @click="toast()">热点</li>
      </ul>
    </div>
    <ul class="movie">
      <li v-for="s in mos" :key="s.id" @click="leap(s.id)">
        <div class="box">
          <div class="left"><img :src="s.poster" alt="" width="70px" /></div>
          <div class="right">
            <div class="name">{{ s.name }}</div>
            <div class="ename">{{ s.ename }}</div>
            <div class="cat">{{ s.catogary }}</div>
            <div class="score" v-show="s.score">{{ s.score }}分</div>
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(["mos"]),
  },
  created() {
    // this.getdata();
  },
  methods: {
    getdata() {
      // console.log(this.mos);
    },
    back() {
      this.$router.go(-1);
    },
    isshow() {
      this.show = !this.show;
    },
    leap(id) {
      this.$router.push("/film/" + id);
    },
  },
};
</script>

<style scoped>

.head {
  height: 50px;
  width: 100%;
  background-color: red;
  position: fixed;
  top: 0;
  z-index: 999;
  color: white;
  text-align: center;
  line-height: 50px;
}
.head .hbox {
  width: 100%;
  position: relative;
}

.head .hbox > span:first-child {
  position: absolute;
  left: 15px;
  margin-top: -1px;
}

.head .hbox > span:last-child {
  position: absolute;
  display: block;
  right: 15px;
  margin-top: -1px;
}

.movie {
  margin-top: 60px;
  margin-bottom: -30px;
}

.movie li .box {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  font-size: 10px;
  color: grey;
}

ul li .box .right {
  margin-left: 10px;
  width: 260px;
}

ul li .box .right > div {
  margin-bottom: 10px;
  width: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

ul li .box .right > div:first-child {
  margin-bottom: 15px;
}

ul li .box .right .name {
  font-size: 20px;
  font-weight: 700;
}

ul li .box .right .score {
  font-size: 15px;
  font-weight: 700;
  color: orange;
}
</style>