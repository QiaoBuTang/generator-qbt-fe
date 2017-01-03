import { CV_SERVER } from '../../config.json';
import isEmpty from 'lodash/isEmpty';
import {isClient} from './utils';

export class RedirectException {
  constructor(location, options) {
    this.location = location;
    this.options = options;
  }
}

// status code is ignored when redirect from client side
export function redirect(url, options) {
  if (isClient()) {
    const {back} = options || {};
    window.location.href = back ? appendParam(url, {return: (typeof back === 'string') ? back : window.location.href}) : url;
  }
  else {
    throw new RedirectException(url, options);
  }
}

export function appendParam(url, params) {
  const pairs = [];
  for (let name in params) {
    pairs.push(`${name}=${encodeURIComponent(params[name])}`);
  }

  if (isEmpty(pairs)) {
    return url;
  }

  let result = url;
  if (!url.endsWith('?')) {
    result += url.includes('?') ? '&' : '?';
  }
  result += pairs.join('&');
  return result;
}

export function login() {
  redirect(`${CV_SERVER}/account/login`, {back: true});
}
