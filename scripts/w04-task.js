/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Hayley Branchflower",
    photo: "images/hayley.JPG",
    favouriteFoods: ["ice cream", " strawberries", " pineapple", " oranges", " carrots"],
    hobbies: ["cooking", "any games", "baking", "editing", "code"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Kamloops, BC',
        length: '17 years'
    },
    {
        place: 'Rexburg, ID',
        length: '1 year'
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favouriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li)
});

/* Hobbies List */
let ul = document.createElement('ul')
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li)
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt)
    document.querySelector('#places-lived').appendChild(dd)
});


