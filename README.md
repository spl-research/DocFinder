# DocFinder
Example project for search file base on file content using FSCrawler and Elasticsearch

<!-- ![Example Image](./demo.png) -->

## Setup
Init projects 
```
docker-compose up
```

## Quite Start
Start node server
```
npm start
```

Search files
```
curl -XGET 'http://localhost:3000/search?q=food'
```
