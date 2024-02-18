const elTitle = document.querySelector(".title")
const elDivOne = document.querySelector(".firstdiv")
const elDivTwo = document.querySelector(".seconddiv")


const newInfoP = document.createElement('p')
const newTotalP = document.createElement('p')
const newPText = document.createElement('p')
const newUl = document.createElement('ul')


elTitle.textContent = 'Movies Catalog'
newInfoP.textContent = 'Bookmark Movies'
newTotalP.textContent = `Search results: ${films.length}`
newPText.textContent = 'Use the form on the left to search for a movie'


elDivOne.append(newInfoP)
elDivTwo.append(newTotalP, newPText, newUl)
newUl.setAttribute('class', 'flex gap-4')


for(let film of films){
    const newLi = document.createElement('li')
    const newImg = document.createElement('img')
    const newDiv = document.createElement('div') 
    const newMoviesTitle = document.createElement('p') 
    const newYearP = document.createElement('p')
    const newScore = document.createElement('p')

    newMoviesTitle.textContent = `${film.title}`
    newYearP.textContent = `${film.year}`
    newScore.textContent = `${film.score}`

    newImg.setAttribute('class', 'w-[450px]')
    newImg.setAttribute('src', `${film.poster}`)

    newUl.appendChild(newLi)
    newLi.append(newImg, newMoviesTitle, newDiv)
    newDiv.append(newYearP, newScore)
}

newTotalP.setAttribute('class', 'mb-[5px]')
newPText.setAttribute('class', 'bg-[#D5E8EE] mb-[10px] text-[#59767A] border border-[#59767A] p-2 rounded-md')


