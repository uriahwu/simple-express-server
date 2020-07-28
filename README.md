# simple-express-server

## How to run this

### 1. clone this repo

```bash
git clone https://github.com/uriahwu/simple-express-server.git
cd simple-express-server
```

### 2. install dependencies

```bash
npm install
```

### 3. run the server on port 3000

```bash
node server.js
```

### 4. check server is running

```bash
curl 127.0.0.1:3000
```

## How to run docker 

### 1. run docker build 

```bash
docker build . -t simple-express-server
```

### 2. run images 

```bash
docker run -id -p local-port:3000 simple-express-server
```
