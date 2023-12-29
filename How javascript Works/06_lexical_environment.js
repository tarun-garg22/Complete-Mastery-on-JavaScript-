// lexical environment,scope chain

const lastName = "Garg";

function printName() {
  const firstName = "Tarun";
  function myfunc() {
    console.log(firstName);
    console.log(lastName);
  }
  return myfunc();
}
printName();

