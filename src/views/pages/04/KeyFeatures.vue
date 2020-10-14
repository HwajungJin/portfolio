<template lang='pug'>
.page-section.c-key-features.mt-20-10
  h4.mb-6 Key Features

  .c-key-features-container
    img.image(:src='imgPath')

    styled-box.c-feature-list
      .feature-item(
        v-for="(item, index) in featureList"
        :key="item.title"
      )
        .top
          span.number.color-featured {{ item.number }}
          span.title {{ item.title }}

        .content
          featured-list-item.content-item(
            v-for="(c, i) in item.contents"
            :key='i'
          ) {{ c }}
</template>

<script>
import StyledBox from '@components/StyledBox.vue'
import FeaturedListItem from '@components/FeaturedListItem.vue'

export default {
  name: 'FourthKeyFeatures',
  components: {
    StyledBox,
    FeaturedListItem
  },
  data () {
    return {
      featureList: [
        {
          title: 'Diagnosis',
          number: '01.',
          contents: [
            'Diagnose your skin',
            'Track your skin cancer as a mole mapping',
            'Digital storage for diagnosis history'
          ]
        },
        {
          title: 'Notification',
          number: '02.',
          contents: [
            'Prevention guidelines',
            'Awareness of applying sunscreen',
            'Condition of skin'
          ]
        },
        {
          title: 'Scheduling',
          number: '03.',
          contents: [
            "Schedule with a dematologist if it's urgent"
          ]
        }
      ]
    }
  },
  computed: {
    imgPath () {
      return require('@/assets/images/04/key-features.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-key-features-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .image {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 2.6rem;
  }

  .c-feature-list {
    padding: 4rem 2rem;

    .feature-item {
      display: block;

      &:not(:last-child) {
        margin-bottom: 2.5rem;
      }

      .top {
        font-family: 'Goku';
        font-weight: 700;
        font-size: $size-body-huge;
        margin-bottom: 3rem;

        .number {
          display: inline-block;
          margin-right: 1.2rem;
        }
      }

      .content {
        margin-left: 1rem;
        
        &-item {
          font-size: $size-body-xxl;
        }

        &-item:not(:last-child) {
          margin-bottom: 1.2rem;
        }
      }
    }
  }
  
  @include tablet {
    .image {
      max-width: 70rem;
      margin-bottom: 4rem;
    }

    .c-feature-list {
      padding: 4rem 6rem;

      .feature-item {
        .top .number {
          margin-right: 2rem;
        }
      }

      .content {
        margin-left: 1.6rem;
      }

      .content-item {
        font-size: $size-body-huge;
      }
    }
  }

  @include from(1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .image {
      max-width: 44rem;
      margin-bottom: 0;
      margin-left: -10rem;
    }

    .c-feature-list {
      padding: 6rem 4rem;
      margin-left: -6rem;

      .content {
        margin-left: 2rem;
      }
    }
  }

  @include desktop {
    .image {
      max-width: 62rem;
    }

    .c-feature-list {
      padding: 6rem;
      margin-left: -9rem;
    }
  }

  @include largescreen {
    .image {
      max-width: 90rem;
    }

    .c-feature-list {
      padding: 6rem 10rem;
      padding-left: 14rem;
      margin-left: -16rem;

      .feature-item {
        .top {
          font-size: 3.4rem;
        }
      }
    }
  }
}
</style>