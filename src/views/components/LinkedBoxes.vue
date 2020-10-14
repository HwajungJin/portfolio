<template lang='pug'>
.c-linked-boxes(
  :class="'is-' + orientation"
)
  styled-box.c-topic(
    ref='topicEl'
    :style="{ backgroundColor: topicColor }"
  )
    slot(name='topic')

  svg.c-svg(
    ref='svgEl'
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
  )
    path(ref='pathEl')

  styled-box.c-paragraphes(
    ref='paraEl'
  )
    slot
</template>

<script>
import StyledBox from './StyledBox.vue'

export default {
  name: 'LinkedBoxes',
  components: {
    StyledBox
  },
  props: {
    type: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertical'].includes(value)
    },
    topicColor: {
      type: String,
      required: false,
      default: ''
    },
    bp: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    orientation () {
      const bpList = [
        'small', 'phone', 'phoneblet', 'tablet', 'tabletop', 'desktop', 'largescreen'
      ]
      const currentIndex = bpList.indexOf(this.$mq)
      const bpIndex = bpList.indexOf(this.bp)

      if (!this.bp || bpIndex <= currentIndex)
        return 'horizontal'
      else 
        return 'vertical'
    }
  },
  methods: {
    drawPaths () {
      const {
        svgEl, pathEl, paraEl
      } = this.$refs

      if (this.orientation === 'vertical') {
        const {
          width, height
        } = svgEl.getBoundingClientRect()
        let d = `M ${width/2},0 v${height}`

        pathEl.setAttribute('d', d)
        return
      }

      let pathWidth, pathTop, paraTops, d
      let paraArray = Array.prototype.slice.call(
        paraEl.$el.querySelectorAll('p')
      )
      const firstPara = paraArray.shift()

      pathTop = firstPara.offsetTop + firstPara.getBoundingClientRect().height/2
      pathWidth = svgEl.getBoundingClientRect().width
      paraTops = paraArray.map(pEl => {
        return pEl.offsetTop + pEl.getBoundingClientRect().height/2
      })

      d = `M0,${pathTop} h${pathWidth}`
      paraTops.forEach((pTop, index) => {
        d = d + ` M${pathWidth/2},${pTop} h${pathWidth/2}`

        if (index === paraTops.length - 1) {
          d = d + ` M${pathWidth/2},${pathTop} v${(pTop - pathTop)}`
        }
      })

      pathEl.setAttribute('d', d)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.drawPaths()
    })

    window.addEventListener('resize', this.drawPaths)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.drawPaths)
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-linked-boxes {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  &.is-vertical {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .c-svg {
      align-self: unset;
      height: 6rem;
    }
  }

  .c-topic {
    position: relative;
    padding: 2.5rem;
    font-weight: 700;
    font-size: $size-body-md;
    max-width: 30rem;
    text-align: center;
  }

  .c-svg {
    position: relative;
    width: 15rem;
    min-height: 3rem;
    align-self: stretch;

    path {
      fill: none;
      stroke: $text-black {
        width: 2px;
      }
    }
  }

  .c-paragraphes {
    position: relative;
    font-size: $size-body-md;
    max-width: 55rem;
    padding: 2.5rem;
  }

  @include phoneblet {
    .c-paragraphes,
    .c-topic {
      font-size: $size-body-lg;
    }
  }

  @include desktop {
    .c-paragraphes,
    .c-topic {
      font-size: $size-body-xl;
    }
  }
}
</style>