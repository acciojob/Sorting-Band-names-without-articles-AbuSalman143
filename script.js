//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Aerosmith'];

// Function to remove articles from the band name
function removeArticles(bandName) {
  const articles = ['a', 'an', 'the'];
  const words = bandName.split(' ');

  // Filter out articles from the words array
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

  // Join the remaining words back into a string
  const modifiedBandName = filteredWords.join(' ');
  return modifiedBandName;
}

// Sort the band names in lexicographic order, excluding articles
bandNames.sort((a, b) => {
  const modifiedA = removeArticles(a);
  const modifiedB = removeArticles(b);
  return modifiedA.localeCompare(modifiedB);
});

// Create an unordered list element
const ul = document.createElement('ul');
ul.id = 'band';

// Add band names as list items to the unordered list
bandNames.forEach(bandName => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});

// Append the unordered list to the document body
document.body.appendChild(ul);

