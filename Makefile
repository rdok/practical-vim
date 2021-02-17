CURRENT_DIR = $(shell pwd)

start: node_modules
	docker-compose run --service-ports --rm node yarn start

node_modules:
	docker-compose run --rm node yarn

shell:
	docker-compose run --rm node bash

test:
	docker run --env CI=true --rm --volume "${CURRENT_DIR}":/app --workdir /app \
		node:15-alpine3.10 sh -c 'yarn && yarn test'

build:
	docker run --env CI=true --rm --volume "${CURRENT_DIR}":/app --workdir /app \
		--user "$(shell id -u):$(shell id -g)" node:15-alpine3.10 sh -c \
		'yarn && yarn build'
