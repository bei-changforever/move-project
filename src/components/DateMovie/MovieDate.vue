<template>
    <div class="cinema">
        <ul>
            <li v-for="(items, index) in itemss" :key="index">
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
                        <p @click="set(index)"> 购票</p>
                    </div>
                </div>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MovieProjectMovieDate',
    props: {
        items: {
            type: Array,
            default: () => []
        },
        titles: {
            type: Object,
            default: () => {}
        },
        list: {
            type: Object,
            default: () => {}
        }

    },

    watch: {
        items() {
            this.itemss = this.items
        }
    },
    data() {
        return {
            itemss: this.items
        };
    },



    methods: {
        set(index) {
            console.log("this.list.cinemaName");
            console.log(this.list);

            // console.log(indexs,index);
            // console.log( this.titles);
            // console.log( this.titles.shows[indexs].plist[index]);
            // this.$router.push("/choose/" + list)
            //    this.$router.push({
            //     name: 'choose',
            //     params: {
            //         titles: this.titles,
            //         list: this.titles.shows[indexs].plist[index],
            //         name: this.list.cinemaName
            //     }
            // })
            this.$router.push({
                name: 'choose',
                params: {
                    titles: this.titles,
                    lists: this.itemss[index],
                    name: this.list.cinemaName
                }
            })
        },
    },
    created() {
      
    }
};
</script>

<style lang="scss" scoped>
.cinema .movie-box {
    display: flex;
    padding-top: 5px;
}

.cinema .movie-box p {
    // font-size: 10px;
}

.cinema {
    width: 100%;
    height: auto;
}

.cinema .movie-box .movietime-one {
    width: 15%;
    height: 50px;

    margin-left: 10px;
    line-height: 50px;
    text-align: center;
}

.cinema .movie-box .movietime-two {
    width: 30%;
    height: 50px;
    text-align: center;

}

.cinema .movie-box .movietime-two p:nth-child(1) {
    margin-bottom: 10px;
    margin-top: 8px;
    color: red;
    font-size: 10px;
}

.cinema .movie-box .movietime-two p:nth-child(2) {
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

.cinema .movie-box .movietime-three {
    width: 40%;
    height: 50px;
    text-align: center;
    position: relative;
}

.cinema .movie-box .movietime-three p:nth-child(1) {
    color: red;
    margin-top: 5px;
    font-size: 18px;
}

.cinema .movie-box .movietime-three p:nth-child(2) {
    margin-top: 9px;
    font-size: 10px;
    color: grey;
}

.cinema .movie-box .movietime-three p:nth-child(1) span:nth-child(1) {
    background-color: orange;
    border: 1px solid orange;
    position: relative;
    color: aliceblue;
    font-size: 3px;
    top: 5px;
}

.cinema .movie-box .movietime-three p:nth-child(1) span:nth-child(2) {
    border: 1px solid orange;
    color: orange;
    position: relative;
    font-size: 3px;
    top: 5px;
}

.cinema .movie-box .movietime-four {
    width: 15%;
    height: 50px;
    text-align: center;
    line-height: 25px;
    font-size: 10px;
    margin-top: 10px;
    margin-right: 5px;
}

.cinema .movie-box .movietime-four p {
    width: 50px;
    height: 24px;
    border-radius: 12px;
    color: red;
    margin-right: 5px;
    border: 1px solid red;
    margin-top: 4px;

}
</style>