// event loop
const foot = () => new Promise(resovle => setTimeout(() => console.log(1), 500))
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

foot();
bar();
foo();
baz();

