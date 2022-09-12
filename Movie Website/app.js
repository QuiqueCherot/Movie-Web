const arrows= document.querySelectorAll(".arrow");
const movieLists= document.querySelectorAll(".movie-list");
/*creamos una constante llamada arrow
con document vamos al documento html y con
queryselector elegimos la que queremos que
en este caso es la id arrow y con all son todos */

arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth/270);
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >=0 ){
        movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value
            -320}px)`;
        }else {
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    });
    
});
//aca separamos cada arrow individualmente para crear event


//TOGGLE
const ball = document.querySelector(".toogle-ball");
const items= document.querySelectorAll(
    ".container, .movie-list-tittle, .navbar-container, .sidebar, .left-menu-icon, .toggle"
    );

    ball.addEventListener("click", ()=>{
        items.forEach(items=>{
            items.classList.toggle("active");
        })
    ball.classList.toggle("active");
    })