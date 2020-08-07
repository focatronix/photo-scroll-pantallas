function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}


const masonryLayout = (containerElem, itemsElems, columns) => {
  containerElem.classList.add("masonry-layout", `columns-${columns}`)
  let columnsElements = []
  
  for( let i = 1; i <= columns; i++) {
    let column = document.createElement("div")
    column.classList.add("masonry-column", `column-${i}`)
    containerElem.appendChild(column)
    columnsElements.push(column)
  }
  
  for( let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
    for(let n = 0; n < columns; n++) {
      let item = itemsElems[m * columns + n]
      columnsElements[n].appendChild(item)
      item.classList.add('masonry-item')
    }
  }
}

//masonryLayout(document.getElementById("gallery"), document.querySelectorAll(".gallery-item"), 4)


function go() {
  const fileInput = document.getElementById('file');
  const outputDiv = document.getElementById('gallery');
  let html = '';
  for (const file of fileInput.files) {
    html += '<div class="gallery-item"><img src="images/' + file.name + '" /></div>';
      //<div class="gallery-item"><img src="images/' + file.name + '" /></div> -->
      //<div class="gallery-item"><img src="https://source.unsplash.com/collection/190728"></div>
  }
      
  outputDiv.innerHTML = html
  masonryLayout(outputDiv, document.querySelectorAll(".gallery-item"), 4)
  //pageScroll()
  
}

function reset() {
    const outputDiv = document.getElementById('gallery');
    outputDiv.innerHTML = ""
    document.getElementById("file").value = null
}