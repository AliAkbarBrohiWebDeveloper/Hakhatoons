var form = document.getElementById('resume-form');
var resumedisplayelement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n<h2><b>Resume</b></h2>\n<h3> Personal information</h3>\n<p> <b>Name:</b>".concat(name, "</p>\n<p> <b>Email:</b>").concat(email, "</p>\n<p> <b>Phone Number:</b>").concat(phone, "</p>\n<h3> Education</h3><p>").concat(education, "</p>\n<h3> Experience</h3><p>").concat(experience, "</p>\n<h3> skills</h3><p>").concat(skills, "</p>\n\n\n");
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is mising');
    }
});
