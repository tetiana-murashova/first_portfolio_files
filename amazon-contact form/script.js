
// menu click
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    navMenu.style.display = "flex";
});



// bookmarks
const yellow = document.querySelector('.bookmarks__b1');
const red = document.querySelector('.bookmarks__b2');
const blue = document.querySelector('.bookmarks__b3');

const header = document.querySelector('.page--main-banner__wrapper');
const main = document.querySelector('main');
const businessCard = document.querySelector('.contact-card__front');
const btnColor = document.querySelectorAll('.portfolio--view-detail-btn');
const imgBorder = document.querySelectorAll('.feedback-card__image');


const logoY = document.querySelector('.logo__yellow');
const logoR = document.querySelector('.logo__red');
const logoG = document.querySelector('.logo__green');



yellow.addEventListener('click', () => {
    header.style.background = 'rgba(255, 201, 25, .9)';
    main.style.backgroundColor = 'rgba(255, 201, 25, .9)';
    logoY.style.display = 'block';
    logoR.style.display = 'none';
    logoG.style.display = 'none';
    businessCard.style.background = 'linear-gradient(100deg, rgb(255,255,255) 40%, rgba(255, 201, 25, .9) 0 )';


    for (let i = 0; i < btnColor.length; i++) {
        btnColor[i].style.backgroundColor = 'rgba(255, 201, 25, .5)';
    }

    for (let j = 0; j < imgBorder.length; j++) {
        imgBorder[j].style.border = '.2rem solid rgba(255, 201, 25, .9)';
    }


});

red.addEventListener('click', () => {
    header.style.background = 'rgb(222,137,137)';
    main.style.backgroundColor = 'rgb(222,137,137)';
    logoY.style.display = 'none';
    logoR.style.display = 'block';
    logoG.style.display = 'none';
    businessCard.style.background = 'linear-gradient(100deg, rgb(255,255,255) 40%, rgb(222,137,137) 0 )';




    for (let i = 0; i < btnColor.length; i++) {
        btnColor[i].style.backgroundColor = 'rgba(222,137,137, .5)';
    }

    for (let j = 0; j < imgBorder.length; j++) {
        imgBorder[j].style.border = '.2rem solid rgb(222,137,137)';
    }
});

blue.addEventListener('click', () => {
    header.style.background = 'rgba(142, 201, 161, .9)';
    main.style.backgroundColor = 'rgba(142, 201, 161, .9)';
    logoY.style.display = 'none';
    logoR.style.display = 'none';
    logoG.style.display = 'block';
    businessCard.style.background = 'linear-gradient(100deg, rgb(255,255,255) 40%, rgba(142, 201, 161, .9) 0 )';

    for (let i = 0; i < btnColor.length; i++) {
        btnColor[i].style.backgroundColor = 'rgba(142, 201, 161, .5)';
    }
    for (let j = 0; j < imgBorder.length; j++) {
        imgBorder[j].style.border = '.2rem solid rgb(142, 201, 161)';
    }
});



const bookmarks = document.querySelector('.bookmarks');

let k = 0;



bookmarks.addEventListener('click', () => {

    bookmarks.style.marginTop = " 4rem";
    setTimeout(() => {
        bookmarks.style.marginTop = " 0rem";
    }, 2000)


});


// contact form for aws


function submitToAPI(e) {
    e.preventDefault();

    let name = document.getElementById("fname").value;

    let desc = document.getElementById("subject").value;
    if (name == "" || desc == "") {
        alert("Please Fill All Required Field");
        return false;
    }

    if (name !== '5') {
        alert("You make a mistake");
        return false;
    }


    let data = {
        name: name,
        desc: desc
    };

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", " https://ykcnj9w206.execute-api.ap-southeast-2.amazonaws.com/prod/email");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            let response = JSON.parse(xmlhttp.responseText);
            if (xmlhttp.status === 200) {
                console.log('successful');
                document.getElementById("contact-form").innerHTML = "<h1>Thank you for your message/feedback<br>I will get back to you soon!</h1>";
            } else {
                console.log('failed');
            }
        }
    }

    document.getElementById('contact-form').reset();
}

