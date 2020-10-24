<template lang='pug'>
.c-home(
  ref='home'
  :class="{ 'animation-on': sectionOneAnimationOn }"
)
  main-section-one(
    ref='mainSectionOne'
    @scroll-to="scrollTo"
    @tool-animation-done='playSectionOneAnimation'
  )

  .main-section#about(
    ref='about'
  )
    vertical-red-text.c-red-text-about I am ..

  main-section-three#work(ref='work')

  main-section-four#contact(ref='contact')

  timeline.c-timeline(
    ref='timeline'
  )

  section-indicator.c-section-indicator(
    ref='sectionIndicator'
    v-if="!isMobile"
    :activeSection='sectionDetector.current'
  )
</template>

<script>
import SectionIndicator from '@components/sectionIndicator.vue'
import StringTyper from '@components/stringTyper.vue'
import Timeline from './Timeline.vue'
import VerticalRedText from './VerticalRedText.vue'

import MainSectionOne from './MainSectionOne.vue'
import MainSectionThree from './MainSectionThree.vue'
import MainSectionFour from './MainSectionFour.vue'

import gsap from 'gsap'

export default {
  name: 'Home',
  components: {
    Timeline,
    VerticalRedText,
    StringTyper,
    SectionIndicator,
    MainSectionOne,
    MainSectionThree,
    MainSectionFour
  },
  data () {
    return {
      sectionOneAnimationTimeline: null,
      sectionOneAnimationOn: true,
      sectionDetector: {
        current: 'main',
        sections: [
          { name: 'main', top: 0 },
          { name: 'about', top: null },
          { name: 'work', top: null },
          { name: 'contact', top: null },
        ]
      }
    }
  },
  computed: {
    isMobile () {
      return ['small', 'phone', 'phoneblet'].includes(this.$mq)
    },
    immediateRender () {
      return this.$root.$data.shared.introAnimationDisabled
    }
  },
  methods: {
    initializeSectionOneAnimation () {
      this.sectionOneAnimationTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          this.sectionOneAnimationOn = false
          
          !this.immediateRender &&
            this.$root.disableIntroAnimation()
        }
      })

      !this.isMobile &&
        this.sectionOneAnimationTimeline.add( this.$refs.sectionIndicator.revealAnimation(), 0 )

      this.sectionOneAnimationTimeline
        .add( this.$refs.timeline.timelineAnimation(), 0 )
        .add( this.$refs.mainSectionOne.$refs.scrollIndicator.revealAnimation() )
    },
    playSectionOneAnimation () {
      this.sectionOneAnimationTimeline.play()
    },
    initSectionDetector () {
      const { sections } = this.sectionDetector

      sections.forEach((section) => {
        const ref = this.$refs[section.name]
        
        if (ref) {
          const el = ref.$el || ref
          section.top = el.offsetTop
        }
      })
    },
    scrollHandler () {
      if (!this.$refs.home)
        return

      const { sections } = this.sectionDetector
      const currentScrollTop = this.$refs.home.scrollTop

      for (let i=0; i<sections.length; i++) {
        const s = sections[i]

        if (currentScrollTop < s.top - window.innerHeight/2)
          break;
        else {
          this.sectionDetector.current = s.name
          continue;
        }
      }
    },
    resizeHandler () {
      this.initSectionDetector()
      this.scrollHandler()
    },
    scrollTo (sectionTo) {
      const targetSection = this.sectionDetector.sections.find(
        section => section.name === sectionTo
      )
      
      if (targetSection)
        this.$refs.home.scrollTop = targetSection.top
    }
  },
  mounted () {
    this.initSectionDetector()
    this.$refs.home.addEventListener('scroll', this.scrollHandler)
    window.addEventListener('resize', this.resizeHandler)

    this.initializeSectionOneAnimation()
    this.immediateRender &&
      this.sectionOneAnimationTimeline.progress(1)
  },
  beforeDestory () {
    this.$refs.home.removeEventListener('scroll', this.scrollHandler)
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  &.animation-on {
    overflow: hidden;
  }
}

.main-section#work {
  padding-bottom: 5rem;
}

.c-timeline {
  left: 4rem;
  top: calc(100 * var(--vh) - 18rem);

  @include from(600px) {
    left: 10rem;
  }

  @include tablet {
    top: calc(100 * var(--vh) - 18rem);
    left: 20rem;
  }

  @include from(1000px) {
    left: 26rem;
  }

  @include desktop {
    left: 34rem;
  }

  @include largescreen {
    left: 43rem;
  }

  @media screen and (min-height: 800px) {
    top: calc(100 * var(--vh) - 24rem);
  }

  @media screen and (min-height: 1100px) {
    top: calc(100 * var(--vh) - 50rem);
  }
}

.c-red-text {
  &-about {
    font-size: 8rem;
    bottom: 0.2rem;
    right: 0.2rem;

    @media screen and (max-height: 700px) and (max-width: 440px) {
      font-size: 6rem;
    }

    @include phoneblet {
      font-size: 8rem;
      bottom: 0.2rem;
      right: 0.2rem;
    }

    @include tablet {
      bottom: unset;
      right: unset;
      top: 6rem;
      left: 4rem;
      transform: rotate(0deg);
    }

    @include desktop {
      font-size: 10rem;
      top: unset;
      bottom: 0.5rem;
      left: 20rem;
      transform: rotate(-180deg);
    }

    @include largescreen {
      left: 24rem;
    }
  }
}

.c-section-indicator {
  position: fixed;
  left: 7rem;
  bottom: 20rem;
}
</style>