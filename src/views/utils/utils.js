function debounce (func, wait, immediate = false) {
  let timeOut

  return function () {
    const [ context, args ] = [ this, arguments ]
    const later = () => {
      timeOut = null

      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeOut

    clearTimeout(timeOut)
    timeOut = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export {
  debounce
}