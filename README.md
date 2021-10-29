# Fleet Debugger Tool

A debugging tool for use with the stateful Last Mile Fleet Solutions and On Demaind Rides and
Deliveries solutions.

Currently setup to demo use of JSJS sdk and a angular hello world app

## Disclaimer

This is not an officially supported Google product

## Getting Started

### Dependencies

Download & install node
Download & install gcloud

### Setup authentication
```
gcloud config set project <your project id>
gcloud auth login
gcloud auth application-default login
```

### Populate ./node_modules directory

```
npm install
```

### Download & build forked @angular/google-maps

```
git clone git@github.com:greghutch/components.git
cd components
yarn build
```


Depending on locations you might have to update the package.json in this
repro to find the built angular components from above


## Examples

View current data from my-vehicle-id via journey sharing SDK

```
dune-buggy.js live --apikey <your api key> --trip=my-trip-id
```

