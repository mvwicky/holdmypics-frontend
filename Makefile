SHELL:=bash
.ONESHELL:
.SHELLFLAGS:=-eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

FIND=gfind
FIND_ARGS=-type f -not -path '*/build/*' -not -path '*/node_modules/*' -not -path '*/web_modules/*' -not -name '.*'
INPUT_FILES=$(shell $(FIND) site $(FIND_ARGS))

CACHE_DIR=.cache
BUILT_FILE=$(CACHE_DIR)/built-site

build: $(BUILT_FILE)

$(BUILT_FILE): $(CACHE_DIR)
	yarn build
	touch $(BUILT_FILE)

$(CACHE_DIR):
	mkdir $(CACHE_DIR)
