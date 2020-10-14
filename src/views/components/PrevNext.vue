<template lang='pug'>
.c-prev-next.mt-20-10
  .c-prev(
    v-if="prevData"
    @click="navigateTo(prevData)"
  )
    span.c-top-text Previous project
    h3.c-title {{ prevData.title }}
    img.c-image(:src='imgPaths[prevData.number]')
    arrow

  .c-next(
    v-if="nextData"
    @click="navigateTo(nextData)"
  )
    span.c-top-text Next project
    h3.c-title {{ nextData.title }}
    img.c-image(:src='imgPaths[nextData.number]')
    arrow(:toRight='true')
</template>

<script>
import { pageData } from '@utils/resources.js'
import {
  Bus,
  eventList
} from '@controller/eventBus.js'
import Arrow from '@components/Arrow.vue'

export default {
  name: 'PrevNext',
  components: {
    Arrow
  },
  data () {
    return {
      prevData: null,
      nextData: null
    }
  },
  props: {
    currentPageNumber: {
      type: Number,
      required: true
    }
  },
  computed: {
    imgPaths () {
      return {
        '01': require('@/assets/images/main/01.jpg'),
        '02': require('@/assets/images/main/02.jpg'),
        '03': require('@/assets/images/main/03.jpg'),
        '04': require('@/assets/images/main/04.jpg'),
        '05': require('@/assets/images/main/05.jpg'),
      }
    }
  },
  methods: {
    initData () {
      if (this.currentPageNumber > 1)
        this.prevData = pageData[`0${this.currentPageNumber - 1}`]
      if (this.currentPageNumber < 4)
        this.nextData = pageData[`0${this.currentPageNumber + 1}`]
    },
    navigateTo (data) {
      this.$router.push({
        name: data.routeName
      })
      Bus.$emit(eventList.toScrollTop)
    }
  },
  created () {
    this.initData()
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-prev-next {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
  flex-wrap: wrap;

  @include tablet {
    flex-wrap: nowrap;
  }
}

.c-prev,
.c-next {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30rem;
  min-height: 24rem;
  margin-bottom: 3rem;
  height: auto;
  align-items: center;
  overflow: hidden;
  padding: 1.5rem;
  cursor: pointer;

  .c-top-text {
    display: block;
    margin-bottom: 4rem;
    font: {
      size: $size-body-lg;
      weight: 700;
    }
  }

  .c-title {
    position: absolute;
    top: 26%;
    left: 50%;
    width: max-content;
    transform: translate(-50%, -50%);
    font-size: 4rem;
  }

  .c-image {
    display: block;
    width: 20rem;
    height: 14rem;
    margin-bottom: 2.5rem;
  }

  @include tablet {
    margin-bottom: 0;
    min-height: 30rem;

    .c-top-text {
      margin-bottom: 6rem;
    }

    .c-title {
      font-size: 5rem;
    }

    .c-image {
      width: 22rem;
      height: 15rem;
      margin-bottom: 3.5rem;
    }
  }

  @include desktop {
    width: 40rem;
    min-height: 35rem;

    .c-top-text {
      font-size: $size-body-xl;
    }

    .c-title {
      font-size: 7rem;
    }

    .c-image {
      width: 27rem;
      height: 18rem;
      margin-bottom: 3.5rem;
    }
  }

  @include largescreen {
    width: 46rem;

    .c-top-text {
      font-size: $size-body-xxl;
    }

    .c-title {
      font-size: 8rem;
    }

    .c-image {
      width: 35rem;
      height: 22rem;
      margin-bottom: 5rem;
    }
  }
}

.c-prev:not(:last-child) {

  @include tablet {
    margin-right: 2rem;
  }

  @include desktop {
    margin-right: 6rem;
  }

  @include largescreen {
    margin-right: 8rem;
  }
}
</style>