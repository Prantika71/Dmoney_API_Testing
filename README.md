# Dmoney - Transactional System
**Dmoney** is a practice initiative for API testing, utilizing the DMoney Transaction API as a demonstration platform. To validate various API functionality aspects, a comprehensive set of test cases was developed using Postman. Newman has been employed to execute the Postman collections and generate detailed reports to ensure efficient and automated reporting.


---

## 🚀 Test Scenarios


- Admin creates an Agent, 2 random Customers, and a Merchant.
- Admin email: admin@roadtocareer.net / Pass: 1234
- Deposit some money from the SYSTEM account to the Agent.
- System account: SYSTEM (range 10 TK to 10,000 TK)
- Agent deposits money to one of the Customers.
- Hint: fromAc: Agent, toAc: Customer
- Check the Agent's balance.
- Then, send money from one Customer to another Customer.
- Hint: fromAc: Customer, toAc: Customer
- Withdraw any amount from a Customer to the Agent (range 10 TK to 10,000 TK).
- Hint: fromAc: Customer, toAc: Agent
- Check the Customer's balance and transaction statement by trnxId.
- Make a payment from the second Customer to the Merchant.
- Hint: fromAc: Customer, toAc: Merchant
- The second Customer checks both balance and transaction statement.
- The Merchant checks his balance.

---

## 🛠️ Tools

- Postman
- Newman
- Nodejs
  

---












