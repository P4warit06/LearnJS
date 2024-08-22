function detailedType(value) {
  if (null === value) {
    return null;
  }
  if (value === undefined) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return "Array";
  }

  return typeof value;
}
console.log(detailedType("Hello world"));
console.log(detailedType(123));
console.log(detailedType(true));
console.log(detailedType({}));
console.log(detailedType([]));
console.log(detailedType(null));
console.log(detailedType(function () {}));
console.log(detailedType(undefined));
console.log(detailedType(Symbol()));


