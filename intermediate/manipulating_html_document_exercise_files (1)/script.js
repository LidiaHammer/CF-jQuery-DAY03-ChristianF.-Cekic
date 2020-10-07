var jsonData = JSON.parse(data);

for (var i = 0; i < jsonData.length; i++) {
    $(".container").append(`<div id="${i}" class="img-container"><img id="img${i}"src='${jsonData[i].img}'></div>`);
    $(`#${i}`).append(`<br><span> ${jsonData[i].name}</span>`);

    $(`#${i}`).append(`<br><span> ${jsonData[i].price} € </span>`);

    $(`#${i}`).append(`<br><span id="description ${i}" class="description"> Description: ${jsonData[i].description}</span>`);

    $(`#${i}`).append(`<br><span id="stock${i}" class="stock"> In stock: ${jsonData[i].stock}</span>`);

    $(`#${i}`).append(`<br><button id="buy"> Buy me </button>`);






    if (jsonData[i].type == "phone") {
        $(`#${i}`).css("background-color", "green");

    } else if (jsonData[i].type == "laptop") {
        $(`#${i}`).css("background-color", "red");

    } else if (jsonData[i].type == "Tablet") {
        $(`#${i}`).css("background-color", "blue");
    }


}

// $("#buy").on("click", function () {
// var index =