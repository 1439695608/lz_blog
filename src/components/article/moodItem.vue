<template>
    <div class="moodItem">
        <div @click="jumpMoodDetail" class="noodItem_head">
            <p><img :src="icon_img"><span>{{ getItemInfo.title }}</span><span>{{ getItemInfo.update_time }}</span></p>
        </div>
        <div class="noodItem_body">
            <p><span>{{ getItemInfo.desc }}</span></p>
        </div>
        <div class="noodItem_foot">
            <p><img @click="startComment" :src="word_img"/></p>
        </div>
    </div>
</template>

<script>
    import icon_img from '../../../static_assets/vue_img/dadan.jpg'
    import good_img from '../../../static_assets/vue_img/good.jpg'
    import word_img from '../../../static_assets/vue_img/word.jpg'
    export default {
        name: "moodItem",
        props: {
            moodIndex: Number
        },
        data(){
            return {
                icon_img: icon_img,
                good_img: good_img,
                word_img: word_img
            }
        },
        computed:{
            getItemInfo(){
                return this.$store.state.moduleInfo[this.$store.state.nowPageIndex].detail_list[this.moodIndex]
            }
        },
        methods:{
            startComment(){
                this.$store.commit('changeShowCommentInput',true)
            },
            jumpMoodDetail(){
                if (this.$store.state.moduleInfo[this.$store.state.nowPageIndex].detail_list[this.moodIndex].content != 0) {
                  var filename = this.$store.state.moduleInfo[this.$store.state.nowPageIndex].detail_list[this.moodIndex].content
                  location.href = 'http://192.168.10.7/lz_blog/file/' + this.$store.state.moduleInfo[this.$store.state.nowPageIndex].detail_list[this.moodIndex].content
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../../static_assets/css/common.css";
    .noodItem_head{
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }
    .noodItem_head p{
        background-color: white;
        margin: 0;
        padding: 8px 10px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        vertical-align: middle;
    }
    .noodItem_head p img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-top: -8px;
    }
    .noodItem_head p span:nth-of-type(1){
        font-size: 16px;
        color: #333333;
        margin-left: 5px;
    }
    .noodItem_head p span:nth-of-type(2){
        float: right;
        right: 10px;
        font-size: 15px;
        color: #666666;
    }
    .noodItem_body{
        padding: 0px 20px;
        font-size: 15px;
        color: #999999;
    }
    .noodItem_foot{
        background-color: white;
        margin: 0;
        padding: 5px 10px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .noodItem_foot p{
        margin: 3px 0px;
        padding: 0;
    }
    .noodItem_foot p img{
        width: 20px;
        height: 20px;
        margin-left: 10px;
    }
</style>
