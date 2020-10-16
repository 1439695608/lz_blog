<template>
    <div class="commentStyle" v-show="startComment">
        <textarea v-model="commentTextData"></textarea>
        <div class="buttonstyle"><button @click="confirm">提交</button><button @click="cancle">取消</button></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        name: "comment.vue",
        computed:{
            commentTextData:{
                get(){
                    return this.$store.state.commentText
                },
                set(val){
                    this.$store.commit("commentText",val)
                }
            },
            startComment(){
                return this.$store.state.isShowCommentInput
            }
        },
        methods:{
            confirm(){
                this.$store.dispatch('confirmCommentText')
                this.$store.commit('changeShowCommentInput',false)
            },
            cancle () {
                this.$store.commit('changeShowCommentInput',false)
            }
        }
    }
</script>

<style scoped>
    .buttonstyle{
        width: 100%;
    }
.buttonstyle button{
    width: 50%;
    padding: 0;
    margin: 0;
    border: 0px;
    height: 30px;
}
    .buttonstyle button:nth-of-type(1){
        background-color: #00c7e1;
    }
.commentStyle{
    width: 70%;
    height: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.commentStyle textarea{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #fff;
}
</style>