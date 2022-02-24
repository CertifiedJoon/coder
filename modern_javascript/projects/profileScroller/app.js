const profiles = [
    {
        name: 'John Doe',
        age: 23,
        occupation: 'Carpenter',
        img: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'James Jylenhaal',
        age: 23,
        occupation: 'Actor',
        img: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
        name: 'Jack Dorothy',
        age: 23,
        occupation: 'CEO',
        img: 'https://randomuser.me/api/portraits/men/74.jpg'
    }
];

document.getElementById('next').addEventListener('click', nextProfile);

function nextIterator(arr) {
    let nextIterator = 0;
    
    return  {
        next : function() {
            return nextIterator < arr.length ?
            {value : arr[nextIterator++], done: false} : {done: true}
        }
    }
}

const next = nextIterator(profiles);

function nextProfile() {
    let currentProfile = next.next().value;
    console.log(currentProfile);
    document.getElementById('profile-img').innerHTML = `
    <img src="${currentProfile.img}">`
    document.getElementById('profile-display').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age : ${currentProfile.age}</li>
        <li class="list-group-item">Occupations: ${currentProfile.occupation}</li>
    </ul>
    `;
}