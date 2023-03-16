


var element = document.createElement("div");  
element.className = "row row-cols-1 row-cols-md-5 g-4"
document.body.appendChild(element)


fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1")

.then(res => {
    return res.json()
})
.then(data => {
    const ogdata = data.results

    for (let i = 0; i < ogdata.length; i++){
       const ogdata1 = ogdata[i]



var coldiv = document.createElement("div");
coldiv.className = "col"

element.appendChild(coldiv);


var carddiv = document.createElement("div");
coldiv.className = "card"

coldiv.appendChild(carddiv);

var image = document.createElement("img");
image.className = "card-img-top"

image.setAttribute(
    'src',
    'https://image.tmdb.org/t/p/w1280'+ ogdata1.poster_path
  );

carddiv.appendChild(image);




var bodydiv = document.createElement("div");
bodydiv.className = "card-body"

carddiv.appendChild(bodydiv);

var titlediv = document.createElement("h3");
titlediv.className = "card-title"

titlediv.innerText = `${ogdata1.original_title}`

bodydiv.appendChild(titlediv);

var textdiv = document.createElement("span");
textdiv.className = "card-text"

textdiv.innerText = `${ogdata1.vote_average}`

let vote = ogdata1.vote_average

if (vote <= 4) {
    textdiv.style = "color:red"
}

else if (vote <8) {
    textdiv.style = "color:orange"
}

else {
    textdiv.style = "color:green"
}



bodydiv.appendChild(textdiv);

var hoverdiv = document.createElement("p");
hoverdiv.className = "overview"

hoverdiv.innerHTML = `<h4>Overview:</h4>  ${ogdata1.overview}`

bodydiv.appendChild(hoverdiv);

 }


})




var input = document.getElementById("search");

input.addEventListener(onclick, function(event) { 
    input.place =''

},

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if (input.value == '') {
        location.reload()


    }

    else {
        console.log(input.value)

        fetch("https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" + input.value)

.then(res => {
    return res.json()
})
.then(data => {
    const ogdata = data.results

    const abc = document.querySelector(".row")

    abc.innerHTML = ''


    for (let i = 0; i < ogdata.length; i++){
       const ogdata1 = ogdata[i]

       console.log(ogdata1)

       var coldiv = document.createElement("div");
coldiv.className = "col"

abc.appendChild(coldiv);


var carddiv = document.createElement("div");
coldiv.className = "card"

coldiv.appendChild(carddiv);

var image = document.createElement("img");
image.className = "card-img-top"

image.setAttribute(
    'src',
    'https://image.tmdb.org/t/p/w1280'+ ogdata1.poster_path
  );

carddiv.appendChild(image);

var bodydiv = document.createElement("div");
bodydiv.className = "card-body"

carddiv.appendChild(bodydiv);

var titlediv = document.createElement("h3");
titlediv.className = "card-title"

titlediv.innerText = `${ogdata1.original_title}`

bodydiv.appendChild(titlediv);

var textdiv = document.createElement("span");
textdiv.className = "card-text"

textdiv.innerText = `${ogdata1.vote_average}`

var hoverdiv = document.createElement("p");
hoverdiv.className = "overview"

hoverdiv.innerHTML = `<h4>Overview:</h4>  ${ogdata1.overview}`

bodydiv.appendChild(hoverdiv);


    }

    })

    }
}}))
