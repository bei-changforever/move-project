<template>
  <div class="box">
    <div class="head">评价</div>
    <!-- <div class="headbottom">
      <div class="toal">共1部</div>
      <div class="bianji" @click="ishow()">编辑</div>
    </div> -->
<!-- v-show="index==$route.params.i? 1:0" -->
    <div class="content">
      <ul>
        <li v-for="(a, index) in arr1" :key="index" >
          <div class="left"><img :src="a.img" alt="" width="70px" /></div>

          <div class="content-two">
            <div class="t-nm">
              <div class="t-nm1">{{ a.text }}</div>
              <div class="china">中国巨幕3D</div>
            </div>
            <div class="star"><van-rate v-model="arrBool[index]" :count="6" /></div>
            <form>
              <textarea
                type="text"
                placeholder="快来写你的评论吧！"
                style="font-size: 13px"
                v-model="arr2[index]"
              ></textarea>
              <input type="button" value="保存" class="save" @click="save(index)" />
              <input
                type="button"
                value="删除"
                class="save1"
                @click="cancel(a.id)"
              />
            </form>
          </div>
        </li>
      </ul>
 <!-- <div class="left"><img :src="arr1[ids].img" alt="" width="70px" /></div>

          <div class="content-two">
            <div class="t-nm">
              <div class="t-nm1">{{ arr1[ids].text }}</div>
              <div class="china">中国巨幕3D</div>
            </div>
            <div class="star"><van-rate v-model="arrBool[ids]" :count="6" /></div>
            <form>
              <textarea
                type="text"
                placeholder="快来写你的评论吧！"
                style="font-size: 13px"
                v-model="arr2[q]"
              ></textarea>
              <input type="button" value="保存" class="save" @click="save(ids,q)" />
              <input
                type="button"
                value="删除"
                class="save1"
                @click="cancel(arr1[ids].id)"
              />
            </form>
          </div> -->

    </div>
  </div>
</template>

<script>
import { mapState ,mapMutations} from "vuex";
export default {
  methods: {
    ...mapMutations("setorders"),
    cancel(id) {
      this.arr1.forEach((item, index) => {
        if (item.id === id) {
          this.arr1.splice(index, 1);
          this.$toast("删除成功");
        }
      });
    },
    save(a) {



      // console.log("====")
      // console.log(this.arrBool)
      // console.log("======")
      // console.log(this.arr2 )
      // this.arr2.push(this.val);
      this.$router.push({
        name:'discuss',
        params:{
          caiArr2:this.arr2,
          caiArrBool:this.arrBool,
          i:a
        }
      });
     
      this.$toast("保存成功");  
    },
  },

  computed: {
    ...mapState(["arr1","orders"]),
  },
  created(){
    
    console.log(this.arr1)
  },
  props:{
    ids:{
      type:Number,
      default:0
    }
  },

  data() {
    return {
      list: this.arr1,
      show: false,
      value: 0,
      arrBool:[],
      arr2: [],
      q:0
    };
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
.content{
  height: auto;
}
.content ul li {
  display: flex;
}

.content ul li:last-child{
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
  /* margin-bottom: 5px; */
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
.content-two form {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.content-two form .save {
  width: 40px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  border-radius: 15px;
  color: white;
  background-color: red;
  margin: 0px 5px;
}
.content-two form .save1 {
  width: 40px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  border-radius: 15px;
  color: white;
  background-color: red;
  margin: 0px 5px;
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
.content .star img {
  width: 110px;
  height: 32px;
}
.content-two textarea {
  width: 160px;
  height: 50px;
  border: 1px solid rgba(159, 154, 154, 0.5);
}
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