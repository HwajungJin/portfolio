<template lang='pug'>
.page-section.c-user-scenario.mt-20-10
  h4.mb-6 User Scenario
  
  styled-box.c-user-box(
    v-for="item in userList"
    :key='item.description'
  )
    img.user-image(:src='item.imagePath')

    .content
      .top-description {{ item.description }}

      .key-problems
        .key-problems__label.color-featured &lt;Key Problems&gt;

        .key-problems__item(
          v-for="(string,i) in item.keyProblems"
          :key="i"
        ) {{ string }}

      .bottom-text {{ item.bottomText }}
</template>

<script>
import StyledBox from '@components/StyledBox.vue'

export default {
  name: 'FourthUserScenario',
  components: {
    StyledBox
  },
  computed: {
    userList () {
      const path = fileName => require('@/assets/images/04/' + fileName)

      return [
        {
          imagePath: path('user_01.jpg'),
          description: 'Patient who has early diagnosis of skin cancer',
          keyProblems: [
            `Periodically see a doctor to prevent skin cancer spreads. 
            It takes a lot of time and money to visit a hospital regularly.`
          ],
          bottomText: 'What is the easiest way to diagnose and prevent skin cancer at home?'
        },
        {
          imagePath: path('user_02.jpg'),
          description: 'A patient who went through skin cancer before',
          keyProblems: [
            `To prevent the recurrence of skin cancer, have to check my body every time.`,
            `I am worried that the condition of the skin cancer will get worse or move to another place of my body.`
          ],
          bottomText: `What is the way I can continue to check my body condition?`
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-user-scenario {
  @include tablet {
    padding: 0 4rem;
  }
  @include from(1000px) {
    padding: 0 10rem;
  }
}

.c-user-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 2rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  .user-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
    padding-top: 4rem;
    margin-top: 4rem;
    border-top: 1px dashed $text-grey-dark;

    .top-description,
    .bottom-text {
      font-size: $size-body-xxl;
      font-weight: 700;
      margin-bottom: 4rem;
    }

    .key-problems {
      margin-bottom: 4rem;

      &__label {
        font-size: $size-body-xxl;
        font-weight: 700;
        margin-bottom: 2.5rem;
      }

      &__item {
        font-size: $size-body-xl;
      }

      &__item:not(:last-child) {
        margin-bottom: 2.5rem;
      }
    }

    .bottom-text {
      margin-bottom: 0;
    }
  }

  @include phoneblet {
    padding: 6rem 4rem;

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
    
    .user-image {
      max-width: 40rem;
    }

    .content {
      margin-top: 6rem;
      padding-top: 6rem;

      .top-description,
      .bottom-text {
        font-size: $size-body-huge;
      }

      .key-problems__item {
        font-size: $size-body-xl;
      }
    }
  }

  @include tablet {
    flex-direction: row;
    justify-content: center;
    padding: 4rem;
    max-width: 80rem;

    &:not(:last-child) {
      margin-bottom: 8rem;
    }

    .user-image {
      width: 20rem;
    }

    .content {
      justify-content: center;
      align-self: stretch;
      align-items: flex-start;
      margin-left: 4rem;
      padding-left: 4rem;
      border-left: 1px dashed $text-grey-dark;
      padding-top: unset;
      margin-top: unset;
      border-top: unset;
    }
  }

  @include from(1000px) {
    .user-image {
      width: 30rem;
    }

    .top-description,
    .bottom-text {
      font-size: $size-body-xxl;
    }
  }

  @include desktop {
    max-width: 86rem;
  }

  @include largescreen {
    padding: 8rem;
    max-width: 100rem;

    .user-image {
      width: 40rem;
    }

    .content {
      margin-left: 8rem;
      padding-left: 8rem;

      .top-description,
      .bottom-text {
        font-size: 2.4rem;
      }
      
      .key-problems {
        margin-top: 2rem;
        margin-bottom: 6rem;

        &__label,
        &__item {
          font-size: $size-body-xxl;
        }
      }
    }
  }
}
</style>