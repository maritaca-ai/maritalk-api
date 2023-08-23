.PHONY: build upload

build:
	rm -rf dist/ maritalk.egg-info/
	python3 -m pip install build
	python3 -m build .

upload:
	python3 -m pip install twine
	python3 -m twine upload dist/maritalk-*
	rm -rf dist/ maritalk.egg-info/