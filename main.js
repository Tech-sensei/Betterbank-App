'use strict';

/*==================== SHOW MENU ====================*/
const showMenu = function (toggleId, navId) {
  const toggle = document.querySelector(toggleId);
  const nav = document.querySelector(navId);
  const closeMenu = document.querySelector('.nav-close');
  const btnLogin = document.querySelector('.login__btn');

  // Validate that variables exist

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.add('show-menu');

      // We remove the show-menu class to the div tag with the nav__menu class
      btnLogin.addEventListener('click', function () {
        nav.classList.remove('show-menu');
      });
      closeMenu.addEventListener('click', () => {
        nav.classList.remove('show-menu');
      });
    });
  }
};

showMenu('#nav-toggle', '#nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// User Data
const account1 = {
  owner: 'Tobiloba Ibraheem',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 10000],
  interestRate: 1.2,
  pin: 5555,
  movementsDates: [
    '2022-03-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-04-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-06-27T17:01:17.194Z',
    '2022-07-11T23:36:17.929Z',
    '2022-07-12T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Samuel Jolayemi',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.5,
  pin: 1111,
  movementsDates: [
    '2022-03-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-04-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-06-27T17:01:17.194Z',
    '2022-07-11T23:36:17.929Z',
    '2022-07-12T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Olufolake Zion',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.1,
  pin: 2222,
  movementsDates: [
    '2022-03-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-04-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-06-27T17:01:17.194Z',
    '2022-07-11T23:36:17.929Z',
    '2022-07-12T10:51:36.790Z',
  ],
};

const account4 = {
  owner: 'Jessica Davis',
  transactions: [900, 150, -400, 3200, -650, -160, 1250, 1000],
  interestRate: 1.2,
  pin: 3333,
  movementsDates: [
    '2022-03-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-04-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-06-27T17:01:17.194Z',
    '2022-07-11T23:36:17.929Z',
    '2022-07-12T10:51:36.790Z',
  ],
};

const account5 = {
  owner: 'Serah Smith',
  transactions: [430, 1000, 7000, 50, 900, -1500],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2022-03-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-04-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-06-27T17:01:17.194Z',
    '2022-07-11T23:36:17.929Z',
    '2022-07-12T10:51:36.790Z',
  ],
};

const accounts = [account1, account2, account3, account4, account5];

// SELECTING ALL THE NECESSARY ELEMENTS

// Value
const labelWelcome = document.querySelector('.welcome');
const labelBalance = document.querySelector('.account-balance');
const labelDate = document.querySelector('.date');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// Elements
const containerApp = document.querySelector('.main');
const containerMovements = document.querySelector('.movements');

// buttons
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnAirtime = document.querySelector('.form__btn--airtime');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// input value
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');

const inputAirtimeTo = document.querySelector('.form__input--airtime-to');
const inputAirtimeAmount = document.querySelector(
  '.form__input--airtime-amount'
);
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//IMPLEMENTING THE FUNCTIONALITIES

// implementing the Transaction Movements

const displayMovements = function (curAcc) {
  containerMovements.innerHTML = '';

  curAcc.transactions.forEach((cur, i, arr) => {
    const type = cur > 0 ? 'IN' : 'OUT';
    const details = cur > 0 ? 'Salary' : 'Expenses';
    // const randomInt = (min, max) =>
    //   Math.trunc(Math.random() * (max - min) + 1) + min;
    // const date = i % 2 === 0 ? 'Today' : `${randomInt(2, 4)} days ago`;
    const now = new Date(curAcc.movementsDates[i]);
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const date = `${day}/${month}/${year}`;

    const movementHTML = `
    <div class="movements__row">
          <div class="movements__date">${date}</div>
          <div class="movements__type movements__type--${type}">${type}</div>
           <div class="movements__detail">${details}</div>
          <div class="movements__value movements__type--${type}">₦ ${cur}</div>
        </div>    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', movementHTML);
  });
};

// displayMovements(account1.transactions);

//  implementing the Balance
const calcDisplayBalance = function (curAcc) {
  curAcc.balance = curAcc.transactions.reduce((acc, cur) => acc + cur, 0); //We created a new property on the currentaccount object. so that for every transaction going on the balance will be updating.
  labelBalance.innerHTML = `₦ ${curAcc.balance}`;
};

// calcDisplayBalance(account1.transactions);

// Implementing The summary
const calcDisplaySummary = function (curAcc) {
  // Income Summary
  const income = currentAccount.transactions
    .filter((cur, i, arr) => cur > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.innerHTML = `₦,${income}`;

  // Expenses Summary
  const expenses = currentAccount.transactions
    .filter((cur, i, arr) => cur < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.innerHTML = `₦,${Math.abs(expenses)}`;

  // InterestRate Summary
  const interestRate = currentAccount.transactions
    .filter((cur, i, arr) => cur > 0)
    .map((cur, i) => cur * currentAccount.interestRate)
    .filter(cur => cur > 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.innerHTML = `₦,${interestRate}`;
};
// calcDisplaySummary(account1.transactions);

// Implementing Username
const createUsernames = function (accounts) {
  accounts.forEach((cur, i) => {
    cur.username = cur.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
};
createUsernames(accounts);

// Creating UI update function

const updateUI = function (curAcc) {
  // Display transactions
  displayMovements(curAcc);

  // DisplayBalance
  calcDisplayBalance(curAcc);

  //DisplaySummary
  calcDisplaySummary(curAcc);
};

// Validating the Username and Pin
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const date = new Date();
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  const hour = `${date.getHours()}`.padStart(2, 0);
  const min = `${date.getMinutes()}`.padStart(2, 0);
  labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // console.log(currentAccount);
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

    // Update UI
    updateUI(currentAccount);
  } else if (
    currentAccount.username === inputLoginUsername.value &&
    currentAccount.pin !== Number(inputLoginPin.value)
  ) {
    labelWelcome.innerHTML = `<p style="font-size:1.125rem; color:#e52a5a;"> Username or Password seem incorrect 😔</p>`;
  } else if (
    Number(inputLoginPin.value) == '' &&
    inputLoginUsername.value == ''
  ) {
    labelWelcome.innerHTML = `<p style="font-size:1.125rem; color:#39b385;"> Enter Your Details </p>`;
  }
});

// Implementing Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    curAcc => curAcc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Add Transactions
    currentAccount.transactions.push(-amount);
    receiverAcc.transactions.push(amount);

    // Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

// Implementing Airtime Purchase
btnAirtime.addEventListener('click', function (e) {
  e.preventDefault();
  const airtimeAmount = Number(inputAirtimeAmount.value);

  if (airtimeAmount > 0 && currentAccount.balance >= airtimeAmount) {
    // Add Transactions
    currentAccount.transactions.push(-airtimeAmount);
    // Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  } else if (inputAirtimeAmount.value == '') {
    console.log('enter amount');
  }

  inputAirtimeAmount.value = inputAirtimeTo.value = '';
});

// Implementing Loan Request
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.transactions.some(cur => cur >= amount * 0.1)
  ) {
    // Add Transactions
    currentAccount.transactions.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});
