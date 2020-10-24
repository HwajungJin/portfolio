<template lang='pug'>
.c-text-cloud
  svg.c-svg(
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 150 70"
  )
    defs
      pattern(
        id='cloud-pattern'
        x='0' y='0'
        width='20' height='70'
        patternUnits='userSpaceOnUse'
        patternTransform='rotate(20)'
      )
        rect.c-pattern-rect(
          x='0' y='0'
          height='70'
          :width='rectObj.width'
        )
    
    path.c-cloud(
      ref='cloudEl'
      fill='url(#cloud-pattern)'
      :d="isUpsideDown? 'M 0,15 h68 l7,-15 7,15 h68 v55 h-150 z' : 'M 0,0 h150 v55 h-68 l-7,15 -7,-15 h-68 z'"
    )
    text.c-welcome-text(
      ref='textEl'
      x="75"
      fill='none'
      :y="isUpsideDown? 50 : 35"
    ) Welcome!
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'TextCloud',
  data () {
    return {
      rectObj: { width: 0 }
    }
  },
  props: {
    isUpsideDown: {
      type: Boolean,
      default: true,
      required: false
    },
    immediateRender: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    initializeAnimation () {
      const { cloudEl, textEl } = this.$refs
      const pathLength = Math.ceil(cloudEl.getTotalLength())

    return gsap.timeline()
      .set(
        cloudEl,
        {
          stroke: 'var(--cloud-color)',
          strokeDasharray: `${pathLength}, ${pathLength}`,
          strokeDashoffset: pathLength
        }
      ).set(
        textEl,
        {
          fill: 'var(--text-color)',
          opacity: 0
        }
      ).to(
        cloudEl,
        {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: 'power2.out'
        }
      ).addLabel('outlineDone', '+=0.3')
      .to(
        this.rectObj,
        {
          width: 20,
          duration: 0.8,
          ease: 'power2.out'
        },
        'outlineDone'
      ).to(
        textEl,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        'outlineDone'
      )
    }
  },
  mounted () {
    if (this.immediateRender) {
      const tl = this.initializeAnimation()

      tl.progress(1)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-text-cloud {
  position: absolute;
  width: 12rem;
  height: 5rem;

  --text-color: #{$background-light-grey};
  --cloud-color: #{$text-black};

  @include tablet {
    width: 15rem;
    height: 7rem;
  }
}

.c-svg {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
}

.c-cloud {
  stroke-width: 2;
}

.c-pattern-rect {
  fill: $text-black;
  stroke: none;
}

.c-welcome-text {
  font-size: 2.2rem;
  letter-spacing: 1.25px;
  text-anchor: middle;
}
</style>