## Setup
```
docker-compose up
```

## Search documents
```
curl -XGET 'http://localhost:9200/documents/_mapping'
```

```
curl -XGET 'http://localhost:9200/documents/_search?q=team'
```

Search and return title fields
```
curl -XGET 'http://localhost:9200/documents/_search?q=team&_source=tit‌​le'
```