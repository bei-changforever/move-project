<template>
  <div id="hwel">
    <img src="../assets/我的资源/welcome_pic.jpg" alt="" />

    <ul class="content1">
      <li v-for="(m,index) in movies.coming" :key="m.id"  @click="leap(m.id)">
        <div class="left" ><img :src="m.img" alt="" /></div>
        <div class="middle" >
          <div class="c-name">{{ m.nm }}</div>
          <div class="c-wish">{{ m.wish }}新增想看</div>
          <div class="c-title">{{ m.comingTitle }}</div>
        </div>
        <div class="right">NO.{{index+1}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      await this.axios
        .get(
          `https://apis.netstart.cn/maoyan/index/mostExpected?ci=1&limit=10&offset=0`
        )
        .then((re) => {
          // console.log(re);
          this.movies = re.data;
        });
    },
    leap(id) {
      this.$router.push("/film/" + id);
    },
  },
};
</script>

<style scoped>
#hwel {
  margin-top: -50px;
}

img {
  width: 90px;
  border-radius: 10px;
}

#hwel > img {
  width: 100%;
  border-radius: 0;
}

.content1 {
  display: flex;
  flex-direction: column;
  /* padding: 0 5px; */
  margin-top: 15px;
}
.content1 li {
  display: flex;
  /* width: 100%; */
  font-size: smaller;
  margin-left: 10px;
  line-height: 20px;
  color: #aaa8a8;
  margin-bottom: 15px;
  justify-content: space-between;
}

.content1 > li .c-name {
  width: auto;
  color: black;
  font-weight: 700;
  font-size: 20px;
}

.content1 > li .middle {
  margin-left: 10px;
  margin-top: 10px;
  width: 60%;
}

.content1 > li .middle .c-wish {
  margin-top: 15px;
}

.content1 > li .right {
  margin: 40px 10px 0 0;
  font-size: 25px;
  font-weight: 700;
  color: orange;
}

</style>