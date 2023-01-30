const itemsList = [
  "Book",
  "Pen",
  "Pencil",
  "Bag",
  "Eraser",
  "Sharpener",
  "Razor",
];
const itemContainer = document.getElementById("itemsOnList");
const searchInput = document.getElementById("searchBox");
//render html list items
function render_lists(lists) {
  let li = "";
  for (index in lists) {
    li += "<li>" + lists[index] + "</li>";
  }
  itemContainer.innerHTML = li;
  li = "";
}
//render filtered list
function filtered_Items(e) {
  let query = searchInput.value.toLowerCase();
  let filtered_query = itemsList.filter((item) => {
    item = item.toLowerCase();
    return item.indexOf(query) > -1;
  });
  render_lists(filtered_query);
}
// trigger function every time search input is changed
searchInput.addEventListener("keyup", filtered_Items);
