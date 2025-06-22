DB Index 

📚 What is a Database Index?
A DB Index is like a search-optimized copy of one or more columns in a table.
It helps the database find rows faster, especially during SELECT queries.

🏃 Why use an index?
Without an index: DB scans every row (called full table scan)
With an index: DB quickly jumps to matching rows, like using a book inde




| Concept           | Explanation                                                                 |
|-------------------|------------------------------------------------------------------------------|
| Index             | A data structure (usually B-tree) that helps find rows by value quickly      |
| Column choice     | Index columns that are searched/filtered/sorted often (e.g., WHERE, JOIN, ORDER BY) |
| Unique index      | Faster for lookups – ideal on ID or email columns                            |
| Cardinality       | More unique values = more effective index (e.g., email is better than gender)|
| Read vs Write     | Index boosts read speed, but makes write (INSERT/UPDATE/DELETE) slightly slower |
| Not always helpful| Avoid indexing columns with few distinct values (e.g., is_active true/false) |


Most databases (like PostgreSQL, MySQL, Oracle) use a B-tree structure:

Balanced Tree

Keeps data sorted

Fast search (logarithmic time)



⚠️ When not to use an index:
Small tables (full scan is fast anyway)

Columns with low cardinality (e.g., is_deleted)

Tables that are write-heavy (index overhead slows inserts/updates)


