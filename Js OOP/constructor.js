class User{
    constructor(email, name)
    {
        this.email = email;
        this.name = name;
        this.amount = 0;
    }

    login()
    {
        console.log(this.email, ' Just Logged In');
        return this;
    }
    logout()
    {
        console.log(this.name, ' Just Logged Out');
        return this;
    }

    updateAmount()
    {
        this.amount ++;
        console.log(this.amount)
        return this;
    }

}

class Admin extends User{   //Inherited User class 

    deletUser(user){
        users = users.filter(u => {
            return u.email != users.email;
        })
    }
}

var userOne = new User('maru@gmail.com', ' Maruf', '99');
var userTwo = new User('khan@gmail.com', ' Khan Shaheb');
var admin = new Admin('admin@gmail.com', 'Ms Admin');

var users = [userOne, userTwo];

admin.deletUser(userTwo);

console.log(users);



//  userOne.login();
// userTwo.logout(); 
