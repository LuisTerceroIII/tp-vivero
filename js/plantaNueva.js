
const newPlant = JSON.parse(localStorage.getItem('newPlant'))
console.log(newPlant)

const family = document.getElementById('new-plant-family')
const scientificName = document.getElementById('new-plant-scientific-name')
const commonName = document.getElementById('new-plant-common-name')
const section = document.getElementById('new-plant-section')
const sectionRow = document.getElementById('new-plant-section-row')
const sectionColumn = document.getElementById('new-plant-section-column')
const image = document.getElementById('new-plant-image')

family.innerHTML = family.innerHTML + newPlant.family
scientificName.innerHTML =scientificName.innerHTML +  newPlant.scientificName
commonName.innerHTML = commonName.innerHTML + newPlant.commonName
section.innerHTML = section.innerHTML+  newPlant.section
sectionRow.innerHTML = sectionRow.innerHTML + newPlant.row
sectionColumn.innerHTML = sectionColumn.innerHTML + newPlant.column
image.src = newPlant.image