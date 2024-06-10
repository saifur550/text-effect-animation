
const sectionContent = document.querySelector('section')
const title = ['YouTuber', 'Web Developer', 'iGraphic Designer'];

let titleIndex = 0;
let characterOfIndex = 0

function showTitle (){
    sectionContent.innerHTML = 
    `<span> I Am ${title[titleIndex].slice(0,1)=="i" ? "an":"a"}  ${title[titleIndex].slice(0,characterOfIndex)} </span>`

    if(characterOfIndex < title[titleIndex].length){
        characterOfIndex++
    }else{
        titleIndex++
        characterOfIndex = 0
    }

    if(titleIndex === title.length){
        titleIndex =0
    }


  
    setTimeout(showTitle, 200);
}

showTitle()




