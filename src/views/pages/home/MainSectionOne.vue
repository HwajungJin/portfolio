<template lang='pug'>
.main-section
  background-animation(
    ref='bgAnimation'
    @bg-animation-done='playMainTextAnimation'
    @color-palette-animation-done='playToolRevealAnimation'
  )
  
  template
    .c-header(
      ref='header'
    )
      .header-container
        a.link(@click="$emit('scroll-to', 'about')") About
        span.header__line
        a.link(@click="$emit('scroll-to', 'work')") Works
        span.header__line
        a.link(@click="$emit('scroll-to', 'contact')") Contact me

    .c-content-container
      .introduction
        string-typer.c-hi-text(
          ref='stringTyper'
          string="Hi, I'm Jin"
          :duration='0.75'
        )

        .c-profession(
          ref='profession'
        )
          span.featureline
          span.profession-title UI / Graphic Designer

      main-title.c-main-title(
        ref='mainTitle'
      )

      text-cloud.c-welcome-cloud(
        v-if='false'
        ref='textCloud'
        :isUpsideDown="!isDesktop"
      )

    hamburger-icon.c-menuicon(
      ref='hamburger'
    )
    
    scroll-indicator.c-scroll-indicator(
      ref='scrollIndicator'
    )
</template>

<script>
import gsap from 'gsap'

import BackgroundAnimation from './HomeAnimationNew.vue'
import ScrollIndicator from '@components/ScrollIndicator.vue'
import HamburgerIcon from '@components/hamburgerIcon.vue'
import MainTitle from './HomeMainTitle.vue'
import TextCloud from './TextCloud.vue'
import StringTyper from '@components/stringTyper.vue'

export default {
  name: 'MainSectionOne',
  data () {
    return {
      masterTimeline: null,
      toolTimeline: null
    }
  },
  components: {
    BackgroundAnimation,
    ScrollIndicator,
    HamburgerIcon,
    MainTitle,
    TextCloud,
    StringTyper
  },
  computed: {
    isDesktop () {
      return ['tabletop', 'desktop', 'largescreen'].includes(this.$mq)
    },
    immediateRender () {
      return this.$root.$data.shared.introAnimationDisabled
    }
  },
  methods: {
    registerAnimations () {
      this.masterTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          !this.immediateRender &&
            this.playColorPaletteAnimation()
        }
      })
        .add( this.$refs.mainTitle.initializeAnimation() )
        .add( this.$refs.stringTyper.initializeAnimation(), "+=0.4" )
        .add( this.professionAnimation(), "+=0.2" )
        // .add( this.$refs.textCloud.initializeAnimation(), "+=0.4" )
    
      this.toolTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          !this.immediateRender &&
            this.$emit('tool-animation-done')
        }
      })
        .add( this.hamburgerAnimation(), 0)
        .add( this.headerAnimation(), 0)
    },
    professionAnimation () {
      return gsap.from(
        this.$refs.profession.querySelectorAll('span'),
        {
          duration: 0.6,
          y: '-4rem',
          ease: 'power3.out'
        }
      )
    },
    hamburgerAnimation () {
      return gsap.from(
        this.$refs.hamburger.$el,
        {
          duration: 0.6,
          x: '-2.5rem',
          opacity: 0,
          ease: 'power4.in'
        }
      )
    },
    headerAnimation () {
      return gsap.from(
        this.$refs.header,
        {
          duration: 0.6,
          x: '2.5rem',
          opacity: 0,
          ease: 'power4.in'
        }
      )
    },
    playMainTextAnimation () {
      this.masterTimeline.play()
    },
    playColorPaletteAnimation () {
      this.$refs.bgAnimation.colorPaletteTimeline.play()
    },
    playToolRevealAnimation () {
      this.toolTimeline.play()
    }
  },
  mounted () {
    this.registerAnimations()

    if (this.immediateRender) {
      this.masterTimeline.progress(1)
      this.toolTimeline.progress(1)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-header {
  position: absolute;
  top: 2rem;
  right: 1.4rem;
  font-size: $size-body-sm;
  font-weight: 700;
  writing-mode: horizontal-tb;
  height: auto;
  overflow: hidden;
  padding: 1rem 0;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__line {
    display: inline-block;
    background-color: $text-black;
    width: 2px;
    height: 2px;
    border-radius: 2px;
    margin: 0;
  }

  .link {
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;
    padding: 1rem;
  }

  @include phoneblet {
    right: 3rem;

    .header__line {
      margin: 0 1rem;
    }
  }

  @include tablet {
    top: 2.75rem;
    right: 7rem;
    font-size: $size-body-lg;

    .header__line {
      width: 6rem;
    }
  }

  @include from(1000px) {
    top: 10rem;
    right: 8rem;
    right: 6rem;
    writing-mode: vertical-rl;
    height: 55rem;

    .header__line {
      height: 6rem;
      width: 1px;
      margin: 0;
    }

    .header-container {
      padding: 0.25rem;
      justify-content: flex-start;

      & > *:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: 1000px) and (min-height: 1100px) {
    top: 18rem;
  }

  @include from(1400px) {
    right: 8rem;
  }

  @include largescreen {
    font-size: $size-body-lg;
  }

  @media screen and (min-height: 800px) and (min-width: 1000px) {
    .header__line {
      height: 10rem;
    }
  }
}

.c-content-container {
  position: absolute;
  top: 16rem;
  left: 50%;
  transform: translate(-50%);
  width: max-content;
  height: max-content;

  .introduction {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1rem;

    @include phoneblet {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  @media screen and (max-height: 700px) and (max-height: 770px) {
    top: 12rem;
  }

  @include tablet {
    top: 22rem;
    left: 50%;
    transform: translate(-50%);
  }

  @include from(1000px) {
    top: 20rem;
    left: 16rem;
    transform: unset;
  }

  @media screen and (min-width: 1000px) and (min-height: 1100px) {
    top: 30rem;
  }

  @include from(1400px) {
    top: 18rem;
    left: 22rem;
  }
}

.c-hi-text {
  position: relative;
  font-size: $size-body-lg;

  @include phoneblet {
    font-size: $size-body-xl;
  }

  @include from(1000px) {
    font-size: $size-body-xxl;
  }

  @include largescreen {
    font-size: $size-body-huge;
  }
}

.c-profession {
  position: relative;
  font-size: $size-body-md;
  font-weight: 700;
  display: flex;
  align-items: flex-start;
  margin-top: 0.6rem;
  margin-bottom: 1rem;
  overflow: hidden;

  > * {
    position: relative;
  }

  .featureline {
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
    background-color: $text-black;
  }

  @include phoneblet {
    font-size: $size-body-md;
    margin-top: 0;
    margin-bottom: 0;

    .featureline {
      margin-right: 1rem;
      width: 3rem;
      height: 2px;
    }
  }

  @include tablet {
    .featureline {
      margin-right: 2.4rem;
      width: 4.6rem;
    }
  }

  @include from(1000px) {
    font-size: $size-body-lg;
  }

  @include largescreen {
    font-size: $size-body-xxl;
  }
}

.c-welcome-cloud {
  bottom: -2rem;
  right: 0;
  transform: translateX(0%) translateY(100%);

  @include from(1000px) {
    top: -2rem;
    bottom: unset;
    right: 0;
    transform: translateX(45%) translateY(-100%);
  }
}

.c-menuicon {
  position: absolute;
  top: 3rem;
  left: 2rem;

  @include phoneblet {
    left: 3rem;
  }

  @include tablet {
    top: 5rem;
    left: 7rem;
  }
}

.c-scroll-indicator {
  bottom : 3rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-height: 700px) {
    bottom: 6rem;
  }
}
</style>