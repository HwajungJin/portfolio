import easeFuncFactory from './easeFuncFactory.js'

class AnimationManager {
  constructor () {
    this.initialValue = null
    this.currentValue = null
    this.currentAnimationIndex = 0
    this.cycleFinished = false
    this.cycleOnProgress = false
    this.queue = []
  }

  insertAnimation ({
    name,
    initValue,
    endValue,
    easeType,
    duration,
    delayBefore,
    delayAfter
  }) {
    if (this.queue.length === 0) {
      this.initialValue = initValue
      this.currentValue = initValue
    }

    this.queue.push(
      new AnimationObject({
        name,
        initValue,
        endValue,
        easeType,
        duration,
        delayBefore,
        delayAfter
      })
    )
  }

  animate () {
    if (!this.cycleOnProgress)
      this.cycleOnProgress = true
    if (this.cycleFinished)
      return

    const currentAnimation = 
      this.queue[this.currentAnimationIndex]
    
    this.currentValue = currentAnimation.update()

    if (currentAnimation.animationFinished ||
      currentAnimation.animationStatus === 'finished')
      this.currentAnimationIndex++
    
    if (this.currentAnimationIndex === this.queue.length) {
      this.cycleFinished = true
      this.cycleOnProgress = false
    }
  }

  resetAnimation () {
    this.queue.forEach(ani => ani.init())
    this.cycleFinished = false
    this.cycleOnProgress = false
  }

  removeAnimation (name) {
    const index = this.queue.findIndex(ani => ani.name === name)
    index !== -1 && this.
      queue.splice(index, 1)

    this.initialValue = this.queue[0].initValue
    this.currentValue = this.queue[0].initValue
  }
}

class AnimationObject {
  constructor ({
    name,
    initValue,
    endValue,
    easeType,
    duration,
    delayBefore = 0,
    delayAfter = 0
  }) {
    this.name = name
    this.initValue = initValue
    this.currentValue = initValue
    this.endValue = endValue
    this.easeType = easeType
    this.duration = duration
    this.delayBefore = delayBefore
    this.delayAfter = delayAfter
    this.totalDuration = delayBefore + duration + delayAfter
    this.easeFunc = easeFuncFactory({
      initValue, endValue, easeType, duration
    })

    this.tStart = null
    this.animating = false
    this.animationFinished = false
    this.animationStatus = 'beforestart'
    // options: 'beforestart', 'delaybefore',
    // 'animating', 'delaybefore', 'finished'
  }

  update () {
    if (this.tStart === null) {
      this.tStart = Date.now()
      this.animating = true
    }

    if (!this.animating) return

    const tPassedFromStart = Date.now() - this.tStart
    this.animationStatus = 'delaybefore'

    if (tPassedFromStart > this.delayBefore) {
      const tPassedAfterDelay = tPassedFromStart - this.delayBefore

      if (tPassedAfterDelay <= this.duration) {
        this.currentValue = this.easeFunc(tPassedAfterDelay)
        this.animationStatus = 'delaybefore'
      } else if (tPassedFromStart > this.totalDuration) {
        this.currentValue = this.endValue
        this.animationStatus = 'finished'
        this.animationFinished = true
        this.animating = false
      } else {
        this.currentValue = this.endValue
        this.animationStatus = 'delayafter'
      }
    }

    return this.currentValue
  }

  init () {
    this.tStart = null
    this.animating = false
    this.animationFinished = false
    this.currentValue = this.initValue
    this.animationStatus = 'beforestart'
  }
}

export {
  AnimationManager,
  AnimationObject
}