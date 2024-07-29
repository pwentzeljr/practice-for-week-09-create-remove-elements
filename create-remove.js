/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const urlParts = url.split('/');
        const breed = urlParts[4];


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDogHtml = `
            <li>
                <figure>
                    <img src="${url}" />
                    <figcaption>${breed}</figcaption>
                </figure>
            </li>`

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const galleryUl = document.querySelector("section.gallery ul")
        galleryUl.innerHTML += newDogHtml;

    } catch (e) {
        console.error(e)
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector("section.gallery ul li:first-child");


    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const lastDog = document.querySelector("section.gallery ul li:last-child");

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastDog.remove();
});
