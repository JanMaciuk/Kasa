const example = {
  name: "Maseczki chirurgiczne",
  price: 17
}
let sumaObiekt = document.querySelector("#sum")
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function printEntry(entry, id) {
  return `<div class="entry">
  <span class="name">${entry.name}</span>
  <div>
    <span class="price">${entry.price}PLN</span>
    <button class="pure-button button-error delete" onclick="unscan(${id})">delete</button>
  </div>
</div>`
}

const items = [];
function addItem(name, price) {
  items.push({
    name,
    price
  })
}

addItem("maseczki chirurgiczne", 17);
addItem("marker do tablicy", 7);
addItem("markiza balkonowa", 100);
addItem("gaśnica", 120);
addItem("mikrofon USB", 45);

let scaned = [];
scaned = [...items];

function unscan(id) {
  scaned = [...scaned.slice(0, id), ...scaned.slice(id + 1)]
  refresh()
}

function scan(product) {
  scaned.push(product);
  refresh();
}

function delete_all() {
  scaned = []
  refresh()
}

function sumownik(dynks) {
  suma = suma + dynks.price
  console.log(dynks.price)
}
let suma = 0
function refresh() {
  suma = 0
  scaned.forEach(sumownik)
  sumaObiekt.innerHTML = suma + " PLN"
  
  const entiresEl = document.querySelector("#entries");
  const scaned_html = scaned.map(printEntry);
  let entiresEl_content = scaned_html.join("");

  entiresEl.innerHTML = entiresEl_content;
}

const del = document.querySelector('.delete-all')
function deleteAllEntries() {
  document.querySelector('.delete-all')
}
del.addEventListener('click', deleteAllEntries())

refresh();

let props = [];
function findProducts(query) {
  // console.log(query)
  return items.map((el,id)=>{el.id = id; return el}).filter( (product,id) => {
    // console.log(String(id), product.name, query)
    if(String(id).startsWith(query)) return true;
    if(product.name.startsWith(query.toLowerCase())) return true;
    return false;
  } )
}


const dropdown = document.querySelector("#dropdown");
/**
 * 
 * @param {KeyboardEvent} event 
 */
function onKeyPress(event) {
  console.log(event.key)
  if(event.key === "Delete"){
    idInput.value = "";
    return;
  }
  if(event.key === "Enter"){
    let found = findProducts(idInput.value);
    if(found.length) scan( found[0] );
    return;
  }
  const props = findProducts(idInput.value).slice(0,3);
  const props_html = props.map( p => `
  <div class="prop">
    <span class="prop_kod">${p.id}</span>
    <span class="prop_name">${p.name}</span>
    <span class="prop_cena">${p.price}</span>
  </div>`)
  dropdown.innerHTML=props_html.join("")
}
/**
 * @type {HTMLInputElement}
 */
const idInput = document.querySelector("#product_id>input");
idInput.addEventListener('change', onKeyPress);
idInput.addEventListener('keydown', onKeyPress);

