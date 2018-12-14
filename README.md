# datatables-express-restify-mongoose-boilerplate
It is a simple boilerplate with these two wonderfull libraries [DataTables](https://github.com/DataTables/DataTables), [CellEdit](https://github.com/ejbeaty/CellEdit) a plugin for DataTables and [express-restify-mongoose](https://github.com/florianholzapfel/express-restify-mongoose).

Idea is to visualize and edit data in browser thats stored in Mongo with rest API.

## Usage

After `npm install` run the following to get the app running on http://localhost:8080/

```bash
npm run start
```


The above command will run following script before starting express app `node server.js`
  - Generate sample data `npm run init-sample-data`
  - Import the sample data in local Mongo db collection **user** of db named **test** `npm run init-db`(require Mongo running on localhost)


## License
This project is licensed under the terms of the MIT license.
