import once from "./connections/once.js";

once.connect().then((connections) => {
  console.log(connections);
});
