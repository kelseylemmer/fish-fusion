 const { fishMenu } = require("./restaurant.js")

const dailyPriceLimit = 8.01
const menu = fishMenu(dailyPriceLimit)
console.log(menu)