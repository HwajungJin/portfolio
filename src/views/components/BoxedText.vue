<template lang='pug'>
svg.c-boxed-text(
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  v-bind='svgAttributesObj'
)
  text(
    ref='text'
    :style='textStyleObj'
  )
    slot
</template>

<script>
export default {
  name: 'BoxedText',
  data () {
    return {
      viewBoxObj: null
    }
  },
  props: {
    fontSize: {
      type: Number,
      default: 1.6,
      required: false
    },
    textStyles: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  computed: {
    textStyleObj () {
      return {
        fill: 'none',
        stroke: '#343434',
        fontWeight: '700',
        strokeWidth: '1px',
        ...this.textStyles,
        ...{ 
          fontSize: `${this.fontSize}rem`
        }
      }
    },
    svgAttributesObj () {
      if (!this.viewBoxObj)
        return {}
      
      const { 
        x,
        y,
        width,
        height } = this.viewBoxObj
      
      return {
        viewBox: `${x} ${y} ${width} ${height}`,
        style: `width: ${width}px; height: ${height}px;`
      }
    }
  },
  methods: {
    adjustBoxDimension () {
      const { text: textEl } = this.$refs

      this.viewBoxObj = textEl.getBBox()
    }
  },
  watch: {
    fontSize() {
      this.$nextTick(() => {
        this.adjustBoxDimension()
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.adjustBoxDimension()
    })
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-boxed-text {
  display: inline-block;
}
</style>