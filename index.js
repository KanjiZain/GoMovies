var parentDiv = document.createElement('div');
var childDiv = document.createElement('div');

parentDiv.className = "row row-cols-1 row-cols-md-4 g-4"

childDiv.setAttribute('class', 'child-div');
childDiv.textContent = 'This is the child div';

parentDiv.appendChild(childDiv);
const body1 =document.body.appendChild(parentDiv);

console.log(childDiv.innerHTML)






fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1")

.then(res => {
    return res.json()
})
.then(data => {
    const ogdata = data.results

    for (let i = 0; i < ogdata.length; i++){
       const ogdata1 = ogdata[i]
       
    }
    
    

    
    

})