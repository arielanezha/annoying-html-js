

var movies=[
{
name:"Interstellar",
rating: "5 stars",
watched: true
},

{
name:"The imitation game",
rating:"4 stars",
watched: false
},

{
    name:"Hacksaw ridge",
    rating: "4.5 stars",
    watched: true
}

];

for(var i=0;i< movies.length;i++)
{
      if(movies[i].watched === true){
    console.log("You have watched " + movies[i].name + " - " + movies[i].rating);
          } 
          else

 console.log("You haven't watched " + movies[i].name + " - " + movies[i].rating);



}






var button= document.querySelector("button");
button.addEventListener("click", function(){
    if(document.body.style.background="white")
    document.body.style.background="purple";
    else 
    document.body.style.background="white";
});