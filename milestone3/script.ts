const form=document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayelement=document.getElementById('resume-display') as HTMLDivElement
form.addEventListener('submit',(event:Event)=>{

    event.preventDefault();

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('Education') as HTMLInputElement).value
    const experience=(document.getElementById('Experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
    

const resumeHtml=`
<h2><b>Resume</b></h2>
<h3> Personal information</h3>
<p> <b>Name:</b>${name}</p>
<p> <b>Email:</b>${email}</p>
<p> <b>Phone Number:</b>${phone}</p>
<h3> Education</h3><p>${education}</p>
<h3> Experience</h3><p>${experience}</p>
<h3> skills</h3><p>${skills}</p>


`
if (resumedisplayelement){
    resumedisplayelement.innerHTML=resumeHtml
}else{
    console.error('The resume display element is mising')
}


})