<template>
  <div id="hot">
    <!-- <button @click="add">加载更多</button>
    <button @click="text">ceshi</button> -->
    <div class="content">
      <ul>
        <li v-for="(i, index) in list" :key="index">
          <div class="msg" v-if="i.img">
            <div class="left" @click="leap(i.id)">
              <img :src="i.img" alt="" />
            </div>
            <div class="middle" @click="leap(i.id)">
              <div class="m-top">{{ i.nm }}</div>
              <div class="m-star">主演：{{ i.star }}</div>
              <div class="m-show">{{ i.showInfo }}</div>
            </div>
            <div class="right">
              <div class="r-score" v-if="i.sc">{{ i.sc }}分</div>
              <!-- <div class="r-score" v-if="!i.sc">未评分</div> -->
              <div
                class="r-buy"
                @click="buy(i.id)"
                :style="{ backgroundColor: i.showStateButton.color }"
              >
                {{ i.showStateButton.content }}
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
      <div class="jiazai" @click="add" ref="onload">
        <van-loading color="red" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
      movie: [],
      id: 0,
      moveid: [],
      litemv: [],
      b: 0,
      c: 10,
      firstname: "a",
    };
  },
  props: {},

  created() {
    this.getList();
    // this.getMovie();
  },
  watch: {
    actives() {
      if (this.actives == "a") {
        console.log("开启事件====================");
        window.addEventListener("scroll", this.gethomelist);
      } else {
        console.log("关闭事件=============");
        window.removeEventListener("scroll", this.gethomelist);
      }
    },
  },
  computed: {
    ...mapState(["actives"]),
  },
  methods: {
    ...mapMutations(["setactives"]),
    text() {
      // console.log(this.list);
    },
    add() {
      let a = this.moveid.slice(this.b, this.c);
      this.b = this.b + 10;
      this.c = this.c + 10;
      // console.log(a);
      // console.log(this.list);
      this.axios.get(`index/moreComingList?movieIds=${a}`).then((re) => {
        // console.log("更多热映re===》", re);
        for (let i = 0; i < 10; i++) {
          this.list.push(re.data.coming[i]);
        }
      });
    },
    gethomelist() {
      // 获取页面卷去的距离
      let pageScroll = document.documentElement.scrollTop || document.scrollTop;

      // 获取页面可视高度
      let pageHeight = window.innerHeight;

      // 获取加载更多盒子距离顶部的距离
      let btnHeight = this.$refs.onload.offsetTop;

      // console.log(pageScroll, pageHeight, btnHeight);
      if (pageScroll + pageHeight - 30 >= btnHeight) {
        this.add();
      }
    },

    async getList() {
      await this.axios
        .get("https://apis.netstart.cn/maoyan/index/movieOnInfoList")
        .then((re) => {
          // console.log(re);

          this.list = re.data.movieList;
          // 存所有movieid
          this.moveid = re.data.movieIds;
          // 设置初始值  让watch运行
          this.setactives(this.firstname);
        });
    },
    async getMovie() {
      await this.axios
        .get("https://apis.netstart.cn/maoyan/movie/detail?movieId=" + this.id)
        .then((re) => {
          // console.log(re);
          this.movie = re.data;
        });
    },
    buy(i) {
      console.log(i);
      // this.id = i;
      this.$router.push("/dMovie/" + i);
    },
    leap(id) {
      this.$router.push("/film/" + id);
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 10px;
}

.content ul li {
  padding: 0 10px;
}

.content ul li .msg {
  padding: 5px;
  display: flex;
  justify-content: space-between;
}

.content ul li:last-child .msg {
  border: none;
  /* margin-bottom: 50px; */
}

img {
  width: 70px;
}

.middle {
  padding: 10px;
  padding-top: 0;
  width: 58%;
  color: grey;
  font-size: small;
}

hr {
  color: #aaa8a8;
}

.middle > div:nth-of-type(n + 2) {
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
  /* white-space:nowrap; */
}

.right .r-buy {
  width: 45px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: red;
  color: white;
  border-radius: 5px;
  font-size: smaller;
}

.jiazai {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 50px;
  margin-top: -20px;
}
</style>