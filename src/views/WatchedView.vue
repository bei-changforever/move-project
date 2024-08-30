<template>
  <div class="box">
    <div class="head">我看过的</div>
    <div class="headbottom">
      <div class="toal">共{{arr1.length}}部</div>
      <div class="bianji" @click="ishow()">编辑</div>
    </div>

    <div class="content">
      <ul>
        <li v-for="(a, index) in arr1" :key="index">
          <div class="left"><img :src="a.img" alt="" width="70px" /></div>

          <div class="content-two">
            <div class="t-nm">{{ a.text }}</div>
            <div class="star"><van-rate v-model="value" :count="6" /></div>
            <!-- <img src="../assets/我的资源/star.jpg" /> -->
            <div class="pinglun">快来写评论吧</div>
          </div>
          <div class="content-three">
            <div class="china">中国巨幕3D</div>
            <div class="content-right" v-show="!show" @click="toassess(index)">评分</div>
            <div class="content-right" v-show="show" @click="cancel(a.id)">删除</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  computed: {
    ...mapState(["arr1"]),
  },

  data() {
    return {
      list: this.arr1,
      show: false,
      value: 0,
    };
  },

  created() {
    this.to()
  },

  methods: {

    toassess(ids){
      this.$router.push("/assess/"+ids)
       
    },

    cancel(id) {
      this.arr1.forEach((item, index) => {
        if (item.id === id) {
          this.arr1.splice(index, 1);
          this.$toast("删除成功");
        }
      });
    },
    to(){
console.log(this.arr1);
    },
    ishow(){
      this.show = !this.show
    }
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.head {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
.headbottom {
  width: 100%;
  height: 40px;
  clear: both;
  background-color: rgb(240, 236, 236);
}
.headbottom .toal {
  width: 50px;
  height: 25px;
  line-height: 25px;
  float: left;
  margin-top: 5px;
  margin-left: 10px;
}
.headbottom .bianji {
  width: 50px;
  height: 25px;
  line-height: 25px;
  float: right;
  margin-top: 8px;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  background-color: white;
}
.content{
  height: auto;
}

.content ul li{
  display: flex;
}

.content ul li:last-child{
  margin-bottom: 45px;
}
.content ul li .content-two{
  padding-left: 15px;
  padding-top: 40px;
}
.content ul li .t-nm {
  width: 150px;
  height: 30px;
  font-size: 17px;
  font-weight: bold;
  padding-left: 5px;
  padding-bottom: 10px;
  /* position: absolute;
  top: 45px;
  left: 130px; */
}
.content .left img {
  width: 90px;
  height: 130px;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
}
.content .star {
  width: 140px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  /* position: absolute;
  top: 90px;
  left: 122px; */
}
.content .star img {
  width: 110px;
  height: 32px;
}
.content .content-right {
  width: 52px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border: 1px solid red;
  border-radius: 20px;
  color: white;
  font-size: 13px;
  background-color: rgb(242, 53, 53);
  margin-left: 10px;
  
  /* position: absolute;
  right: 15px;
  top: 90px; */
}
.content .china {
  width: 70px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  font-size: 2px;
  background-color: gray;
  border-radius: 2px;
  color: rgb(224, 220, 220);
  margin-bottom: 33px;
  /* position: absolute;
  top: 45px;
  left: 293px; */
}
.content .pinglun {
  width: 100px;
  height: 20px;
  font-size: 14px;
  color: grey;
  padding-left: 5px;
  padding-top: 8px;
  /* position: absolute;
  top: 130px;
  left: 125px; */
}
.content ul li .content-three{
  padding-left: 15px;
  padding-top: 40px;
}

</style>
