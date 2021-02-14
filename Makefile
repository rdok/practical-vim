start: node_modules
	docker-compose run --service-ports --rm node yarn start

node_modules:
	docker-compose run --rm node yarn

shell:
	docker-compose run --rm node bash
