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
    var resumeHtml = "\n<h2><b> Editable Resume</b></h2>\n<h3> Personal information</h3>\n<p> <b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p> <b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p> <b>Phone Number:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n<h3> Education</h3><p <span contenteditable=\"true\">").concat(education, "</span></p>\n<h3> Experience</h3><p <span contenteditable=\"true\">").concat(experience, "</span></p>\n<h3> skills</h3><p <span contenteditable=\"true\">").concat(skills, "</span></p>\n\n\n");
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is mising');
    }
});
