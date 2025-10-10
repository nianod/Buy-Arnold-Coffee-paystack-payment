# ☕ Arnold Coffee Paystack Payments

A full-stack payment demo: buy your next cup with seamless integration between **React** (frontend) and **Express/Node.js** (backend)! Powered by the Paystack API.

---

## 🚀 Features

- Modern React UI: clean, responsive, and minimal.
- Express.js backend for secure transaction handling.
- Paystack transaction initialization and payment redirect.
- Async form validation, error feedback, and loading states.
- Clean separation of backend API routes and frontend components.

---

## 🖥️ Quick Start

**1. Clone and install**

```js
git clone https://github.com/nianod/Buy-Arnold-Coffee-paystack-payment.git
cd Buy-Arnold-Coffee-paystack-payment
cd Backend
npm install

```


**2. Environment Setup**

For the backend, create a `.env` file:

PAYSTACK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxx
PORT=8000


> ⚠️ Never commit your secret key! For production, use environment secrets.

**3. Running the App**

- Start the backend by 

  ```js
  npm start

  ```

  
- Start the React frontend by runnig

  ```js
  cd fronted
  npm install
  npm start
  
  ```


Both servers must be running! The React app talks to the backend for payments.

---

## 💳 How it Works

1. User fills out payment form in the React app.
2. On submit, frontend sends payment details (email, amount) to backend API.
3. Express backend initializes transaction with Paystack and returns an authorization URL.
4. User is redirected to the Paystack payment page to complete the purchase.

_No mobile money STK push with Paystack — only redirect to Paystack’s secure pay page._

---

## 🛠️ Stack

- **Frontend:** React, TypeScript, Axios, TailwindCSS
- **Backend:** Node.js, Express, dotenv, axios, cors
- **API:** Paystack Transactions API

---

## 🤝 Contributing

Issues and PRs are welcome! Want to suggest an improvement, spot a bug, or showcase your own integration? Open a pull request.

---

> **Built for devs, by devs. Enjoy a digital coffee break!**




