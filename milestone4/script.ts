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
<h2><b> Editable Resume</b></h2>
<h3> Personal information</h3>
<p> <b>Name:</b> <span contenteditable="true">${name}</span></p>
<p> <b>Email:</b><span contenteditable="true">${email}</span></p>
<p> <b>Phone Number:</b><span contenteditable="true"> ${phone}</span></p>
<h3> Education</h3><p <span contenteditable="true">${education}</span></p>
<h3> Experience</h3><p <span contenteditable="true">${experience}</span></p>
<h3> skills</h3><p <span contenteditable="true">${skills}</span></p>


`
if (resumedisplayelement){
    resumedisplayelement.innerHTML=resumeHtml
}else{
    console.error('The resume display element is mising')
}


})