var userOne = {
    email: 'maruf@gmail.com',
    name: 'Maruf',

    login(){
        console.log(this.email,  'logged in');
    },
    
    logout(){
        console.log(this.email, 'logged out')
    }
};

console.log(userOne.name);

