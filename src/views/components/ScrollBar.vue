<template lang='pug'>
.c-scrollbar(
  :class="`is-${pageNumber}`"
  ref="scrollbar"
)
  .c-track(
    ref="track"
  )
    .c-thumb(
      ref="thumb"
      @mousedown.stop="mouseDownHandler"
    )
</template>

<script>
import {
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'ScrollBar',
  data () {
    return {
      trackLength: null,
      thumbLength: null,
      maxThumbTop: null,
      currentPercent: 0,
      onDown: {
        mouseY: null,
        thumbTop: null
      },
      percent: 0,
      isMouseUpFromScrollBar: false
    }
  },
  props: {
    pageNumber: {
      type: Number,
      default: 1
    },
    pageLength: {
      type: Number
    }
  },
  methods: {
    measureLengths () {
      this.trackLength = 
        this.$refs.track.getBoundingClientRect().height
      this.thumbLength = 
        this.$refs.thumb.getBoundingClientRect().height

      this.maxThumbTop = this.trackLength - this.thumbLength
    },
    mouseDownHandler ({ clientY }) {
      this.isMouseUpFromScrollBar = true

      const thumbStyle = window.getComputedStyle(this.$refs.thumb)

      this.onDown.mouseY = clientY
      this.onDown.thumbTop = parseInt(thumbStyle.getPropertyValue('top'))

      window.addEventListener('mousemove', this.mouseMoveHandler)
      window.addEventListener('mouseup', this.mouseUpHandler)
    },
    mouseUpHandler () {
      if (this.isMouseUpFromScrollBar) {
        window.removeEventListener('mousemove', this.mouseMoveHandler)
        
        this.isMouseUpFromScrollBar = false
      }
    },
    mouseMoveHandler ({ clientY }) {
      const dy = clientY - this.onDown.mouseY
      let toY = this.onDown.thumbTop + dy

      if (toY < 0)
        toY = 0
      else if (toY > this.maxThumbTop)
        toY = this.maxThumbTop
      
      this.$refs.thumb.style.top = `${toY}px`
      this.currentFraction = toY / this.maxThumbTop

      Bus.$emit(eventList.scrollBarMove, { yFraction: this.currentFraction })
    },
    handleScrollFromApp ({ yFraction }) {
      this.$refs.thumb.style.top = `${yFraction * this.maxThumbTop}px`
    }
  },
  mounted () {
    this.measureLengths()

    window.addEventListener('mouseup', this.mouseUpHandler)
    Bus.$on(eventList.appOnScroll, this.handleScrollFromApp)
  },
  beforeDestroy () {
    window.removeEventListener('mouseup', this.mouseUpHandler)
    Bus.$off(eventList.appOnScroll, this.handleScrollFromApp)
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";
$scrollbar-width: 0.7rem;
$scrollbar-height: 18rem;
$thumb-height: 2.75rem;
$thumb-bg-list: $ref-01, $ref-02, $ref-03, $ref-04, $ref-05;

.c-scrollbar {
  position: fixed;
  z-index: $zIndex-indicator;
  width: $scrollbar-width;
  height: $scrollbar-height;
  cursor: move;
  display: none;

  @for $num from 1 through 5 {
    &.is-#{$num} {
      .c-thumb {
        background-color: nth($thumb-bg-list, $num);
      }
    }
  }

  .c-track {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: $scrollbar-width;
    background-color: $scrollbar-bg;
  }

  .c-thumb {
    position: absolute;
    width: 100%;
    height: $thumb-height;
    border-radius: $scrollbar-width;
  }

  @include from (1000px) {
    display: block;
  }
}

</style>