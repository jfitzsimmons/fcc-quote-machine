var currentQuote = '',
  currentAuthor = '';

function openURL(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuotes() {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(response => {
    return response.json();
  }).then(data => {
    var nquote = document.getElementById('new-quote');
    nquote.addEventListener('click', (event) => getQuote(data));
    getQuote(data);
  }).catch(err => {});
}
getQuotes();

function getRandomQuote(data) {
  return data.quotes[Math.floor(Math.random() * data.quotes.length)];
}

export function getQuote(data) {
  let randomQuote = getRandomQuote(data);
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  var text = document.getElementById('text');
  var author = document.getElementById('author');
  text.innerHTML = '';
  author.innerHTML = '';
  text.innerHTML += currentQuote;
  author.innerHTML += currentAuthor;

  document.getElementById("tweet-quote").addEventListener('click', function(e) {
    e.preventDefault()
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  });
}
