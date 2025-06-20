
1. What makes an API RESTful?
REST is based on six principles: stateless communication, client-server architecture, a uniform interface, cacheability, layered system, and optionally code-on-demand. Each request should be self-contained.

2. What’s the difference between PUT and PATCH?
PUT replaces the entire resource.

PATCH updates only the fields provided.
Example: PUT /user/1 with a full object vs PATCH /user/1 with { "email": "new@example.com" }.

3. How do we handle Versioning? 
we can use either 
URI-base /api/v1/users 
Header-based : Accept : application/vnd.myapp.v1json

URI-based is more used 

“How do you handle errors in REST APIs?”
“How would you design a versioned API?”



4. How do we handl error ? 
Return json sturcture that has status code , message, optional details 

{
  "error": "Invalid request",
  "code": 400,
  "details": "Email is required"
}


5. What does idempotent mean in REST? Which methods are idempotent?
An operation is idempotent if calling it multiple times produces the same result.
Idempotent methods: GET, PUT, DELETE, HEAD, OPTIONS.

6. How to secure a REST API
Use HTTPS
Require authentication (e.g. JWT, OAuth)
Implement role-based access (authorization)
Rate limiting and input validation
Avoid exposing sensitive data



🔐 REST Principles (Constraints)
Stateless – each request is independent

Client-Server – frontend/backend separation

Cacheable – support HTTP caching (e.g., ETag)

Uniform Interface – standard resource access

Layered System – via proxies/gateways