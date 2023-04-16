<h1 align="center">👨‍💼💬  Store manager  💼</h1>

<div align='center'>
<img width='300' alt="store-img" src="./store.jpg">
</div>

## Description
<p>building</p>

## 🛠️ Instructions
### Notes
>This project run in port 3000<br/>
>You can run this API with Docker or Node.JS, you choose!

<br>

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

[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en
[Git]: https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com
[NPM]: https://img.shields.io/badge/NPM-CC3534?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com
[DOCKER]: https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white
[DOCKER-url]: https://www.docker.com
[EXPRESS]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black
[EXPRESS-url]: https://expressjs.com
