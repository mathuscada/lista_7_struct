var previous_hat = "black_hat";

function changeHatImage(id) {
    let hat, hat2, main_image;
    switch(id) {
        case "black_hat":
            // Removing previous hat's border
            hat2 = document.querySelector("#" + previous_hat);
            hat2.style.border = "none";
            // Changing new hat's border
            hat = document.querySelector("#" + id);
            hat.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_hat");
            main_image.src = "Images/chapeu_preto.png";
            // Changing previous_hat variable
            previous_hat = "black_hat";
            break;
        case "purple_hat":
            // Removing previous hat's border
            hat2 = document.querySelector("#" + previous_hat);
            hat2.style.border = "none";
            // Changing new hat's border
            hat = document.querySelector("#" + id);
            hat.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_hat");
            main_image.src = "Images/chapeu_roxo.png";
            // Changing previous_hat variable
            previous_hat = "purple_hat";
            break;
        case "green_hat":
            // Removing previous hat's border
            hat2 = document.querySelector("#" + previous_hat);
            hat2.style.border = "none";
            // Changing new hat's border
            hat = document.querySelector("#" + id);
            hat.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_hat");
            main_image.src = "Images/chapeu_verde.png";
            // Changing previous_hat variable
            previous_hat = "green_hat";
            break;
        case "blue_hat":
            // Removing previous hat's border
            hat2 = document.querySelector("#" + previous_hat);
            hat2.style.border = "none";
            // Changing new hat's border
            hat = document.querySelector("#" + id);
            hat.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_hat");
            main_image.src = "Images/chapeu_azul.png";
            // Changing previous_hat variable
            previous_hat = "blue_hat";
            break;
    }
}

var previous_wand = "wand1";

function changeWandImage(id) {
    let wand, wand2, main_image;
    switch(id) {
        case "wand1":
            // Removing previous wand's border
            wand2 = document.querySelector("#" + previous_wand);
            wand2.style.border = "none";
            // Changing new wand's border
            wand = document.querySelector("#" + id);
            wand.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_wand");
            main_image.src = "Images/var1.png";
            // Changing previous_wand variable
            previous_wand = "wand1";
            break;
        case "wand2":
            // Removing previous wand's border
            wand2 = document.querySelector("#" + previous_wand);
            wand2.style.border = "none";
            // Changing new wand's border
            wand = document.querySelector("#" + id);
            wand.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_wand");
            main_image.src = "Images/var2.png";
            // Changing previous_wand variable
            previous_wand = "wand2";
            break;
        case "wand3":
            // Removing previous wand's border
            wand2 = document.querySelector("#" + previous_wand);
            wand2.style.border = "none";
            // Changing new wand's border
            wand = document.querySelector("#" + id);
            wand.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_wand");
            main_image.src = "Images/var3.png";
            // Changing previous_wand variable
            previous_wand = "wand3";
            break;
        case "wand4":
            // Removing previous wand's border
            wand2 = document.querySelector("#" + previous_wand);
            wand2.style.border = "none";
            // Changing new wand's border
            wand = document.querySelector("#" + id);
            wand.style.border = "1px solid #09C9F3";
            // Changing main image
            main_image = document.querySelector("#main_wand");
            main_image.src = "Images/var4.png";
            // Changing previous_wand variable
            previous_wand = "wand4";
            break;
    }
}