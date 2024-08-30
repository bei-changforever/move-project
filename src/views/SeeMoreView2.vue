<template>
  <div id="seemore2">
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
    <ul class="cinema">
      <li v-for="(c, index) in cis" :key="index" @click="tos(c.cinemaId)">
        <div class="box">
          <div class="left">
            <div class="ltop">
              <div class="name">{{ c.title }}</div>
              <div class="price">{{ c.price.n }}{{ c.price.q }}</div>
            </div>
            <div class="location">{{ c.location }}</div>
            <ul class="ico">
              <li v-for="(s, i) in c.services" :key="i">{{ s.text }}</li>
            </ul>
          </div>
          <div class="right">{{ c.distance }}</div>
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
    ...mapState(["cis"]),
  },
  methods: {
    see() {
      console.log(this.cis);
    },
    isshow() {
      this.show = !this.show;
    },
    back() {
      this.$router.go(-1);
    },
    tos(id) {
      this.$router.push("/cinemadetail/" + id);
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

.cinema {
  margin-bottom: -30px;
  margin-top: 60px;
}

#seemore2 .cinema > li .box {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
}

#seemore2 .cinema li .box .left {
  width: 78%;
  font-size: 10px;
  margin-left: 2%;
}

#seemore2 .cinema li .box .left > div {
  margin-bottom: 10px;
}

#seemore2 .cinema li .box .left .ltop {
  display: flex;
  flex-wrap: wrap;
}

#seemore2 .cinema li .box .left .ltop .name {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}

#seemore2 .cinema li .box .left .ltop .price {
  width: auto;
  color: red;
  margin-left: 30px;
  line-height: 15px;
}

#seemore2 .cinema li .box .right {
  width: 20%;
  margin-top: 20px;
}

#seemore2 .cinema li .box .left .location {
  width: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: grey;
}

#seemore2 .cinema li .left .ico {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
}

#seemore2 .cinema li .left .ico li {
  border: 1px solid orange;
  padding: 2px 5px;
  height: auto;
  width: auto;
  margin: 0 10px 0 0;
  color: orange;
}
</style>