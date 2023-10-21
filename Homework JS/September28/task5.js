function bookList(e, n) {
    var bs = document.getElementById("BookList2");
    var book = document.getElementById("list" + n);
    var li = bs.getElementsByTagName("li");
  
    if (e.ctrlKey) {
      if (book.style.backgroundColor == "orange")
        book.style.backgroundColor = "inherit";
      else
        book.style.backgroundColor = "orange";
      return;
    }
    for (b of li) {
  
      b.style.backgroundColor = "inherit";
    }
    book.style.backgroundColor = "orange";
  
    if (e.ShiftKey) {
      if (book.style.backgroundColor == "orange")
        for (b of li) {
          if (book.style.backgroundColor == "inherit")
            b.style.backgroundColor = "orange";
          esle
          return;
        }
    }
}
        