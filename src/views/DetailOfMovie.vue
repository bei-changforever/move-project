<template>
  <div id="detailofmovie">
    <div class="head">
      <div class="hbox">
        <div class="left" @click="back()">返回</div>
        <div class="middle">{{ movie.nm }}</div>
      </div>
    </div>
    <cinema2 :movie="movie"></cinema2>
    <van-tabs animated @click="getDate">
      <van-tab :title="getDay(0)">
        <cinema :date="date"></cinema>
      </van-tab >
      <van-tab :title="getDay(1)">
        <cinema :date="date"></cinema>
      </van-tab>
      <van-tab :title="getDay(2)">
        <cinema :date="date"></cinema>
      </van-tab>
    </van-tabs>
  </div>
</template>


<style scoped>
.head {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.hbox {
  height: 50px;
  width: 100%;
  background-color: red;
  line-height: 50px;
  text-align: center;
  color: white;
  position: relative;
}

.head .left {
  position: absolute;
  left: 10px;
}
</style>

<script>
import { mapState } from "vuex";
import cinema from "../components/DetailOfMovie/CinemaComponent.vue"
import cinema2 from "../components/DetailOfMovie/CinemaComponent2.vue"
export default {
  data() {
    return {
      movie: {},
      date: [],
      year: "",
      month: "",
      day: "",
    };
  },
  computed: {
    ...mapState(["cityid"]),
  },
  components: {
    cinema,
    cinema2
  },
  props: {
    i: {
      type: String,
      default: "",
    },
  },
  created() {
    this.getMovie();
    this.getDate();
  },
  // mounted(){
      
  // },
  methods: {
    async getMovie() {
      await this.axios
        .get(`https://apis.netstart.cn/maoyan/movie/detail?movieId=${this.i}`)
        .then((re) => {
          // console.log(re);
          this.movie = re.data.movie;
        });
    },
    async getDate(name,title) {
      console.log(name);
      console.log(title);
      await this.axios
        .get(
          `https://apis.netstart.cn/maoyan/index/moreCinemas?day=${this.year}-${this.month}-${this.day}&movieId=${this.i}&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item&updateShowDay=true&reqId=1636710166221&cityId=${this.cityid}&lat=23.135636443326355&lng=113.42422402238324`
        )
        .then((re) => {
          // console.log(re);
          this.date = re.data;
        });
    },
    getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds);
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      this.year = tYear;
      this.month = tMonth;
      this.day = tDate;
      return tMonth + "月" + tDate + "日";
    },
    doHandleMonth(month) {
      var m = month;
      if (month.toString().length == 1) {
        m = "0" + month;
      }
      return m;
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>


