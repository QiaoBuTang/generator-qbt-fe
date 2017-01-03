# generator-qbt-fe

## Install
```
npm install -g yo
npm install -g generator-qbt-fe
yo qbt-fe <appName>

cd <appName>
npm install
```



## Dev (client-side rendering)
```
npm start -s (-s is optional，will neglect unimportant message)
open http://localhost:3002
```

## Production (server-side rendering)
```
npm run server

open http://localhost:20002
```
it equals to
```
npm run build
npm run production

open http://localhost:20002
```