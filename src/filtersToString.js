function filtersToString() {
  const filterButtons = document.getElementsByClassName("unselected");
  const texts = Array.from(filterButtons).map((filter) => filter.innerText);
  const string = texts.join(", ");
  return string;
}

export { filtersToString };
