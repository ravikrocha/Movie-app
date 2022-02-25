const movieForm = document.querySelector('form')
const search = document.querySelector('input')
const messageTitle = document.querySelector('#messageTitle')
const messageYear = document.querySelector('#messageYear')
const messageRuntime = document.querySelector('#messageRuntime')
const messageActors = document.querySelector('#messageActors')
const messageAwards = document.querySelector('#messageAwards')
const messageDirector = document.querySelector('#messageDirector')
const messagePlot = document.querySelector('#messagePlot')
const messageRatings = document.querySelector('#messageRatings')





movieForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const movie = search.value
    messageTitle.textContent = "loading..."
    messageYear.textContent = ''
    messageYear.textContent = ''
    messageRuntime.textContent = ''
    messageActors.textContent = ''
    messageAwards.textContent = ''
    messageDirector.textContent = ''
    messagePlot.textContent = ''
    messageRatings.textContent = '' 

    fetch("https://www.omdbapi.com/?t=" + movie + "&apikey=b0b2852e").then((response)=>{
    response.json().then((data)=>{
        if(data.Error){
            messageTitle.textContent = data.Error
            
        }
        else{
            messageTitle.textContent = "Title: " + data.Title
            messageYear.textContent = "Year: " + data.Year
            messageRuntime.textContent = "Runtime: " + data.Runtime
            messageActors.textContent = "Actors: " + data.Actors
            messageAwards.textContent = "Awards: " + data.Awards
            messageDirector.textContent = "Director: " + data.Director
            messagePlot.textContent = "Plot: " + data.Plot
            messageRatings.textContent = "Ratings: " + data.Ratings[1].Source + ": " + data.Ratings[1].Value
        }
       




        
    })
})
    console.log(movie)
})