<template lang='pug'>
.c-image-box(
  :style='styleObject'
  :class="'is-' + bgColor"
)
  span.text Image
  img(
    v-if='path'
    :src='path'
  )
</template>

<script>
export default {
  name: 'ImageBox',
  props: {
    path: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 120
    },
    bgColor: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styleObject () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

$bg-list: $ref_01, $ref_02, $ref_03, $ref_04, $ref_05;

.c-image-box {
  position: relative;
  display: block;
  background: $text-grey;
  pointer-events: none;

  @for $num from 1 through 5 {
    &.is-#{$num} {
      background-color: nth($bg-list, $num);
    }
  }

  .text {
    @include absoluteCenter;
    color: $text-white;
    font-size: 1rem;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 1;
  }
}
</style>
