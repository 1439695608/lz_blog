<template>
    <div @click="addNewArticle">
      再写一篇
    </div>
</template>

<script>
export default {
  name: "addBtn",
  methods: {
    addNewArticle () {
      location.href = '../addWord/index.html'
    }
  }
}
</script>

<style scoped>
  div{
    text-align: center;
    font-size: 20px;
  }
</style>
