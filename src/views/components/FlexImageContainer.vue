<template lang='pug'>
.c-flex-image-container
  .image-item(
    v-for="(item, index) in imageList"
    :key="item.path"
  )
    img.image-item__image(
      :src="item.path"
    )
    span.image-item__name {{ item.name }}
</template>

<script>
export default {
  name: 'FlexImageContainer',
  props: {
    imageList: {
      type: Array,
      required: false,
      default: null
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-flex-image-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  .image-item {
    position: relative;
    max-width: 30rem;
    margin-right: 0;
    flex-grow: 1;

    @include phoneblet {
      margin-right: 2.5rem;
    }

    &__image {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 2rem;
      border: 1px solid rgba(0,0,0,0.15);
      box-shadow: $img-box-shadow;
    }

    &__name {
      display: block;
      font-size: $size-body-lg;
      text-align: left;
      margin-bottom: 2.5rem;
    }
  }
}
</style>