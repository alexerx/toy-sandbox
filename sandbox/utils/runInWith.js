// hack with in strict mode
export function runInWith(code, context) {
  const finalCode = `with(context) {
    ${code}
  }`;
  const hackWith = new Function("context", finalCode);
  return hackWith(context);
}
