class PVector {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }
    
  // Static methods
  static distance (p1, p2) {
    const [ dx, dy ] = [ p2.x - p1.x, p2.y - p1.y ]
    return Math.sqrt(dx*dx + dy*dy)
  }

  static random2D () {
    const randomAngle = Math.random() * Math.PI * randomSign()
    return new PVector(Math.cos(randomAngle), Math.sin(randomAngle))
  }
  static add (p1, p2) {
    return new PVector (p1.x + p2.x, p1.y + p2.y)
  }
  static sub (p1, p2) {
    return new PVector (p1.x - p2.x, p1.y - p2.y)
  }
  static swap (p1, p2) {
    const temp = p1.clone()
    p1.reset(p2)
    p2.reset(temp)
  }
  static dotProduct (p1, p2) {
    return (p1.x*p2.x + p1.y*p2.y)
  }

  // getters
  get magnitude () {
    const { x, y } = this
    return Math.sqrt(x*x + y*y)
  }

  get direction () {
    const { magnitude: m } = this
    return m === 0? new PVector(0, 0) : new PVector(this.x/m, this.y/m)
  }

  get angle () {
    if (this.x === 0 && this.y === 0) return 0

    const arcTan = Math.atan(Math.abs(this.y)/Math.abs(this.x))
    let angle
    
    if (this.x >= 0) angle = this.y >= 0 ? arcTan : -arcTan
    else angle = this.y >= 0 ? Math.PI - arcTan : arcTan - Math.PI
    
    return angle
  }

  // instace methods
  reset ({x, y}={x: 0, y: 0}) {
    this.x = x
    this.y = y

    return this
  }

  normalize () {
    this.reset(this.direction)
    return this
  }

  add ({x, y}) {
    this.x += x
    this.y += y
    
    return this
  }

  sub ({x, y}) {
    this.x -= x
    this.y -= y
    
    return this
  }

  mult (n) {
    this.x *= n
    this.y *= n
    
    return this
  }

  div (n) {
    this.x /= n
    this.y /= n
    
    return this
  }

  clone () {
    return new PVector(this.x, this.y)
  }

  setMag (mag) {
    this.normalize().mult(mag)

    return this
  }

  limitMax (mag) {
    if (this.magnitude >= mag) this.normalize().mult(mag)
    return this
  }

  limitMin (mag) {
    if(this.magnitude <= mag) this.normalize().mult(mag)
    return this
  }

  reverseX () {
    this.x = -this.x

    return this
  }

  reverseY () {
    this.y = -this.y

    return this
  }
}

// utils
function randomSign () {
  return Math.random() > 0.5 ? -1 : 1
}

export default PVector