let price = 3.26;
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

const updateTotalCid = () => {
  return (
    cid.reduce((acc, curr) => {
      return acc + Number(curr[1]) * 100;
    }, 0) / 100
  );
};

let totalCid = updateTotalCid();
const nominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

const handlePurchase = (e: Event) => {
  e.preventDefault();
  let status = "";
  const cashValue = Number(cash.value);

  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cashValue === price) {
    status = "Status: CLOSED";
    changeDue.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
    return;
  } else if (totalCid < cashValue - price) {
    status = "Status: INSUFFICIENT_FUNDS";
    changeDue.innerHTML = `<p>${status}</p>`;
    return;
  }

  status = "Status: OPEN";
  changeDue.innerHTML = `<p>${status}</p>`;
  const reverseCid = cid.reverse();
  const change = (cashValue * 100 - price * 100) / 100;

  let changeLeft = change;
  for (let i = 0; i < reverseCid.length; i++) {
    const [name, value] = reverseCid[i];
    const nomination = nominations[i];
    const nominationTotal = Number(value);
    let coinsNum = 0;

    if (changeLeft >= nomination) {
      if (changeLeft / nomination > nominationTotal / nomination) {
        coinsNum = Math.floor(nominationTotal / nomination);
      } else {
        coinsNum = Math.floor(changeLeft / nomination);
      }

      reverseCid[i][1] =
        Math.round(nominationTotal * 100 - coinsNum * (nomination * 100)) / 100;
      changeLeft =
        Math.round(changeLeft * 100 - coinsNum * (nomination * 100)) / 100;
      changeDue.innerHTML += `<p>${name}: $${coinsNum * nomination}</p>`;

      console.log({ changeLeft });
      console.log(reverseCid[i][1]);

      if (changeLeft === 0) {
        break;
      }
    }
  }

  cash.value = "";
  cid = reverseCid.reverse();
  updateTotalCid();
  updateCashDrawerDisplay();
  console.log({ cid });
  console.log({ totalCid });
};

const updateCashDrawerDisplay = () => {
  cashDrawerDisplay.innerHTML = `<h3 class="font-bold">Cash in Drawer</h3>`;
  cid.forEach((item) => {
    const p = document.createElement("p");
    p.innerHTML = `${item[0]}: $${item[1]}`;
    cashDrawerDisplay.appendChild(p);
  });
};

priceScreen.innerHTML = `Total: $${price}`;
updateCashDrawerDisplay();
form?.addEventListener("submit", handlePurchase);
purchaseBtn?.addEventListener("click", handlePurchase);
