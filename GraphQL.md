GraphQL

Query Languge it has one single /graphql endpoint
have schema, query, mutation,subscriptoin 
it is to fix the over/under fetch, strongly typed 
but complex backend and risk of expensive N+1 query + hard to caching

Query -read only - idempotent
Me data update tht pushed connetion than - long livutation - alter data 
Subscription - long live connection that pushes data update in real time


How do you handle the Authorization ?
-using middleware to inspect the auth token before excuting any resolver ?


What is Resolver ?
Function tried to each schema field taht fetch or compute the requested data. 


What is N+1 Problem ? 
When resolver fetch related rows individually , it triggers N extra DB calls 
In any data-access later, there is lazy fetch related records,
One query retrieves a list of N parent objects, then N additional queries fetch their child object; 
using batchingdataloader and eager loading 