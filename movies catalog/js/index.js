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



elDivTwo.append(newTotalP, newPText, newUl)

newInfoP.setAttribute('class', 'font-bold text-[2rem]')
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
    const newCalendarI = document.createElement('i')
    const newStarI = document.createElement('i')


    newMoviesTitle.textContent = `${film.title}`
    newYearP.textContent = `${film.year}`
    newScore.textContent = `${film.score}`
    newBtnTrailer.textContent = `Watch Trailer`
    newBtnMoreInfo.textContent = `More Info`
    newBtnBookmark.textContent = `Bookmark`



    newBtnBookmark.addEventListener('click', (e) => {
        e.preventDefault(e)

        const newPTitle = document.createElement('p')
        const newLiDiv = document.createElement('div')
        const newBtnRemove = document.createElement('button')

        
        newPTitle.textContent = `${film.title}`
        newBtnRemove.textContent = `Remove`
        
        console.log(newPTitle);
        elDivOne.append(newInfoP, newLiDiv)
        newLiDiv.append(newPTitle, newBtnRemove)

        newLiDiv.setAttribute('class', 'border-2 px-[1rem] py-[1rem] rounded-md')
        newPTitle.setAttribute('class', 'font-medium text-[1.3rem] mb-[1rem]')
        newBtnRemove.setAttribute('class', 'bg-[#dc2626] p-2 text-[white] text-[1.1rem] rounded-md')
    })



    newImg.setAttribute('class', 'w-[500px] rounded-md')
    newImg.setAttribute('src', `${film.poster}`)
    newMoviesTitle.setAttribute('class', 'my-[.5rem] font-bold text-[1.5rem]')
    newLi.setAttribute('class', 'border rounded-md border-[#52525b]')
    eventsDiv.setAttribute('class', 'flex items-center justify-between')
    newDiv.setAttribute('class', 'p-3')
    newBtnTrailer.setAttribute('class', 'p-2 border-2 hover:text-[white] hover:bg-[#0ea5e9] duration-200 font-medium text-[#0ea5e9] border-[#0ea5e9] rounded-md')
    newBtnMoreInfo.setAttribute('class', 'p-2 border-2 hover:text-[white] hover:bg-[#0284c7] duration-200 font-medium text-[#0284c7] border-[#0284c7] rounded-md')
    newBtnBookmark.setAttribute('class', 'p-2 border-2 hover:text-[white] hover:bg-[#22c55e] duration-200 font-medium text-[#22c55e] border-[#22c55e] rounded-md')
    newCalendarI.setAttribute('class', 'bx bxs-calendar')
    newYearDiv.setAttribute('class', 'flex items-center')
    newStarI.setAttribute('class', 'bx bxs-star text-[#fde047]')
    newScoreDiv.setAttribute('class', 'flex items-center my-[.5rem]')

    newUl.appendChild(newLi)
    newLi.append(newImg, newDiv)
    newDiv.append(newMoviesTitle, newYearDiv, newScoreDiv, eventsDiv)
    newYearDiv.append(newCalendarI, newYearP)
    newScoreDiv.append(newStarI, newScore)
    eventsDiv.append(newBtnTrailer, newBtnMoreInfo, newBtnBookmark)

}


newTotalP.setAttribute('class', 'mb-[5px]')
newPText.setAttribute('class', 'bg-[#D5E8EE] mb-[10px] text-[#59767A] border border-[#59767A] p-3 rounded-md')


