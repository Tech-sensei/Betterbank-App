'use strict';

// User Data
const account1 = {
  owner: 'Tobiloba Ibraheem',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 10000],
  interestRate: 1.2,
  pin: 5555,
};

const account2 = {
  owner: 'Samuel Jolayemi',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.5,
  pin: 1111,
};

const account3 = {
  owner: 'Olufolake Zion',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.1,
  pin: 2222,
};

const account4 = {
  owner: 'Jessica Davis',
  transactions: [900, 150, -400, 3200, -650, -160, 1250, 1000],
  interestRate: 1.2,
  pin: 3333,
};

const account5 = {
  owner: 'Serah Smith',
  transactions: [430, 1000, 7000, 50, 900, -1500],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4, account5];

// SELECTING ALL THE NECESSARY ELEMENTS

// Value
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

// Elements
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// buttons
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// input value
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputLoginPinUser = document.querySelector('.login__input')
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//IMPLEMENTING THE FUNCTIONALITIES

// implementing the Transaction Movements
const displayMovements = function (transactions) {
  containerMovements.innerHTML = ''; //I started by setting the initial value to empty string

  transactions.forEach(function (item, i) {
    const type = item > 0 ? 'deposit' : 'withdrawal';

    const movementsHTML = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">₦ ${item}</div>
        </div>    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', movementsHTML);
  });
};

// displayMovements(account1.transactions);

// Implementing the Balance

const calcDisplayBalance = function (transactions) {
  const balance = transactions.reduce((acc, item, i, arr) => acc + item, 0);
  labelBalance.innerHTML = `₦ ${balance}`;
};

// calcDisplayBalance(account1.transactions);

// Implementing the Summary

const calcDisplaySummary = function (currentAccount) {
  // Income

  const deposits = currentAccount.transactions
    .filter(item => item > 0)
    .reduce((acc, item, i) => acc + item);
  labelSumIn.innerHTML = `₦ ${deposits}`;

  // Expences

  const expences = currentAccount.transactions
    .filter(item => item < 0)
    .reduce((acc, item, i) => acc + item);
  labelSumOut.innerHTML = `₦ ${Math.abs(expences)}`;

  // Interest
  const interest = currentAccount.transactions
    .filter(item => item > 0)
    .map(item => item * currentAccount.interestRate)
    .filter(item => item > 1)
    .reduce((acc, item) => acc + item);
  labelSumInterest.innerHTML = `₦ ${interest}`;
};

// calcDisplaySummary(account1.transactions);

// Implementing The Login Details

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
  console.log(accounts);
};

createUsernames(accounts);

// Implementing the Login button
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    // Display Welcome message and Ui

    // Display Welcome Message
    labelWelcome.innerHTML = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    const welcomeQuestion = `<p style="font-size:1.125rem; color:#39b385;">What would you like to do? 😊</p>`;
    labelWelcome.insertAdjacentHTML('beforeend', welcomeQuestion);

    // Display Ui
    containerApp.style.opacity = 100;

    // Clearing Input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Display transactions
    displayMovements(currentAccount.transactions);

    // DisplayBalance
    calcDisplayBalance(currentAccount.transactions);

    //DisplaySummary
    calcDisplaySummary(currentAccount);
    
  } else if (
    currentAccount &&
    currentAccount.pin !== Number(inputLoginPin.value)
  ) {
    inputLoginPinUser.style.borderColor = 'red';
  }
});
