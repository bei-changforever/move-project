<template>
  <div id="film">
    <HeadAndContent :list="list"></HeadAndContent>
    <Introduce :list="list" :stars="stars"></Introduce>
  </div>
</template>

<style scoped>
#film {
  margin-top: -50px;
  color: white;
  background-color: #1a2e40;
  padding: 0 15px;
}
</style>

<script>
import HeadAndContent from "../components/filmView/HeadAndContentComponent.vue";
import Introduce from "../components/filmView/IntroduceComponent.vue";
export default {
  data() {
    return {
      list: [],
      stars: [],
    };
  },
  components: {
    HeadAndContent,
    Introduce
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  created() {
    this.getM();
  },
  methods: {
    async getM() {
      await this.axios
        .get(`https://apis.netstart.cn/maoyan/movie/detail?movieId=${this.id}`)
        .then((re) => {
          console.log(re);
          this.list = re.data.movie;
          this.stars = re.data.celebrities;
        });
    },
  },
};
</script>

