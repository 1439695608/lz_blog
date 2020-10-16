<template>
    <div class="addWord">
<!--        <div v-html="getPreLook" class="preLook">-->
<!--        </div>-->
        <div class='clearfix'>
            <!-- 富文本编辑框 -->
            <div id="websiteEditorElem"></div>
        </div>
        <div class="info">
            <p>标题：<input type="text" placeholder="标题" v-model="articleTitle"/></p>
            <p>摘要：<input type="text" placeholder="摘要" v-model="articleDesc"/></p>
            <button type="primary"
                  @click='submit'
                  class='submit'>点击上传</button>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    // wangEditor配置按钮菜单
    const btnmenu = [
        'head',//标题
        'bold',//粗体
        'fontSize',//字号
        'italic',//斜体
        'undeline',//下划线
        'strikeThrough',//删除线
        'foreColor',//文字颜色
        'backColor',//背景颜色
        'link',//插入链接
        'list',//列表
        'justify',//对齐方式
        'emoticon',//表情
        'image',//插入图片
    ]
    export default {
        name: 'addWord',
        data () {
            return {
                phoneEditor: '',
                name: ''
            }
        },
        computed:{
            getPreLook () {
                return this.$store.state.preHtml
            },
            articleTitle: {
                get(){
                    return this.$store.state.title
                },
                set(val){
                    this.$store.commit("articleTitle", val)
                }
            },
            articleDesc: {
                get(){
                    return this.$store.state.desc
                },
                set(val){
                    this.$store.commit("articleDesc", val)
                }
            }
        },
        methods: {
            // 设置保存发送后台数据事件
            submit () {
                var article = {name: this.$store.state.title, importantText: this.$store.state.desc, htmlContent: this.phoneEditor.txt.html()}
                this.$store.dispatch("addFile", {article: article})
            }
        },

        mounted () {
            var _this = this
            const SINA_URL_PATH = 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal'
            // wangeditor
            this.phoneEditor = new E('#websiteEditorElem')
            this.phoneEditor.config.menus = btnmenu
            this.phoneEditor.config.uploadImgShowBase64 = true
            this.phoneEditor.config.showLinkImg = false
            this.phoneEditor.config.emotions = [
              {
                title: '新浪', // tab 的标题
                type: 'image', // 'emoji' 或 'image' ，即 emoji 形式或者图片形式
                content: [
                  { alt: '[坏笑]', src: `${SINA_URL_PATH}/50/pcmoren_huaixiao_org.png` },
                  { alt: '[舔屏]', src: `${SINA_URL_PATH}/40/pcmoren_tian_org.png` },
                  { alt: '[污]', src: `${SINA_URL_PATH}/3c/pcmoren_wu_org.png` },
                ]
              },
              {
                title: 'emoji',  // tab 的标题
                type: 'emoji', // 'emoji' / 'image'
                // emoji 表情，content 是一个数组即可
                content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/),
              }
            ]
            // 配置 onchange 回调函数
            // this.phoneEditor.config.onchange = function (newHtml) {
            //   _this.$store.commit("changePreHtml", newHtml)
            // }
            // 配置触发 onchange 的时间频率，默认为 200ms
            this.phoneEditor.config.onchangeTimeout = 1000 // 修改为 1000ms
            // 创建一个富文本编辑器
            this.phoneEditor.create()
            // 富文本内容
            this.phoneEditor.txt.html('在此编辑')
        }
    }
</script>

<style scoped>
    @import "../../../static_assets/css/common.css";
    .addWord{
        width: 100%;
        height: 100%;
    }
    #websiteEditorElem{
        width: 100%;
        height: 80%;
    }
    .preLook{
        width: 100%;
        height: 50%;
        background-color: white;
        overflow: auto;
    }
    .info input{
        width: 70%;
    }
</style>
