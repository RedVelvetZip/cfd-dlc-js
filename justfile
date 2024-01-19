install:
  yarn

build:
  yarn cmake_all

test:
  yarn test

lint:
  yarn format_all

convert:
  yarn convert_json
