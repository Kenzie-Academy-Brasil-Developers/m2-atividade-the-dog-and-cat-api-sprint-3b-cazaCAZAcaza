/**
 * 92733274-0d57-4966-aefb-d85c5c585f75 API CAT KEY
 */
const cat     = document.getElementById("cat");
const dog     = document.getElementById("dog");

const audio   = document.querySelector("audio");
audio.volume  = 0.2

const catImg  = document.createElement("img");
catImg.classList.add("images");

const dogImg  = document.createElement("img");
dogImg.classList.add("images");

cat.appendChild(catImg);
dog.appendChild(dogImg);


async function newCat() {
  const catto    = await fetch("https://api.thecatapi.com/v1/images/search")
    .then((res)  => res.json())
    .then((data) => catImg.src = `${data[0].url}`)
    .catch((err) => console.log("Failed to load an image"));
    return catto
}
newCat();

async function newDog() {
  const doggo  = await fetch("https://api.thedogapi.com/v1/images/search")
  .then((res)  => res.json())
  .then((data) => dogImg.src = `${data[0].url}`)
  .catch((err) => console.log("Failed to load an image"));
  return doggo
}
newDog();

const dogButton = document.createElement("button");
const catButton = document.createElement("button");

catButton.classList.add("buttons");
catButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M322.6 192C302.4 192 215.8 194 160 278V192c0-53-43-96-96-96C46.38 96 32 110.4 32 128s14.38 32 32 32s32 14.38 32 32v256c0 35.25 28.75 64 64 64h176c8.875 0 16-7.125 16-15.1V480c0-17.62-14.38-32-32-32h-32l128-96v144c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V289.9c-10.25 2.625-20.88 4.5-32 4.5C386.2 294.4 334.5 250.4 322.6 192zM480 96h-64l-64-64v134.4c0 53 43 95.1 96 95.1s96-42.1 96-95.1V32L480 96zM408 176c-8.875 0-16-7.125-16-16s7.125-16 16-16s16 7.125 16 16S416.9 176 408 176zM488 176c-8.875 0-16-7.125-16-16s7.125-16 16-16s16 7.125 16 16S496.9 176 488 176z"/></svg>`
dogButton.classList.add("buttons");
dogButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"/></svg>`

cat.appendChild(catButton);
dog.appendChild(dogButton);

catButton.addEventListener("click", newCat);
dogButton.addEventListener("click", newDog);