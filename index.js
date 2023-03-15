const todo = document.querySelector('#todos .todo');

const newImg = document.createElement('img');
newImg.src = "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQy5h8sK_9V2XDbgnLA34L3J51rxVh-MaZVaKSWU3Cf7yJ7eg2TDQ-74AQeUgGwPNHEdP5rgMX1BWz0r14";
newImg.style.width = "300px";

document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = " Bret Fisher video! Click Me";
newLink.href = "https://www.youtube.com/watch?v=4CzG4Uqd9jM";

const firstP = document.querySelector('p');
firstP.appendChild(newLink);