
const result=document.getElementById('development-skills')as HTMLButtonElement
const skills=document.getElementById('Skills') as HTMLElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
result.addEventListener('click',()=>{

    if (skills.style.display==='none'|| skills.style.display===''){
        skills.style.display='block'
    }else{
        skills.style.display='none'
    }
}

)












