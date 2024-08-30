<template>
  <div class="box">
    <div class="head">评价结果</div>
    <div class="content">
      <ul>
        <li v-for="(a, index) in arr1" :key="index">
          <div class="left"><img :src="a.img" alt="" width="70px" /></div>

          <div class="content-two">
            <div class="t-nm">
              <div class="t-nm1">{{ a.text }}</div>
              <div class="china">中国巨幕3D</div>
            </div>
            <div class="star">
              <van-rate v-model="$route.params.caiArrBool[index]" :count="6" />
            </div>
            <div class="inputval">{{$route.params.caiArr2[index]}}</div>
          </div>
        </li>
      </ul>

      <!-- <div class="left"><img :src="arr1[$route.params.i].img" alt="" width="70px" /></div>

          <div class="content-two">
            <div class="t-nm">
              <div class="t-nm1">{{ arr1[$route.params.i].text }}</div>
              <div class="china">中国巨幕3D</div>
            </div>
            <div class="star">
              <van-rate v-model="$route.params.caiArrBool[$route.params.i]" :count="6" />
            </div>
             <div class="inputval">{{$route.params.caiArr2}}</div>
    </div> -->
     </div> 
  </div>
 
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: this.arr1,
      ins: this.$route.params.i,
    };
  },
  props: {
    arr2: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  created() {
    this.to();
  },

  computed: {
    ...mapState(["arr1","orders"]),
  },
  methods: {
    to() {
      console.log(this.orders);
    },
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
  border: 1px solid rgba(132, 129, 129, 0.3);
}
.content {
  height: auto;
}
.content ul li {
  display: flex;
}

.content ul li:last-child {
  margin-bottom: 45px;
}
.content ul li .content-two {
  padding-left: 15px;
  padding-top: 20px;
}
.content ul li .t-nm {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-two .t-nm .t-nm1 {
  width: 150px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
  margin-top: 20px;
}
.content-two .inputval {
  width: 150px;
  font-size: 13px;
  color: gray;
  margin-top: 8px;
  padding-left: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content ul li .t-nm .china {
  width: 70px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  font-size: 2px;
  background-color: gray;
  border-radius: 2px;
  color: rgb(224, 220, 220);
  margin-right: 8px;
  margin-top: 8px;
}

.content .left img {
  width: 85px;
  height: 135px;
  border-radius: 10px;
  margin-left: 8px;
  margin-top: 20px;
}
.content .star {
  width: 140px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/* .inputval{
  color: black;
  background-color: aqua;
} */

.content .pinglun {
  width: 100px;
  height: 20px;
  font-size: 14px;
  color: grey;
  padding-left: 5px;
  padding-top: 8px;
}
.content ul li .content-three {
  padding-left: 15px;
  padding-top: 45px;
}
</style>