let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const purchaseBtn = document.querySelector(
  "#purchase-btn",
) as HTMLButtonElement;
const priceScreen = document.querySelector("#price-screen") as HTMLDivElement;
const form = document.querySelector("#form") as HTMLFormElement;
const cash = document.querySelector("#cash") as HTMLInputElement;
const changeDue = document.querySelector("#change-due") as HTMLDivElement;
const cashDrawerDisplay = document.querySelector(
  "#cash-drawer-display",
) as HTMLDivElement;

const handlePurchase = (e: Event) => {
  e.preventDefault();
  let status = "";
  const cashValue = Number(cash.value);

  if (cashValue < price) {
    status = "Status: INSUFFICIENT_FUNDS";
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cashValue === price) {
    status = "Status: CLOSED";
    alert("No change due - customer paid with exact cash");
    return;
  }

  const change = (cashValue * 100 - price * 100) / 100;
  status = "Status: OPEN";
  changeDue.innerHTML = `${status}: $${change}`;
  // const changeArr = [];
  // let changeLeft = change;

  console.log("clicked");
};

const updateCashDrawerDisplay = () => {
  cashDrawerDisplay.innerHTML = `<h3 class="font-bold">Cash in Drawer</h3>`;
  cid.forEach((item) => {
    const p = document.createElement("p");
    p.innerHTML = `${item[0]}: ${item[1]}`;
    cashDrawerDisplay.appendChild(p);
  });
};

priceScreen.innerHTML = `Total: $${price}`;
updateCashDrawerDisplay();
form?.addEventListener("submit", handlePurchase);
purchaseBtn?.addEventListener("click", handlePurchase);
