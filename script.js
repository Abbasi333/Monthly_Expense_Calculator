"use strict";
//1)-----------intialize the variable
const income = document.querySelector("#income");
const rent = document.querySelector("#rent");
const utilities = document.querySelector("#utilities");
const groceries = document.querySelector("#groceries");
const transportation = document.querySelector("#transportation");
const other_expenses = document.querySelector("#other");
//--result
const total_expense = document.querySelector("#total-expenses");
const remaining_expense = document.querySelector("#remaining-balance");
//--calculate btn
const calbtn = document.querySelector("#calculate-btn");

//add eventlistner
let sumofexpenses, balance;
calbtn.addEventListener("click", function (e) {
  e.preventDefault();
  //check if something is miss
  if (income.value === "") alert("Please Enter the Missing field!!!");
  if (
    rent.value === "" &&
    utilities.value === "" &&
    groceries.value === "" &&
    transportation.value === "" &&
    other_expenses.value === ""
  ) {
    alert("Please enter at least one expense!");
    return;
  }

  sumofexpenses =
    Number(rent.value) +
    Number(utilities.value) +
    Number(groceries.value) +
    Number(transportation.value) +
    Number(other_expenses.value);

  let month_income = Number(income.value);
  total_expense.textContent = `$` + sumofexpenses;
  balance = month_income - sumofexpenses;
  remaining_expense.textContent = `$${balance >= 0 ? balance : 0}`;
  //clearing the field
  income.value = "";
  rent.value = "";
  utilities.value = "";
  groceries.value = "";
  transportation.value = "";
  other_expenses.value = "";
});
