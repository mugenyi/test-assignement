// BANK ACCOUNT

// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// this property should contain the name of the account holder

// - balance, should be the data type number
// this property should contain the total amount of the account

// - getBalance, should be a function
// this function should display the total amount of the account to the user

// - deposit, also a function
// this function should be able to deposit money onto the balance of the account

// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account

// - getAccountName, function as well
// this function should dispaly the account holders name to the user

// - accountError, same as above function!
// this one is a bit tricky... it's up to you to figure out how or what you should use this for.
// HINT: it's more a thinking poblem than a technical problem :)

// EXTRA: exitAccount, should be a function
// this function should exit the account
// HINT: there are a few different ways to do this, it's up to which way you choose.

// EXTRA = OPTIONAL NOT MANDATORY

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// HINT:
// these operators could probably be useful in this assignment:
// && operator
// || operator

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:
const variableName = 10;
isNaN(variableName);

const account = {
  accountName:'Allan',
  balance: 0,
  getBalance:function () {
    console.log(this.balance);
    atm();
  },
  deposit:function (){
    const amount = parseFloat(prompt("How much would you like to deposit? "));
    if (amount < 0 || isNaN(amount)){
      this.accountError('Invalid Amount!');
    }else{
      this.balance = amount;
    }
    atm();
  },

  withdrawal:function (){
    const amount = parseFloat(prompt("How much would you like to withdraw? "));
    if (amount < 0 || isNaN(amount) ){
      this.accountError('Invalid Amount!');
    }else {
      this.balance = this.balance -  amount;
    }
    atm();
  },
  getAccountName:function (){
    console.log(this.accountName);
    atm();
  },

  accountError:function (error){
    console.error(error);
  },
  exitApp:function (){
    return;
  }



};

// this is the function atm(), I've created some start code for you
function atm() {
  // The parseFloat() method parses a value as a string and returns the first number or  returns NaN if the value is not a number
  const message = parseFloat(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdraw 4.) Get  account name 5.) Exit "));
  switch (message){
    case 1:
     account.getBalance();
      break;
    case 2:
      account.deposit();
      break;
    case 3:
      account.withdrawal();
      break;
    case 4:
      account.getAccountName();
    case 5:
      account.exitApp();

  }


  // to show the right output based on the user input you can
  // either use a if/else statement or a switch.
  // Write a comment and motivate your choice
}

atm();
