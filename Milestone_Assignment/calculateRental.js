// Economy = Rs. 4000/-per day
// Midsize = Rs. 10000/-per day
// Luxury  = Rs. 20000/-per day

// 1 for economy
// 2 for midsize
// 3 for luxury


const prompt = require("prompt-sync") ({sigint:true});

function rentalCost () {
    let economy = 4000;
    let midsize = 10000;
    let luxury = 20000;

    let choice = prompt("choose your choice ");
    choice = Number.parseInt(choice);

    let days = prompt("total number of days ranted :");
    days = Number.parseInt(days);

    let totalRent = 0;

    switch(choice){
        case 1:
          
            totalRent = days * economy;

            console.log("total rent of economy");
            break;

        case 2:
            
            totalRent = days * midsize;

            console.log("total rent of midsize");
            break;

        case 3:
            
        totalRent = days * luxury;

            console.log("total rent of luxury");
            break;

            default:
                console.log("you choose wrong choice");
                break;

    }
    return totalRent;

}

console.log(rentalCost());