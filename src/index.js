const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (e) =>{
      e.preventDefault();
      const fetchData = 'http://localhost:3000/movies/' + e.target.searchByID.value
      fetchRequest(fetchData);
      inputForm.reset()
  })
  
}

document.addEventListener('DOMContentLoaded', init);

function fetchRequest(fetchData){
    return fetch(fetchData)
    .then(response => response.json())
    .then(data => {
        updateMovieData(data.title, data.summary)
    })
}

function updateMovieData(movieTitle = 'Title',movieSummary = "Summary"){
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p')

    title.textContent = movieTitle
    summary.textContent = movieSummary
}