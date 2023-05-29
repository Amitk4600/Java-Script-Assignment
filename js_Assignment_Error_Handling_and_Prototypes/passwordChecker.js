class User{
    constructor(username , password){
        this.username = username;
        this.password = password;
    }
    // getter

    getPassword(){
        return  this.password.replace(/./g, '*')
   


    }

    // setter

    setPassword(newPassword){
        if(newPassword.length >= 8 && /[A/Z]/.test(newPassword) && /[0-9]/.test(newPassword)){
            this.password = newPassword;
        }
        else{
            console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        }


    }
}

const user = new User("Amit" , "Password123")
console.log(user.getPassword());
user.setPassword("myPassword")







