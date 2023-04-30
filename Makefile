run: clean zip deploy

clean:
	rm -rf layers/log.zip

install-layer-dependencies:
	npm i -D --prefix ./layers/log/nodejs

zip: install-layer-dependencies
	cd layers/log && zip -r ../log.zip .

deploy:
	sls deploy --verbose