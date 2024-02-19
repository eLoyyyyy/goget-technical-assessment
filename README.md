# goget-technical-assessment
Build an Express API with documentation

## Requirements
1. Implement an API with the following endpoints
    * “/ping”. GET. Returns a json structure that contains a timestamp
    * “/user/{userId}/settings” . GET. Returns a JSON structure with the current
    values of the user’s settings.
    * “/user/{userId}/settings”. POST/PATCH/PUT . Receives a multifield form or a
    JSON body to update the user’s settings

2. Implement the persistence of your choice. MySQL, NoSQL, Redis, Mongo, File
storage, Online, Offline, etc.
3. Create a documentation page using the packages "swagger-jsdoc" and
"swagger-ui-express". The documentation should be accessible by opening the root
directory of the API “/”.
a. The documentation should include all the endpoints mentioned above.
4. Use proper file separation. Use controllers and models.
5. Write unit tests that mimic the HTTP calls and validate that every endpoint is
returning the correct responses

## The “settings”
The user settings can be the following
* preferredTheme: Enum . “light”, “dark”, “system” (default: “system”)
* resultsPerPage: Int. min 20, max 100 (default 20)
* sendEmail: bool. (default true)

## Initialize

### Install dependencies
```
npm ci
```

#### Sqlite

```
npx ts-node initialize.ts
```

### Run E2E tests
```
npx playwright test
```


### Start application
```
npm run build && npm start
```
