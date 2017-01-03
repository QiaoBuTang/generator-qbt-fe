# 乔布简历管理后台

## How to use

```
git clone git@github.com:QiaoBuTang/admin.git
cd admin
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

## F.A.Q
## How to fetch data on the server side?

Adding a `onEnter` function to a component, if you want to fetch another data after fetch the first, you should use `Promise`

```
@action
static onEnter({states, query, params}) {
    return Promise.all([
      menuActions.changeMenuTitle(states, 'serverTitle'),
      studentActions.fetchName(states),
      studentActions.fetchName2(states)
    ]).then(values => {
      //do something
    });
}
```

## How to redirect on the server side?

In `src/helpers/location.js`, there is a `redirect` function, you can just import it and use.
The `catchErr` in `src/serverRender.js` will catch the redirect command and redirect as you wish.
It works on both server and client side.

```
import {redirect} from './helpers/location';

@action
static onEnter({states, query, params}) {
    redirect('http://www.xxx.com');
}
```