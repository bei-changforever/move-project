<template>
  <div id="head">
    <div class="head">
      <router-link class="maoyanindex" to="/" style="color: white"
        >猫眼视频</router-link
      >
      <span v-if="list.nm">&nbsp;>&nbsp;{{ list.nm }}</span>
    </div>
    <div class="top">
      <div class="left"><img :src="list.img" alt="" width="70px" /></div>
      <div class="right">
        <div class="t-nm">{{ list.nm }}</div>
        <div class="t-enm">{{ list.enm }}</div>
        <div class="t-cat">{{ list.cat }}</div>
        <div class="t-star">{{ list.star }}</div>
        <div class="t-onlineDate">{{ list.onlineDate }}</div>
        <div class="btn">
          <div class="want" @click="isShow = !isShow">
            {{ isShow ? "♡想看" : "已想看" }}
          </div>

          <div class="wacthed" @click="setArray(list)">☆看过</div>
        </div>
      </div>
      <div class="topb" v-show="!isShow">又是一部想看的电影诶</div>
    </div>

    <div class="content">
      <div class="c-text">
        <span class="c-t1">猫眼购票评分</span>
        <span class="c-t2">{{ list.wish }} 人想看</span>
        <span class="c-t3">{{ list.watched }} 人看过> </span>
      </div>
      <div class="c-score">{{ list.sc }} 分</div>
      <div class="c-snum">{{ list.snum }} 人评</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // list: [],
      stars: [],
      isShow: true,
      show: false,
      img: require("../../assets/我的资源/serve1.jpg"),
    };
  },
  computed: {
    ...mapState(["arr1"]),
  },

  props: {
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
    id: {
      type: String,
      default: "",
    },
  },
  methods:{
    ...mapMutations(["setImgAndText"]),
    //  setArray(list1) {
    //     var imgAndText = {
    //       img: list1.img,
    //       text: list1.nm,
    //     };
    //     console.log(imgAndText)
    //     this.$toast("已成功加入看过！");
    //     this.setImgAndText(imgAndText)
    //   },
    setArray(a) {
      var show = true;
      
      // console.log("====================")
      // console.log(this.arr.length)
      if (this.arr1.length > 0) {
        for (var i = 0; i < this.arr1.length; i++) {
          if (this.arr1[i].text == a.nm) {
            show = false;
            this.$toast("无法重复加入哦！");
          }
        }
      }
      if (show) {
        // this.setImgAndText(a);
        // this.$toast("已成功加入看过！");
        var imgAndText = {
          img: a.img,
          text: a.nm,
        };
        console.log(imgAndText);
        this.$toast("已成功加入看过！");
        this.setImgAndText(imgAndText);
      }
    },
  }
};
</script>

<style scoped>

#film .head {
  padding: 20px 0 20px 0;
  color: white;
  font-size: 10px;
  font-weight: 500;
  font-family: inherit;
}

#film .top {
  display: flex;
  flex-wrap: wrap;
}

img {
  width: 90px;
}

.top .right {
  font-size: 10px;
  color: white;
  margin-left: 15px;
  width: 69%;
}

.top .right .t-star {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.top .right > div {
  margin-bottom: 5px;
}

.top .right > div:nth-of-type(n + 2) {
  color: grey;
}

.top .right .t-nm {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
}

.top .right .btn > div {
  float: left;
  width: 113.5px;
  height: 30px;
  color: white;
  background-color: rgba(128, 128, 128, 0.2);
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
}

.top .right .btn > div:nth-of-type(2) {
  margin-left: 10px;
}

.topb {
  margin-top: 10px;
  font-size: 15px;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  line-height: 50px;
  background-color: rgba(128, 128, 128, 0.2);
  /* margin: 15px 15px 15px 0; */
  border-radius: 2px;
}

.content {
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 60px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.content .c-text {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.content .c-text .c-t2 {
  margin-left: 30px;
}

.content .c-text > span:nth-of-type(n + 2) {
  color: grey;
}

.content .c-t3 {
  margin-left: -50px;
}

.content .c-score {
  text-align: center;
}

.content .c-snum {
  font-size: 10px;
  color: grey;
  text-align: center;
}
</style>