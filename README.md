# sql2json 

https://sql2json.herokuapp.com

A micro-service that takes a `json` document via a http `post` method to the `/api/query` url.  The document contains the
following attributes:

* url - A database url describing your mysql connection
* query - A string that contains your sql query.
* ca - [optional] - a string that contians your ca file for secure queries

## Usage

### POST /api/query

```
{
  "url": "mysql://user:pass@server/database",
  "query": "select * from foo;"
}
```


Response will be an array of json documents. 

## Install

* clone repo
* `npm install`
* `npm start`

## TODO

* Add `ca` option
* Validate JSON

## Contributions

Welcome.

## LICENSE

MIT


