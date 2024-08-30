<template>
  <div id="Tab">
    <div class="head">
      <div class="hbox">
        <span @click="jump()"><i class="iconfont icon-chazhao"></i></span>
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
    <ul>
      <li @click="light = 0">
        <router-link
          to="/"
          :class="[{ active: light == 0 }, 'ico', { ico2: light == 0 }]"
          ><i class="iconfont icon-dianyingpiao"></i
          ><span>电影/影院</span></router-link
        >
      </li>
      <li @click="light = 1">
        <router-link
          to="/video"
          :class="[{ active: light == 1 }, 'ico', { ico2: light == 1 }]"
          ><i class="iconfont icon-xiaoshipinyingshi48"></i
          ><span>小视频</span></router-link
        >
      </li>
      <li @click="light = 2">
        <router-link
          to="/mine"
          :class="[{ active: light == 2 }, 'ico', { ico2: light == 2 }]"
          ><i class="iconfont icon-wode"></i><span>个人</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      light: 0,
      isShow: false,
      show: false,
    };
  },
  methods: {
    jump() {
      this.$router.push("/search");
    },
    add() {
      this.isShow = !this.isShow;
    },
    isshow() {
      this.show = !this.show;
    },
    toast() {
      this.$toast("该服务正在装修...")
    }
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
  margin-top: -8px;
}

.head .hbox > span:last-child {
  position: absolute;
  display: block;
  right: 15px;
  margin-top: -8px;
}

#Tab ul {
  width: 100%;
  height: 6vh;
  position: fixed;
  z-index: 999;
  bottom: 0;
  background-color: white;
  border-top: 1px solid rgb(207, 207, 207);
  display: flex;
  text-align: center;
  line-height: 6vh;
}

#Tab ul li {
  margin-left: -15px;
  list-style: none;
  flex: 1;
}

#Tab ul li .ico {
  color: black;
  display: block;
}
.ico2 {
  color: azure;
}
#Tab ul li .active {
  color: red;
}

#Tab i {
  position: absolute;
  top: -5px;
}

#Tab span {
  position: absolute;
  width: 60px;
  top: 12px;
  font-size: 10px;
  margin-left: -22px;
}

#Tab .show {
  position: absolute;
  top: 35px;
  right: 24px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 80px;
  color: blue;
}

#Tab .show li {
  background-color: white;
  border-bottom: 1px solid rgb(187, 187, 187);
  box-shadow: 0 0 10px grey;
}

#Tab .show li:last-child {
  border-bottom: none;
  color: grey;
}
</style>