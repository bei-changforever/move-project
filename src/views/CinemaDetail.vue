<template>
    <div class="cinema">
        <div class="title">
            <div class="fanhui iconfont icon-fanhui" @click="jump" style="line-height: 50px; padding-left: 10px">返回
            </div>
            <div class="title-name">{{ list.cinemaName }}</div>
            <div class="bx"></div>
        </div>
        <div class="cinema-name" @click="tocinemamap(list.cinemaId)">
            <h3>{{ list.cinemaName }}</h3>
            <p>{{ movie.addr }}</p>
        </div>
        <!-- <div class="movie-banner">
            <ul>
                <li v-for="(item, index) in list.movies" :key="index">
                    item.id 影片id
                    <img :src="item.img" alt="" @click="title(index)">
                </li>
            </ul>

        </div> -->
        <!-- Swiper -->
        <!-- <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in list.movies" :key="index">
                    <img :src="item.img" alt="" @click="title(index)" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div> -->

        <!-- 这个我使用swiper写的轮播图 对应的是你的图片点击事件 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in list.movies" :key="index">
                    <img :src="item.img" alt="" />
                </div>

            </div>
        </div>

        <div class="movie-name">
            <p>{{ titles.nm }} {{ titles.sc }}</p>
            <p>{{ titles.desc }}</p>
        </div>
        <div class="movietime">
            <van-tabs v-model="nums" @click="tobe">
                <ul>
                    <li v-for="(item, indexs) in titles.shows" :key="indexs">
                        <van-tab :title="item.showDate">
                            <!-- arrss.plist 传进去你的值要在data定义================================ -->
                            <movie-date :items="arrss.plist" :list="list" :titles="titles"></movie-date>
                        </van-tab>

                    </li>
                </ul>
            </van-tabs>
            <!-- <ul>
                <li v-for="(item, indexs) in titles.shows" :key="indexs">
                   
                    <ul>
                        <li v-for="(items, index) in item.plist" :key="index">
                            
                            <div class="movie-box">
                                <div class="movietime-one">
                                    <p>{{ items.tm }}</p>
                                </div>
                                <div class="movietime-two">
                                    <p>{{ items.lang }} {{ items.tp }}</p>
                                    <p>{{ items.th }}</p>
                                </div>
                                <div class="movietime-three">
                                    <p>￥{{ items.baseSellPrice }} <span v-if="items.vipPriceName">{{ items.vipPriceName
                                    }}</span><span v-if="items.vipPrice">{{ items.vipPrice }}</span></p>
                                    <p>{{ items.extraDesc }}</p>
                                </div>
                                <div class="movietime-four">
                                    <p @click="set(indexs, index)"> 购票</p>
                                </div>
                            </div>
                            <hr>
                        </li>
                    </ul>

                </li>
            </ul> -->
            <!-- <div class="boxx">

            </div> -->
        </div>
    </div>

</template>
<script>
// import 'swiper/css/swiper.css'
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min'
import { mapState } from 'vuex';

// 组件导包
import MovieDate from "../components/DateMovie/MovieDate.vue"


export default {
    name: 'LastprojectCinemaDetail',
    components: {
        MovieDate
    },

    data() {
        return {
            list: [],
            movie: [],
            titles: [],
            num: 0,
            that: '',
          
            arrss: [],
            // 判断tab是在哪个位置
            nums: 0

        };
    },

    // 数据变了就调用
    watch: {
        num() {
            this.nums = 0
            this.title(this.num)

        },
    },
    methods: {
        // 获取第二次的数据就是arrss  this.num是相当于你点击图片的index值     a 是vant组件的回调参数 相当于index
        tobe(a) {
            this.nums = a
            this.arrss = this.list.movies[this.num].shows[a]
            // console.log(a);
            // console.log(11111, this.arrss);
        },
        // swiper   
        bannerPoint() {
            var that = this
            new Swiper(".swiper-container", {
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                slidesPerView: 4,
                centeredSlides: true,
                spaceBetween: 30,
                grabCursor: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }, on: {
                    // 滑动触发     这个相当于你的图片点击事件=====================================================================注意
                    slideChange() {
                        // alert('改变了，activeIndex为' + this.activeIndex);
                        that.num = this.activeIndex


                        // 判断是否有其余日期没有的话就返回今天日期
                        if (that.list.movies[that.num].shows[that.nums]) {
                            that.arrss = that.list.movies[that.num].shows[that.nums]
                        } else {
                            that.arrss = that.list.movies[that.num].shows[0]
                        }

                        // console.log("nums");
                        // console.log(that.nums);
                        // console.log(this.num);
                        // this.title(this.activeIndex)
                    },
                },
            });

        },


        tocinemamap(cinemaId) {
            this.$router.push("/cinemadetail2/" + cinemaId);
        },
        // 正在上映的电影列表
        // https://apis.netstart.cn/maoyan/cinema/shows?cinemaId=17166&ci=1&channelId=4
        // 详情
        // https://apis.netstart.cn/maoyan/cinema/detail?cinemaId=17166
        //超值套餐   https://apis.netstart.cn/maoyan/cinema/queryDealList.json

        // 获取电影列表
        async getmovielist() {
            await this.axios
                .get(`https://apis.netstart.cn/maoyan/cinema/shows?cinemaId=${this.id}&ci=${this.cityid}&channelId=4`)
                .then((re) => {
                    console.log("电影列表");
                    console.log(re);
                    this.list = re.data.data
                    // 初始化titles数据
                    this.titles = this.list.movies[0]
                    // 初始化arrss数据
                    this.arrss = this.list.movies[this.num].shows[this.nums]


                });
        },

        // 用组件传值进去写
        async moviedetail() {
            await this.axios
                .get(`https://apis.netstart.cn/maoyan/cinema/detail?cinemaId=${this.id}`)
                .then((re) => {
                    console.log("电影院详情");
                    console.log(re);
                    this.movie = re.data.data
                });
        },
        // 没用到
        async taocan() {
            await this.axios
                .get(`https://apis.netstart.cn/maoyan/cinema/queryDealList.json`)
                .then((re) => {
                    console.log("套餐");
                    console.log(re);
                });
        },
        // 获取movie第一层的数据
        title(r) {
            // console.log(r);
            this.titles = this.list.movies[r]
            console.log(this.titles);

        },
        // 根据下标值获取对应信息
        // set(indexs, index) {
        //     // console.log(indexs,index);
        //     // console.log( this.titles);
        //     // console.log( this.titles.shows[indexs].plist[index]);
        //     // this.$router.push("/choose/" + list)
        //     this.$router.push({
        //         name: 'choose',
        //         params: {
        //             titles: this.titles,
        //             list: this.titles.shows[indexs].plist[index],
        //             name: this.list.cinemaName
        //         }
        //     })
        // },
        jump() {
            this.$router.go(-1);
        },


    },

    computed: {
        ...mapState(["cityid"])
    },
    props: {
        id: {
            type: String,
            default: ""
        }
    },
    created() {
        this.taocan();
        this.moviedetail();
        this.getmovielist();

    },
    mounted() {
        this.bannerPoint()
    }
};
</script>

<style lang="scss" scoped>
.swiper {
    width: 600px;
    height: 300px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 80px;
    height: 100px;
}

.swiper-slide img {
    display: block;
    width: 100%;
}

.title {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: red;
    z-index: 99;
    display: flex;
    text-align: center;
    line-height: 50px;
    justify-content: space-between;
    color: white;
}

.bx {
    width: 42px;
    height: 50px;
}

// .title .title-name{
//     position: fixed;
//     top: 0;
//     left: 50px;
// }
.cinema-name {
    width: auto;
    margin-left: 10px;
    height: 50px;
    margin-top: 60px;
    margin-top: 62px;
}

.boxx {
    height: 35px;
    width: 100%;
}

.cinema-name>p {
    margin-top: 10px;
    font-size: 10px;
    color: grey;
    overflow: hidden;
    /*溢出的部分隐藏*/
    white-space: nowrap;
    /*文本不换行*/
    text-overflow: ellipsis;
    /*ellipsis:文本溢出显示省略号（...）；clip：不显示省略标记（...），而是简单的裁切*/
}

.cinema .movie-banner ul {
    // display: flex;
    // overflow-x: scroll;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;


}

.cinema .movie-banner ul li {
    // width: 150px;
    // height: 50px;


    width: 80px;
    height: 100px;
    flex: none;

    display: flex;
    justify-content: center;
    align-items: center;
}

.cinema .movie-banner ul li img {
    width: 100%;
}

.cinema .movie-banner ul>li:nth-child(n + 2) {
    margin-left: 10px;
}

.cinema .movie-name {
    margin-top: 15px;
    width: 100%;

    height: 50px;

    text-align: center;
}

.cinema .movie-name p {
    margin-bottom: 5px;
}

.cinema .movietime .movie-box {
    display: flex;
    padding-top: 5px;
}

.cinema .movietime .movie-box p {
    // font-size: 10px;
}

.cinema .movietime {
    width: 100%;
    height: auto;
}

.cinema .movietime .movie-box .movietime-one {
    width: 15%;
    height: 50px;

    margin-left: 10px;
    line-height: 50px;
    text-align: center;
}

.cinema .movietime .movie-box .movietime-two {
    width: 30%;
    height: 50px;
    text-align: center;

}

.cinema .movietime .movie-box .movietime-two p:nth-child(1) {
    margin-bottom: 10px;
    margin-top: 8px;
    color: red;
    font-size: 10px;
}

.cinema .movietime .movie-box .movietime-two p:nth-child(2) {
    font-size: 10px;
    color: grey;
    text-overflow: ellipsis;

    display: -webkit-box;
    /** 对象作为伸缩盒子模型显示 **/

    -webkit-box-orient: vertical;
    /** 设置或检索伸缩盒对象的子元素的排列方式 **/

    -webkit-line-clamp: 2;
    /** 显示的行数 **/

    overflow: hidden;
    /** 隐藏超出的内容 **/
}

.cinema .movietime .movie-box .movietime-three {
    width: 40%;
    height: 50px;
    text-align: center;
    position: relative;
}

.cinema .movietime .movie-box .movietime-three p:nth-child(1) {
    color: red;
    margin-top: 5px;
    font-size: 18px;
}

.cinema .movietime .movie-box .movietime-three p:nth-child(2) {
    margin-top: 9px;
    font-size: 10px;
    color: grey;
}

.cinema .movietime .movie-box .movietime-three p:nth-child(1) span:nth-child(1) {
    background-color: orange;
    border: 1px solid orange;
    position: relative;
    color: aliceblue;
    font-size: 3px;
    top: 5px;
}

.cinema .movietime .movie-box .movietime-three p:nth-child(1) span:nth-child(2) {
    border: 1px solid orange;
    color: orange;
    position: relative;
    font-size: 3px;
    top: 5px;
}

.cinema .movietime .movie-box .movietime-four {
    width: 15%;
    height: 50px;
    text-align: center;
    line-height: 25px;
    font-size: 10px;
    margin-top: 10px;
    margin-right: 5px;
}

.cinema .movietime .movie-box .movietime-four p {
    width: 50px;
    height: 24px;
    border-radius: 12px;
    color: red;
    margin-right: 5px;
    border: 1px solid red;
    margin-top: 4px;

}
</style>
