<h1>Book Sleeper, a poetry blog</h1>
<p>A full-stack MERN blog website hosted on an AWS EC2 instance.</p>
<p>Update (October, 2024): I have decided to undeploy this project since my AWS account's free trial has ended and the server costs are too expensive for me as a student.</p>

<h5>Video Walkthrough:</h5>


https://github.com/user-attachments/assets/e0c3ecfa-01d1-4df5-8476-8bfc3f0dbc0b



<h5>Technologies:</h5>
<p>HTML, CSS, JavaScript, React, MongoDB, AWS EC2, SendInBlue</p>

<h5>Features:</h5>
<p>
- Admin Authentication using JWT. Protected routes in backend
<br>- Management System to handle post creation, modification, and deletion
<br>- Functional contact form utilizing Nodemailer to contact the site owner via an SMTP
<br>- Used React Context to allow global states
<br>- Displays latest posts in the home page 
<br>- Different sorting options to view works list 
<br>- Different font and font size options to read separate works 
<br>- Supports screen sizes from 360px width to above
<p>

<h5>Screenshots:</h5>
<p>Home Page</p>
<img width="1280" alt="Screenshot 2024-08-12 at 00 24 24" src="https://github.com/user-attachments/assets/f7dcd1e1-1d7d-4e9c-9a8b-c34cc37b5917">
<p>All Works Page</p>
<img width="1280" alt="Screenshot 2024-08-12 at 00 24 42" src="https://github.com/user-attachments/assets/40e66701-8161-4ace-9a4d-9a0bd56a6959">
<p>Work Page</p>
<img width="1280" alt="Screenshot 2024-08-12 at 00 24 51" src="https://github.com/user-attachments/assets/a881f85d-d589-47e7-83f1-3583924aa175">
<p>Contact Page</p>
<img width="1280" alt="Screenshot 2024-08-12 at 00 25 02" src="https://github.com/user-attachments/assets/b4bc3dc7-1101-4f08-9247-2a5d3d3f903e">
<p>Admin Login Page</p>
<img width="1280" alt="Screenshot 2024-08-12 at 00 25 16" src="https://github.com/user-attachments/assets/020b2b76-c9ed-4ae1-a423-5e728d3fe82b">
<p>Content Manager Page</p>
<img width="1280" alt="Screenshot 2024-08-12 at 00 25 42" src="https://github.com/user-attachments/assets/679a9284-4197-4906-a990-13b3c44cd05a">

<h5>Server Implementation:</h5>
<p>I used a t2.nano instance with an Ubuntu OS.</p>
<img width="514" alt="Screenshot 2024-10-10 at 19 27 41" src="https://github.com/user-attachments/assets/086dce50-fc57-488f-809f-e5bc3ebbc6eb">

<p>I used NGINX to serve the files.</p>
<img width="539" alt="Screenshot 1" src="https://github.com/user-attachments/assets/543b380a-bebc-4a24-9f9a-cc8e97323c8b">

<p>I used PM2 to manage the processes.</p>
<img width="539" alt="Screenshot 3" src="https://github.com/user-attachments/assets/736b6a1c-73cc-4aac-af84-d2c12447b9fb">


<h5>Notes:</h5>
<p>This website was made to practice working with the MERN stack. I started this using CRA which is now deprecated. I have no concrete plans on moving this project yet, but if I do, I will be migrating it to Vite. 


