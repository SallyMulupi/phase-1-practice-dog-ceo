console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedArray = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => renderImg(data))
        //add images to the dom

    function renderImg(images) {
        const pictures = document.querySelector("#dog-image-container")
        images.message.forEach(image => {
            const img = document.createElement("img")
            img.src = "Image";
            pictures.appendChild(img)


        });

    }
})
document.addEventListener('DOMContentLoaded', () => {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            const collector = () => {
                for (const item in data.message) {
                    if (data.message[item].length == 0) {
                        breedArray.push(item);
                    } else {
                        data.message[item];
                    }
                }
            }
        })
    const breeds = document.querySelector("#dog-breeds")
    const li = document.createElement("li");
    li.textContent = dog;
    document.li.style.color = "purple";
    breeds.appendChild(li);
    li.addEventListener("click", e => {
        if (li.className !== 'selected') {
            li.style.color = 'black';
            li.classList.add('selected');
        } else {
            li.style.color = '';
            li.classList.remove('selected');
        }

    })


})
const filterBreed = () => {
    breedMenu.addEventListener('change', e => {
        breedList.replaceChildren();
        breedArray.filter(f => breedMenu.value[0] === breedArray[0])
        breedElementer();
    })
}
renderImg();
filterBreed();
collector();