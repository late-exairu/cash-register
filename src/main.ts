const check = document.querySelector("#purchase-btn") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;
const input = document.querySelector("#cash") as HTMLInputElement;
const result = document.querySelector("#change-due") as HTMLDivElement;

const handleCheck = (e: Event) => {
  e.preventDefault();

  console.log("clicked");
};

form?.addEventListener("submit", handleCheck);
check?.addEventListener("click", handleCheck);
