import Vue from 'vue'
import VueMq from 'vue-mq'

const config = {
  breakpoints: {
    'small': 320,
    'phone': 440,
    'phoneblet': 768,
    'tablet': 1000,
    'tabletop': 1200,
    'desktop': 1600,
    'largescreen': Infinity
  },
  defaultBreakpoint: 'sm'
}

Vue.use(VueMq, config)