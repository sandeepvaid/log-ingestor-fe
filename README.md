# Log-Ingestor-Fe

Log-ingestor-fe is a react-based application consisting of a simple UI with a search box where you can do text-based searching to search the logs and based on your search you will see the list of logs matching with your search .

- Log-ingestor-fe using [Log-ingestor repo](https://github.com/sandeepvaid/log-ingestor) as a backend service that is responsible for giving results based on your searched text.

- It includes the following features.
     ##### 1. Utilizing regular expressions for search. 
     ##### 2. Allow combining multiple filters. 

- You can query your logs with the help of full-text-based search box.
- Log-ingestor-fe can work for both single-field queries and multiple-field queries. Try the following example:-
- Single-field query.
```
Find all logs with the level set to "error".
``` 
- Multiple-field query.
```
Find all logs with the level set to "error" and parentResourceId is "server-0987". 
```
##### Note:- ``` In case of multiple-field query you have to follow a standard where in the search you need to pass the fieldName and then its value in the double quote and then you need to pass next keyword and its value ``` 
## Installation
- Simply clone the [repository](https://github.com/sandeepvaid/log-ingestor-fe) and I am using node version [18].
- Install react with the following command .
```
npx create-react-app my-app
```

- Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install Log-Ingestor-fe dependencies.  

```bash
npm install 
```

## Usage

```javascript
npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
