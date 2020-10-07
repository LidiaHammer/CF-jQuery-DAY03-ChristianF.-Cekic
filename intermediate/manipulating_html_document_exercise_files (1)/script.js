var jsonData = JSON.parse(data);

for (var i = 0; i < jsonData.length; i++) {
    $(".container").append(`<div id="${i}" class="img-container"><img id="img${i}"src='${jsonData[i].img}'></div>`);
    $(`#${i}`).append(`<br><span> ${jsonData[i].name}</span>`);

    $(`#${i}`).append(`<br><span> ${jsonData[i].price} € </span>`);

    $(`#${i}`).append(`<br><span id="description ${i}" class="description"> Description: ${jsonData[i].description}</span>`);

    $(`#${i}`).append(`<br><span id="stock${i}" class="stock"> In stock: ${jsonData[i].stock}</span>`);




    if (jsonData[i].type == "phone") {
        $(this).css("color", "blue");

        // $(`#${i}`).css("background-color", "white");


    }


}