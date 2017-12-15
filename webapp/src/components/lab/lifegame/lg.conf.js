export const LGCONF = {
  cellsX: 50,
  cellsY: 50,
  cellSize: 8, // px
  speed: 60,
  historyMax: 20,
  colors: [
    [ 255, 0, 128, 1 ],
    [ 255, 0, 0, 1 ],
    [ 255, 128, 0, 1 ],
    [ 255, 0, 255, 1 ],
    [ 255, 255, 0, 1 ],
    [ 128, 0, 255, 1 ],
    [ 128, 255, 0, 1 ],
    [ 0, 0, 255, 1 ],
    [ 0, 255, 0, 1 ],
    [ 0, 128, 255, 1 ],
    [ 0, 255, 255, 1 ],
    [ 0, 255, 128, 1 ],
  ],
  isMouseDown: 0,
  startColor: [ 0, 0, 0, 1 ],
}

// [ 255, 102, 102, 1 ],
// [ 255, 140, 102, 1 ],
// [ 255, 179, 102, 1 ],
// [ 255, 217, 102, 1 ],
// [ 255, 255, 102, 1 ],
// [ 217, 255, 102, 1 ],
// [ 179, 255, 102, 1 ],
// [ 140, 255, 102, 1 ],
// [ 102, 255, 102, 1 ],
// [ 102, 255, 140, 1 ],
// [ 102, 255, 179, 1 ],
// [ 102, 255, 204, 1 ],
// [ 102, 255, 217, 1 ],
// [ 102, 255, 255, 1 ],
// [ 102, 217, 255, 1 ],
// [ 102, 179, 255, 1 ],
// [ 102, 140, 255, 1 ],
// [ 102, 102, 255, 1 ],
// [ 140, 102, 255, 1 ],
// [ 179, 102, 255, 1 ],
// [ 217, 102, 255, 1 ],
// [ 255, 102, 255, 1 ],
// [ 255, 102, 217, 1 ],
// [ 255, 102, 179, 1 ],
// [ 255, 102, 140, 1 ],
// [ 255, 102, 102, 1 ],


document.body.onmousedown = (e) => {
  if (e.target.localName === "td" || e.target.localName === "canvas") {
    LGCONF.isMouseDown = 1
    LGCONF.startColor = LGCONF.colors[Math.floor(Math.random() * (LGCONF.colors.length))]
  }
}
document.body.onmouseup = () => {
  LGCONF.isMouseDown = 0
}
