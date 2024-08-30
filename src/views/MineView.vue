<template>
  <div class="box">
    <div class="headfirst">我的</div>
    <ul>
      <li>
        <div class="head">
          <div class="head-img">
            <img src="../assets/我的资源/head.jpg" alt="" />
          </div>
          <!-- 头像 -->
          <div class="head-right">
            <div class="head-right1">I'm</div>
            <!-- 用户名 -->
            <div class="head-right2">普通用户</div>
            <!-- 用户属性 -->
            <!-- <div class="head-right3">个人主页</div> -->
            <van-button round type="info" class="head-right3"
              >个人主页</van-button
            >
          </div>
          <div class="center">
            <div class="center-left" @click="towatch">
              想看 7
              <div class="center-left1">> |</div>
            </div>
            <div class="center-right1" @click="towatched">看过 1</div>
            <div class="center-right2" @click="towrite">待评价 1 ></div>
          </div>
          <div class="vip">
            <div class="vip-img">
              <img src="../assets/我的资源/huiyuan.jpg" />
            </div>
            <div class="vip-change"><van-progress  color="#f1c40f" :percentage="25" pivot-text="" stroke-width="6px"/></div>
            <div class="vip-right1">普通用户</div>
            <div class="vip-right2">进入</div>
            <!-- 会员中心 -->
          </div>

          <div class="mine1">
            <div class="minebuy">我的订单</div>
            <div class="mineimg">
              <van-badge :content="3"><img src="../assets/我的资源/buy4.jpg" alt="" /></van-badge>电影票
            </div>
            <div class="mineimg">
              <van-badge :content="2"><img src="../assets/我的资源/buy3.jpg" alt="" /></van-badge>演出票
            </div>
            <div class="mineimg">
              <img src="../assets/我的资源/buy2.jpg" alt="" />在线观影
            </div>
            <div class="mineimg">
              <van-badge :content="8"><img src="../assets/我的资源/buy1.jpg" alt="" /></van-badge>周边
            </div>
          </div>

          <div class="mine2">
            <div class="myassets">我的资产</div>
            <div class="content1">
              优惠卷
              <div class="bottom"><p>0</p></div>
            </div>
            <div class="content2">
              折扣卡
              <div class="bottom"><p>开卡立省</p></div>
            </div>
            <div class="content3">
              猫享卡
              <div class="bottom"><p>去绑卡</p></div>
              
            </div>
            <div class="content4">
              喵币
              <div class="bottom"><p>0</p></div>
            </div>
          </div>

          <div class="mine3">
            <div class="myserve">我的服务</div>
           <div class="content">
              <div class="content1">
               <img src="../assets/我的资源/serve8.jpg" alt="" /><p>买一赠一卷</p>
              </div>
              <div class="content2">
                <img src="../assets/我的资源/serve7.jpg" alt="" /><p>关注公众号</p>
              </div>
              <div class="content3">
               <img src="../assets/我的资源/serve6.jpg" alt="" /><p>9元看电影</p>
              </div>
              <div class="content4">
                <img src="../assets/我的资源/serve5.jpg" alt="" /><p>猫眼商城</p>
              </div>
              <div class="content5">
                <img src="../assets/我的资源/serve4.jpg" alt="" /><p>在线观影</p>
              </div>
              <div class="content6">
               <img src="../assets/我的资源/serve3.jpg" alt="" /><p>云包场</p>
              </div>
              <div class="content7">
                <img src="../assets/我的资源/serve2.jpg" alt="" /><p>银行活动</p>
              </div>
              <div class="content8">
                <img src="../assets/我的资源/serve1.jpg" alt="" /><p>看小说</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data() {},
  methods:{
  towatch() {
      this.$router.push("/watch");
    },
    towatched(){
      this.$router.push("/watched")
    },
    towrite(){
      this.$router.push("/write")
    },
}
};


</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.headfirst {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: red;
  color: white;
  font-size: 18px;
  box-sizing: border-box;
}
.head {
  width: 100%;
  position: relative;
  background: linear-gradient(red 25%,white 43%) fixed;
}
.head-img {
  width: 85px;
  height: 80px;
  text-align: center;
  background-color: red;
}
.head-img img {
  border-radius: 100%;
  border: 3px solid white;
  margin-left: 15px;
}
.center {
  background-color: red;
}
.head-right .head-right1 {
  width: 100px;
  background-color: red;
  color: white;
  text-align: center;
  position: absolute;
  left: 90px;
  top: 15px;
  font-size: 25px;
}
.head-right .head-right2 {
  width: 60px;
  text-align: center;
  color: white;
  border-radius: 10px;
  background-color: #e55039;
  font-size: 5px;
  border: 1px solid lightgray;
  position: absolute;
  left: 110px;
  top: 50px;
  opacity: 0.6;
}
.head-right .head-right3 {
  background-color: rgba(255, 255, 255, 0.3);
  width: 90px;
  height: 30px;
  color: white;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  border: 0px solid red;
  position: absolute;
  right: 5px;
  top: 25px;
  opacity: 0.6;
}
.center {
  width: 90%;
  height: 55px;
  position: relative;
  margin-top: 10px;
  margin-left: 18px;
  display: flex;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  /* opacity: 0.6; */
}
.center .center-left {
  width: 180px;
  height: 55px;
  line-height: 55px;
  color: white;
  position: relative;
  padding-left: 10px;
}
.center .center-left .center-left1 {
  height: 30px;
  position: absolute;
  top: 0px;
  right: 2px;
  color: lightgray;
}
.center .center-right1 {
  width: 80px;
  height: 55px;
  line-height: 55px;
  color: white;
  padding-left: 10px;
}
.center .center-right2 {
  width: 80px;
  height: 55px;
  line-height: 55px;
  color: lightgrey;
  font-size: 8px;
  text-align: right;
  margin-right: 8px;
}
.vip {
  width: 90%;
  height: 80px;
  background-color: white;
  border-radius: 15px;
  margin-top: 12px;
  position: relative;
  left:20px;
}
.vip img {
  width: 55px;
  height: 55px;
  border-radius: 100%;
  position: absolute;
  top: 12px;
  left: 15px;
}
.vip .vip-change{
  width: 150px;
  height: 20px;
  position: absolute;
  top:34px;
  left:92px
}
.vip .vip-right1 {
  width: 50px;
  text-align: center;
  color: black;
  border-radius: 5px;
  font-size: 7px;
  font-weight: bold;
  border: 1.5px solid rgb(187, 183, 183);
  position: absolute;
  left: 90px;
  top: 50px;
  opacity: 0.6;
}
.vip .vip-right2 {
  width: 50px;
  height: 25px;
  line-height: 25px;
  color: rgb(216, 36, 36);
  font-weight: bold;
  text-align: center;
  position: absolute;
  right: 15px;
  top: 26px;
  border: 1px solid rgb(146, 32, 32);
  border-radius: 20px;
}
.mine1 {
  width: 90%;
  height: 135px;
  background-color: white;
  margin-top: 12px;
  margin-left: 20px;
  border-radius: 15px;
  position: relative;
  display: flex;
  box-shadow: 3px 3px 5px rgb(187, 183, 183);
}
.mine1 .minebuy {
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  left: 20px;
}
.mineimg {
  width: 50px;
  height: 65px;
  padding-top: 50px;
  padding-left: 27px;
  font-size: 10px;
  text-align: center;
}

.mine2 {
  width: 100%;
  height: 135px;
  margin-top: 15px;
  background-color: white;
  position: relative;
  display: flex;
}
.mine2 .myassets {
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  left: 20px;
}
.mine2 .content1 {
  width: 75px;
  height: 35px;
  color: rgb(226, 27, 226);
  font-size: 13px;
  border: 1px solid black;
  background-color: rgba(223, 189, 223, 0.4);
  border-radius: 10px;
  text-align: center;
  padding: 7px 0px;
  font-weight: 600;
  position: absolute;
  top: 50px;
  right: 275px;
}
.mine2 .content2 {
  width: 75px;
  height: 35px;
  color: rgb(227, 199, 57);
  font-size: 13px;
  border: 1px solid black;
  background-color: rgba(223, 218, 119, 0.4);
  border-radius: 10px;
  text-align: center;
  padding: 7px 0px;
  font-weight: 600;
  position: absolute;
  top: 50px;
  right: 190px;
}
.mine2 .content3 {
  width: 75px;
 height: 35px;
  font-size: 13px;
  color: rgb(32, 127, 209);
  border: 1px solid black;
  background-color: rgba(146, 183, 229, 0.4);
  border-radius: 10px;
  text-align: center;
  padding: 7px 0px;
  font-weight: 600;
  position: absolute;
  top: 50px;
  right: 104px;
}
.mine2 .content4 {
  width: 75px;
height: 35px;
  color: rgb(227, 199, 57);
  font-size: 13px;
  border: 1px solid black;
  background-color: rgba(203, 228, 112, 0.4);
  border-radius: 10px;
  text-align: center;
  padding: 7px 0px;
  font-weight: 600;
  position: absolute;
  top: 50px;
  right: 18px;
}
.bottom p{
  font-size: 5px;
  color: rgb(73, 188, 172);
}
.mine3{
  width: 100%;
  height: 300px;
  background-color: white;
  position: relative;
  display: flex;
}
.mine3 .myserve{
   width: 100px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  left: 20px;
}
.mine3 .content{
  width: 100%;
  height: 280px;
  display: flex;
  position: relative;
}
.mine3 .content .content1{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 7px;
  top: 70px;
}
.mine3 .content .content2{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 91px;
  top: 70px;
}
.mine3 .content .content3{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 179px;
  top: 70px;
}
.mine3 .content .content4{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 266px;
  top: 70px;
}
.mine3 .content .content5{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
   left: 7px;
  top: 160px;
}
.mine3 .content .content6{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 90px;
  top: 160px;
}
.mine3 .content .content7{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 179px;
  top: 160px;
}
.mine3 .content .content8{
  width: 100px;
  height: 60px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 266px;
  top: 160px;
}
.mine3 .content .content1 img{
  width: 40px;
  height: 40px;
}
.mine3 .content .content2 img{
  width: 40px;
  height: 40px;
}
.mine3 .content .content3 img{
  width: 40px;
  height: 40px;
}
.mine3 .content .content4 img{
  width: 40px;
  height: 40px;
}
.mine3 .content .content5 img{
  width: 40px;
  height: 40px;
}
.mine3 .content .content6 img{
  width: 40px;
  height: 40px;
}
.mine3 .content .content7 img{
  width: 40px;
  height: 40px;
}
.mine3 .content .content8 img{
  width: 40px;
  height: 40px;
}
p{
  text-align: center;
  margin-top: 6px;
}
</style>