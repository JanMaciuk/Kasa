const example = {
    name:"Maseczki chirurgiczne",
    price: 17
  }
  
  function printEntry(entry) {
    return `<div class="entry">
    <span class="name">${entry.name}</span>
    <div>
      <span class="price">${entry.price}PLN</span>
      <button class="pure-button button-error delete">delete</button>
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
  
  addItem("Maseczki chirurgiczne", 17);
  addItem("Marker do tablicy", 7);
  
  let scaned = [];
  scaned = [...items,...items,...items,...items];
  
  function delete_all() {
    scaned = []
    refresh()
  }
  
  function refresh() {
    const sidebar = document.querySelector("#sidebar");
    const scaned_html = scaned.map(printEntry);
    let sidebar_content = scaned_html.join("");
    sidebar_content += `
      <div class="spacer"></div>
      <div class="delete-all">delete all</div>
    `
    sidebar.innerHTML = sidebar_content;
    const del = document.querySelector('.delete-all')
    del.addEventListener('click',()=>{delete_all()})
  }
  
  refresh();
  
  /**
   * 
   * @param {KeyboardEvent} event 
   */
  function onKeyPress(event) {
    console.log(event.key, event.keyCode)
  }
  const idInput = document.querySelector("#product_id");
  idInput.addEventListener('keydown',onKeyPress);