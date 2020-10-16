<template>
  <div class="moodList">
    <pageHead/>
    <COMMENT/>
    <div class="list">
      <template v-for="(index) in moodListLength">
        <MoodItem :mood-index="index-1"/>
      </template>
    </div>
  </div>
</template>

<script>
import MoodItem from './moodItem.vue'
import pageHead from '../common/pageHead.vue'
import COMMENT from '../common/comment.vue'
export default {
  name: 'MoodList',
  components: {
    MoodItem,
    pageHead,
    COMMENT
  },
  computed: {
    moodListLength () {
      return this.$store.state.moduleInfo[this.$store.state.nowPageIndex].detail_list.length
    }
  }
}
</script>

<style scoped>
    @import "../../../static_assets/css/common.css";
.list{
    margin-top: 60px;
}
</style>
