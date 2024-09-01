function anagrama(word1, word2) {
  if (word1 === word2) return false;
  return (
    word1.toLowerCase().split("").sort().toString() ===
    word2.toLowerCase().split("").sort().toString()
  );
}

console.log(anagrama("perro", "erorp"));
