<template>
    <div class="choose">
        <div class="title">
            <div class="fanhui iconfont icon-fanhui" @click="jump" style="line-height: 50px; padding-left: 10px">返回
            </div>
            <div class="title-name">{{ name }}</div>
            <div class="bx"></div>
        </div>
        <div class="shu">
            {{ list.th }}
        </div>
        <!-- {{ intemss.rowId }}-{{ intemss.columnId }} -->
        <div class="seat">
            <ul>
                <li v-for="(item, index) in seat.regions" :key="index" class="li-one">
                    <ul>
                        <li v-for="(items, indexs) in item.rows" :key="indexs" class="li-two">
                            <!-- intemss.seatNo -->
                            <ul class="check">
                                <li v-for="(intemss, indexss) in items.seats" :key="indexss"
                                    @click="setseat(index, indexs, indexss), choose(indexs, indexss)" class="li-three">
                                    <div class="one" v-show="intemss.seatType == 'N' ? 1 : 0">
                                        <img :src="seat.image.seatLegends[0].legendIcon" alt="">
                                    </div>
                                    <div class="two" v-show="intemss.seatType == 'N' | intemss.seatNo == '' ? 0 : 1">
                                        <img :src="seat.image.selectedImages[0]" alt="">
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="name">
            <p>猫眼电影提供</p>
        </div>

        <div class="biaozhun" v-if="dis">
            <ul>
                <li><img :src="seat.image.seatLegends[0].legendIcon" alt=""> <span>可选</span></li>
                <li><img :src="seat.image.seatLegends[1].legendIcon" alt=""> <span>已选</span></li>
                <li><img :src="seat.image.seatLegends[2].legendIcon" alt=""> <span>不可售</span></li>
            </ul>
        </div>

        <div class="seatnum">
            <div class="tip">
                <van-notice-bar left-icon="volume-o" scrollable text="观影期间请全程佩戴口罩，感谢配合！" />
            </div>
            <hr width=95% align=centen size="1">
            <div class="moviename">
                <p>{{ titles.nm }}</p>
                <p>今天{{ list.dt }} {{ list.tm }} {{ list.lang }} {{ list.tp }}</p>
            </div>
            <hr v-if="!dis" width=95% align=centen size="1" style=" margin-top:15px;">
            <ul>
                <li v-for="(item, index) in seatnum" :key="index">
                    <div class="seatchoose" @click="quxiao(index, item.h, item.l)">
                        <p v-if="item.h">{{ item.h }}排{{ item.l }}座</p>
                        <span>×</span>
                        <div class="pp">{{ list.baseSellPrice }}元</div>
                    </div>

                </li>
            </ul>
        </div>
        <div class="goumai">
            <div class="goumai-1" v-if="dis">请先选座</div>
            <div class="goumai-2" v-if="!dis">{{ zongprice }}元 确认选座</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LastprojectChoose',

    data() {
        return {
            list: [],
            titles: [],
            name: "",
            seat: [],
            num: 0,
            seatnum: [],
            q: 0,
            colums: 0,
            rows: 0,
            dis: 1,
            zongprice: 0


        };
    },
    props: {

    },

    mounted() {

    },

    methods: {
        async setchoose() {
            // 获取需要的数据
            this.list = this.$route.params.lists
            this.titles = this.$route.params.titles
            this.name = this.$route.params.name
            // console.log(11111);
            // console.log(this.list);
            // console.log("zheg");
            // console.log(this.titles);
            // console.log(this.name);

            await this.axios
                .get(`https://apis.netstart.cn/maoyan/cinema/seat.json`)
                .then((re) => {
                    console.log(re);
                    this.seat = re.data.data.seat
                });
        },
        jump() {
            this.$router.go(-1);
        },
        // 点击取位置
        setseat(a, b, c) {
            console.log(b, c);
            // console.log(111);
            // this.num=!this.num
            if (this.seat.regions[a].rows[b].seats[c].seatType == 'N') {
                this.seat.regions[a].rows[b].seats[c].seatType = "Y"
                // 增加座位加钱
                this.q++
                this.zongprice = this.list.baseSellPrice * this.q

            } else if (this.seat.regions[a].rows[b].seats[c].seatType == 'Y') {
                this.seat.regions[a].rows[b].seats[c].seatType = "N"
                // 取消座位减钱
                this.q--
                this.zongprice = this.list.baseSellPrice * this.q
            }

        },
        // 取消订票
        quxiao(index, a, b) {
            this.seatnum.splice(index, 1)

            this.setseat(0, a - 1, b - 1)
            if (this.seatnum.length != 0) {
                this.dis = 0

            }
            if (this.seatnum.length == 0) {
                this.dis = 1
            }
        },

        // 选座
        choose(a, b) {
            this.rows = a + 1
            this.colums = b + 1
            var show = true
            let seatnumObj = {}
            for (let c = 0; c < this.seatnum.length; c++) {
                if (this.seatnum[c].h == this.rows && this.seatnum[c].l == this.colums) {
                    this.seatnum.splice(c, 1)
                    show = false

                }
            }
            if (show == true) {
                seatnumObj.h = this.rows
                seatnumObj.l = this.colums
                this.seatnum.push(seatnumObj)

            }
            if (this.seatnum.length != 0) {
                this.dis = 0

            }
            if (this.seatnum.length == 0) {
                this.dis = 1
            }
        },


    },
    created() {
        this.setchoose()
    },
};
</script>

<style lang="scss" scoped>
.van-notice-bar {
    height: 20px;
    background-color: whitesmoke;
}

.choose .seat ul .li-one ul .li-two ul .li-three {
    width: 25px;
    height: 25px;
    margin: 5px;
}

.choose .seat ul .li-one ul .li-two ul {
    margin-left: 14%;
}

.choose .seat {
    margin-top: 11%;

}

.choose .title {
    width: 100%;
    height: 50px;
    background-color: red;
    margin-top: -50px;
    display: flex;
    text-align: center;
    line-height: 50px;
    justify-content: space-between;
    color:white;

}
.bx{
    width: 42px;
    height: 50px;
}


.choose .shu {
    margin-top: 15px;
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: center;

}

.one {
    width: 25px;
    height: 25px;

}

.two {
    width: 25px;
    height: 25px;



}

.one img {
    width: 25px;
    height: 25px;
}

.two img {
    width: 25px;
    height: 25px;

}

.seat .check {
    display: flex;
}

.active {
    width: 50px;
    height: 50px;
    background-color: grey !important;
}

.biaozhun ul {
    width: auto;
    display: flex;
    list-style: none;
    position: absolute;
    bottom: 173px;
    left: 96px;
    justify-content: space-around;
}

.biaozhun ul li {
    display: flex;
}

.biaozhun ul li img {
    width: 15px;
    height: 15px;


}

.biaozhun ul li span {
    width: 50px;
    height: 15px;
    font-size: 10px;
    display: block;
    margin-top: 2px;
    margin-left: 5px;

}

.name p {
    margin-top: 15px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: grey;
    opacity: 0.3;
    font-weight: bold;
}

// .seatnum{
//     margin-top: 80px;
// }
.seatnum .tip {
    width: 100%;
    margin-top: 5px;

}


.seatnum {
    margin-left: 10px;
    width: 95%;
    height: auto;
    border: 1px whitesmoke solid;
    border-radius: 15px;
    background-color: whitesmoke;
    padding-bottom: 15px;
    position: fixed;
    bottom: 60px;

}

.seatnum .moviename p:nth-child(1) {
    margin-left: 15px;
    margin-top: 15px;
    font-size: 15px;
    font-weight: 700;
}

.seatnum .moviename p:nth-child(2) {
    margin-left: 15px;
    margin-top: 15px;
    font-size: 10px;
}

.seatnum ul {
    display: flex;
    white-space: nowrap;
    /* 不换行 */
    overflow: hidden;
    /* 内容超出宽度时隐藏超出部分的内容 */
}

.seatnum ul li .seatchoose {
    width: 70px;
    background-color: rgb(222, 212, 212);
    margin-top: -10px;
    height: 50px;
    line-height: 25px;
    text-align: left;
    border-radius: 5px;
}

.seatnum ul li {
    margin-top: 15px;
    margin-left: 15px;
    position: relative;
}

.seatnum ul li .seatchoose p {
    font-size: 13px;
    margin-left: 5px;
}

.seatnum ul li span {
    position: absolute;
    right: 4px;
    bottom: 12px;
}

.seatnum ul li .seatchoose .pp {
    font-size: 15px;
    margin-left: 5px;

}

.goumai {
    bottom: 5px;
    position: fixed;
    width: 100%;

}

.goumai .goumai-1 {
    width: 95%;
    margin-left: 10px;
    height: 50px;
    line-height: 50px;
    background-color: #ff8917;
    text-align: center;
    border-radius: 25px;
    color: rgb(255, 255, 255, 0.5);
    font-weight: 600;

}

.goumai .goumai-2 {
    width: 95%;
    margin-left: 11px;
    height: 50px;
    line-height: 50px;
    background-color: #ff8917;
    border-radius: 25px;
    text-align: center;
    color: white;
    font-weight: 600;
}
</style>