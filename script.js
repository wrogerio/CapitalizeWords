const btChange = document.querySelector("#btChange");
const originalText = document.querySelector("#originalText");
const result = document.querySelector("#result");

btChange.addEventListener("click", function () {
  let value = originalText.value.toLowerCase();
  console.log(originalText);

  // trim value
  value = value.trim();

  if (value.length > 0) {
    // transform each word to first letter in upper case
    let phrases = value.split("\n");

    // replace all ,;.!?:`'" with a space
    phrases = phrases.map(function (phrase) {
      return phrase.replace(/[,;.!?:`'"]/g, " ");
    });

    // transform each word to first letter in upper case
    phrases = phrases.map(function (phrase) {
      let words = phrase.split(" ");
      words = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return words.join(" ");
    });

    debugger;

    // if the word starts with a number, add a space before it
    phrases = phrases.map(function (phrase) {
      let words = phrase.split(" ");
      words = words.map(function (word) {
        if (
          word.charAt(0) === "1" ||
          word.charAt(0) === "2" ||
          word.charAt(0) === "3" ||
          word.charAt(0) === "4" ||
          word.charAt(0) === "5" ||
          word.charAt(0) === "6" ||
          word.charAt(0) === "7" ||
          word.charAt(0) === "8" ||
          word.charAt(0) === "9"
        ) {
          return "<br><br>" + word + ")";
        } else {
          return word;
        }
      });
      return words.join(" ");
    });

    result.innerHTML = phrases.join(" ");
  }
});
