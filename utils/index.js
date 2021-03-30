const navConfig = require("../config/nav-config")
module.exports = function jumpTo(navName) {
  window.open(navConfig.outerDit[navName], "_blank")
}
