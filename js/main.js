const persona = document.getElementById('persona')
console.log(team)

for(let person of team){
    createCard(persona, person.image, person.name, person.role)
};
   

function createCard(element, img, name, role){
    element.innerHTML += `
    <div class="col-sm-6 col-lg-4 col-card">
      <div class="card">
        <img src="./img/${img}" class="card-img-top">
        <div class="card-body">
          <p class="card-text text-name">${name}</p>
          <p class="text-role">${role}</p>
       </div>
      </div>
    </div>`
}