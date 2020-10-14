<template lang="pug">
svg.c-canvas(
  ref='canvas'
)
  path.c-path(ref='path')
</template>

<script>
import { debounce } from '@utils/utils.js'

export default {
  name: 'MeshBackground',
  data () {
    return {
      debouncedResizeHandler: null
    }
  },
  computed: {
    meshSideLength () {
      switch (this.$mq) {
        case 'small':
        case 'phone':
        case 'phoneblet':
          return 10
        case 'tablet':
          return 15
        default:
          return 20
      }
    }
  },
  methods: {
    drawMesh () {
      const { canvas, path: pathEl } = this.$refs
      const canvasBox = canvas.getBoundingClientRect()
      const viewBox = { 
        w: canvasBox.width, 
        h: canvasBox.height 
      }

      let d = ''
      let [ columnAmount, rowAmount ] = [
        Math.ceil(viewBox.w / this.meshSideLength),
        Math.ceil(viewBox.h / this.meshSideLength)
      ]

      for(let i=0; i<columnAmount; i++) {
        const currentX = i * this.meshSideLength
        d += `M${currentX},0 L${currentX},${viewBox.h} `
      }

      for(let j=0; j<rowAmount; j++) {
        const currentY = j * this.meshSideLength
        d += `M0,${currentY} L${viewBox.w},${currentY} `
      }

      pathEl.setAttribute('d', d)
    }
  },
  mounted () {
    this.drawMesh()
    this.debouncedResizeHandler = debounce(this.drawMesh, 20)

    window.addEventListener('resize', this.debouncedResizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.debouncedResizeHandler)
  }
}
</script>

<style lang="scss" scoped>
.c-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.c-path {
  fill: none;
  stroke: #E2DCDC {
    width: 1px;
  }
}

</style>