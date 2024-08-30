<template>
  <div id="cinema">
    <ul class="content">
      <li v-for="d in date" :key="d.cinemaId" @click="tos(d.cinemaId)">
        <div class="box">
          <div class="left">
            <div class="name">{{ d.title }}</div>
            <div class="local">{{ d.location }}</div>
            <div class="other" v-if="d.services">
              <ul>
                <li v-for="(s, index) in d.services" :key="index">
                  {{ s.text }}
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
export default {
  props: {
    date: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods:{
    tos(id){
        this.$router.push("/cinemadetail/" + id)
    }
  }
};
</script>

<style scoped>
.content {
  border-top: 1px solid #a0a0a0;
  padding: 15px;
}

.content > li {
  margin: 10px 0;
}

.box {
  display: flex;
  justify-content: space-between;
}

.content > li:first-child {
  margin-top: 0;
}

.content > li:last-child {
  margin-bottom: -30px;
}

.content > li .left > div {
  margin-bottom: 5px;
  font-size: smaller;
}

.content > li .left > div:first-child {
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 700;
}

.content > li .left .local {
  width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

hr {
  margin-top: 10px;
}

.content > li .other > ul {
  display: flex;
  flex-wrap: wrap;
}

.content > li .other > ul li {
  font-size: 3px;
  border: #3c3ceb 1px solid;
  border-radius: 2px;
  width: auto;
  padding: 2px;
  height: 15px;
  color: #3c3ceb;
  line-height: 15px;
  margin-right: 5px;
  margin-top: 10px;
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