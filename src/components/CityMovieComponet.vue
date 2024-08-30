<template>
  <div id="cinema">
    <ul class="content">
      <li v-for="d in arrs" :key="d.cinemaId" @click="to(d.cinemaId)">
        <div class="box">
          <div class="left">
            <div class="name">{{ d.title }}</div>
            <div class="local">{{ d.location }}</div>
            <div class="other" v-if="d.services">
              <ul>
                <li v-for="(s, index) in d.services" :key="index">
                  &nbsp;{{ s.text }}&nbsp;
                </li>
              </ul>
            </div>
          </div>

          <div class="right">
            <div class="price">{{ d.price.n }}</div>
             <div class="rmb">{{ d.price.q }}</div>
          </div>
        </div> 
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      arrs: [],
      // cid: ""
      // c: this.cityid
    }
  },
  props: {

  },
  methods: {
    async getCityMovie() {
    
      await this.axios
        .get(`index/moreCinemas?day=2021-11-12&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item&updateShowDay=true&reqId=1636710166221&cityId=${this.cityid}&lat=23.135636443326355&lng=113.42422402238324`)
        .then((re) => {
          
          this.arrs = re.data
          // this.city = re.data;
        },err=>{
          console.log('errr',err.message);
        });
    },
    to(id) {
      this.$router.push("/cinemadetail/" + id)
    }


  },
  computed: {
    ...mapState(["cityid"])
  },
  created() {
    this.getCityMovie();
  },
  // 监听查看全局cityid是否不一样
  watch: {
    cityid: function (newName, oldName) {
      if (newName != oldName) {
        this.getCityMovie()
      }
    }
  }

}
</script>
<style  scoped>
/* .box{
  height: 50px;
  width: 100%;
  background-color:aqua;
}
.p{
  height: 45px;
  width: auto;
  margin-top: 5px;
  background-color:bisque;
} */
.content {
  border-top: 1px solid #a0a0a0;
  padding: 15px;
}

.content>li {
  margin: 10px 0;
}

.box {
  display: flex;
  justify-content: space-between;
}

.content>li:first-child {
  margin-top: 0;
}

.content>li:last-child {
  margin-bottom: -30px;
}

.content>li .left>div {
  margin-bottom: 5px;
  font-size: smaller;
}

.content>li .left>div:first-child {
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 700;
}

.content>li .left .local {
  width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

hr {
  margin-top: 10px;
}

.content>li .other>ul {
  display: flex;
  flex-wrap: wrap;
}

.content>li:last-child {
  margin-bottom: 20px;
}

.content>li .other>ul li {
  font-size: 3px;
  border: #3c3ceb 1px solid;
  border-radius: 2px;
  width: auto;
  padding: 2px 0;
  height: 15px;
  color: #3c3ceb;
  line-height: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.right {
  width: 70px;
  text-align: right;
  color: red;
}

.right>div {
  display: inline-block;
}

.right .rmb {
  font-size: 5px;
}
</style>
