# Cash Register

This is a simple cash register application designed to calculate and return change to the customer based on the price of an item, the amount of cash provided by the customer, and the available cash in the drawer.  
Project is a part of JavaScript Algorithms and Data Structures Certification by [CodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-cash-register-project/build-a-cash-register).

## How to Use

1. **Input Cash:**

   - Input the amount of cash provided by the customer using the provided input element on the page.

2. **View Results:**
   - The application will display different messages based on the following scenarios:
     - **INSUFFICIENT_FUNDS:** If the cash in the drawer is less than the change due, or if exact change cannot be returned.
     - **CLOSED:** If the cash in the drawer is equal to the change due.
     - **OPEN:** If the cash in the drawer is greater than the change due, and exact change can be returned. The change will be presented in coins and bills sorted from highest to lowest.

## Variables

- **price:** The price of the item as a floating-point number.
- **cash:** The amount of cash provided by the customer for the item, provided via an input element on the page.
- **cid:** Cash-in-drawer, a 2D array listing available currency in the cash drawer.

Check out the [live demo](https://late-exairu.github.io/cash-register).

### Other projects by JavaScript Algorithms and Data Structures Certification

[Palindrome Checker](https://github.com/late-exairu/palindrome-checker) - [Demo](https://late-exairu.github.io/palindrome-checker/)  
[Roman Numeral Converter](https://github.com/late-exairu/roman-numeral-converter) - [Demo](https://late-exairu.github.io/roman-numeral-converter/)  
[Telephone Number Validator](https://github.com/late-exairu/telephone-number-validator) - [Demo](https://late-exairu.github.io/telephone-number-validator/)  
[Cash Register](https://github.com/late-exairu/cash-register) - [Demo](https://late-exairu.github.io/cash-register/)  
[Pokémon Search App](https://github.com/late-exairu/pokemon-search) - [Demo](https://late-exairu.github.io/pokemon-search/)
