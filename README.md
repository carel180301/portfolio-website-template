# portfolio-website-template

![website template tutorial (1)](https://github.com/user-attachments/assets/863833b2-c1d8-4238-9186-0f1fcc058790) <br>
add images to the images folder <br>

## HTML 

```html
  <div class="px-5 py-5 text-center bg-dark min-vh-100 d-flex flex-column justify-content-center" 
    style="background-image: url('images/'); background-size: cover; background-position: center; background-repeat: no-repeat;"> 
    <!--add background image (only if you want)-->
```
if you want to add background image to the hero section, you can add image file inside the background-image: url('images/[image file]'); <br>

```html
<img class="d-block mx-auto mb-4 responsive-img" src="images/dummy image.jpg" alt="logo" style="max-height: 300px;"> <!--add logo image-->
```
add your logo inside src="images/[image file]"

```html
    <h1 class="display-5 fw-bold text-body-emphasis text-white" style="color: white !important;">- [Occupation] -</h1><br>
    <!--add your occupation-->
```
add your occupation <br>

```html
  <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-sm-10">
          <p class="lead mb-4 text-white" style="text-align: justify; text-justify: inter-word;">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nobis animi vero qui officia reprehenderit tenetur obcaecati optio tempore quae culpa nesciunt minima ducimus, sequi aliquid in ab voluptate sapiente!
          </p><br> <!--add the description-->
```
change the "lorem ipsum..." to be description about yourself <br>

```html
 <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="images/dummy image.jpg" alt="Logo" class="logo-img">
      </a> <!--add logo image-->
```
add your logo inside the src="images/[image file]" <br>

```html
<h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus incidunt ad commodi velit assumenda totam dolorem quae omnis eaque! Harum, rem perspiciatis cupiditate quasi eveniet repudiandae esse maxime sequi!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima soluta reiciendis voluptatem quasi voluptatum odio. Alias, consequatur amet maiores commodi tempore soluta earum, adipisci quia sunt voluptatibus laborum dolor ut?</p>
        <a href="#" target="_blank" download><button class="btn btn-success w-50">My CV</button></a> <!-- add your cv file -->
```
change the 'lorem ipsum' to be description about yourself, and change the # to be your cv file <br>

```html
<h3 onclick="showProjectDetail(this)" class="text-center mb-4" style="color: #0000EE; text-decoration: underline; cursor: pointer; text-decoration-color: #0000EE;">
            1. Project 1
        </h3> <!-- add project name -->
```
change the '1.project 1' to your project name. <br>

```html
    <div style="display: none;">
          <img src="images/dummy image.jpg" alt="project image" class="w-100"> <!-- add image -->
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quis distinctio odit praesentium tempora eum consequuntur 
            veritatis odio illum quia, laboriosam, est aliquid optio! Totam omnis unde asperiores explicabo?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos voluptates? 
            Excepturi nesciunt, sunt possimus vero nihil, pariatur, eos architecto iste sequi eum assumenda error doloribus nulla facilis tempora quam.
          </p><!-- add desription -->
```
add your project image inside src="images/[image file]" and change the 'lorem ipsum..' to be your project description <br>

```html
<a href="#" target="_blank"><button class="btn btn-primary w-50 mb-5">See the project</button></a> <!--add link to the project -->
```
change the # to be an url to your project
