const innerList = [
  "TestNet",
  "Blockchain Explorer",
  "Join Preview Network",
  "WhitePaper",
  "EcoWhitePaper",
  "home"
]
// const innerDit = {
//   "WhitePaper",
//   "EcoWhitePaper",
//   "home",
// }
const outerDit = {
  eligible:
    "https://github.com/crustio/Crust-Grants-Program/blob/main/crust_stack.md",
  apply: "https://github.com/crustio/Crust-Grants-Program",
  CrustNetwork: "https://crust.network",
}
const outerList = Object.keys(outerDit)
module.exports = {
  innerList,
  outerDit,
  outerList,
}
