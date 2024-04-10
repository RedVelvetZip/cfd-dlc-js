install:
  yarn

build:
  yarn cmake_all

prebuild:
  yarn prebuild_all

test:
  yarn test

lint:
  yarn format_all

convert:
  yarn convert_json

clean:
  yarn cmake_clean
