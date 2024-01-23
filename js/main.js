const persona = document.getElementById('persona')
console.log(team)

for(person in team){
    let datiperson = team[person];
    createCard(persona, datiperson.image, datiperson.name, datiperson.role)
  };
   
function createCard(element, img, name, role){
    element.innerHTML += `<div class="col col-lg-4 col-card">
    <div class="card" style="width: 20rem;">
        <img src="./img/${img}" class="card-img-top">
        <div class="card-body">
            <p class="card-text text-name">${name}</p>
            <p class="text-role">${role}</p>
       </div>
    </div>
</div>`
}