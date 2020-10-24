<template lang='pug'>
.c-modal-animation(
  :class="'is-on-page-0' + currentPageNumber"
)
  .c-modal-animation__layer(
    ref='layer'
    v-for="n in 2"
    :key="n"
    :style="{ animationDuration: duration + 'ms', animationName: currentAnimationName }"
  )
</template>

<script>
import { debounce } from '@utils/utils.js'

export default {
  name: 'ModalAnimation',
  data () {
    return {
      resizeHandlerDebounced: null,
      currentAnimationName: 'reveal-layer',
      currentPageNumber: 0
    }
  },
  props: {
    duration: {
      type: Number,
      required: false,
      default: 1000
    }
  },
  methods: {
    adjustLayerDimension () {
      const [ w, h ] = [ window.innerWidth, window.innerHeight ]
      const sideLength = Math.sqrt(w*w + h*h)

      this.$refs.layer.forEach(layerEl => {
        layerEl.style.width = `${sideLength}px`
        layerEl.style.height = `${sideLength}px`
        layerEl.style.marginTop = `${-sideLength/2}px`
        layerEl.style.marginLeft = `${-sideLength/2}px`
      })
    },
    triggerWrapAnimation () {
      return new Promise(resolve => {
        this.currentAnimationName = 'wrap-layer'

        window.setTimeout(() => {
          resolve('animation-done')
        }, this.duration + 50)
      })
    }
  },
  created () {
    const { currentPageNumber } = this.$root.$children[0]
    this.currentPageNumber = currentPageNumber
  },
  mounted () {
    this.adjustLayerDimension()

    this.resizeHandlerDebounced = debounce(this.adjustLayerDimension, 30)
    window.addEventListener('resize', this.resizeHandlerDebounced)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandlerDebounced)
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-modal-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  pointer-events: none;

  &.is-on-page-00 {
    --modal-ani-feature-color: var(--ref_02);
  }

  @for $n from 1 through 5 {
    &.is-on-page-0#{$n} {
      --modal-ani-feature-color: var(--ref_0#{$n});
    }
  }

  &__layer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(45deg) translateY(100%);
    animation-timing-function: cubic-bezier(.64,.12,.83,.33);
    animation-fill-mode: forwards;
  }
  &__layer:first-child {
    background-color: var(--modal-ani-feature-color);
  }
  &__layer:nth-child(2) {
    background-color: $text-black;
    animation-delay: 0.1s;
  }
}
</style>