# DocFinder
Example project for search file base on file name or content. This version is only work for txt file format. 

<!-- ![Example Image](./demo.png) -->

## Setup
Install Elasticsearch with Docker  
```
docker-compose up
```

## Quite Start
create file index using the following command
```
npm start
```

```
curl -XGET 'http://localhost:3000/search?q=food'
```
