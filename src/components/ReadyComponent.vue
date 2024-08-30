<template>
  <div id="ready">
    <div class="top">近期最受欢迎</div>
    <div class="cbox">
      <ul class="content1">
        <li v-for="r in ready.coming" :key="r.id" @click="leap(r.id)">
          <div class="c-img">
            <img :src="r.img" alt="" />
            </div>
          <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img :src="r.img" alt="" />
              </div>

            </div>
          </div> -->
          <div class="c-name">{{ r.nm }}</div>
          <div class="c-wish">{{ r.wish }}</div>
          <div class="c-title">{{ r.comingTitle }}</div>
        </li>
      </ul>
    </div>

    <div class="top2">2022年 待定</div>
    <div class="content12">
      <ul>
        <li v-for="r2 in ready2.coming" :key="r2.id">
          <div class="msg">
            <div class="left" @click="leap(r2.id)"><img :src="r2.img" alt="" /></div>
            <div class="middle" @click="leap(r2.id)">
              <div class="m-top">{{ r2.nm }}</div>
              <div class="m-star">主演：{{ r2.star }}</div>
              <div class="m-show">{{ r2.showInfo }}</div>
            </div>
            <div class="right">
              <div class="r-score">{{ r2.wish }}<span>人想看</span></div>
              <div class="r-buy" @click="buy(r2.id)">预售</div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css'
// import 'swiper/js/swiper.min'
export default {
  data() {
    return {
      ready: [],
      ready2: [],
    };
  },
  created() {
    this.getReady();
    this.getReady2();
  },

  methods: {
    // bannerPoint() {
    //   new Swiper(".swiper-container", {
    //     observer: true, //修改swiper自己或子元素时，自动初始化swiper
    //     observeParents: true,//修改swiper的父元素时，自动初始化swiper
    //   slidesPerView: 3,
    //     spaceBetween: 30,
    //     freeMode: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });

    // },
    async getReady() {
      await this.axios
        .get(
          "https://apis.netstart.cn/maoyan/index/mostExpected?ci=1&limit=10&offset=0"
        )
        .then((re) => {
          console.log(re);
          this.ready = re.data;
        });
    },
    async getReady2() {
      await this.axios
        .get("https://apis.netstart.cn/maoyan/index/comingList?ci=1&limit=10")
        .then((re) => {
          // console.log(re);
          this.ready2 = re.data;
        });
    },
    leap(id) {
      this.$router.push("/film/" + id);
    },
    buy(i) {
      console.log(i);
      // this.id = i;
      this.$router.push("/dMovie/" + i);
    },
  },
};
</script>

<style scoped>

/* .swiper {
    width: 600px;
    height: 300px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 80px;
    height: 100px;
}

.swiper-slide img {
    display: block;
    width: 100%;
} */
::-webkit-scrollbar{
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}

.cbox {
  width: inherit;
  height: auto;
  background-color: transparent;
  overflow: auto;
}

.top {
  font-size: 18px;
  font-weight: 700;
  margin: 5px 10px;
}

.top2 {
  font-size: 18px;
  font-weight: 700;
  margin: 20px 10px;
  margin-bottom: -15px;
}

img {
  width: 70px;
}

.content1 {
  display: flex;
  z-index: 10;
  padding: 0 5px;
}

.content1 li {
  display: inline-block;
  width: 110px;
  height: 170px;
  font-size: smaller;
  margin-right: 10px;
  line-height: 20px;
  color: #aaa8a8;
}

.content1>li .c-name {
  width: 90px;
  color: black;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.content1 li:last-child .c-title {
  margin-bottom: 60px;
}




.content12 {
  margin-top: 20px;
}

.content12 ul {
  padding: 0 5px;
}

.content12 ul li .msg {
  padding: 5px;
  display: flex;
}

.content12 ul li:last-child .msg {
  margin-bottom: 50px;
}

.middle {
  padding: 10px;
  padding-top: 0;
  width: 42%;
  color: grey;
  font-size: small;
}

hr {
  color: #aaa8a8;
}

.middle>div:nth-of-type(n + 2) {
  margin-top: 10px;
}

.middle .m-top {
  font-size: 20px;
  font-weight: 700;
  color: gray;
}

.middle .m-star {
  width: 220px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.right .r-score {
  color: orange;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.right .r-score span {
  font-size: 2px;
}

.right .r-buy {
  width: 45px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: grey;
  color: white;
  border-radius: 5px;
  font-size: smaller;
  margin-left: 40px;
}
</style>