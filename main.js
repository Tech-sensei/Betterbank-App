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
    '2022-04-23T07:42:02.383Z',
    '2022-04-28T09:15:04.904Z',
    '2022-05-15T21:31:17.178Z',
    '2022-05-18T10:17:24.185Z',
    '2022-06-08T14:11:59.604Z',
    '2022-06-27T17:01:17.194Z',
    '2022-07-17T23:36:17.929Z',
    '2022-07-18T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Samuel Jolayemi',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.5,
  pin: 1111,
  movementsDates: [
    '2022-04-23T07:42:02.383Z',
    '2022-04-28T09:15:04.904Z',
    '2022-05-15T21:31:17.178Z',
    '2022-05-18T10:17:24.185Z',
    '2022-06-08T14:11:59.604Z',
    '2022-06-27T17:01:17.194Z',
    '2022-07-17T23:36:17.929Z',
    '2022-07-18T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Adegoke Iremide',
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
    '2022-06-27T17:01:17.194Z',
    '2022-07-08T14:11:59.604Z',
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
const labelBalanceHide = document.querySelector('.balance-hide');
const labelBalanceIcon = document.querySelector('.balance-icon');
const labelDate = document.querySelector('.date');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelTransfer = document.querySelector('.transfer-header');
const labelAirtime = document.querySelector('.airtime-header');

// Elements
const button = document.createElement('button');
const formLogin = document.querySelector('.nav__menu');
const form = document.querySelector('.nav');
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
const labelloan = document.querySelector('.loan-header');

const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//IMPLEMENTING THE FUNCTIONALITIES

// Implementing Transactions Date
const locale = navigator.language;

const formatDate = function (now, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcdaysPassed(new Date(), now);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${now.getDate()}`.padStart(2, 0);
  // const month = `${now.getMonth() + 1}`.padStart(2, 0);
  // const year = now.getFullYear();
  return new Intl.DateTimeFormat(locale).format(now);
};

// implementing the Transaction Movements

const displayMovements = function (curAcc) {
  containerMovements.innerHTML = '';

  curAcc.transactions.forEach((cur, i, arr) => {
    const type = cur > 0 ? 'IN' : 'OUT';
    const details = cur > 0 ? 'Earnings' : 'Expenses';

    const now = new Date(curAcc.movementsDates[i]);
    const date = formatDate(now, locale);

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
  curAcc.balance = curAcc.transactions.reduce((acc, cur) => acc + cur, 0); //We created a new property on the currentAccount object. so that for every transaction going on the balance will be updating.
  labelBalance.innerHTML = `₦ ${curAcc.balance}`;
};
// Implementing Hide Balance
labelBalanceIcon.addEventListener('click', function () {
  if ((labelBalance.innerHTML = `₦ ${currentAccount.balance}`)) {
    labelBalance.classList.toggle('active-balance');
    if (labelBalanceIcon.classList.contains('fa-eye')) {
      labelBalanceIcon.classList.toggle('fa-eye-slash');
    }
    if ((labelBalance.innerHTML = `₦ ${currentAccount.balance} `)) {
      labelBalanceHide.classList.toggle('active-balance');
    } else {
      labelBalanceHide.classList.remove('active-balance');
    }
  }
});
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

const displayLogOut = function () {
  button.className = 'logout-btn';
  button.classList.add('active-btn');
  button.innerHTML = 'Log out <i class="bx bx-door-open"></i>';

  form.append(button);

  // form.replaceChild(formChild, button);
  form.replaceChild(button, formLogin);
  button.addEventListener('click', function () {
    console.log('clicked');
    // Hide Ui
    containerApp.style.opacity = 0;
    labelWelcome.innerHTML = 'Log in to get started';
    form.replaceChild(formLogin, button);
  });
};

// Validating the Username and Pin
let currentAccount;

// Implementing Login button
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const date = new Date();
  const options = {
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const locale = navigator.language;
  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(date);

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    // Display Welcome message and Ui

    // Calling Logout function
    displayLogOut();

    // Display Welcome Message
    labelWelcome.innerHTML = `Welcome, ${currentAccount.owner.split(' ')[0]}`;

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
    setTimeout(function () {
      // Add Transactions
      currentAccount.transactions.push(-amount);

      // Add Transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 1500);
    // const alert =

    setTimeout(() => (labelTransfer.innerHTML = 'Success ✅'), 1500);
    setTimeout(() => (labelTransfer.innerHTML = 'Transfer'), 2000);

    // Add Transactions
    receiverAcc.transactions.push(amount);

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
    setTimeout(function () {
      // Add Transactions
      currentAccount.transactions.push(-airtimeAmount);

      // Add Transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 1500);
    // const alert =

    setTimeout(() => (labelAirtime.innerHTML = 'Success ✅'), 1500);
    setTimeout(() => (labelAirtime.innerHTML = 'Airtime'), 2000);
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
    setTimeout(function () {
      // Add movement
      currentAccount.transactions.push(amount);

      // Add Loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3500);
    // const alert =

    setTimeout(() => (labelloan.innerHTML = 'Waiting...'), 500);
    setTimeout(() => (labelloan.innerHTML = 'Approved ✅'), 3500);
    setTimeout(() => (labelloan.innerHTML = 'Request Loan'), 3800);

    inputLoanAmount.value = '';
  }
});

// Implementing Close account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const confirmMessage = prompt(
    'Are you sure you want to perform this operation???'
  );
  if (
    confirmMessage == 'null' ||
    confirmMessage == null ||
    confirmMessage == ''
  ) {
    console.log('cancel');
  }
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      cur => cur.username === currentAccount.username
    );
    if (confirmMessage !== null) {
      console.log('cancel');
      labelWelcome.innerHTML = 'Log in to get started';

      // Delete account
      accounts.splice(index, 1);
      // Hide UI
      containerApp.style.opacity = 0;

      // Replacing the Logout with Login btn
      form.replaceChild(formLogin, button);
    }
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
const x = new Date().toDateString();
console.log(x);
