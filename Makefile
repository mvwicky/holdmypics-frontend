SHELL:=bash
.ONESHELL:
.SHELLFLAGS:=-eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

FIND=gfind
EXCLUDE_PATHS=build node_modules web_modules
NOT_PATHS=$(foreach path,$(EXCLUDE_PATHS),-not -path '*/$(path)/*')
FIND_ARGS=-type f $(NOT_PATHS) -not -name '.*'
INPUT_FILES=$(shell $(FIND) site $(FIND_ARGS))

CACHE_DIR=.cache
BUILT_FILE=$(CACHE_DIR)/built-site

.PHONY: build

build: $(BUILT_FILE)

$(BUILT_FILE): $(CACHE_DIR) $(INPUT_FILES)
	yarn build
	touch $@

$(CACHE_DIR):
	mkdir $(CACHE_DIR)
