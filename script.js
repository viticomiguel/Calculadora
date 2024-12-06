document.getElementById('calculateButton').addEventListener('click', function () {
    const word = document.getElementById('wordInput').value;
    const result = word.length;
    document.getElementById('result').textContent = `The length of the word is: ${result}`;
});
