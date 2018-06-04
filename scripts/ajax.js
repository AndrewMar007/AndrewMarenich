$(document).ready(function () {
    "use strict";
    var loadBut = $("#download");
    var isVisible = false; // для "перемикача"
    var songsBlock = $("#hair"); // блок, у який вставимо таблицю
    songsBlock.css("display", "none"); // на початку ховаємо таблицю
    loadBut.on("click", function () { // показати або сховати таблицю
        $.ajax({
            url: "scripts/lilhair.json",
            success: function (result) { // результат разу розпарсений
                var i;
                var table = "<table class='table'><tr class='row1'><th class='cell'>Color of hair </th><th class='cell'></th>";
                for (i = 0; i < result.length; i += 1) { // "заповнюємо" таблицю
                    table += "<tr class='row" +
                            ((i % 2 === 0) // для різнокольорових рядків
                        ? "2"
                        : "1") + "'><td class='cell'>" + result[i].last_name + " " + result[i].first_name + " " "</td></tr>";
                }
                table += "</table>";
                $("#hair").html(table); // вставляємо таблицю
            }
        });
        if (isVisible) { // якщо таблицю показано - ховаємо і навпаки
            loadBut.html("Show table");
            songsBlock.css("display", "none");
        } else {
            loadBut.html("Hide table");
            songsBlock.css("display", "block");
        }
        isVisible = !isVisible; // для організації "перемикача" присвоюємо булевій змінній протилежне значення
    });
});
