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
    const newYearDiv = document.createElement('div')
    const newScoreDiv = document.createElement('div')
    const eventsDiv = document.createElement('div')
    const newBtnTrailer = document.createElement('button')
    const newBtnMoreInfo = document.createElement('button')
    const newBtnBookmark = document.createElement('button')


    newMoviesTitle.textContent = `${film.title}`
    newYearP.textContent = `${film.year}`
    newScore.textContent = `${film.score}`
    newBtnTrailer.textContent = `Watch Trailer`
    newBtnMoreInfo.textContent = `More Info`
    newBtnBookmark.textContent = `Bookmark`

    newImg.setAttribute('class', 'w-[500px]')
    newImg.setAttribute('src', `${film.poster}`)
    eventsDiv.setAttribute('class', 'flex items-center justify-between')
    newDiv.setAttribute('class', 'p-3')

    newUl.appendChild(newLi)
    newLi.append(newImg, newDiv)
    newDiv.append(newMoviesTitle, newYearDiv, newScoreDiv, eventsDiv)
    newYearDiv.append(newYearP)
    newScoreDiv.append(newScore)
    eventsDiv.append(newBtnTrailer, newBtnMoreInfo, newBtnBookmark)

}

newTotalP.setAttribute('class', 'mb-[5px]')
newPText.setAttribute('class', 'bg-[#D5E8EE] mb-[10px] text-[#59767A] border border-[#59767A] p-2 rounded-md')


