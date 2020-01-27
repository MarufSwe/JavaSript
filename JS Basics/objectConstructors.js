

function Info(name, age, email)
{
    this.name = name;
    this.age = age;
    this.email = email;

    this.personInfo = function()
    {
        document.write("<h4> Person Information")
    }
}

var info1 = new Info("Maruf","24","maruf@gmail.com");

info1.designation = "Software Engineer";  //Add data in the object
delete info1.age; //Delete age from the object

document.write(info1.age)   
