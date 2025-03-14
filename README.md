# portfolio-website-template

## GET STARTED

### This is the step-by-step tutorial of how to use this template:

**1.** Right click on the folder <br>
![website template tutorial (3)](https://github.com/user-attachments/assets/5b5c9ce9-e56d-475d-973e-6393c894996e)<br>

**2.** click 'extract to...' <br>
![website template tutorial (4)](https://github.com/user-attachments/assets/07209c3f-d753-493f-b998-644ff0219527)<br>

**3.** left click the folder that has already been extracted <br>
![website template tutorial (5)](https://github.com/user-attachments/assets/510f4575-0127-43ed-80a1-60932640fb61)<br>

**4.** right click on the folder <br>
![website template tutorial (6)](https://github.com/user-attachments/assets/9f7991d1-3256-4270-a1ed-0a17fbadf48a)

**5.** click "open with code" (or other code editor that you have) <br>
![website template tutorial (8)](https://github.com/user-attachments/assets/156e14d3-4f12-4965-8114-e5c626832542)


**6.** Add image(s) to the images folder <br>
![website template tutorial (1)](https://github.com/user-attachments/assets/57638ce0-63ea-492f-9bdc-fadb317c2b7a)<br>

**7.** Edit the HTML <br>

**8.** Edit the CSS <br>

**9.** Edit the Javascript <br>
<hr>

## HTML 

```html
    <div class="px-5 py-5 text-center bg-dark min-vh-100 d-flex flex-column justify-content-center" 
    style="background-image: url('images/dummy background.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"> 
    <!--add background image (only if you want)-->
```
if you want to add background image to the hero section, you can add image file inside the background-image: url('images/[image file]'); <br><br>

```html
<img class="d-block mx-auto mb-4 responsive-img" src="images/dummy logo.png" alt="logo" style="max-height: 300px;"> <!--add logo image-->
```
add your logo inside src="images/[image file]" <br><br>

```html
     <h1 class="display-5 fw-bold text-body-emphasis text-white" style="color: white !important;">- Web Developer -</h1><br> <!--add your occupation-->
```
change the "- Web Developer - " to your occupation <br><br>

```html
  <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-sm-10">
          <p class="lead mb-4 text-white" style="text-align: justify; text-justify: inter-word;">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nobis animi vero qui officia reprehenderit tenetur obcaecati optio tempore quae culpa nesciunt minima ducimus, sequi aliquid in ab voluptate sapiente!
          </p><br> <!--add the description-->
```
change the "lorem ipsum..." to be the description about yourself <br><br>

```html
    <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="images/dummy logo.png" alt="Logo" class="logo-img">
      </a> <!--add logo image-->
```
add your logo inside the src="images/[image file]" <br><br>

```html
<h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus incidunt ad commodi velit assumenda totam dolorem quae omnis eaque! Harum, rem perspiciatis cupiditate quasi eveniet repudiandae esse maxime sequi!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima soluta reiciendis voluptatem quasi voluptatum odio. Alias, consequatur amet maiores commodi tempore soluta earum, adipisci quia sunt voluptatibus laborum dolor ut?</p>
        <a href="#" target="_blank" download><button class="btn btn-success w-50">My CV</button></a> <!-- add your cv file -->
```
change the 'lorem ipsum' to be description about yourself, and change the # to be your cv file <br><br>

```html
<h3 onclick="showProjectDetail(this)" class="text-center mb-4" style="color: #0000EE; text-decoration: underline; cursor: pointer; text-decoration-color: #0000EE;">
            1. Project 1
        </h3> <!-- add project name -->
```
change the '1.project 1' to your project name. <br><br>

```html
    <div style="display: none;">
          <img src="images/dummy project .png" alt="project image" class="w-100"> <!-- add image -->
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quis distinctio odit praesentium tempora eum consequuntur 
            veritatis odio illum quia, laboriosam, est aliquid optio! Totam omnis unde asperiores explicabo?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos voluptates? 
            Excepturi nesciunt, sunt possimus vero nihil, pariatur, eos architecto iste sequi eum assumenda error doloribus nulla facilis tempora quam.
          </p><!-- add desription -->

          <a href="#" target="_blank"><button class="btn btn-primary w-50 mb-5">See the project</button></a> <!--add link to the project -->
        </div>
```
add your project image inside src="images/[image file]" and change the 'lorem ipsum..' to be your project description <br><br>

```html
<a href="#" target="_blank"><button class="btn btn-primary w-50 mb-5">See the project</button></a> <!--add link to the project -->
```
change the # to be an url to your project <br><br>

```html
  <i class="bi bi-linkedin" style="cursor: pointer;" onclick="goToLinkedin()"></i>
  <i class="bi bi-instagram" style="cursor: pointer;" onclick="goToInstagram()"></i>
  <i class="bi bi-whatsapp" style="cursor: pointer;" onclick="goToWhatsapp()"></i>
  <i class="bi bi-envelope-at-fill" style="cursor: pointer;" onclick="goToEmail()"></i>
```
if you want to add more social media accounts to your contact, just go to https://icons.getbootstrap.com/ and then copy the html icon tag like above
<hr>

## CSS 
```css
.bi{ /*if you want to style the icons*/
    font-size: 2rem;
    color: white;
    margin: 0.5%;
}
```
if you want style the account icons, you can style it here <br><br>

```css
.bi:hover{ /*if you want to style the icons if being hovered*/
    color: #0d6efd;
}
```
and also you can style the account icons when the icons being hovered <br><br>

```css
.responsive-img { /*if you want to style the image on hero section*/
    width: 50%;
}
```
if you want to style the logo image on hero section, you can style it here <br><br>

```css
.logo-img { /*if you want to style the logo*/
    max-height: 50px;
    width: auto;
}
```
if you want to style the logo image inside the navbar (navigation bar), you can style it here <br><br>

```css
@media (max-width: 426px) { /*add more media queries (only if you want)*/
    .responsive-img {
        width: 75%;
    }
}
```
if you want to apply different styles based on the device's screen size, resolution, or other properties, you can use media query by using @media. for example =  
```css
@media (max-width: 426px) {
}
```
or 
```css
@media (min-width: 150px) and (max-width: 426px){
}
```
if you want to add min-width and max-width <br><hr> 

## Javascript

```javascript
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
```
add your url account to link it to your contact. you can also make your own function if you want to add more social media accounts.
**important note:** email is the only one that have to use window.location.href. other than that, just use window.open <br><br>

```javascript
function showProjectDetail(element) {
    let detail = element.nextElementSibling;
    detail.style.display = (detail.style.display === "none" || detail.style.display === "") ? "block" : "none";

    element.style.color = (element.style.color === "gray") ? "blue" : "gray"; /*if you want to style the color of project title*/
}
```
if you want to style the project title color, you can change the "gray" and "blue" value (the "blue" is the color of your project title and "gray" is the color of the project title when being hovered)
<br><hr>

## Additional Information:

if you want to add more icons for your contact, you can go to https://icons.getbootstrap.com/ and then copy the html icon tag like the example below:
```html
<i class="bi bi-facebook"></i>
```
<br>if you want to add more complicated css style, you can go to https://www.w3schools.com/css/ to learn more about css
