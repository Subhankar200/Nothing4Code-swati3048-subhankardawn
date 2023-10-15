const getQuotes = async()=> {
    try {
      const res = await fetch('https://type.fit/api/quotes');
      const data = await res.json();
      const index = Math.floor(Math.random() * data.length);
      const quote = data[index].text;
      const myQuotes= document.querySelector("#myquotes");
      myQuotes.textContent = quote;
    } catch (error) {

    }
  }
  window.addEventListener('load', () => {
    getQuotes();
});