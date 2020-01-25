spec_url = https://api.hyperone.com/openapi.json

.PHONY: build test

config-help:
	docker run openapitools/openapi-generator-cli config-help -g javascript

build:
	docker run --user $$(id -u):$$(id -g) --network host --rm \
	-v $$(pwd)/swagger.json:/openapi.json -v $$(pwd):/out \
	openapitools/openapi-generator-cli \
	generate \
	--git-user-id "hyperonecom" \
	--git-repo-id "h1-client-js" \
	-g javascript \
	-i $(spec_url) \
	-c /out/config.yml \
	-o /out

test:
	docker build -t sdk-javascript .
	docker run sdk-javascript