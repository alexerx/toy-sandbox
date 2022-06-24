const context = {
  fn: console.log,
  foo: 'foo',
};

const code = `
  ctx.foo = 'bar';
  ctx.fn(ctx.foo);
`;

function runInSandbox(code, ctx) {
  eval(code);
}

runInSandbox(code, context);

export {};