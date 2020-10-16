<template>
  <div id="noVNC_container"/>
</template>
<script>
import RFB from '@novnc/novnc'
export default {
  name: 'App',
  data () {
    return {
      connected: false,
      rfb: null
    }
  },
  computed: {},
  mounted () {
    this.$alert('测试')
    this.rfb = new RFB(
      document.getElementById('noVNC_container'),
      'ws://192.168.10.7:6080/websockify',
      {
        shared: true,
        repeaterID: '',
        credentials: { password: '123123' }
      }
    )
    // window.UI = this.rfb;
    this.rfb.addEventListener('connect', this.connectFinished)
    this.rfb.addEventListener('disconnect', (e) => {
      console.log('==============disconnect===============', e)
    })
    this.rfb.clipViewport = true
    this.rfb.scaleViewport = true
    this.rfb.resizeSession = true
    this.rfb.qualityLevel = 6
    this.rfb.compressionLevel = 2
    this.rfb.showDotCursor = true
  },
  methods: {
    connectFinished (e) {
      this.connected = true
      this.rfb.focus()
      console.log(this.rfb)
      console.log('==============connect===============', e)
    }
  }
}
</script>
<style scoped>
@import '../../../static_assets/css/common.css';
#noVNC_container {
  width: 100%;
  height: 100%;
  background-color: #313131;
  border-bottom-right-radius: 800px 600px;
}
</style>
