rm -rf ./src/pages/api/data/*.json && touch ./src/pages/api/data/response.json

./node_modules/.bin/js-yaml src/pages/api/data/response.yml >> ./src/pages/api/data/response.json
