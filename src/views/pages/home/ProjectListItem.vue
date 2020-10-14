<template lang='pug'>
component.c-project-list-item(
  :is='tag'
  v-on='$listeners'
  @mousemove='moveHandler'
) 
  image-box.c-image(
    v-if='isDesktop'
    :style='imgStyleObj'
    :bgColor='itemInfo.number'
    :path='imgPath'
  )
  img.c-image(
    v-else
    :src='imgPath'
  )

  p.c-name.heading {{ itemInfo.projectName }}

  .c-description
    span.project-type(
      :class="{ 'commercial': itemInfo.isCommercial }"
    ) {{ itemInfo.isCommercial ? 'Commercial Project' : 'Personal Project' }}
    
    span.project-client(
      v-if="itemInfo.isCommercial"
    ) {{ itemInfo.client }}
</template>

<script>
import ImageBox from '@components/ImageBox.vue'

export default {
  name: 'ProjectListItem',
  components: {
    ImageBox
  },
  data () {
    return {
      imgStyleObj: {
        marginLeft: '0px',
        marginTop: '0px'
      }
    }
  },
  computed: {
    imgPath () {
      return require(`@/assets/images/main/0${this.itemInfo.number}.jpg`)
    },
    imageMoveMaxValue () {
      switch (this.$mq) {
        case 'tabletop':
          return { x: 80, y: 40 }
        case 'desktop': 
          return { x: 120, y: 60 }
        case 'largescreen':
          return { x: 140, y: 80 }
        default:
          return { x: 40, y: 20 }
      }
    },
    isDesktop () {
      return ['desktop', 'largescreen'].includes(this.$mq)
    }
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    itemInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    moveHandler({ target, clientX, clientY }) {
      const MARGIN_X_MAX = this.imageMoveMaxValue.x
      const MARGIN_Y_MAX = this.imageMoveMaxValue.y

      const {
        top, left, width, height 
      } = target.getBoundingClientRect()
      const [ dx, dy ] =
        [ clientX - left, clientY - top ]
      const [ fx, fy ] = [
        (dx - width/2) / width * 2,
        (dy - height/2) / height * 2
      ]
      const [ marginLeft, marginTop ] = 
        [ fx * MARGIN_X_MAX, fy * MARGIN_Y_MAX ]

      this.imgStyleObj.marginLeft = `${marginLeft}px`
      this.imgStyleObj.marginTop = `${marginTop}px`
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-project-list-item {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  border-bottom: 1px solid $text-grey-dark;
  cursor: pointer;
  overflow: hidden;

  @media screen and (min-height: 600px) and (max-width: 440px) {
    padding: 2rem 2rem;
  }

  @media screen and (min-height: 700px) and (max-width: 440px) {
    padding: 2.5rem 2rem;
  }

  @include phoneblet {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem 2.6rem;
  }

  @include tablet {
    padding: 1rem 4rem;
  }

  @include desktop {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 4rem;
    overflow: visible;
  }

  @include largescreen {
    padding: 2rem 8rem;
  }
  @media screen and (min-width: 769px) and (min-height: 800px) {
    margin-top: 0.75rem;
  }

  @media screen and (min-height: 1100px) {
    margin-top: 1.5rem;
  }

  @media screen and (min-height: 1250px) {
    margin-top: 3rem;
  }

  > * {
    pointer-events: none;
  }

  .c-image {
    position: absolute;
    display: block;
    top: 80%;
    left: -3rem;
    width: auto;
    height: 115%;
    transform: translateY(-50%);
    opacity: 0.55;
    z-index: 0;

    @include phoneblet {
      top: 50%;
      right: 3rem;
      left: unset;
      width: auto;
      height: 85%;
      opacity: 1;
      transform: translateY(-50%);
    }

    @include desktop {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.8;
      visibility: hidden;
    }
  }

  .c-name {
    position: relative;
    z-index: 1;
    font-size: 2.4rem;
    letter-spacing: 0.05em;

    @include phoneblet {
      font-size: 2.8rem;
    }

    @include tablet {
      font-size: 3.4rem;
    }

    @include desktop {
      font-size: 4.2rem;
    }

    @include largescreen {
      font-size: 5rem;
    }

    @media screen and (min-height:700px) {
      margin-top: 1rem;
    }

    @media screen and (min-height:800px) {
      margin-top: 2rem;
    }

    @media screen and (min-height:950px) {
      margin-top: 3rem;
    }

    @media screen and (min-height:1100px) {
      margin-top: 4rem;
    }
  }

  .c-description {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    line-height: 1.5;
    font-size: $size-body-sm;
    z-index: 1;

    @include phoneblet {
      flex-direction: row;
      align-items: center;
      font-size: $size-body-md;
    }

    @include from(1000px) {
      font-size: $size-body-lg;
    }

    @include desktop {
      flex-direction: column;
      align-items: flex-end;
    }

    @include largescreen {
      font-size: $size-body-xxl;
    }

    @media screen and (min-width:1200px) and (min-height: 800px) {
      margin-top: 2rem;
    }

    @media screen and (min-width:1200px) and (min-height: 950px) {
      margin-top: 2.6rem;
    }

    @media screen and (min-width:1200px) and (min-height: 1100px) {
      margin-top: 4rem;
    }

    .project-type {
      position: relative;
      display: inline-block;
      font-weight: 700;
      margin-left: 2rem;

      @include desktop {
        margin-left: 0;
      }
    }
    
    .project-type::before {
      position: absolute;
      top: 50%;
      left: -2rem;
      transform: translateY(-50%);
      content: '';
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      background-color: $text-grey;

      @include largescreen {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .project-type.commercial::before {
      background-color: $text-red;
    }

    .project-client::before {
      content: '/';
      display: none;
      margin: 0 1rem;

      @include phoneblet {
        display: inline-block;
      }

      @include desktop {
        display: none;
      }
    }
  }

  &:hover {
    background-color: #F4F4F4;
    
    .c-image {
      visibility: visible;
    }
  }
}
</style>