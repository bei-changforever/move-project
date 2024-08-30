<template>
  <div id="movie">
    <div class="topBox">
      <div class="classify">
        <div class="k" style="height:50px"></div>
            <!-- <van-tabs class="tab" v-model="activeName" style="width: 100%" @click="name" @change="app"> -->
        <van-tabs class="tab" v-model="activeName" style="width: 100%" @click="name">
          <van-tab :title="cityname" name="d">
            <city @materials="getMaterials"  :activeName="activeName" :names="names" @material="getMaterial"></city>
          </van-tab>
          <van-tab title="热映" name="a">
            <hot></hot>
          </van-tab>
          <van-tab title="待映" name="b">
            <ready></ready>
          </van-tab>
          <van-tab title="影院" name="c"  replace>
            <movie :arr="arr" ></movie>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>


<script>
import city from "../components/CityComponent.vue"
import hot from "../components/HotComponent.vue"
import ready from "../components/ReadyComponent.vue"
import movie from "../components/CityMovieComponet.vue"
import { mapState , mapMutations} from 'vuex';
export default {
  data() {
    return {
      // list: [],
      // city: [],
      ready: [],
      isShow: false,
      activeName: "a",
      ico: "",
      names:"a",
      arr:[],
   
    
    };
  },
  components: {
    city,
    hot,
    ready,
    movie,
  },
  created() { 
    
  },
  methods: {
     ...mapMutations(["citynames","setactives"]),
    search() {
      this.$router.push("/search");
    },
    getMaterials(c) {
      this.citynames(c)
    },
    getMaterial(a) {
      console.log(a);
      this.activeName = a
    },

    // 传tab栏的值给子组件
    async name(aum) {
      if (aum == "a") {
        this.names = aum
      } else if (aum == "b") {
        this.names = aum
      } else if (aum == "c") {
        this.names = aum
    //     console.log(this.cityid);
      }
      // 切换赋值
     this.setactives(aum)
    },
  },
  computed: {
    ...mapState(["cityid","cityname"])
  },
};
</script>


<style>
#movie .topBox .classify .tab .van-tabs__wrap{
position: fixed;
top: 50px;
left: 0;
right: 0;
}
</style>

