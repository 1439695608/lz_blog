<template>
    <div class="navbar">
        <div class="now_mood">
            <span @click="showModuleList" class="navbar-toggler-icon"/>
            <span class="abbr_style">{{getAbbr}}</span>
        </div>
        <div v-show="this.isShowModuleList" class="module_list">
            <template v-for="(index) in getModuleInfoLength">
                <div class="module_item"><span @click="changeModule(index - 1)" :class="getSelectStyle(index - 1)">{{getmoduleName(index - 1)}}</span></div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "public.vue",
        props: {
        },
        data(){
            return {
                isShowModuleList: false
            }
        },
        computed:{
            getModuleInfoLength () {
                return this.$store.state.moduleInfo.length
            },
            getAbbr () {
                return this.$store.state.moduleInfo[this.$store.state.nowPageIndex].abbr
            }
        },
        methods:{
            changeModule (index) {
                this.$store.commit('changeNowPageIndex',index)
                this.isShowModuleList = false
            },
            getmoduleName(index) {
                return this.$store.state.moduleInfo[index].abbr
            },
            getSelectStyle (index) {
                if (index == this.$store.state.nowPageIndex) {
                    return 'selected'
                } else {
                    return 'noselect'
                }
            },
            showModuleList () {
                this.isShowModuleList = !this.isShowModuleList
            }
        }
    }
</script>

<style scoped>
    .module_item {
        font-weight: bold;
        color: #fff;
        padding: 0 3%;
    }
    .noselect{
        padding: 0px 10px;
    }
    .selected{
        color: #000;
        border-left: 5px solid #999999;
        padding: 0px 5px;
    }
    .module_list{
        border-top: 1px solid #999999;
        background-color: #d1d1d1;
        opacity: 0.9;
    }
    .abbr_style{
        display: inline-block;
        width: 80%;
        text-align: center;
    }
    .navbar{
        width: 100%;
        height: 50px;
        vertical-align: middle;
        line-height: 50px;
        background-color: #d1d1d1;
        position: fixed;
        z-index: 9;
        top: 0px;
    }
    .navbar-toggler-icon{
        position: relative;
        left: 4%;
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        content: "";
        background: no-repeat center center;
        background-size: 100% 100%;
        background-image: url("../../../static_assets/vue_img/timg.png");
    }
</style>
