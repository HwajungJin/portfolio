import Vue from 'vue'

export const Bus = new Vue()

export const eventList = {
  openModal: 'open-modal',
  closeModal: 'close-modal',
  toScrollTop: 'to-scroll-top',
  scrollBarMove: 'scroll-bar-move',
  appOnScroll: 'app-on-scroll',
  updatePageNumber: 'update-page-number'
}