CURRENT_DIR = $(shell pwd)

start: node_modules
	docker-compose run --service-ports --rm node yarn start

node_modules:
	docker-compose run --rm node yarn

shell:
	docker-compose run --rm node bash

test:
	docker run --env CI=true --rm --volume "${CURRENT_DIR}":/app --workdir /app \
		node:15-alpine3.10 sh -c 'yarn --frozen-lockfile && yarn test'

.PHONY: build
build:
	docker run \
		--env "PUBLIC_URL=$${WEBSITE_URL}" --env CI=true \
		--rm --volume "${CURRENT_DIR}":/app --workdir /app \
		 node:15-alpine3.10 sh -c \
		'yarn --frozen-lockfile && yarn build'
