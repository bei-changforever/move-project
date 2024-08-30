<template>
  <div id="city">
    <div class="cities">
      <div class="cs">热门城市</div>
      <ul class="hotCity">
        <li @click="click(c)" v-for="(c, index) in city.hot" :key="index">
          {{ c }}
        </li>
      </ul>
      <div class="cs">其他</div>

      <ul>
        <li v-for="(ci, index) in city.cts" :key="index">
          <van-cell :title="ci.nm" @click="click(ci.nm, ci.id)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      city: [],
      name: "",
    };
  },
  props: {
    citys: {
      type: String,
      default: "",
    },
    activeName: {
      type: String,
      default: "",
    },
    names: {
      type: String,
      default: "",
    }
  },
  created() {
    this.getCity();
  },
  computed: {
    ...mapState(["cityid"]),
  },
  methods: {
    ...mapMutations(["setcityid","setactives"]),
    async getCity() {
      await this.axios
        .get("https://apis.netstart.cn/maoyan/cities.json")
        .then((re) => {
          console.log(re);
          console.log(this.activeName,'askfhkjsahfk');
          this.city = re.data;
        });
    },
// 获取城市id
    click(c, cityid) {
      console.log(c);
      console.log(cityid);
      // 传城市名字
      this.$emit("materials", c);
      // 传tab的name值给父组件
      this.$emit("material",this.names);
      // 全局存城市id

      this.setcityid(cityid);
      if(this.names=="a"){
        this.setactives("a")
      }
      
    },
  },
 
};
</script>

<style scoped>
.cities .hotCity {
  display: flex;
  flex-wrap: wrap;
}

.cities .cs {
  margin: 10px 0 0 10px;
}

.cities .hotCity li {
  width: auto;
  height: 30px;
  line-height: 30px;
  background-color: #aaa8a8;
  padding: 0 5px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  font-size: smaller;
}
</style>