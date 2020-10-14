<template lang='pug'>
page-template.c-art-at-heart(
  :pageNumber='2'
)
  page-brief-new
    .brief-paragraph
      | Auckland Art Gallery's volunteers have brought thier remarkable collection of artworks to life for over 30 years.
      | They require finding 
      strong a creative way to bring more volunteers into it.
      |  While also providing them with a wider range of volunteers. 
    
    h2.brief-subtitle What client Wants and Expects?
    
    .brief-paragraph
      | They are looking for 
      strong younger and diverse
      |  people unlike they used to have mainly older demographic.
  
    template(#extra-content)
      .ribbon-container.pb-4
        .ribbon-element
          linked-boxes(
            topicColor='#FCDADA'
            bp='tabletop'
          )
            template(#topic)
              | Volunteers
            
            p.mb-2
              | who are willing to 
              strong commit
              |  this long term campaign.

            p.mb-2
              | who are interested in 
              strong Art
              | .

            p
              | who are able to see 
              strong as an artist
              |  how public responds to art.
          
        .ribbon-element
          styled-box.c-brief-additional-box
            | "How can we encourage and inspire
            span.color-featured young people to volunteer
            | by themselves?"


  .page-section.c-why-volunteer.mt-20-10
    question-mark-heading(
      color="var(--feature-sub-color)"
    ) 
      | Beforehand,
      br
      | why do young people volunteers? 

    .c-volunteer-explanation.mt-6
      styled-box.volunteer-image-container
        img.volunteer-image(
          :src='imgPaths.time'
        )

      .explanation-content
        p
          | Young people(
          strong 18-25
          | ) are quite 
          strong selfish
          |  and 
          strong unmotivated
          |  and are unlikely to volunteer or give up their time 
          | without some sort of reward or personal benefit.
        
        .explanation-list.mt-2
          featured-list-item.list-item
            strong Experience -
            |  work, learning, social - build CV skills
          featured-list-item.list-item
            | Supporting/giving to a cause 
            strong they are passionate about
          featured-list-item.list-item
            strong social :
            |  try something new, meet new people
          featured-list-item.list-item
            strong try out something interested in
            |  a full-time job
          featured-list-item.list-item
            strong gain self-confidence & self-esteem

  
  .page-section.c-our-approach.mt-20-10
    h4.mb-4 Our Approach

    p.page-section__description.mb-6
      | These messages are aimed to encourage and 
      | inspire young students to explore their artistic passion.

    .styled-box-flex-container
      styled-box.c-our-approach-card
        p.is-quote
          | Kick-start 
          span.color-featured your career
          |.

      styled-box.c-our-approach-card
        p.is-quote
          | Explore
          span.color-featured your passion
          |.

      styled-box.c-our-approach-card
        p.is-quote
          | Support
          span.color-featured your community
          |.
  
      linked-boxes.mt-6(
        bp='tablet'
      )
        template(#topic)
          | What are the benefits for them?
        
        p.mb-2
          | Exposure within the art industry

        p.mb-2
          | Experience with public response

        p.mb-2
          | Building their knowledge about art

        p
          | Gives them a sense of purpose

      styled-box.c-art-at-heart-explain.mt-6
        img.art-at-heart-logo(
          :src="imgPaths.logo"
        )

        .explain-text
          strong Art at heart
          |  is an organization that inspires and motivated young, 
          | diverse, artistic people to volunteer at the Auckland Art Gallery.
          | We support volunteers who have been working at the gallery for at least 6 months are 
          strong given the opportunity to display a selection of their personal artworks at a pop up exhibition
          |  that is held inside the Auckland Art gallery once a year. This gives out target audience 
          | a sense of motivation and benefit, hence encouraging more or them to volunteer.

  .page-section.c-target-audiences.mt-20-10
    h4.mb-4 Our target audiences

    p.page-section__description.mb-6
      | Our target audiences are young students who are 18-25 year-olds, 
      | outgoing, extroverted and passionate.

    styled-box.c-target-audience-box
      div.target-card(
        v-for="(item, index) in targetAudienceList"
        :key="item.name"
      )
        .image(
          :src="imgPaths.audience"
          :style="{ backgroundImage: `url(${imgPaths.audience})`, backgroundPosition: `${item.positionX} -10rem`}"
        )
        .name {{ item.name }}
          
        .description-list
          .description-item(
            v-for="d in item.descriptions"
            :key='d'
          ) {{ d }}


  .page-section.c-explore-space.mt-20-10
    h4.mb-4 Explore Space

    .c-explore-space-container
      styled-box.explore-space__photos
        img.explore_image(
          v-for="path in imgPaths.exploreList"
          :key="path"
          :src="path"
        )

      styled-box.explore-space__text
        p
          | With the team members, we visited the site two or three times
          |  to explore the apporpriate place for our installation.
        
        p
          | And we ended up choosing 
          strong The North Atrium.
          |  It is a space within the center of the gallery and is often used 
          | for a rotation of artworks and exhibitions.
  

  .page-section.c-outcome.mt-20-10
    h5.mb-4
      | Design outcome - 
      span.unstyled-heading Interactive Screen Installation
  
    p.page-section__description.mb-6
      | It starts by picking their favorite piece of art from the previous volunteers, 
      | writes their comment about the artwork, 
      | and submits a review and the sentence of "did you enjoy discussing this artwork? 
      strong ...maybe volunteering could be for you?"
      |  pops up that makes young people attract and encourage.
    
    .c-motive-image-container.mb-6
      img.motive-image(:src="imgPaths.motive_1")
      img.motive-image(:src="imgPaths.motive_2")

    h4.mb-4 Interactive voting system screen UI design

    flex-image-container.c-outcome-flex-image-container(
      :imageList="imgPaths.outcomeList"
    )


  .page-section.c-outcome-website.mt-20-10
    h5.mb-4
      | Design outcome - 
      span.unstyled-heading Art At Heart Website

    p.page-section__description.mb-3
      | For our interactive webpage, We would refer to the simple, clean, and 
      | nice style of the existing art gallery webpage and make a separate page that 
      | can give a little bit more information about our campaign.
      
    p.page-section__description.mb-6
      | The services page will introduce some steps with a short description that the target audience 
      | should take from the beginning of the service to the activity afterward which is a pop-up 
      | exhibition. We have also added the previous volunteers' reviews to show how they experienced 
      | and what was the learning point for them through volunteering.

    img.c-outcome-website-image(
      :src="imgPaths.output"
    )


  .page-section.no-padding.c-outcome-poster
    h5.page-section__title.mb-4
      | Design outcome -
      span.unstyled-heading Art At Heart Poster

    .c-poster-image-bg(
      v-if="isDesktop"
      :style="{ backgroundImage: `url(${imgPaths.poster})`}"
    )
    img.c-poster-image(
      v-else
      :src="imgPaths.poster"
    )

    .c-install-image-container
      img.install-image(
        v-for="path in imgPaths.installList"
        :src="path"
      )
</template>

<script>
import PageTemplate from '../PageTemplate.vue'
import PageBriefNew from '../PageBriefNew.vue'
import LinkedBoxes from '@components/LinkedBoxes.vue'
import StyledBox from '@components/StyledBox.vue'
import QuestionMarkHeading from '@components/QuestionMarkHeading.vue'
import FeaturedListItem from '@components/FeaturedListItem.vue'
import FlexImageContainer from '@components/FlexImageContainer.vue'

export default {
  name: 'Second',
  components: {
    PageTemplate,
    PageBriefNew,
    LinkedBoxes,
    StyledBox,
    QuestionMarkHeading,
    FeaturedListItem,
    FlexImageContainer
  },
  data () {
    return {
      targetAudienceList: [
        { 
          name: 'Lisa',
          descriptions: [
            'Fine art student',
            'Career focused',
            'Social media user',
            'Trying to build her reputation'
          ],
          positionX: '0rem'
        },
        { 
          name: 'Lyon',
          descriptions: [
            'Engineering student',
            "Didn't get to follow his passion",
            'Street Artist',
            'Instagram user'
          ],
          positionX: '-24.25rem'
        },
        { 
          name: 'Naho',
          descriptions: [
            'International student',
            "Animation student",
            'Enjoys meeting new people',
            'Wants to feel a part of a community'
          ],
          positionX: '-48rem'
        }
      ]
    }
  },
  computed: {
    imgPaths() {
      const path = fileName => require('@/assets/images/02/' + fileName)

      return {
        time: path('time.jpg'),
        logo: path('logo.png'),
        audience: path('audiences.png'),
        exploreList: Array(5).fill('').map((_,index) => path(`explore_0${index + 1}.jpg`)),
        motive_1: path('motive-1.jpg'),
        motive_2: path('motive-2.jpg'),
        outcomeList: Array(5).fill('').map((_,index) => {
          return {
            name: '',
            path: path(`outcome_0${index + 1}.png`)
          }
        }),
        output: path('output.jpg'),
        poster: path('poster.jpg'),
        installList: Array(3).fill('').map((_,index) => path(`install_0${index + 1}.jpg`))
      }
    },
    isDesktop () {
      return ['tablet', 'tabletop', 'desktop', 'largescreen'].includes(this.$mq)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-art-at-heart {
  --feature-sub-color: #FCDADA;
}

.c-brief-additional-box {
  background-color: $background-white;
  font-size: $size-body-xl;
  font-weight: 700;
  padding: 4rem 6rem;
  text-align: center;
  max-width: 60rem;

  @include tablet {
    font-size: $size-body-xxl;
  }

  @include desktop {
    font-size: $size-body-huge;
    max-width: 80rem;
  }

  @include largescreen {
    font-size: 2.8rem;
  }
}

.c-why-volunteer {
  .c-volunteer-explanation {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .volunteer-image-container {
      background-color: $background-white;
      padding: 2rem;
      z-index: 1;
      margin-bottom: 5rem;
    }

    .volunteer-image {
      display: inline-block;
      width: 15rem;
    }

    .explanation-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 20rem;
      background-color: var(--feature-sub-color);
      padding: 4rem;
      font-size: $size-body-md;

      .explanation-list .list-item {
        color: var(--feature-color);
        font-size: inherit;
        margin-bottom: 0.75rem;
      }
    }

    @include phoneblet {
      .explanation-content {
        max-width: 50rem;
        font-size: $size-body-lg;
        padding: 6rem;
      }

      .volunteer-image {
        width: 20rem;
      }
    }

    @include tablet {
      flex-direction: row;

      .volunteer-image-container {
        margin-bottom: 0;
      }

      .volunteer-image {
        width: 17rem;
      }

      .explanation-content {
        min-height: 34rem;
        padding: 4rem;
        padding-left: 10rem;
        margin-left: -8rem;
        max-width: 60rem;
      }
    }

    @include desktop {
      .volunteer-image {
        width: 20rem;
      }

      .explanation-content {
        font-size: $size-body-xl;
        min-height: 40rem;
        padding: 6rem;
        padding-left: 12rem;
        margin-left: -10rem;
      }
    }
  }
}

.c-our-approach {
 .c-our-approach-card {
   margin-bottom: 2rem;
   padding: 2rem;
   font-weight: 700;
   font-size: $size-body-lg;
   width: max-content;

   @include phoneblet {
     padding: 2.5rem 3rem;
     margin: 0 2rem 2rem 0;
   }

   @include tablet {
    padding: 3rem 4rem;
    margin: 0 3rem 3rem 0;
    font-size: $size-body-xl;
   }
 }
}

.c-art-at-heart-explain {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 4rem;
  background-color: $background-white;
  max-width: 100rem;

  .art-at-heart-logo {
    display: inline-block;
    position: relative;
    margin-right: 0;
    margin-bottom: 4rem;
    width: 12rem;
  }

  .explain-text {
    font-size: $size-body-md;
  }

  @include phoneblet {
    padding: 4rem 6rem;

    .art-at-heart-logo {
      width: 15rem;
    }

    .explain-text {
      font-size: $size-body-lg; 
    }
  }

  @include tablet {
    flex-direction: row;

    .art-at-heart-logo {
      margin-right: 6rem;
      margin-bottom: 0;
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

.c-target-audience-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 6rem;

  @include phoneblet {
    padding: 4rem 6rem;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .target-card {
    display: flex;
    max-width: 30rem;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    .image {
      display: block;
      width: 24rem;
      height: 18rem;
      margin-bottom: 1rem;
      background-repeat: no-repeat;
      background-size: 72rem 54rem;
    }

    .name {
      display: block;
      font-size: $size-body-xxl;
      font-weight: 700;
      text-align: center;
      margin-bottom: 2rem;
    }

    .description-list {
      max-width: 20rem;
      font-size: $size-body-xl;
      
      .description-item {
        display: block;
        text-align: center;

        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }

    @include phoneblet {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    @include desktop {
      max-width: 34rem;

      &:not(:last-child) {
        margin-right: 4rem;
      }

      .name {
        margin-bottom: 3.5rem;
      }

      .description-list {
        max-width: 26rem;
      }
    }

    @include largescreen {
      max-width: 40rem;

      &:not(:last-child) {
        margin-right: 6rem;
      }

      .name,
      .description-list {
        font-size: $size-body-huge;
      }

      .description-list {
        max-width: 36rem;
      }
    }
  }
}

.c-explore-space-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include desktop {
    flex-direction: row;
  }

  .explore-space__photos {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 0;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    margin-bottom: 4rem;
    background-color: $background-white;
    z-index: 1;

    .explore_image {
      display: inline-block;
      height: 16rem;
      width: auto;
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
      border: 1px dashed $background-grey;
    }

    @include phoneblet {
      .explore_image {
        height: 20rem;
      }
    }

    @include tablet {
      max-width: 60rem;
    }

    @include desktop {
      max-width: 75rem;
      margin-bottom: 0;
    }

    @include largescreen {
      max-width: 85rem;
    }
  }

  .explore-space__text {
    position: relative;
    padding: 3rem 4rem;
    font-size: $size-body-xl;
    background-color: $background-white;

    p:not(:last-child) {
      margin-bottom: 3rem;
    }

    @include tablet {
      font-size: $size-body-xxl;
      max-width: 72rem;
      padding: 4rem 6rem;
    }

    @include desktop {
      padding: 3.5rem 5rem;
      padding-left: 8rem;
      margin-left: -4rem;
      max-width: 50rem;

      p:not(:last-child) {
        margin-bottom: 4rem;
      }
    }
  }
}

.c-motive-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .motive-image {
    display: block;
    height: auto;
    width: 100%;
    margin-bottom: 3rem;

    @include tablet {
      height: 40rem;
      width: auto;
      
      &:first-child {
        margin-right: 3rem;
      }
    }
  }
}

.c-outcome-flex-image-container {
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
}

.c-outcome-website-image {
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 130rem;
  margin-top: -3rem;

  @include phoneblet {
    margin-top: 0;
  }
}

.c-poster-image-bg {
  display: block;
  width: 100%;
  height: 85vh;
  min-height: 50vw;
  background-size: cover;
}

.c-poster-image {
  display: block;
  width: 100%;
  height: auto;
}

.c-install-image-container {
  position: relative;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .install-image {
    display: block;
    width: 80%;
    height: auto;
    margin-bottom: 3rem;
    box-shadow: 0rem 0rem 2rem 0rem rgba(0,0,0,0.16);
  }

  @include from(650px) {
    flex-direction: row;
    margin-top: 0;

    .install-image {
      width: 33.3%;
      margin-bottom: 0;
    }
  }
}
</style>