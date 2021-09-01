const navConfig = require("../config/nav-config")

function jumpTo(navName) {
  window.open(navConfig.outerDit[navName], "_blank")
}

function scrollIntoView(selectors) {
  const element = document.querySelector(selectors)
  if (element && element.scrollIntoView)
    element.scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    })
}

module.exports = {
  jumpTo,
  scrollIntoView,
}
