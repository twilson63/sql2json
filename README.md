# SQL-SVC

SQL Service is a simple SQL MicroService, it takes a simple json request document, creates a sql connection, executes the query and then streams the results in a json response.

## Usage

### POST /api/query

```
{
  "url": "mysql://user:pass@server/database",
  "query": "select * from foo;",
  "type": "mysql"
}
```

Response will be a stream of json documents.


