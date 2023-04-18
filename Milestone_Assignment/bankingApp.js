const prompt = require("prompt-sync") ({sigint:true});

class Bank {
    constructor () {
        this.name = "";
        this.accType = "";
        this.balance = 0;
        this.bank_name = "SBI";
    }


    openAcc (choice){
        if(choice === 0){
        this.name = prompt("Enter the customer name : ");
        console.log("---------------------");
        this.accType = prompt("Enter the type of account :");
        console.log("---------------------");
        this.balance = Number.parseFloat(prompt("Enter How much money you want to deposit initially while opening the account: "
        ));

        console.log("---------------------");
        console.log("account created succesfully in "+ "" + this.bank_name);
    }
        
    }

    deposite_money(choice){
        let amount;
        console.log("---------------------");

      
        if(choice === 2){
            amount = parseFloat(prompt("Enter How much money you want to deposite in your account: "
            ));
            this.balance += amount;

            console.log("Availsble Balance :" ,this.balance);
        }
        else {
            console.log("main menu ");
        }

    }

    withdraw_money(choice){
        let amount;
        console.log("---------------------");

       
        if(choice === 3){
            amount = parseFloat(prompt("Enter How much money you want to withdraw from  your account: "
            ));

            if (amount < 0){
                console.log("you have insufficient balance ;");
            }
            this.balance -= amount;

            console.log("Availsble Balance :" ,this.balance);
        }
        else {
            console.log("main menu ");
        }
    }

        display_ditail (choice) {
          
        if(choice === 1){
            console.log("Name" , this.name);
            console.log("Account type",this.accType);
            console.log("Blance ",this.balance);
        }
    }
 
}

const bank  = new Bank();

console.log("0 for open account ; 1 for display details ;2 for deposite ; 3 for withdraw");
let  choice = parseInt(prompt("enter your choice : "));


while(choice >= 0 && choice <= 3){
        switch(choice){
    case 0 :
        bank.openAcc(choice);
        break;

        case 1:
            bank.display_ditail(choice);
            break;

            case 2:
                bank.deposite_money(choice);
                break;

                case 3:
            bank.withdraw_money(choice);
            break;


    }

    choice = parseInt(prompt("enter your choice : "));

}