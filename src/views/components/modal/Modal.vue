<template lang='pug'>
.c-modal
  .c-modal-content(
    :class="{ 'is-visible': showModalContent }"
  )
    modal-item(
      v-for='item in modalItemList'
      :key='item.id'
      :itemInfo='item'
      @click='navigateTo(item.routeName)'
    )

    close-button.c-close-button(
      @click='closeModal'
    )

  modal-animation(
    ref='modalAnimation'
    :duration='aniDuration'
  )
</template>

<script>
import { modalItemList } from '@utils/resources.js'
import CloseButton from '@components/CloseButton.vue'
import ModalItem from './ModalItem.vue'
import ModalAnimation from './ModalAnimation.vue'

import {
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'Modal',
  data () {
    return {
      modalItemList,
      showModalContent: false,
      aniDuration: 500
    }
  },
  components: {
    ModalItem,
    CloseButton,
    ModalAnimation
  },
  methods: {
    closeModal (callback) {
      this.$refs.modalAnimation.triggerWrapAnimation()

      window.setTimeout(() => {
        this.showModalContent = false
      }, this.aniDuration/2)

      window.setTimeout(() => {
        Bus.$emit(eventList.closeModal)
        callback && callback()
      }, this.aniDuration + 100)
      // Bus.$emit(eventList.closeModal)
    },
    navigateTo (routeName) {
      const callbackToPass = () => {
        Bus.$emit(eventList.toScrollTop)
      }
  
      this.closeModal(callbackToPass)
      window.setTimeout(() => {
        this.$router.push({
          name: routeName
        })
      }, this.aniDuration/2)
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.showModalContent = true
    }, this.aniDuration/2)
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: $zIndex-modal;
}

.c-close-button {
  position: absolute;
  z-index: 1;
  right: 3rem;
  top: 3rem;
}

.c-modal-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: $background-white;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;

  &.is-visible {
    visibility: visible;
  }

  @include from(1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    overflow: hidden;
  }

  @include desktop {
    padding: 0 10rem;
  }
}
</style>