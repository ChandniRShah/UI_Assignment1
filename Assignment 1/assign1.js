// Question 1
var employees = [
       { id: 10, name: 'John', experience: 5},
       { id: 15, name: 'Mathew', experience: 7},
       { id: 20, name: 'keith', experience: 12},
       { id: 25, name: 'louis', experience: 5},
       { id: 30, name: 'mark', experience: 4},
       { id: 35, name: 'Ash', experience: 3},
       { id: 40, name: 'robert', experience: 6},
   ]

// Print: All ID’s in an array example: [10, 15, 20, 25, 30, 35, 40]
   var sum = employees.reduce(function(prev,currentValue){
     return prev + currentValue.experience;
   },0);

   console.log(sum);

// Print: TOTAL no of years’ experience they all have
   var employeesIds = employees.map(function(employees){
     return employees.id
   });
   console.log(employeesIds);

// Print: All employees whose experience is greater than 5 years
   var newEmployees = employees.filter(item=> {
     return item.experience > 5;
   });

   console.log(newEmployees);


// QUESTION 2
   // Fix to Print out ‘Kitty’

   let cat = {
       catName: 'Kitty',
       sayName:function() {
           console.log(this.catName);
       }
   };

   let sayName = cat.sayName;
   console.log(cat.catName);


 // QUESTION 3
   // Print: ‘Marlabs is in New Jersey’ (DO NOT create variables outside the User class)

   class user {
       constructor(name, location) {
          this.name = name;
          this.location = location;
       }

   displayName(){
     return this.name + " is in "+ this.location;
     }
   }
   var user1 = new user('Marlabs', 'New Jersey');

   console.log(user1.displayName.call(user1,name,location));


// QUESTION 4
//Print: ‘My name is Althaf Pattan and I work for Marlabs’
   function myName(fName, lName) {

       //console.log(`my name is ${fName} ${lName}`);

       function fullDetails(companyName) {
           const value = `my name is ${fName} ${lName} and I work for ${companyName}`
           return value;
       }

       return fullDetails("Marlabs");
   }
   console.log(myName("Althaf","Pattan"));



// QUESTION 5
//Print: ‘Pika Chu  loves sushi and algorithms’
   var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    //console.log(this.PokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algorithms');



// QUESTION 6
// Print: ‘Marlabs address: New jersey, 08444’
var x = '5';
var promise1 = new Promise(function(resolve, reject) {
    if (x  = 5) {
        let data = {
            name: 'Marlabs',
            address: {
                state: 'NJ',
                zip: 084444
            }
        }
        console.log(data.name);
        resolve(data.address);
    } else {
        var res = new Error('failed......');
        reject(res);
    }
});

var promise2 = function(address) {
    var msg ='address:'+ address.state + ' ' + address.zip;
    return Promise.resolve(msg);
}

var myFunc = function() {
    promise1
    .then(promise2)
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    });
};
myFunc();
