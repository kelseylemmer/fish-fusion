// The import of fishingBoat function: boatInventory
const { boatInventory } = require("./fishingBoat.js")
//invoke boatInventory
// const boatInv = boatInventory()

/*
1.) create a function "mongerInventory" : generates its own inventory that restaurants can use to purchase fish 
    a.) Sort through boatInventory to pull objects that meet the specific monger requirements
        i) monger requirements: amount >= 10, price <= 7.50
        ii) Prices that are higher than 7.50 will not be bought.
        
    b.) This will create an array of objects taken from boatInventory.
        i) Assign this array to a variable so that we can store the information
        ii) the amount property(.amount) needs to be changed to 10 for each individual object.
    
    c.) Sort through the new array ((created in a.) and b.)) to pull objects that meet the specific chef requirements
        i) chef requirements: a variable price (to be specified when invoking the function)

    d.) Return the final array 

2.) export the "mongerInventory" function
*/


const mongerInventory = (price) => {

    const purchasedFish = boatInventory();
        let filteredFish = purchasedFish.filter((fish) => 
        fish.amount >= 10 
        && 
        fish.price <= 7.50);
           
            filteredFish.forEach((fish) => 
                {
                    fish.amount = 10;
                });

    let chefInventory = filteredFish.filter(
        (fish) => 
            fish.price <= price);

                chefInventory.forEach((fish) =>
                    {
                        fish.amount = fish.amount / 2
                    });
            
    return chefInventory
};

module.exports = { mongerInventory }
