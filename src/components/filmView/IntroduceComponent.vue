<template>
  <div id="introduce">
    <div class="introduce">
      <div class="i-text">
        <div class="i-t-top">
          <span>简介</span>
          <span @click="show = !show">展开</span>
        </div>
        <div class="i-content" :class="show ? 'i-active' : 'i-no'">
          {{ list.dra }}
        </div>
      </div>
      <div class="i-actors">
        <div class="a-text">
          <span>演职人员</span>
          <span>全部></span>
        </div>
        <ul>
          <li v-for="(s, index) in stars" :key="index">
            <div class="s-img"><img :src="img" alt="" /></div>
            <div class="s-name">{{ s.cnm }}</div>
          </li>
        </ul>
      </div>
      <div class="pic">
        <div class="v-text">视频推荐</div>
        <video :src="list.videourl" controls width="100%"></video>
        <div>剧照</div>
        <ul>
          <li v-for="(p, index) in list.photos" :key="index">
            <img :src="p" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      img: require("../../assets/我的资源/notme.jpeg"),
    };
  },
  props: {
    stars: {
      type: Array,
      default: () => {
        return []
      }
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
};
</script>

<style scoped>
/* 击穿滑动条 */
::-webkit-scrollbar{
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}
img {
  width: 90px;
}

.i-active {
  display: block;
}

.i-no {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.introduce .i-text .i-t-top {
  display: flex;
  justify-content: space-between;
}

.i-actors ul {
  display: flex;
  overflow: auto;
}

.i-t-top,
.a-text,
.i-content {
  font-size: 10px;
}

.i-content {
  line-height: 20px;
}

.i-actors .a-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.i-actors ul li {
  margin-right: 10px;
  font-size: 10px;
  width: 90px;
}

.i-actors ul li .s-name {
  width: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  height: 20px;
  line-height: 20px;
}

.introduce .i-text .i-t-top {
  margin-top: 5px;
  margin-bottom: 10px;
}

.introduce .i-text .i-content {
  margin-bottom: 10px;
}

.pic > div {
  margin: 10px 0;
  font-size: 10px;
}

.pic video {
  border-radius: 10px;
}

.pic ul {
  display: flex;
  overflow: auto;
}

.pic ul li {
  margin-right: 10px;
}

.pic ul li img {
  height: 150px;
  width: auto;
}
</style>