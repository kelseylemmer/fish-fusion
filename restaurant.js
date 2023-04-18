const { mongerInventory } = require("./fishMonger.js")

/* 
1.) Import the mongerInventory from fishMonger module

2.) Set the mongerInventory function equal to a variable (this is an array)

3.) Create and define a function named fishMenu
    a.) Set the parameter for fishMenu as "price".
    b.) ?? include somehow:  fishMonger function (represented as the variable defined on step 2)  
        i) Reference the variable holding the fishMonger function
    c.) If chef buys fish less than or equal to a price, divide by 2 with if statement

4.) Set a variable that holds an empty string for HTML.

5.) Set up the HTML structure
    a.) Add these elements: header 1, article with a class, header 2, section with class
    b.) curly dollar bracket sign within the section element to grab the species 

6.) export function named fishMenu
*/

const fishMenu = (differentPrice) => {
const mongerInv = mongerInventory(differentPrice)

    let htmlString = "<h1>Menu</h1>"

        for (const fish of mongerInv) {
            htmlString += `
                <h2>${fish.species}</h2>
                    <article class="menu"> 
                        <section class="menu__item">${fish.species} Soup</section>
                        <section class="menu__item">${fish.species} Sandwich</section>
                        <section class="menu__item">Grilled ${fish.species}</section>
                    </article>`
        }

return htmlString
}

module.exports = { fishMenu }