<template lang='pug'>
.c-main-content
  string-typer.c-introduction(
    string="Hi, I'm Jin"
  )

  main-title.c-main-title

  .c-decoration
    text-cloud.c-welcome-cloud

    .c-profession
      span.featureline
      span.profession-title UI Designer / Art Director
</template>

<script>
import StringTyper from '@components/stringTyper.vue'
import MainTitle from './HomeMainTitle.vue'
import TextCloud from './TextCloud.vue'


export default {
  name: 'MainContent',
  components: {
    StringTyper,
    MainTitle,
    TextCloud
  }
}
</script>

<style lang='scss' scoped>
.c-main-content {
  border: 1px dashed #f00;
}

.c-profession {
  position: absolute;
  font-size: $size-body-sm;
  font-weight: 700;
  display: flex;
  align-items: flex-start;

  .featureline {
    display: inline-block;
    height: 0.1rem;
    width: 4.6rem;
    margin-right: 2.4rem;
    margin-top: 0.5rem;
    background-color: $text-black;
  }
}

.c-
</style>