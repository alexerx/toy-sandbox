import { runInWith } from '../utils/runInWith';

const context = {
  fn: console.log,
  foo: "foo",
};

const code = `
  foo = 'bar';
  fn(foo);
`;

function runInSandbox(code, context) {
  runInWith(code, context);
}

runInSandbox(code, context);
