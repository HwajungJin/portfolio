<template lang='pug'>
.c-page(
  :class="'is-' + pageNumber"
)
  page-toolbar

  .c-first-section
    .c-page-introduction
      .c-text
        h3.c-number {{ projectData.number }}
        h3.c-title {{ projectData.title }}
        .c-introduction(
          v-html='projectData.introduction'
        )
      .image-container
        img.c-top-main-image(
          v-if='imgPaths.topMain'
          :src='imgPaths.topMain'
        )
    
    .c-page-sub-introduction
      .c-feature-box
      .c-grey-image-box
      
      .c-rep-image-container
        img.c-rep-image(
          v-if='imgPaths.pageIntro'
          :src='imgPaths.pageIntro'
        )
        .c-rep-image-placeholder(
          v-else
        ) Image or Video

      .c-sub-information
        .c-line
          .c-label My Role
          .c-content {{ projectData.role }}

        .c-line
          .c-label Project Type
          .c-content {{ projectData.projectType }}

        .c-line
          .c-label Team Members
          .c-content {{ projectData.members }}

  slot

  .page-section
    prev-next(:currentPageNumber='pageNumber')
  
  scrollbar.c-scrollbar(
    :pageNumber='pageNumber'
  )
</template>

<script>
import PageToolbar from '@components/PageToolbar.vue'
import PrevNext from '@components/PrevNext.vue'
import Scrollbar from '@components/ScrollBar.vue'
import { pageData } from '@utils/resources.js'
import {
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'PageTemplate',
  data () {
    return {
      projectData: null
    }
  },
  components: {
    PageToolbar,
    PrevNext,
    Scrollbar
  },
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  },
  computed: {
    imgPaths () {
      const {
        topMain,
        pageIntro
      } = this.projectData.imgs

      return {
        topMain: topMain ? require(`@/assets/images/pageMain/${topMain}`) : null,
        pageIntro: pageIntro ? require(`@/assets/images/pageIntro/${pageIntro}`) : null
      }
    }
  },
  created () {
    this.projectData = pageData[`0${this.pageNumber}`]
  },
  beforeMount () {
    this.$nextTick(() => {
      Bus.$emit(eventList.updatePageNumber, this.pageNumber)
    })
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-page {
  height: auto;

  * {
    user-select: none;
  }
}

.c-first-section {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid $background-grey;
  padding-top: calc(#{$page-toolbar-height} + 4rem);
}

.c-page-introduction {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  padding: 0 2.5rem;
  margin-bottom: 4rem;

  @include from (1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem;
  }

  @include desktop {
    padding: 0 8rem;
  }

  @include from(1400px) {
    padding: 0 12rem;
  }

  .c-text {
    margin-right: 0;
    margin-bottom: 6rem;

    .c-number {
      font: {
        size: 9rem;
        weight: 700;
      }
      color: var(--feature-color);
      line-height: 1;
    }

    .c-title {
      font: {
        size: 5.75rem;
        weight: 700;
      }
      color: $text-black;
      line-height: 1.3;
      margin-bottom: 4rem;
    }

    .c-introduction {
      position: relative;
      width: 100%;
      max-width: 50rem;
      font-size: $size-body-lg;
      color: $text-grey;
      padding-left: 7rem;

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 4rem;
        height: 3px;
        background-color: var(--feature-color);
        top: 0;
        left: 0;
      }
    }

    @include tablet {
      .c-title {
        font-size: 8rem;
      }

      .c-introduction {
        padding-left: 10rem;
        font-size: $size-body-xl;
      }

      .c-introduction::before {
        width: 7.7rem;
      }
    }

    @include from (1000px) {
      margin-bottom: 0;
      margin-right: 2rem;

      .c-introduction {
        max-width: 70rem;
      }
    }

    @include desktop {
      .c-number {
        font-size: 10rem;
      }

      .c-title {
        font-size: 9rem;
      }
    }

    @include from(1400px) {
      .c-number {
        font-size: 12rem;
      }

      .c-title {
        font-size: 11rem;
      }
    }
  }

  .image-container {
    position: relative;
    display: block;
    flex-grow: 1;
    text-align: center;
    max-width: max-content;

    .c-top-main-image {
      display: inline-block;
      width: 100%;
      max-width: 50rem;
      height: auto;
    }

    @include from(1000px) {
      max-width: unset;

      .c-top-image {
        width: auto;
        max-width: unset;
        height: 30rem;
      }
    }

    @include desktop {
      text-align: right;
      margin-top: 0;

      .c-top-image {
        height: 37rem;
      }
    }
  }
}

.c-page-sub-introduction {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;

  .c-feature-box {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    width: 18rem;
    height: 18rem;
    background-color: var(--feature-color);
    z-index: -1;
  }

  .c-rep-image-container {
    position: relative;
    width: 100%;
    display: block;
    margin-bottom: 6rem;

    .c-rep-image,
    .c-rep-image-placeholder {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
    }

    .c-rep-image-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
      background-color: var(--feature-color);
      color: $text-white;
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .c-sub-information {
    position: relative;
    font-weight: 700;
    font-size: $size-body-md;
    padding: 0 2rem;

    .c-line:not(:last-child) {
      margin-bottom: 3.5rem;
    }

    .c-line > .c-label {
      text-decoration: underline;
      color: var(--feature-color);
      margin-bottom: 1.2rem;
    }

    .c-line > .c-content {
      color: $text-black;
    }
  }

  @include phoneblet {
    .c-feature-box {
      width: 27rem;
      height: 27rem;
    }

    .c-sub-information {
      font-size: $size-body-xl;
    }
  }

  @include tablet {
    padding: 6rem;

    .c-feature-box {
      transform: translateY(0%);
    }

    .c-sub-information {
      max-width: 40rem;
      padding: 0;
    }
  }

  @include from(1000px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 7rem 8.5rem 10rem 7rem;

    .feature-box {
      width: 35rem;
      height: 35rem;
    }

    .c-sub-information {
      max-width: 25rem;
      font-size: $size-body-lg;
    }

    .c-rep-image-container {
      min-width: 68rem;
      max-width: 84rem;
      height: 42rem;
      margin-right: 3rem;
      margin-bottom: 0;
      flex-grow: 1;
    }
  }

  @include desktop {
    padding: 7rem 13rem 15rem 7rem;
  }

  @include largescreen {
    padding: 12rem 15rem 12rem 17rem;

    .feature-box {
      width: 40rem;
      height: 40rem;
    }

    .c-sub-information {
      max-width: 30rem;
      font-size: $size-body-xl;
    }

    .c-rep-image-container {
      width: 65vw;
      max-width: 96rem;
      height: 50rem;
    }
  }
}

.c-grey-image-box {
  position: absolute;
  display: none;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  background-color: $background-grey;
  z-index: -1;

  @include from(1000px) {
    display: block;
    height: 18rem;
  }

  @include desktop {
    height: 20rem;
  }

  @include largescreen {
    height: 28rem;
  }
}

.c-scrollbar {
  position: fixed;
  bottom: 3.5rem;
  right: 3.5rem;

  @include desktop {
    bottom: 5rem;
    right: 8rem;
  }
}
</style>