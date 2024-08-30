<template>
  <div class="cinemabox">
    <div class="title">
      <div class="fanhui iconfont icon-fanhui" @click="jump" style="line-height: 50px; padding-left: 10px">
        返回
      </div>
      <div class="title-name">{{ cinemamap.nm }}</div>
      <div class="bx"></div>
    </div>
    <div class="cinema-name">
      <p>{{ cinemamap.nm }}</p>
    </div>
    <div class="cinema-all">
      <div class="cinema-all-addr">
        <div class="cinema-all-img">
          <img src="../assets/我的资源/logo.jpg" />
        </div>
        <div class="cinema-a">{{ cinemamap.addr }}</div>
      </div>
      <div class="cinema-all-addr">
        <div class="cinema-all-img">
          <img src="../assets/我的资源/tel.jpg" />
        </div>
        <div class="cinema-a">{{ cinemamap.tel }}</div>
      </div>
    </div>
    <div class="cinema-message">
      <p>特色信息</p>
      <ul>
        <li class="special" v-for="(item, index) in cinemamap.featureTags" :key="index">
          <span class="one">{{ item.tag }}</span>
          <span class="two">{{ item.desc }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinemamap: [],
    };
  },
  created() {
    // console.log(this.id)
    this.load();
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    jump() {
      this.$router.go(-1);
    },

    load() {
      this.axios.get(`cinema/detail?cinemaId=${this.id}`).then((res) => {
        console.log("影院地址");
        console.log(res);
        this.cinemamap = res.data.data;
      });
    },
  },
};
</script>

<style scoped>
.title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: red;
  z-index: 99;
  display: flex;
  text-align: center;
  line-height: 50px;
  justify-content: space-between;
  color: white;
}

.bx {
  width: 42px;
  height: 50px;
}

* {
  margin: 0px;
  padding: 0px;
  /* background-color: gray; */
}

.cinemabox {
  /* width: 100%; */
  background-color: rgb(247, 242, 242);
}

.cinemabox .cinema-name p {
  /* width: 100%; */
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 10px;
  background-color: white;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(161, 159, 159, 0.4);
}

.cinema-message ul{
  /* width: 100%;
  height: 35px;
  margin-right: 10px; */

}
.cinema-all .cinema-all-addr {
  display: flex;
  background-color: white;
  border-bottom: 1px solid rgba(161, 159, 159, 0.4);
}


.cinema-all .cinema-all-addr .cinema-all-img img {
  width: 30px;
  height: 38px;
}

.cinema-all .cinema-all-addr .cinema-a {
  height: 38px;
  line-height: 38px;
  /* padding-top: 12px; */
 margin-left: 15px;
}

.cinema-message p:nth-of-type(1) {
  /* width: 100%; */
  height: 45px;
  line-height: 45px;
  background-color: white;
  margin-top: 15px;
  padding-left: 10px;
  font-size: 15px;
  border-bottom: 1px solid rgba(161, 159, 159, 0.4);
}

.special {
  background-color: white;
  /* width: 100%; */
  padding-top: 15px;
  padding-bottom: 15px;
  /* display: flex;
  justify-items: center; */
  border-bottom: 1px solid rgba(161, 159, 159, 0.4);
  padding-left: 10px;
  padding-right: 30px;

}


.cinema-message ul .special .one {
  background-color: white;
  padding: 0 5px;
  display:inline-block;
  height: 20px;
  line-height: 20px;
  width: auto;
  white-space:nowrap;
  border: 1px solid orange;
  font-size: 8px;
  color: orange;
  border-radius: 5px;
}

.cinema-message ul .special .two {
  width: 300px;
  background-color: white;
  font-size: 15px;
  margin-left: 10px;
  height: auto;
  line-height: 25px;
  margin-right: 10px;
}

</style>

