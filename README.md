<h1 align="center">🛍️  Store manager  📋</h1>

<div align='center'>
<img width='300' alt="store-img" src="./store.jpg">
</div>

## Description
<p>Store manager is a a RESTful API to manage a store, the API includes routes for retrieving, adding, updating, and deleting products and sales based on their IDs.</p>

## 💻 Tecnologies used
> [![JavaScript][JavaScript]][JavaScript-url]
[![MYSQL][MYSQL]][MYSQL-url]
[![Node.js][Node.js]][Node.js-url]
[![EXPRESS][EXPRESS]][EXPRESS-url]
[![DOCKER][DOCKER]][DOCKER-url]
[![Mocha][Mocha]][Mocha-url]
[![Chai][Chai]][Chai-url]

## 🛠️ Instructions

### Notes
>This project run in port 3000.<br/>
>You can run this API with Docker or Node, you choose!

### 📚 Requirements to run this project:
- Git.
- Node.js - v >= 16.0 (if you wanna run with Node).
- NPM - v >= 7.0 (if you wanna run with Node).
- Docker - (if you wanna run with Docker).
- Docker-Compose - (if you wanna run with Docker).


<details>
    <summary><strong>🐳 Run with Docker(Recommended) 🐳</strong></summary>
    
```bash
# Clone the repo
git clone git@github.com:caiobacode/api-store-manager.git

# Enter in repo
cd api-store-manager

# Run DockerCompose
docker-compose up -d
```
</details><br/>

<details>
    <summary><strong>🟢 Run with Node.JS ⬢</strong></summary>

```bash
# Clone the repo
git clone https://github.com/caiobacode/api-talker-manager.git

# Enter in repo
cd api-talker-manager

# Install dependencies
npm install
```
Now, you need to config your MySQL database
- First, define environment variables in your .env file;

```bash
# Create databse
npm run restore

# Start the application
npm start
```

</details><br/>

### <strong>🧪 Test the application</strong>

```bash
npm run test:mocha
```

## 🔎 Additional details

<br/>

<details>
    <summary><strong>🌐 API routes</strong></summary>

> <strong>Products Route</strong><br/>
- GET "/products" - Returns all products.<br/>
- GET "/products/:id" - Returns the product that has the id passed by the request.<br/>
- GET "/products/search" - Returns all products that have the term passed by the request in their names.<br/>
- POST "/products" - Register a product with the properties passed by the request.<br/>
- PUT "/products/:id" - Edit a product properties to new properties passed by the request.<br/>
- DELETE "/products/:id" - Delete the product that has the id passed by the request<br/>

> <strong>Sales Route</strong><br/>
- GET "/sales" - Returns all sales.<br/>
- GET "/sales/:id" - Returns the sale that has the id passed by the request.<br/>
- POST "/sales" - Register a sale with the properties passed by the request.<br/>
- PUT "/sales/:id" - Edit a sale properties to new properties passed by the request.<br/>
- DELETE "/sales/:id" - Delete the sale that has the id passed by the request
  </details><br/>

  <details>
    <summary><strong>✏️ What i learned</strong></summary>

+ Software architecture MSC (model-service-controller).
+ Hot to develop a CRUD API (POST, GET, PUT and DELETE);
+ Hot to develop APIS that make MySQL queries, readind and writing in a MySQL database.
+ How to develop unit tests to an API, with Mocha, Sinon and Chai.
  
  </details>


[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[JavaScript]: https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=node.js&logoColor=black
[JavaScript-url]: https://www.javascript.com

[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[MYSQL]: https://img.shields.io/badge/MySQL-00758f?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com

[Mocha]: https://img.shields.io/badge/MOCHA-6D4A31?style=for-the-badge&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org

[Chai]: https://img.shields.io/badge/chai-974942?style=for-the-badge&logo=chai&logoColor=white
[Chai-url]: https://www.chaijs.com

[DOCKER]: https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white
[DOCKER-url]: https://www.docker.com

[EXPRESS]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black
[EXPRESS-url]: https://expressjs.com
