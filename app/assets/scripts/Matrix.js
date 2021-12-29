import themeColor from "./ThemeColor"

class Matrix {
  constructor() {
    this.app = document.querySelector("#app")
    this.font = new FontFace("Magzetician", "url('./assets/fonts/Magzetician.woff2')")

    this.removeCanvas()
    this.injectCanvas()
    this.draw()
    this.actions()
  }

  //Actions
  actions() {
    window.addEventListener("resize", () => this.resize())
  }

  //Methods
  resize() {
    this.canvas.width = document.querySelector("#app").clientWidth
    this.canvas.height = document.querySelector("#app").clientHeight
    clearInterval(this.int)
    this.draw()
  }

  removeCanvas() {
    const oldCanvas = document.querySelector(".matrix")
    if (oldCanvas) {
      oldCanvas.remove()
    }
  }

  injectCanvas() {
    this.canvas = document.createElement("canvas")
    this.canvas.classList.add("matrix")
    this.canvas.width = this.app.clientWidth
    this.canvas.height = this.app.clientHeight
    this.app.insertBefore(this.canvas, this.app.firstChild)
  }

  async draw() {
    const ctx = this.canvas.getContext("2d")
    const w = this.canvas.width
    const h = this.canvas.height
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, w, h)
    const cols = Math.floor(w / 20) + 1
    const ypos = Array(cols).fill(0)

    const matrixFont = await this.font.load()
    document.fonts.add(matrixFont)
    const colWidth = 30
    const fontSize = "20px"

    const codeRain = () => {
      ctx.shadowBlur = 0
      ctx.shadowColor = "#0001"
      ctx.fillStyle = "#0001"
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = themeColor.color.string()
      ctx.font = `${fontSize} Magzetician`
      ctx.shadowBlur = 10
      ctx.shadowColor = themeColor.color.string()
      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(65 + Math.round(Math.random() * 26))
        const x = ind * colWidth
        ctx.fillText(text, x, y)
        if (y > 100 + Math.random() * h * 50) ypos[ind] = 0
        else ypos[ind] = y + colWidth
      })
    }

    this.int = setInterval(codeRain, 50)
  }
}

export default Matrix
