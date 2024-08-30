<template>
    <div class="box">
        <div class="mp">
            <video :src="arr[0].video.url" controls :poster="arr[0].video.imgUrl" @play="nums()"></video>
            <div class="head" v-show="num">
                <div class="head-img"><img :src="arr[0].user.avatarurl" alt=""/></div>
                <div class="head-zan">
                    <div class="head-zan-img">
                        <p>获赞</p>
                    </div>
                    <p>{{arr[0].upCount}}</p>
                </div>
                <div class="share">
                     <div class="head-zan-img">
                       {{arr[0].shareCount}}
                    </div>
                    <p>分享</p>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {

    name: 'LastprojectVideoDetailView',

    data() {
        return {
            arrs: [],
            urls: "",
            imgsurl: "",
            num:1
        };
    },
    created() {
        this.tos()
    },
    computed: {
        ...mapState(["arr"])
    },

    methods: {
        ...mapMutations(["deturl"]),
        tos() {
            this.arrs = this.arr
            console.log(this.arr);
        },
        detele() {
            this.deturl()
        },
        nums(){
            this.num=0
        }
    },
    destroyed() {
        // 销毁全局arr
        this.detele()
    }



};
</script>

<style lang="scss" scoped>
.box {
    margin-top: -60px;
}
.box .mp {
    display: flex;
   align-items: center;
    width: 100%;
 min-height: 100vh;
    position: relative;
    background-color:black;
}

.box .mp video {
    width: 100%;
    
}
.box .mp .head .head-img img{
    position: absolute;
width: 45px;
height: 45px;
border-radius: 50%;
right: 5px;
top:350px;
}
.box .mp .head .head-zan .head-zan-img{
    position: absolute;
    right: 10px;
    top:410px;
     color:white;
}
.box .mp .head .head-zan>p{
     position: absolute;
    right: 10px;
    top:435px;
    color:white;
}
.box .mp .head .share .head-zan-img{
     position: absolute;
    right: 10px;
    top:460px;
     color:white;
}
.box .mp .head .share>p{
     position: absolute;
    right: 10px;
    top:485px;
     color:white;
}
</style>