import throttle from "lodash/throttle"
import debounce from "lodash/debounce"

class Activate {
  constructor(targetClass, thresholdPercent) {
    this.textItems = Array.from(document.querySelectorAll(targetClass))

    this.thresholdPercent = thresholdPercent
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight
      }, 200)
    )
  }

  calcCaller() {
    this.textItems.forEach(item => {
      if (item.isRevealed == false) {
        this.calculateIfScrolledTo(item)
      }
    })
  }

  hideInitially() {
    this.textItems.forEach(item => {
      item.isRevealed = false
    })
    this.textItems[this.textItems.length - 1].isLastItem = true
  }

  calculateIfScrolledTo(item) {
    if (window.scrollY + this.browserHeight > item.offsetTop) {
      let scrollPercent = (item.getBoundingClientRect().y / this.browserHeight) * 100
      if (scrollPercent < this.thresholdPercent) {
        item.classList.add("activated")
        item.isRevealed = true
        if (item.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle)
        }
      }
    }
  }
}

export default Activate
