import { plants } from './plants.js'
import { createElementFromHTML } from './Util.js'


const selectFamily = document.getElementById('family')
const families = new Set(plants.map(plant => plant.familyName.toLocaleUpperCase()))
families.forEach(family => selectFamily.appendChild(createElementFromHTML(`<option value="${family}">${family}</option>`)))

const imageInput = document.querySelector("#image");
var uploadedImage = "";
imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    uploadedImage  = reader.result;
    reader.readAsDataURL(this.files[0]);
});

const image_input = document.querySelector("#image")
var uploaded_image = ""
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector("#display-image").style.display = 'block'
      document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });

const newPlantForm = document.getElementById('register-plant-form')
newPlantForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPlant = {
        family: e.target.family.value,
        commonName: e.target.commonName.value,
        section: e.target.section.value,
        row: e.target.row.value,
        column: e.target.column.value,
        image: uploaded_image
    }

    localStorage.setItem('newPlant', JSON.stringify(newPlant))
} )
const newPlantSubmit = document.getElementById('new-plant-submit')
newPlantSubmit?.addEventListener('click', (e) => {
    return window.location = "/pages/plantaNueva.html"
})







