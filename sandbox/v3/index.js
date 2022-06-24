import { runInWith } from '../utils/runInWith';

const code = `
  window.foo = 'foo';

  // console.log(foo); // error
  console.log(window.foo);
`;

const sandboxContainer = {};

const windowProxy = new Proxy(window, {
  has: (target, prop) => {
    return true;
  },
  get: (target, prop) => {
    return sandboxContainer[prop] || window[prop];
  },
  set: (target, prop, value) => {
    sandboxContainer[prop] = value;
    return true;
  }
});

function runInSandbox(code, context) {
  const run = new Function('window', code);
  run(context);

  console.log('sandboxContainer', sandboxContainer, window.foo);
}

runInSandbox(code, windowProxy);