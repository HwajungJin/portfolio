<template lang='pug'>
.c-brief
  h3.c-brief__title Brief

  img.c-brief__top-image(
    v-if='imgPath'
    :src='imgPath'
  )

  .c-brief__content
    h4.content-title {{ contentTitle }}
    .content-main
      slot
</template>

<script>
export default {
  name: 'Brief',
  props: {
    imgPath: {
      type: String
    },
    contentTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-brief {
  position: relative;
  padding: 10rem $content-side-padding;

  &__title {
    font-size: 9rem;
  }

  &__content {
    display: flex;
    align-items: center;

    .content-title {
      font-size: 3rem;
      margin-right: 4rem;
    }

    .content-para {
      margin-bottom: 7rem;
      font-size: $size-body-md;
    }
    .content-para:last-child {
      margin-bottom: 0;
    }
  }

  &__top-image {
    position: absolute;
    top: -8rem;
    right: 18rem;
    width: 30rem;
  }
}
</style>