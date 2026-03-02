
function adattaCarosello() {
  let larghezzaSchermo = window.innerWidth;
  console.log(larghezzaSchermo);
  const carouselItemRows = document.querySelectorAll(".carousel-item .row");
  const firstRow = document.querySelector(".carousel-item .row");
  if (!firstRow) return;

  if (larghezzaSchermo < 992 && firstRow.children.length > 2) {
    carouselItemRows.forEach((row, index) => {
      const children = Array.from(row.children);
      const item = row.closest(".carousel-item");
      const newItem = document.createElement("div");
      newItem.classList.add("carousel-item");
      const newRow = document.createElement("div");
      newRow.classList.add("row", "row-cols-2", "row-cols-lg-4", "row-gap-4");
      newItem.appendChild(newRow);

      for (let i = 0; i < children.length; i++) {
        if (i >= 2) {
          newRow.appendChild(children[i]);
        }
      }
      item.after(newItem);
    });
  } else if (larghezzaSchermo >= 992 && firstRow.children.length <= 2) {
    for (let i = 0; i < carouselItemRows.length; i += 2) {
      const rowBefore = carouselItemRows[i];
      const rowAfter = carouselItemRows[i + 1];

      if (rowAfter) {
        const colsToMove = Array.from(rowAfter.children);

        colsToMove.forEach((card) => {
          rowBefore.appendChild(card);
          rowAfter.closest(".carousel-item").remove();
        });
      }
    }
  }
}

window.addEventListener("load", () => {
  adattaCarosello();
});
window.addEventListener("resize", () => {
  adattaCarosello();
});

const bookmarkList = document.querySelectorAll('.fa-bookmark')

bookmarkList.forEach(bookmark => {

  bookmark.addEventListener('mouseover', () => {
    if (bookmark.classList.value.includes("clicked")) {
    } else {
      bookmark.classList.add('fa-solid')
      bookmark.classList.remove('fa-regular')
    }
  })

  bookmark.addEventListener('mouseout', () => {
    if (bookmark.classList.value.includes("clicked")) {
    } else {
      bookmark.classList.remove('fa-solid')
      bookmark.classList.add('fa-regular')
    }
  })

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('clicked')
    console.log(bookmark.classList.value)
    if (bookmark.classList.value.includes("clicked")) {
      bookmark.classList.add('fa-solid')
      bookmark.classList.remove('fa-regular')
    } else {
      bookmark.classList.remove('fa-solid')
      bookmark.classList.add('fa-regular')
    }
  })

})