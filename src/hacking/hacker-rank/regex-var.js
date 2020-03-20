function regexVar1() {
    /*
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    return /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/
}

function regexVarInteger() {
    //It must match ALL occurrences of numbers in a string.
    return /\d+/g;
}

const main = () => {
  let s = ["Mr.", "Mrs.", "Ms.", "Dr.", "Er.", "Mr.asduiasd", "Er.Dr."];
  s.forEach(item => {
    console.log(`${item} - ${!!item.match(regexVar1())}`);
  });

  console.log();

  s = '102, 1948948 and 1.3 and 4.5';
  const r = s.match(regexVarInteger());
  for (const e of r) {
      console.log(e);
  }
}

main();