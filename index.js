function goToAboutMe() {
    document.getElementById("section_aboutMe").scrollIntoView({ behavior: "smooth" });
}
function goToProjects() {
    document.getElementById("section_projects").scrollIntoView({ behavior: "smooth" });
}

function goToInstagram() {
    window.open("https://www.instagram.com/", "_blank"); // link it to your account
}
function goToWhatsapp(){
    window.open("https://wa.me/", "_blank"); // link it to your account
}
function goToEmail() {
    window.location.href = "mailto:dummy@gmail.com"; // link it to your account
}
function goToLinkedin() {
    window.open("https://www.linkedin.com/in/","_blank"); // link it to your account
}

function showProjectDetail(element) {
    let detail = element.nextElementSibling;
    detail.style.display = (detail.style.display === "none" || detail.style.display === "") ? "block" : "none";

    element.style.color = (element.style.color === "gray") ? "blue" : "gray"; /*if you want to style the color of project title*/
}
