import { runInWith } from '../utils/runInWith';

const code = `
  window.foo = 'foo';
  console.log(foo);

  var bar = 'bar'; // 这里声明到windowProxy上，符合预期
  console.log(bar);
  // console.log(jack);

  this.lisa = 'lisa'; // 这里this实际上是真正的window，lisa被创建到window上
  console.log(lisa);

  console.log(realGlobalStr); // 可以访问到
  // console.log(window.foo);
`;

const whiteList = ['foo', 'fn'];

const windowProxy = new Proxy(window, {
  has: (target, prop) => {
    return target.hasOwnProperty(prop) || window.hasOwnProperty(prop);
  },
  get: (target, prop) => {
    return target[prop] || window[prop];
  },
  set: (target, prop, value) => {
    target[prop] = value;
    return true;
  }
});

function runInSandbox(code, context) {
  window.realGlobalStr = 'realGlobalStr';
  runInWith(code, context);

  console.log('window.bar:', window.bar); // undefined;
  console.log('window.lisa:', window.lisa) // lisa
}

runInSandbox(code, windowProxy);