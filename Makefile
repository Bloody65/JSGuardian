zip: lint
	cd addon; zip ../jsguardian.zip *

lint:
	jshint addon/*.js
	! grep browser addon/*.js
	python -m json.tool addon/manifest.json > /dev/null
	python -m json.tool addon/preset.json > /dev/null

