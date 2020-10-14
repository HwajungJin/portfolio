<template lang='pug'>
  page-template.c-unashamed(
    :pageNumber='1'
  )
    page-brief-new
      .brief-paragraph
        | Current systems do not provide 
        strong teachers 
        | with effective resources when it comes to teaching
        strong contraception 
        | in their classrooms.
        br
        | There is no set standard on what to teach or 
        | how to teach this sensitive topic.

      h2.brief-subtitle How do the teachers feel?

      .brief-paragraph
        | A lot of individual teachers tend to make their own decisions on 
        | what and when to teach, due to 
        strong the lack of resources 
        | they have. This is not great, as the teachers may be holding back information 
        | that can be crucial or life-changing to learners.

      template(#extra-content)
        .c-brief-card-container
          styled-box.c-brief-card
            p
              | "Students are laughing and 
              span.color-featured not interested."
        
          styled-box.c-brief-card
            p
              | "I feel like I am
              span.color-featured not supported 
              | because there is a lack of resources 
              | which makes me feel defeated..."

    .page-section.c-our-resources.mt-20-10
      h4.c-our-resources__title.has-text-center
        | What are the existing resources online?
      
      .ribbon-container.mt-10
        .ribbon-element.c-existing-resources
          .er-description
            p.mb-2
              | We found these resources linked to the Ministry of Health's Website. they were:
            
            ul.er-list
              li Text-heavy
              li Lacking photos and illustrations
              li Poor&Boring Design

          styled-box.er-images-container
            .er-image-unit
              img.er-image.front(:src='imgPaths.er11')
              img.er-image.back(:src='imgPaths.er12')
            .er-image-unit
              img.er-image.front(:src='imgPaths.er21')
              img.er-image.back(:src='imgPaths.er22')
            .er-image-unit
              img.er-image.front(:src='imgPaths.er31')
              img.er-image.back(:src='imgPaths.er32')

        .ribbon-element
          styled-box.c-er-how-text
            | "How can we provide effective resources in a 
            span.color-featured fun, safe, and effective way 
            |  for teachers to use in the classroom when it comes to teaching 
            span.color-featured contraception
            | ?"
        .ribbon-element
          styled-box.c-unashamed-explain
            h3.unashamed-text
              span Unasham
              span.red-text ed

            p.explain-text
              | The words 
              strong “Unashamed”
              | resembles that we are a teaching resource that 
              | is not shy to talk about you. To not be ashamed
              | to learn about contraception but simply embrace it.
              span.red-text “ED”
              | represents that we provide Sexual Education resources.

    .page-section.c-our-research.mt-20-10
      .c-our-research__graph
        h5 Our Research

        .graph-container
          img.c-our-research__image(:src='imgPaths.piechart')
          img.c-our-research__image(:src='imgPaths.barchart')
      .c-our-research__description
        .block
          span.block-header 1/3
          p.block-para
            | of females reported having sexual intercourse before the age of 16 years.

        .block
          span.block-header 40%
          p.block-para
            | A study involving 10 students in Hawke’s Bay Region found that
            | nearly 40% were having sex at the age of 12 years or younger.

        .block
          span.block-header 91%
          p.block-para
            | of students find contraception information from school or online.
        
        .block-separator

        .block
          p.block-para
            | Lower decile schools in Porirua, 
            | New Zealand have reported “we are not doing as much as we can.
            | It is something we want to strengthen our program.
            |We are offering it but we need to offer it better.”

      .c-our-research__footer
        styled-box.c-our-research-explain
          | Therefore, If 
          strong 91%
          |  of students are finding their contraception information 
          strong at school
          | , and they are only supplied with a 1-hour lesson unless they choose to take up health 
          | in levels 1, 2, or 3. 
          | Plus there are schools out there wanting
          | to improve their contraception teaching methods and systems.
    
    .page-section.c-target-users.mt-20-10
      question-mark-heading
        | Is this really enough?
        br
        | Can we improve this somehow?
      
      .c-target-audience.mt-10
        h5.mb-2 Our Target Audiences

        p
          strong Teachers
          |  and 
          strong year 10 students
          |  in New Zealand, but we have also made it so that 
          | we can incorporate a parent into their child’s sexual education journey as well.
          | We need to make sure teachers are 
          strong confident, knowledgeable, and are skilled
          |  at creating a classroom environment of high trust and safety.

    .page-section.c-user-journey.mt-10
      h5.mb-6 User journey

      .journey-train.mb-3
        .journey-user
          img.user-image(
            :src='imgPaths.john'
          )
          .name John, 40
          .profession High school health teacher

        .journey-cards
          styled-box.journey-card
            p
              | John stumbles across a post by Unashamed's Facebook page.
              | Curious he dives in and finds the website.

          styled-box.journey-card
            p
              | John 
              strong downloads all the content
              |  he wants to use for his class next week 
              | and prints out consent forms to hand out.

          styled-box.journey-card
            p
              | John receives back all his signed forms 
              | and begins using all the resources he picked out. 
              | Everything 
              strong goes to plan 
              |  accordingly.

          styled-box.journey-card
            p
              | John is so 
              strong happy
              |  the leaves a positive message on the Unashamed Website's feedback.


      .journey-train
        .journey-user
          img.user-image(
            :src='imgPaths.amy'
          )
          .name Amy, 15
          .profession High school student

        .journey-cards
          styled-box.journey-card
            p
              | Amy sits in on John's class and finds it to be very helpful and 
              | fun to sit through. She can't wait to take her gift set home!

          styled-box.journey-card
            p
              | Amy reads through and completes activities over a weeks period.
              | She 
              strong learns so much
              |  and then checks out their website.

          styled-box.journey-card
            p
              | Amy is shocked to find the awesome things on the website and 
              strong plays the online quiz
              | with her mum by her side. 

          styled-box.journey-card
            p
              | Amy 
              strong learns
              |  heaps from Unashamed and decides to make a family planning appointment.

    .page-section.c-our-solution.mt-10
      h5.mb-4 Our Solution

      .c-our-solution-container
        .c-our-solution-flex
          .c-our-solution-image-container
            img.image(:src='imgPaths.ourSolution1')
            img.image(:src='imgPaths.ourSolution2')

        .c-our-solution-list
          featured-list-item.list-item
            | To help 
            strong support teaching contraception
            |  in a classroom or distanced digital learning space.
          featured-list-item.list-item
            | We approached it in a 
            strong fun & interactive way.
          featured-list-item.list-item
            | By using  
            strong a range of resources, activities and information
            |  to help teach this sensitive topic.
    
    .page-section.c-design-outcome.mt-20-10
      h5.mb-3
        | Design outcome - 
        span.unstyled-heading Unashamed Website

      .page-section__description.mb-6
        | The website is simple and user friendly to cater to all of our visitors.
        br 
        | Our online store is where teachers, students, and parents can purchase a line of merch and other important resources. 

      flex-image-container.c-design-outcome__image-container(
        :imageList='imgPaths.outcomeImageList'
      )

    .page-section.c-design-outcome.mt-20-10
      h5.mb-3
        | Design outcome - 
        span.unstyled-heading Online quiz

      .page-section__description.mb-6
        | Our online quiz, similar to the popular Kahoot style that is known to be used throughout high school classes 
        | helps us determine whether or not the students are taking in the information but also allows students to 
        | further develop their learning at home. This can be done at school, 
        | by a parent and child at home, or even assigned for homework.

      flex-image-container.c-design-outcome__image-container(
        :imageList='imgPaths.quizImageList'
      )

    .page-section.c-user-test.mt-20-10
      .c-user-test__background(
        :style="userTestStyleObj"
      )

      h5.mb-4 User test
      
      flex-image-container.c-user-test__image-container(
        :imageList='imgPaths.userTestList'
      )

      .c-styled-box-flex-container.mt-6
        styled-box.user-test__testimonial(
          v-for="item in testimonialList"
          :key="item.name"
        )
          p.user-test__content {{ item.content }}
          span.user-test__name {{ item.name }}

    .page-section.c-working-as-a-team.mt-10
      h4.mb-4.has-text-center Working as a team

      flex-image-container(
        :imageList='imgPaths.teamImageList'
      )

      .c-my-contribution.mt-10
        h5.mb-2 My contribution

        p
          | My role was 
          strong character designer
          |  and UI / UX designer, mainly in charge of visual decision making.

        p
          strong During the research phase, 
          | I conducted research that can be backed up by our project based on the feedback. 
          | The feedback was how can we extend the sex-ed or bring this conversation online and 
          | not just be restricted to the classroom.

        p 
          strong During the ideation phase,
          |  I was responsible for creating the overall character design for the brand image, 
          | initial wireframe, the prototype for the website, and a digital quiz game as a class activity for classes.

      .c-my-challenge.mt-10
        h5.mb-2 My challenges

        p
          | A big challenge we faced was 
          strong ethical issues
          |  due to the nature of our topic. Therefore, extra consideration needed to be taken on the design 
          | due to the sensitive nature of the topic. For example, we had to present a warning message 
          | informing people that it contains sensitive and in-depth material on contraception. 
          | We then had the Covid-19 situation which forced us to work from home. 
          | We managed to adjust to this by using messenger and video chats to communicate.
          | Despite all the inconvenience, all the teammates worked hard remotely on their parts, 
          | which made the project make it to the end smoothly.


</template>

<script>
import PageTemplate from '../PageTemplate.vue'
import PageBriefNew from '../PageBriefNew.vue'
import StyledBox from '@components/StyledBox.vue'
import FeaturedListItem from '@components/FeaturedListItem.vue'
import QuestionMarkHeading from '@components/QuestionMarkHeading.vue'
import FlexImageContainer from '@components/FlexImageContainer.vue'

export default {
  name: 'First',
  components: {
    PageTemplate,
    PageBriefNew, 
    StyledBox,
    QuestionMarkHeading,
    FeaturedListItem,
    FlexImageContainer
  },
  data () {
    return {
      testimonialList: [
        { 
          name: "- Person A",
          content: `The colors and use of monster-like figures will appeal to younger generations and pop out.`
        },
        { 
          name: "- Person B",
          content: `This is such an excellent idea! Learning about safe sex is so important and 
          it can be quite scary for a child with all the awful pictures so 
          if they could incorporate something like this, it would be awesome.`
        },
        {
          name: "- Person C",
          content: `These characters and the look of the design are more welcoming.
          The colors are very exciting and make me want to learn and 
          make the topic of contraception seem more interesting.`
        }
      ]
    }
  },
  computed: {
    imgPaths () {
      const path = fileName => require('@/assets/images/01/' + fileName)

      return {
        er11: path('existing-resources-1-1.jpg'),
        er12: path('existing-resources-1-2.jpg'),
        er21: path('existing-resources-2-1.jpg'),
        er22: path('existing-resources-2-2.jpg'),
        er31: path('existing-resources-3-1.jpg'),
        er32: path('existing-resources-3-2.jpg'),
        barchart: path('bar-chart.png'),
        piechart: path('pie-chart.png'),
        john: path('john.jpg'),
        amy: path('amy.png'),
        ourSolution1: path('des.png'),
        ourSolution2: require('@/assets/images/pageMain/01.png'),
        outcomeImageList: [
          { name: 'Landing page', path: path('web_01.png') },
          { name: 'About us page', path: path('web_02.png') },
          { name: 'How to page', path: path('web_03.png') },
          { name: 'Resources page', path: path('web_04.png') },
          { name: 'Resources page 2', path: path('web_05.png') },
          { name: 'Resources page 3', path: path('web_06.png') },
          { name: 'Resources page 4', path: path('web_07.png') },
          { name: 'Donation page', path: path('web_08.png') }
        ],
        quizImageList: [
          { name: 'Main page', path: path('quiz_01.jpg') },
          { name: 'Quiz subject page', path: path('quiz_02.jpg') },
          { name: 'Quiz subject page 2', path: path('quiz_03.jpg') },
          { name: 'Quiz page', path: path('quiz_04.jpg') },
          { name: 'Quiz page 2', path: path('quiz_05.jpg') },
          { name: 'Quiz page 3', path: path('quiz_06.jpg') },
          { name: 'Quiz result page', path: path('quiz_07.jpg') }
        ],
        userTestList: [
          { name: '', path: path('tester_01.jpg') },
          { name: '', path: path('tester_02.png') },
          { name: '', path: path('tester_03.jpg') }
        ],
        userTestBackground: require('@/assets/images/pageIntro/01.jpg'),
        teamImageList: [
          { name: '', path: path('team_01.png') },
          { name: '', path: path('team_02.png') },
          { name: '', path: path('team_03.jpg') },
          { name: '', path: path('team_04.jpg') }
        ]
      }
    },
    userTestStyleObj () {
      return {
        backgroundImage: `url(${this.imgPaths.userTestBackground})`
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-unashamed {
  --feature-text-color: #EBA700;
  --text-color-unashamed: #D14257;
}

.c-brief-card-container {
  position: relative;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  .c-brief-card {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 35rem;
    min-width: 25rem;
    padding: 2rem 3rem;
    margin: 1rem 1.5rem 3rem;
    text-align: center;
    font: {
      size: $size-body-xl;
      weight: 700;
    }

    @include desktop {
      font-size: $size-body-xxl;
      padding: 3rem 4rem;
      max-width: 45rem;
      margin: 1rem 2.5rem 4rem;
    }

    @include largescreen {
      font-size: $size-body-huge;
      max-width: 50rem;
      margin: 1rem 4rem 4rem;
      padding: 5rem;
    }
  }
}

.c-existing-resources {
  position: relative;
  max-width: max-content;

  .er-images-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background-color: $background-white;
    width: max-content;
    transform: translateX(0%);
    z-index: 1;
    margin: 0 auto;

    @include tablet {
      flex-direction: row;
    }

    @include from(1000px) {
      transform: translateX(-40%);
    }
  }

  .er-image-unit:not(:last-child) {
    margin-bottom: 4.5rem;

    @include tablet {
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }

  .er-image {
    $offset: 0.6rem;

    position: relative;
    width: 6.5rem;

    &.front {
      z-index: 2;
      left: $offset;
      top: $offset;
    }
    &.back {
      z-index: 1;
      left: -$offset;
      top: -$offset;
    }

    @include phoneblet {
      width: 8rem;
    }

    @include from(1000px) {
      width: 5rem;
    }

    @include largescreen {
      width: 7rem;
    }
  }

  .er-description {
    position: relative;
    padding: 5rem 2.5rem;
    margin: 0 auto 4rem;
    width: 100%;
    max-width: 40rem;
    background-color: #FDF7E8;
    z-index: -1;

    &::after {
      content: '';
      display: none;
      position: absolute;
      width: 30%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      background-color: #FDF7E8;
    }

    p {
      font-size: $size-body-md;
      text-align: center;
    }
    
    .er-list {
      margin-left: 4rem;
      color: var(--feature-text-color);
      font: {
        size: $size-body-lg;
        weight: 700;
      }
    }

    @include phoneblet {
      p {
        font-size: $size-body-lg;
      }
    }

    @include from(1000px) {
      position: absolute;
      right: 0;
      top: 50%;
      z-index: -1;
      transform: translate(60%,-50%);
      margin-bottom: 0;

      &::after {
        display: block;
      }

      p {
        text-align: left;
        font-size: $size-body-xl;
      }

      .er-list {
        margin-left: 2rem;
        font-size: $size-body-xl;
      }
    }
  }
}

.c-er-how-text {
  padding: 3rem 4rem;
  max-width: 70rem;
  background-color: $background-white;
  text-align: center;
  font: {
    size: 2rem;
    weight: 700;
  }

  @include phoneblet {
    font-size: 2.8rem;
    padding: 4rem 6rem;
  }
}

.c-unashamed-explain {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 4rem;
  background-color: $background-white;
  max-width: 100rem;

  .unashamed-text {
    position: relative;
    margin-right: 0;
    margin-bottom: 2rem;

    font: {
      family: "Goku";
      weight: 700;
      size: 3rem;
    }
  }

  .explain-text {
    font-size: $size-body-md;
  }

  @include phoneblet {
    padding: 4rem 6rem;

    .unashamed-text {
      font-size: 4.5rem;
    }

    .explain-text {
      font-size: $size-body-lg; 
    }
  }

  @include tablet {
    flex-direction: row;

    .unashamed-text {
      margin-right: 3rem;
      margin-bottom: 0;
      font-size: 7rem;
    }

    .explain-text {
      font-size: $size-body-xl;
    }
  }

  @include largescreen {
    .explain-text {
      font-size: $size-body-xxl;
    }
  }
}

.c-our-research {
  position: relative;
  display: grid;
  padding: 0 3rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "g-graph" "g-description" "g-footer";
  
  @include tablet {
    padding: 0 8rem;
  }

  @include desktop {
    padding: 0 17.5rem;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "g-graph g-description"
      "g-footer g-footer";
  }

  &__image {
    display: inline-block;
    width: 18rem;

    @include phoneblet {
      width: 22.5rem;

      &:not(:last-child) {
        margin-right: 3rem;
      }
    }

    @include tablet {
      width: 28rem;
    }

    @include desktop {
      display: block;
      width: 35rem;
      margin-left: 0;
    }
  }

  &__graph {
    grid-area: g-graph;
    padding: 1.5rem;

    .graph-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    @include phoneblet {
      padding: 1.5rem 3rem;

      .graph-container {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    @include desktop {
      .graph-container {
        display: block;
      }
    }
  }

  &__description {
    grid-area: g-description;
    background-color: var(--feature-text-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    color: $background-white;
    padding: 3rem 4rem;

    @include phoneblet {
      padding: 4rem 6rem;
    }

    @include desktop {
      padding: 5rem 8rem;
    }

    .block:not(:last-child) {
      margin-bottom: 3rem;
    }

    .block-header {
      display: block;
      margin-bottom: 1.5rem;
      text-align: center;
      font: {
        size: 3rem;
        weight: 700;
      }
    }

    .block-para {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: $size-body-md;
    }

    .block-separator {
      width: 15rem;
      height: 1px;
      background-color: $background-white;
      margin: 2rem 0;
    }

    @include phoneblet {
      .block-header {
        font-size: 5rem;
      }

      .block-para {
        font-size: $size-body-xxl;
      }
    }
  }

  &__footer {
    grid-area: g-footer;
    padding-top: 5rem;

    .c-our-research-explain {
      padding: 3rem 4rem;
      font-size: $size-body-md;

      @include phoneblet {
        padding: 5rem 8rem;
        font-size: $size-body-lg;
      }

      @include desktop {
        font-size: $size-body-xxl;
      }
    }
  }
}

.c-target-users {
  padding: 0 3rem;

  @include tablet {
    padding: 0 10rem;
  }
}

.c-user-journey {
  padding: 0 3rem;

  @include tablet {
    padding: 0 10rem;
  }

  .journey-train {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @include phoneblet {
      flex-direction: row;
    }

    @include tablet {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: 1fr;
      grid-template-areas: "g-user g-cards";
    }

    .journey-user {
      grid-area: g-user;
      position: relative;
      display: flex;
      flex-direction: column;
      align-self: center;
      align-items: center;
      max-width: 13rem;
      padding: 2rem;



      &::after,
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0.5rem;
        left: -0.5rem;
        width: 2rem;
        height: 2rem;
        background-color: var(--feature-color);
        z-index: 1;

        @include tablet {
          display: none;
        }
      }

      &::before {
        top: 1rem;
        left: 0;
        border: 1px solid var(--feature-color);
        background-color: rgba(0,0,0,0);
      }

      .user-image {
        display: block;
        width: 10rem;
        margin-bottom: 1rem;
      }

      .name {
        font: {
          size: $size-body-lg;
          weight: bold;
        }
        margin-bottom: 1rem;
      }

      .profession {
        font-size: $size-body-md;
        text-align: center;
      }
    }

    .journey-cards {
      grid-area: g-cards;
      display: flex;
      align-items: stretch;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;

      @include tablet {
        padding-left: 4rem;
        max-width: 60rem;
      }

      @include desktop {
        flex-wrap: nowrap;
        max-width: unset;
      }

      .journey-card {
        width: 23rem;
        padding: 4rem;
        font-size: $size-body-md;
        margin-bottom: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        @include phoneblet {
          margin-right: 1.5rem;
        }
        
        @include desktop {
          padding: 2.5rem;
          min-width: 18rem;
          width: auto;
          flex-grow: 1;
          max-width: 23rem;
          margin-bottom: 0;
          margin-right: 0;
          
          &:not(:last-child) {
            margin-right: 3rem;
          }
        }

        @include largescreen {
          padding: 4rem;
          width: 27rem;
          font-size: $size-body-lg;

          &:not(:last-child) {
            margin-right: 5rem;
          }
        }
      }
    }
  }
}

.c-target-audience,
.c-my-contribution,
.c-my-challenge {
  width: 100%;

  p {
    font-size: $size-body-lg;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    @include tablet {
      font-size: $size-body-xl;
    }

    @include desktop {
      font-size: $size-body-xxl;
    }

    @include largescreen {
      font-size: $size-body-huge;
    }
  }
}

.red-text {
  color: var(--text-color-unashamed);
}

.c-our-solution {
  padding: 0 3rem;

  @include tablet {
    padding: 0 6rem;
  }

  @include desktop {
    padding: 0 10rem;
  }
}

.c-our-solution-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  @include tablet {
    flex-direction: row;
  }

  .c-our-solution-flex {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;

    @include tablet {
      width: max-content;
    }

    .c-our-solution-image-container {
      position: relative;
      width: 100%;
      max-width: 40rem;
      min-width: 30rem;
      min-height: 22rem;
      margin-bottom: 3rem;

      .image {
        position: absolute;
        display: block;
        width: 23rem;

        &:first-child {
          top: 0;
          right: 0;
        }

        &:last-child {
          bottom: 0;
          left: 0;
        }
      }

      @include phoneblet {
        min-height: 25rem;

        .image {
          width: 27rem;
        }
      }

      @include tablet {
        width: 40rem;
        max-width: unset;
        min-height: 30rem;
        margin-bottom: 0;

        .image {
          width: 28rem;
        }
      }

      @include desktop {
        width: 55rem;
        height: 40rem;

        .image {
          width: 40rem;
        }
      }

      @include largescreen {
        width: 70rem;
        height: 45rem;

        .image {
          width: 45rem;
        }
      }
    }
  }

  .c-our-solution-list {

    .list-item {
      font-size: $size-body-lg;
      margin-bottom: 1.5rem;
    }

    @include tablet {
      margin-left: 3rem;
    }

    @include desktop {
      padding-bottom: 6rem;
      max-width: 60rem;

      .list-item {
        font-size: $size-body-xxl;
        margin-bottom: 3rem;
      }
    }
  }
}

.c-design-outcome {
  padding: 0 3rem;

  @include tablet {
    padding: 0 8rem;

    .unstyled-heading {
      white-space: nowrap;
    }
  }
}

.c-user-test {
  padding-top: 6rem;
  padding-bottom: 3rem;
  border-top: 1px solid $background-grey;
  border-bottom: 1px solid $background-grey;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    opacity: 0.3;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #FDC7A8;
      opacity: 0.4;
    }
  }
}

.c-styled-box-flex-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  .user-test__testimonial {
    position: relative;
    width: 100%;
    min-width: 25rem;
    max-width: 45rem;
    padding: 3.5rem 2.5rem;
    margin-bottom: 3rem;
    font-size: $size-body-lg;
    text-align: center;
    background-color: $background-white;

    @include tablet {
      margin-right: 3rem;
      min-width: 40rem;
    }

    .user-test__content {
      margin-bottom: 2rem;
    }
    .user-test__name {
      display: block;
      color: var(--feature-color);
      text-align: center;
      font-weight: 700;
    }
  }
}

.c-working-as-a-team {

  .image-container {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .team-image {
      display: inline-block;
      height: 26rem;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
}
</style>