var cursor = document.getElementsByClassName("kix-cursor-caret")[0]
var cursor_style = cursor.getAttribute("style");
cursor.setAttribute('style', cursor_style+" border: 125% solid transparent; border-image: linear-gradient(to bottom, rgb(255, 0, 0) 0%, rgb(150, 0, 213) 60%, rgb(0, 78, 213) 61%, rgb(0, 78, 223) 125%); border-image-slice: 1;");
