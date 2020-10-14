import { AnimationObject } from '@utils/animation-manager.js'

// constants for animation
let c,  requestId
const viewBox = { w: null, h: null }

const BAR_WIDTH = 215 // px
const BAR_ANI_DURATION = 500
const BAR_ANI_DELAY = 200
const GUTTER_WIDTH = 2
const GUTTER_ANI_DURATION = 300
const colors = {
  bar: '#F8F4F4',
  smallBox: { border: '#707070', bg: '#F8F4F4' },
  bigBox: { border: '#707070', bg: '#E8E1E1' },
  pointer: '#F04F50',
  gutter: '#FFFFFF'
}

class BarObject {
  constructor (x, index) {
    this.x = x
    this.height = 0
    this.width = BAR_WIDTH
    this.maxHeight = innerHeight
    this.heightAnimation = new AnimationObject({
      name: 'bar-height',
      initValue: 0,
      endValue: this.maxHeight,
      easeType: 'QuadOut',
      duration: BAR_ANI_DURATION,
      delayBefore: BAR_ANI_DELAY * index
    })
  }

  draw () {
    c.save()
    c.fillStyle = colors.bar
    c.fillRect(this.x, viewBox.h - this.height, this.width, this.height)
    c.restore()
  }

  update () {
    this.height = this.heightAnimation.animationFinished ? 
      this.maxHeight :
      this.heightAnimation.update()

    this.draw()
  }
}

class Gutter {
  constructor (x) {
    this.x = x
    this.y = 0
    this.height = 0

    this.heightAnimation = new AnimationObject({
      name: 'gutter-height',
      initValue: 0,
      endValue: viewBox.h,
      easeType: 'QuadOut',
      duration: GUTTER_ANI_DURATION
    })
  }

  draw (drawResult = false) {
    c.save()
    c.fillStyle = colors.gutter
    c.fillRect(this.x, this.y, GUTTER_WIDTH, drawResult ? viewBox.h : this.height)
    c.restore()
  }

  update () {
    this.height = this.heightAnimation.animationFinished ?
      viewBox.h :
      this.heightAnimation.update()
    
    this.draw()
  }
}

class Box {
  constructor ({
    x, y, w, h, 
    borderOn,
    borderColor,
    roundCorner,
    bgColor
  }) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.current = {
      x: x - Math.min(w*0.3, 120),
      y: y - Math.min(h*0.15, 120), 
      w: 20, h: 20
    }
    this.ani = { stage: 0 }
    this.animationFinished = false
    const aniDuration = { x: 350, y: 350, w: 800, h: 800 }

    Object.entries(this.current).forEach(([key, value]) => {
      this.ani[key] = new AnimationObject({
        name: `${key}-value`,
        initValue: value,
        endValue: this[key],
        easeType: 'CubicOut',
        duration: aniDuration[key]
      })
    })

    this.borderOn = borderOn
    this.borderColor = borderColor
    this.roundCorner = roundCorner
    this.bgColor = bgColor
  }

  drawResult () {
    c.save()
    c.beginPath()
    c.moveTo(this.x, this.y)
    c.lineTo(this.x + this.w, this.y)
    c.lineTo(this.x + this.w, this.y + this.h)
    c.lineTo(this.x, this.y + this.h)
    c.closePath()
    c.fillStyle = this.bgColor
    if (this.roundCorner) c.lineJoin = 'round'
    c.fill()
    if (this.borderOn) {
      c.setLineDash([10, 10])
      c.lineCap = 'round'
      c.strokeStyle = this.borderColor
      c.stroke()
    }
    c.restore()
  }

  draw () {
    const { x, y, w, h } = this.current

    c.save()
    c.beginPath()
    c.moveTo(x, y)
    c.lineTo(x + w, y)
    c.lineTo(x + w, y + h)
    c.lineTo(x, y + h)
    c.closePath()
    c.fillStyle = this.bgColor
    if (this.roundCorner) c.lineJoin = 'round'
    c.fill()
    c.setLineDash([8, 8])
    c.lineCap = 'round'
    c.strokeStyle = this.borderColor
    c.stroke()
    c.restore()
  }

  drawPointer () {
    const { x, y, w, h } = this.current
    const POINTER_RADIUS = 4

    c.save()
    c.beginPath()
    c.arc(x+w, y+h, POINTER_RADIUS, 0, Math.PI*2, false)
    c.closePath()
    c.fillStyle = colors.pointer
    c.fill()
    c.restore()
  }

  animate () {
    switch (this.ani.stage) {
      case 0:
        this.current.w = this.ani.w.update()
        this.current.h = this.ani.h.update()
        this.draw()
        this.drawPointer()

        if (this.ani.w.animationFinished &&
          this.ani.h.animationFinished) this.ani.stage++
        break
      case 1:
        this.current.x = this.ani.x.update()
        this.current.y = this.ani.y.update()
        this.draw()

        if (this.ani.x.animationFinished &&
          this.ani.y.animationFinished) this.ani.stage++
        break
      case 2:
        this.animationFinished = true
        this.drawResult()
        break
    }
  }
}

const animationMixin = {
  data () {
    return {
      el: null,
      bars: null,
      gutters: null,
      bigBox: null,
      smallBox: null,
      animationStage: 0,
      constants: {
        barWidth: null,
        gutterWidth: null,
        direction: 'column'
      }
    }
  },
  computed: {
    isMobile () {
     return ['small', 'phone', 'phoneblet'].includes(this.$mq)
    } 
  },
  mounted () {
    this.el = this.$refs.canvas
    c = this.el.getContext('2d')

    this.initializeAnimation()
    this.animate()
  },
  beforeDestroy () {
    this.killAnimation()
  },
  methods: {
    initializeConstants () {
      if (this.isMobile)
        this.constants.direction = 'row'
      else
        this.constants.direction = 'column'

      this.constants.gutterWidth = 2

      switch (this.$mq) {
        case 'small':
        case 'phone':
          this.constants.barWidth = 60
          break
        case 'phoneblet':
        case 'tablet':
          this.constants.barWidth = 80
          break
        case 'tabletop':
          this.constants.barWidth = 140
          break
        case 'desktop':
          this.constants.barWidth = 180
          break
        case 'largescreen':
          this.constants.barWidth = 240
          this.constants.gutterWidth = 4
          break
        default: 
          this.constants.barWidth = 240
      }
    },
    initializeAnimation () {
      this.initializeConstants()

      this.bars = []
      this.gutters = []

      this.el.width = window.innerWidth
      this.el.height = window.innerHeight
      viewBox.w = window.innerWidth
      viewBox.h = window.innerHeight

      // create bars
      const barAmount = Math.ceil(innerWidth / BAR_WIDTH)
      for (let i=0; i<barAmount; i++) {
        this.bars.push(new BarObject(i * BAR_WIDTH, i))
      }

      // create gutters
      const gutterAmount = barAmount - 1
      for (let j=1; j<=gutterAmount; j++) {
        this.gutters.push(
          new Gutter(BAR_WIDTH * j)
        )
      }

      // create big&small boxes
      this.smallBox = new Box({
        x: 850 + 3 * 4, 
        y: window.innerHeight - 150 - 120,
        w: 215, h: 120,
        borderOn: true,
        roundCorner: true,
        borderColor: colors.smallBox.border,
        bgColor: colors.smallBox.bg
      })

      this.bigBox = new Box({
        x: window.innerWidth * 0.25, 
        y: window.innerHeight * 0.375,
        w: window.innerWidth * (1 - 0.25),
        h: window.innerHeight * (1 - 0.375),
        borderOn: false,
        roundCorner: false,
        borderColor: colors.bigBox.border,
        bgColor: colors.bigBox.bg
      })
    },
    animate () {
      requestId = window.requestAnimationFrame(this.animate)
      c.clearRect(0,0,viewBox.w,viewBox.h)

      switch (this.animationStage) {
        case 0:
          this.bars.forEach(bar => bar.update())

          if (this.bars.every(bar => bar.heightAnimation.animationFinished))
            this.animationStage++
          break
        case 1: 
          this.bars.forEach(bar => bar.draw())
          this.bigBox.animate()

          if (this.bigBox.animationFinished) this.animationStage++
          break
        case 2:
          this.bars.forEach(bar => bar.draw())
          this.bigBox.drawResult()
          this.gutters.forEach(gutter => gutter.update())

          if (this.gutters.every(gutter => gutter.heightAnimation.animationFinished))
            this.animationStage++
          break
        case 3:
          this.bars.forEach(bar => bar.draw())
          this.bigBox.drawResult()
          this.gutters.forEach(gutter => gutter.draw(true))
          this.smallBox.animate()

          if (this.smallBox.animationFinished) this.animationStage++
          break
        case 4:
          this.bars.forEach(bar => bar.draw())
          this.bigBox.drawResult()
          this.gutters.forEach(gutter => gutter.draw(true))
          this.smallBox.drawResult()
        break
      }
    },
    killAnimation () {
      window.cancelAnimationFrame(requestId)
    }
  }
}

export default animationMixin