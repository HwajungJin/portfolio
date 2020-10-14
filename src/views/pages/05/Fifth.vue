<template lang='pug'>
page-template(
  :pageNumber='5'
)
  .element-container.c-showcase
    .element-container__para.is-full-width
      img(:src='imgPaths.showcase')

  .element-container.c-output
    h3.element-container__title.is-big.is-centered
      | Final output

    .element-container__para.c-output-img-container
      img.c-output-img(
        v-for='path in imgPaths.outputs'
        :src='path'
      )
</template>

<script>
import PageTemplate from '../PageTemplate.vue'

export default {
  name: 'Fifth',
  computed: {
    imgPaths () {
      const path = fileName => require('@/assets/images/05/' + fileName)
      const imgPathObj = {
        showcase: path('showcase.png'),
        outputs: []
      }

      for(let i=1; i<14; i++) {
        imgPathObj.outputs.push(
          path(`output-${i}.png`)
        )
      }

      return imgPathObj
    }
  },
  components: {
    PageTemplate
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-showcase {
  img {
    display: block;
    width: 80vw;
    margin-top: -10rem;
  }
}

.c-output-img-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-top: 6rem;

  .c-output-img {
    display: inline-block;
    width: 22rem;
    height: auto;
    margin-right: 1.2rem;
    margin-bottom: 4rem;
  }
}
</style>