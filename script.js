function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("Light")) {
    img.setAttribute(
      "src",
      "./assets/DevLinks • Projeto Discover (Community) (1)/Desktop/avatar-light.png"
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/DevLinks • Projeto Discover (Community) (1)/Desktop/avatar2.png"
    )
  }
}
