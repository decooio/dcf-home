const innerList = [
  "TestNet",
  "Blockchain Explorer",
  "Join Preview Network",
  "WhitePaper",
  "EcoWhitePaper",
  "home",
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
  teamNorthAmerica:
    "https://www.linkedin.com/company/sediment-tech/?viewAsMember=true",
  teamEurope: "",
  teamShanghai: "https://www.linkedin.com/company/clouderium",
  teamSingapore: "https://skye.kiwi/",
  encryptedIPFS: "https://github.com/crustio/encrypted-ipfs",
  DAN: "https://github.com/crustio/tee-alliance",
  CrustBounty: "https://gitcoin.co/crustio",
  CrustGrants: "https://github.com/crustio/Crust-Grants-Program",
  RegisterSupport: "",
  CrustTreasuryProposal:
    "https://wiki-maxwell.crust.network/docs/en/democracyGuide#21-treasury",
  ApplyCrustTips:
    "https://wiki-maxwell.crust.network/docs/en/democracyGuide#22-tips",
}
const outerList = Object.keys(outerDit)
module.exports = {
  innerList,
  outerDit,
  outerList,
}
