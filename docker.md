docker exec -it doc-finder-elasticsearch-1 /bin/bash

bin/elasticsearch-plugin install analysis-langdetect

bin/elasticsearch restart

bin/elasticsearch-plugin list