// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const Icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

Icons.forEach((item)=>{

const {name, family, prefix} = item;

const card = `<div>
  <i class="fas fa-${name}"></i>
  <div class="title">${name}<div>
</div>`;

$(".icons").append(card);

});

// Milestone 2
// Coloriamo le icone per tipo


let colors = {

  food: "red",

  beverage: "yellow",

  animal: "blue"

}



Icons.forEach((item)=>{

  if(item.category == "food"){

    return item.color = colors.food;


  } else if (item.category == "beverage"){

    return item.color = colors.beverage;

  } else {

    return item.color = colors.animal;
  }
});
console.log(Icons)

copyCards (Icons);

// add. options

const Categories = Object.keys(colors);



Categories.forEach((item)=>{

  const Options = `<option value="${item}">${item}</option>`;
  $("#type").append(Options);

});

$("#type").change(function(){

  const Options = $(this).val();


  let IconsFiltered = Icons.filter((item)=>{

    return item.category == Options;

  });

  if (Options == "all") {
    copyCards (Icons);
  } else{
    
    copyCards (IconsFiltered);

  }

});




// funzioni

function copyCards (items){


  $(".icons").html("");

  items.forEach((item, index) => {

    const {name, family, prefix, color} = item;

    let card = ` <div>
    <i class ="${family} ${prefix}${name}" style='color: ${color}'></i>
    <div class="title">${name}</div>
    </div>`;

    $(".icons").append(card);

  });


}
