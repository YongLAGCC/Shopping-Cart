<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Shopping-Cart Application</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/YongLAGCC/Shopping-Cart/issues)
   [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/YongLAGCC/Shopping-Cart.git/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A shopping cart for reviewing, saving deleting, managing and making transactions for items the users preferred
  <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)


## 🧐 About <a name = "about"></a>
- A Shopping cart provides the customers to calculate easily what all they purchase whether it is goods or services
- A Shopping cart contains not only products but also customers data
- A Shopping cart keeps track of visitors activities, and provide you the option of integrating a secure to be able to accept credit card payment
## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- Make sure your load machine has NPM, Node.js and MogoDB installed. Otherwise see : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- and password.js, Stripe API keys ready.  See  
```
https://stripe.com/docs/keys
```


### Installing

- Open Terminal or PowerShell, type 
```
git clone https://github.com/YongLAGCC/Shopping-Cart.git 
```
<img width="587" alt="Screen Shot 2020-07-09 at 9 55 22 PM" src="https://user-images.githubusercontent.com/24738821/87111223-ce192b80-c236-11ea-89b7-3a4c80854e1e.png">


- Use editer to open the downloaded folder 
- Open Terminal or PowerShell, and direct to the folder, then type 
```
npm install
```
<img width="584" alt="Screen Shot 2020-07-09 at 10 56 05 PM" src="https://user-images.githubusercontent.com/24738821/87111510-8a72f180-c237-11ea-934e-ea77f6741b24.png">

- After finish download, type

```
npm start
```

<img width="581" alt="Screen Shot 2020-07-09 at 10 58 10 PM" src="https://user-images.githubusercontent.com/24738821/87111596-ba21f980-c237-11ea-8ecd-6201a524e316.png">

### 🔧 Running the tests <a name = "tests"></a>

- Open the Chrome to type  
```
http://localhost:3000/
```
<img width="896" alt="Screen Shot 2020-07-09 at 10 59 17 PM" src="https://user-images.githubusercontent.com/24738821/87111646-d9208b80-c237-11ea-8524-1f48015f81f2.png">

- Sign up and Sign in by your email and password
- click the items you like, be ready for your Credit card to pay for it!! 

<img width="935" alt="Screen Shot 2020-07-09 at 11 01 03 PM" src="https://user-images.githubusercontent.com/24738821/87111743-19800980-c238-11ea-85ad-af402b36d18e.png">
### ⛏️ And coding style


<img width="335" alt="Screen Shot 2020-07-09 at 11 15 02 PM" src="https://user-images.githubusercontent.com/24738821/87112813-c8254980-c23a-11ea-916b-af67200dd08b.png">


## 🎈 Usage <a name="usage"></a>
- This Shopping Cart is a real world shopping cart like Amazon's.
```
Example below
```
- This Shopping cart has password.js, the password has to be at leadt 8 digits long with character and numbers. 

<img width="916" alt="Screen Shot 2020-07-09 at 11 18 13 PM" src="https://user-images.githubusercontent.com/24738821/87112711-86949e80-c23a-11ea-9b13-d3336668197f.png">

- It has a Stripe.js validation, the credit card number has to be correct.
```
example below:
```
<img width="919" alt="Screen Shot 2020-07-09 at 11 08 26 PM" src="https://user-images.githubusercontent.com/24738821/87112162-26512d00-c239-11ea-9754-cbb411beeb6c.png">


## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Stripe](https://stripe.com/docs/api) - Payment method
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Handlebar.js](https://handlebarsjs.com/) - Frontend Framework

## ✍️ Authors <a name = "authors"></a>
- [@Caleb](https://github.com/YongLAGCC) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
reference 
- https://stripe.com/ Stripe API 
- http://www.passportjs.org/  Passport validation
- https://www.mongodb.com/    MongoDB
- https://getbootstrap.com/ Frontend 


