let sort_on_rating=[...movies]
.filter((p)=>p.genre==='Sci-fi')
.sort((a,b)=> b.rating-a.rating);
console.log(sort_on_rating);