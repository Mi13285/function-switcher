function switcher(x) {
  return x
    .split("")
    .map(function (e) {
      if (e == "b") {
        return "a";
      }
      if (e == "a") {
        return "b";
      }
      if (e == "c") {
        return "c";
      }
    })
    .join("");
}
console.log(switcheroo("abc"));
