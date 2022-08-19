console.log('hello');
///data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'rohan das',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'django',
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        name: 'subham sharma',
        age: 28,
        city: 'bangalore',
        language: 'javascript',
        framework: 'angular',
        image: 'https://randomuser.me/api/portraits/med/men/54.jpg'
    },
    {
        name: 'kamila kabelo',
        age: 25,
        city: 'kolkata',
        language: 'javascript',
        framework: 'express',
        image: 'https://randomuser.me/api/portraits/med/women/58.jpg'
    },
    {
        name: 'abhisekh paidisetty',
        age: 23,
        city: 'gunupur',
        language: 'java',
        framework: 'springboot',
        image: 'https://randomuser.me/api/portraits/med/men/64.jpg'
    },
    {
        name: 'arati senapati',
        age: 30,
        city: 'london',
        language: 'javascript',
        framework: 'next',
        image: 'https://randomuser.me/api/portraits/med/women/63.jpg'
    }
]


//CV iterator
function cviteractor(profiles) {
    let nextindex = 0;
    return {
        next: function () {
            return nextindex < profiles.length ?
                { value: profiles[nextindex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cviteractor(data);

nextcv();
// button listener for next button
const next = document.getElementById('next')
next.addEventListener('click', nextcv);

function nextcv() {
    const currentcandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentcandidate != undefined){
    image.innerHTML = `<img src='${currentcandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentcandidate.name}</li>
    <li class="list-group-item">${currentcandidate.age} Years Old</li>
    <li class="list-group-item">Lives In ${currentcandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentcandidate.language}</li>
    <li class="list-group-item">Uses ${currentcandidate.framework} framework</li>
  </ul>`;}
  else{
    alert('End of candidate applications');
    window.location.reload();
  }
}