rm -rf ./public/data/* && touch ./public/data/response.json

./node_modules/.bin/js-yaml src/pages/api/data/response.yml >> ./public/data/response.json
