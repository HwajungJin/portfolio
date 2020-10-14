<template lang='pug'>
h4.has-text-center.c-q-heading
  svg.c-svg(
    ref='svg'
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox='0 0 140 90'
    :style="{ width: svgWidth }"
  )
    text.questionmark(
      x='70' y='145'
      :fill='color'
    ) ?

  slot
</template>

<script>
export default {
  name: 'QuestionMarkHeading',
  data () {
    return {
      svgWidth: null
    }
  },
  props: {
    color: {
      type: String,
      default: '#F1CD75',
      required: false
    }
  },
  methods: {
    calcSvg () {
      const { height: h } = this.$refs.svg.getBoundingClientRect()
      this.svgWidth = `${h * 9 / 14}px`
    }
  },
  mounted () {
    window.addEventListener('resize', this.calcSvg)
    this.calcSvg()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcSvg)
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-q-heading {
  position: relative;
}

.c-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 160%;
  max-height: 12rem;
  width: 10rem;
  z-index: -1;
  pointer-events: none;

  .questionmark {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 27.5rem;
    text-anchor: middle;
  }
}
</style>