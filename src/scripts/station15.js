function displayList(){
    var fruits = document.getElementById("fruits");
    console.log(fruits);
    fruits.innerHTML = "<ul><li>リンゴ</li><li>イチゴ</li><li>ブドウ</li></ul>"
    console.log(fruits);
}

function returnList(){
    var fruits = document.getElementById("fruits");
    fruits.innerHTML = "<p>リンゴ</p><p>イチゴ</p><p>ブドウ</p>";
}