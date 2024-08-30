<template>
  <div id="search">
    <div class="t">
      <!-- <span @click="back()">返回</span> -->
      <span>
        <input
          type="text"
          placeholder="请输入电影名称"
          v-model="value"
          @blur="h()"
        />
      </span>
      <span @click="back()">取消</span>
    </div>
    <ul class="history">
      <li v-for="(h, index) in historys" :key="index" @click="add(h)">
        {{ h }}
      </li>
    </ul>
    <ul class="movie">
      <li v-for="s in movies" :key="s.id" @click="leap(s.id)">
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
      <div
        class="seemore"
        v-show="movies.length != mos.length"
        @click="jump(mos)"
      >
        查看更多内容
      </div>
    </ul>
    <ul class="cinema">
      <li v-for="(c, index) in cinemas" :key="index" @click="tos(c.cinemaId)">
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
      <div
        class="seemore2"
        v-show="cinemas.length != cis.length"
        @click="jump2(cis)"
      >
        查看更多内容2
      </div>
    </ul>
  </div>
</template>

<style scoped>
.t {
  height: 50px;
  background-color: red;
  color: white;
  line-height: 50px;
  display: flex;
  text-align: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0px;
  border-radius: 10px;
  justify-content: space-evenly;
}

.t span input {
  padding-left: 15px;
  width: 290px;
  font-weight: 500;
}

.t span:first-child {
  font-weight: 700;
}

input {
  height: 30px;
  width: 250px;
  background-color: lightcoral;
  box-sizing: content-box;
  padding-left: 10px;
  outline: none;
  color: black;
  border: none;
}

.history {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  margin-top: 0;
}

.history li {
  border: 1px solid grey;
  background-color: grey;
  border-radius: 5px;
  margin: 10px 10px 0 0 !important;
  padding: 5px 10px;
  font-size: 10px;
  color: white;
}

ul {
  margin-top: 60px;
}

ul li:last-child {
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

.seemore,
.seemore2 {
  color: red;
  text-align: center;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid grey;
}

#search .cinema > li .box {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
}

#search .cinema li .box .left {
  width: 75%;
  font-size: 10px;
  margin-left: 2%;
}

#search .cinema li .box .left > div {
  margin-bottom: 10px;
}

#search .cinema li .box .left .ltop {
  display: flex;
  flex-wrap: wrap;
}

#search .cinema li .box .left .ltop .name {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}

#search .cinema li .box .left .ltop .price {
  width: auto;
  color: red;
  margin-left: 30px;
  line-height: 15px;
}

#search .cinema li .box .right {
  width: 20%;
  margin-top: 20px;
}

#search .cinema li .box .left .location {
  width: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: grey;
}

#search .cinema li .left .ico {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
}

#search .cinema li .left .ico li {
  border: 1px solid orange;
  padding: 2px 5px;
  height: auto;
  width: auto;
  margin: 0 10px 0 0;
  color: orange;
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
      movies: [],
      mos: [],
      cinemas: [],
      cis: [],
      historys: [],
    };
  },
  computed: {
    ...mapState(["cityid"]),
  },
  // created() {
  //   this.getMovie();
  // },
  methods: {
    ...mapMutations(["setmos", "setcis"]),
    back() {
      this.$router.go(-1);
    },
    async getMovie() {
      await this.axios
        .get(
          `https://apis.netstart.cn/maoyan/search/movies?keyword=${this.value}&ci=${this.cityid}`
        )
        .then((re) => {
          // console.log(re);
          this.movies = re.data;
          this.mos = re.data.splice(2);
          // console.log(this.mos);
          // console.log(this.movies, "111");
        });
      await this.axios
        .get(
          `https://apis.netstart.cn/maoyan/index/moreCinemas?keyword=${this.value}&&offset=0&limit=20&districtId=-1&lineId=-1
      &hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item&updateShowDay=true&reqId=1636710166221&cityId=${this.cityid}&lat=
      23.135636443326355&lng=113.42422402238324`
        )
        .then((re) => {
          // console.log("xxxxxx", re);
          this.cinemas = re.data;
          this.cis = re.data.splice(2);
        });
    },
    leap(id) {
      this.$router.push("/film/" + id);
    },
    jump(mos) {
      this.$router.push("/seemore1");
      this.setmos(mos);
    },
    jump2(cis) {
      this.$router.push("/seemore2");
      this.setcis(cis);
    },
    tos(id) {
      this.$router.push("/cinemadetail/" + id);
    },
    add(h) {
      this.value = h;
    },
    h() {
      var t = true;
      if (this.value.trim() != "") {
        for (var i = 0; i < this.historys.length; i++) {
          if (this.historys[i] == this.value) {
            // console.log("一样");
            t = false;
          }
        }
        if (t) {
          this.historys.push(this.value);
        }
      }
    },
    // 防抖
    debounce:function(fn,wait){
        if (this.fun!==null){
            clearTimeout(this.fun)
        }
        this.fun = setTimeout(fn,wait)
    },
  },
  watch: {
    value: function (newvalue, oldvalue) {
      if (newvalue != oldvalue) {
        this.debounce(this.getMovie,1500)
        ;
      }
    },
  },
};
</script>
