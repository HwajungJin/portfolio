<template lang='pug'>
.c-scroll-indicator(
  ref='el'
)
  .bar
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'ScrollIndicator',
  methods: {
    revealAnimation () {
      return gsap.from(
        this.$refs.el,
        {
          duration: 0.3,
          ease: 'power3.out',
          opacity: 0
        }
      )
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-scroll-indicator {
  position: absolute;
  width: 1.6rem;
  height: 3rem;
  border-radius: 1.6rem;
  border: 1px solid $text-black;
  background-color: $background-white;

  .bar {
    position: absolute;
    top: 0.65rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0.2rem;
    height: 1.6rem;
    overflow: hidden;
  }
  .bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-radius: 0.2rem;
    background-color: $text-black;
    animation: scrolldown 2s cubic-bezier(.59,.11,.91,.3) infinite;
  }
}

@keyframes scrolldown {
  0% {
    top: -5%;
    height: 0;
  }
  30% {
    top: 0;
    height: 100%;
  }
  60% {
    top: 110%;
    height: 100%;
  }
  100% {
    top: 110%;
    height: 100%;
  }
}
</style>