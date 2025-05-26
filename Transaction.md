## 💳 Transactions

### 🔄 What is a Transaction?
A **transaction** is a sequence of operations performed as a single logical unit of work. It must be **all-or-nothing** — either everything succeeds or nothing is applied.

---

### ✅ Properties (ACID)

| Property | Description |
|----------|-------------|
| **Atomicity** | All steps in a transaction succeed, or none do. |
| **Consistency** | Transaction brings the system from one valid state to another. |
| **Isolation** | Concurrent transactions don’t interfere with each other. |
| **Durability** | Once committed, the changes are permanent, even after a crash. |

---

### 🧱 Use Cases
- Bank transfers (e.g., withdraw from one account, deposit to another)
- Shopping cart + payment flow
- Multi-step database operations that must be consistent

---

### ⚠️ Without Transactions
- Partial updates can cause **data corruption**
- Race conditions may result in **inconsistent state**

---

### 💡 Transaction in Code (Example: SQL)

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;
-- or ROLLBACK if something fails

## 🧱 Transaction Isolation Levels

Transaction isolation defines **how visible data is across concurrent transactions** — preventing issues like dirty reads, non-repeatable reads, and phantom reads.

---

### 🔄 Common Problems in Transactions

| Problem               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Dirty Read**        | Transaction reads data that has been **modified but not committed**         |
| **Non-repeatable Read** | Transaction reads the same row twice and gets **different results**        |
| **Phantom Read**      | A `SELECT` query returns different rows when run twice in the same transaction |

---

### 🔐 Isolation Levels (From Weakest to Strongest)

| Level                | Dirty Read | Non-Repeatable Read | Phantom Read | Notes |
|----------------------|------------|----------------------|---------------|-------|
| **Read Uncommitted** | ✅ Allowed  | ✅ Allowed           | ✅ Allowed     | Fastest, least safe. Rarely used. |
| **Read Committed**   | ❌ Prevented | ✅ Allowed           | ✅ Allowed     | Default in many databases (e.g., PostgreSQL, SQL Server). |
| **Repeatable Read**  | ❌ Prevented | ❌ Prevented         | ✅ Allowed     | Safer, but still allows phantom reads. |
| **Serializable**     | ❌ Prevented | ❌ Prevented         | ❌ Prevented   | Highest isolation. Acts like transactions are fully sequential. Slowest but safest. |

---

### 💡 Analogies

- **Read Uncommitted**: Reading someone’s draft document before they hit save.
- **Read Committed**: Reading only saved versions.
- **Repeatable Read**: You keep reading the same saved version until you're done.
- **Serializable**: It’s like you're the **only person** using the database — no one can sneak in changes behind you.

---

### 🔍 Default by DBMS

| DBMS         | Default Isolation Level     |
|--------------|-----------------------------|
| PostgreSQL   | Read Committed              |
| MySQL (InnoDB)| Repeatable Read             |
| SQL Server   | Read Committed              |
| Oracle       | Read Committed              |

---

### 🧪 SQL Example

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

BEGIN TRANSACTION;

-- your queries here

COMMIT;
