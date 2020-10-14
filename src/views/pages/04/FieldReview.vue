<template lang='pug'>
.page-section.c-field-review.mt-20-10
  h4.c-section-header Field Review

  .ribbon-container.mt-8
    .ribbon-element
      styled-box.c-textbox-big
        .top-part
          img.heatmap-image(:src='imgPaths.heatmap')

          .description
            h5.top-part__title.mb-2
              img.icon(:src='imgPaths.icon')
              span Skin vision
            
            p.paragraph
              | The app that helps to perform regular self-checks for skin cancer with the phone.

        p
          | According to articles, It does work. But 
          strong It is limited.
          |  You cannot reach your back and somewhere you cannot see closely.
          | The app uses a technique called fractal geometry, which looks for patterns 
          | in the outlines and dimensions of a mole that make it more likely to be malignant.
          | It then classes it as low, high, or medium risk.
          | Someone points to a study in the journal of the European Academy of Dermatology and
          | Venereology in 2015 which found SkinVision was accurate at detecting melanoma,
          | although not as good as dermatologists. 
          | 'Fractal geometry technology is far from perfect.' says Dr. Wedgeworth.
          | But he thinks it's a good idea for patients to use apps that allow them to store images
          | so they can monitor changes in moles, or even show their GP if they are concerned.
    
    .ribbon-element
      styled-box.c-textbox-small
        p
          | When a person is trying to see symptoms of skin cancer, 
          | he or she needs another person of uses 
          span.color-featured a full-length mirror
          | .


</template>

<script>
import StyledBox from '@components/StyledBox.vue'

export default {
  name: 'FourthFieldReview',
  components: {
    StyledBox
  },
  computed: {
    imgPaths () {
      const path = fileName => require('@/assets/images/04/' + fileName)

      return {
        heatmap: path('heatmap.jpg'),
        icon: path('heaticon.jpg')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-field-review {

  h4.c-section-header {
    margin-bottom: 4rem;

    @include desktop {
      margin-bottom: 16rem;
    }
  }

  .c-textbox-big {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;

    .top-part {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 4rem;
      width: 98%;
      height: auto;

      &__title {
        display: flex;
        align-items: flex-end;
        font-size: $size-body-xxl;
      }

      .heatmap-image {
        display: block;
        height: auto;
        margin-bottom: 6rem;
        width: 100%;
      }

      .icon {
        display: inline-block;
        width: 2.5rem;
        height: auto;
        margin-right: 2rem;
      }
    }

    p {
      font-size: $size-body-lg;
    }

    @include phoneblet {
      padding: 4rem;

      .top-part {
        margin-bottom: 6rem;
      }
    }

    @include tablet {
      padding: 6rem;

      .top-part {

        &__title {
          font-size: $size-body-huge;
        }

        .heatmap-image {
          width: 42rem;
        }

        .icon {
          width: 3.6rem;
        }
      }
    }

    @include from(1000px) {

      .top-part {
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;

        .heatmap-image {
          width: 34rem;
          margin-right: 6rem;
          margin-bottom: 0;
        }
      }
    }


    @include desktop {
      width: calc(100% - 10rem);
      max-width: 100rem;
      margin-left: 5rem;
      margin-bottom: 0;
      padding-top: 24rem;

      .top-part {
        position: absolute;
        width: 100%;
        top: -4rem;
        left: -4rem;
    
        .heatmap-image {
          width: 46rem;
          margin-right: 6rem;
        }

        &__title {
          font-size: 3rem;
        }

        .icon {
          margin-right: 3rem;
          width: 5rem;
        }

        .paragraph {
          font-size: $size-body-xl;
        }
      }

      p {
        font-size: $size-body-xl;
      }
    }

    @include largescreen {
      width: calc(100% - 30rem);
      max-width: unset;
      margin-left: 14rem;
      padding-top: 28rem;

      p {
        font-size: $size-body-xl;
      }

      .top-part {
        .heatmap-image {
          width: 56rem;
          margin-right: 8rem;
        }

        .icon {
          width: 6rem;
        }

        &__title {
          font-size: 3.6rem;
        }

        .paragraph {
          font-size: $size-body-xxl;
        }
      }
    }
  }

  .c-textbox-small {
    position: relative;
    display: block;
    background-color: $background-white;
    padding: 3rem;
    font-weight: 700;
    font-size: $size-body-xl;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    @include phoneblet {
      font-size: $size-body-xxl;
    }

    @include tablet {
      max-width: 75rem;
    }

    @include desktop {
      max-width: 90rem;
      padding: 6rem;
      font-size: $size-body-huge;
    }

    @include largescreen {
      max-width: 110rem;
      font-size: 3.2rem;
    }
  }
}
</style>