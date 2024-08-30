<template>
  <div class="box">
    <div class="video">
      <!-- <div class="title">
            <div class="title-centen">猫眼电影</div>
            <div class="title-right"><img src="" alt=""></div>
        </div> -->
      <!-- <div class="head">
            <div class="head-img"></div>
            <div class="head-one"></div>
            <div class="head-two"></div>
            <div class="head-three"></div>
        </div> -->
      <div class="content">
        <div class="content-head">
          <ul>
            <li v-for="(item, index) in list.feeds" :key="index" @click="video(list.feeds[index])">
              <div class="content-content">
                <!-- <a :href="item.video.url">
                                 </a> -->
                <img
                  :src="item.shareInfo.img"
                  alt=""
                  
                />
                <div class="content-content-title">
                  <p>{{ item.shareInfo.title }}</p>
                </div>
                <div class="content-content-img">
                  <img :src="item.user.avatarurl" alt="" />
                  <p>{{ item.user.nickName }}</p>
                  <i>点赞</i>
                </div>
              </div>
            </li>
            <div class="ding"></div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "LastprojectVideoView",

  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getvideo();
  },
  computed: {
    ...mapState(["arr"]),
  },

  methods: {
    ...mapMutations(["seturl"]),
    async getvideo() {
      await this.axios
        .get(`https://apis.netstart.cn/maoyan/video/short/0`)
        .then((re) => {
          console.log(re);
          this.list = re.data.data;
        });
    },
    video(a) {
      // console.log(url);
      this.$router.push("/videodetailview");
      this.seturl(a);
    },
  },
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  margin-top: -10px;
}
.ding {
  width: 350px;
  height: 35px;
}
.video .title {
  display: flex;
}

.video .title .title-centen {
  width: 100%;
  height: 50px;
  color: aliceblue;
  background-color: red;
  line-height: 50px;
  text-align: center;
}

.head {
  width: 100%;
  height: 60px;
}

.content-head {
  display: flex;
  justify-content: space-between;
}

.content-head ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 350px;
  /* line-height: 350px; */
}

.content-head ul li {
  width: 49%;
  height: 100%;
  list-style: none;
  background-color: black;
  position: relative;
  border: 1px solid white;
      display: flex;
    align-items: center;
  
}

.content-head img {
  /* width: 100%;
    height: auto;
    display: inline-block; */
  width: auto;
  height: auto;

  max-width: 100%;
  max-height: 100%;
}

.content-content-title > p {
  position: absolute;
  bottom: 50px;
  width: auto;
  height: auto;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;
  color: aliceblue;

  margin-left: 5px;
}

.content-content-img > p {
  position: absolute;
  left: 40px;
  bottom: 20px;
  color: aliceblue !important;
  width: auto;
  height: 25px;
  font-size: 5px;
  line-height: 25px;
}

.content-content-img img {
  /* z-index: 999; */
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 20px;
  left: 10px;
  border-radius: 50%;
}

i {
  position: absolute;
  left: 150px;
  bottom: 25px;
  color: aqua;
}
</style>