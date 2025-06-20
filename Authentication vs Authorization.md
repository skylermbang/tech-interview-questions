## 🔐 Authentication vs Authorization

| Aspect               | Authentication                             | Authorization                                  |
|----------------------|--------------------------------------------|------------------------------------------------|
| **Definition**        | Verifying **who** the user is              | Verifying **what** the user is allowed to do   |
| **Purpose**           | Confirms identity (e.g. login)             | Grants access to resources                     |
| **When it happens**   | First                                      | After authentication                           |
| **Example**           | Logging in with username/password          | Accessing admin dashboard based on role        |
| **Data involved**     | Username, password, token, biometrics      | Roles, permissions, access rules               |
| **Failure response**  | “Who are you?”                             | “You don’t have permission.”                   |
| **Tools/Methods**     | OAuth, login forms, biometrics             | RBAC, ACLs, policy engines                     |



## 🔐 Authentication

- **Asking “Who are you?”**
- You provide a **user ID and password**
- It's about **verifying identity**  
  → Example: Logging in  
- **Analogy**: Showing ID at the entrance of a building

### 🔑 Two ways to authenticate:

## 🔐 Session vs JWT Authentication

| Feature                         | **Session-based**                                            | **JWT-based**                                              |
|----------------------------------|---------------------------------------------------------------|-------------------------------------------------------------|
| **Type**                         | Stateful                                                      | Stateless                                                   |
| **Storage**                      | Stored on server (DB or Redis)                                | Stored on client (usually in localStorage or httpOnly cookie) |
| **Scalability**                  | Harder to scale (needs shared session storage)                | Easily scalable across servers                             |
| **Security**                     | More secure for sensitive data (easy to revoke)               | Riskier if token is leaked (needs short expiry or blacklist) |
| **Revocation**                   | Easy to revoke (just delete session server-side)              | Harder — needs token blacklist or very short TTL           |
| **Token Size**                   | Small (just a session ID)                                     | Large (contains user info, roles, expiry, etc.)            |
| **Expiration Handling**          | Controlled by server                                          | Built into the token                                        |
| **Use in Cookies**               | Typically stored in httpOnly cookies (auto-sent)              | Can be stored in cookies or headers                         |
| **Server Load**                  | More server memory usage                                      | Less load (no state to manage)                             |
| **Best for**                     | Monolithic apps, small to medium systems                      | Microservices, APIs, mobile apps                           |

---

### ✅ **Session-based Authentication**
**Strengths:**
- Easy to implement
- Easy to revoke sessions
- Better CSRF protection when using httpOnly cookies

**Downsides:**
- Requires session store (DB/Redis)
- Can’t scale easily without shared session store
- More memory usage on server

**Best suited for:**
- Traditional web apps (e.g., Django, Rails, Express + EJS)
- Admin panels or dashboards
- Any app where you want full server control

---

### ✅ **JWT-based Authentication**
**Strengths:**
- Fully stateless and scalable
- Easy to use across services (ideal for APIs)
- Can store roles/permissions inside token

**Downsides:**
- Cannot revoke easily once issued
- Bigger token size
- Needs secure handling (XSS risk if stored in localStorage)

**Best suited for:**
- SPA (Single Page Apps) like React, Vue, Angular
- Mobile apps
- Distributed systems (e.g., microservices, GraphQL APIs)


## 🛡️ Authorization

- **Asking “Are you allowed to do this?”**
- It's about **permission**
  → Example: Accessing admin-only pages
- **Implemented via roles** (e.g., `Admin`, `User`)
- **Analogy**: You entered the building, but may not be allowed in certain meeting rooms



- ## Real-world Decision Guide
Session-based Authentication

Best for: internal admin dashboards
Server manages session (stateful), easier to revoke

JWT-based Authentication

Best for: SPAs, mobile apps, microservices
Stateless, scalable across distributed systems

