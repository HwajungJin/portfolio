<template lang="pug">
.c-styled-box(
  :class="`is-${type}`"
)
  template(v-if="type === 'dashed' && hasDots ")
    span.c-dot(
      v-for="n in 4"
      :class="`is-${n}`"
    )

  svg.c-svg-outline(
    v-if="type === 'dashed'"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
  )
    rect(
      x="0" y="0" 
      width="100%" height="100%"
    )

  slot
</template>

<script>
export default {
  name: 'StyledBox',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: val => ['default', 'dashed'].includes(val)
    },
    hasDots: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.c-styled-box.is-default {
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.25);
}

.c-styled-box.is-dashed {
  position: relative;

  .c-svg-outline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    rect {
      fill: none;
      stroke: $text-grey-dark {
        width: 1px;
        dasharray: 6 6;
      }
    }
  }

  .c-dot {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    background-color: $text-grey-dark;
    border-radius: 0.8rem;

    &.is-1 {
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
    }
    &.is-2 {
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
    &.is-3 {
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
    }
    &.is-4 {
      bottom: 0;
      left: 0;
      transform: translate(-50%, 50%);
    }
  }
}
</style>