/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/  
axios.get(`https://api.github.com/users/easpaas`)
  .then(response => {
    console.log(response.data);
    cards.append(createCard(response.data));
  })
  .catch(error => {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
           Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/*
 * This function will accept a data object 
 * that will be response.data from axios get.
 */ 
function createCard(data) {
  // card ('div')
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.setAttribute('src', data.avatar_url);
  card.append(image);

  // cardInfo ('div')
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  // ********************************
  // append all of these to card-info
  
  // name of user ('h3')
  const user = document.createElement('h3');
  user.classList.add('name');
  user.textContent = data.name

  // username ('p')
  const username = document.createElement('p');
  username.classList.add('p');
  username.textContent = data.login;

  // location ('p')
  const location = document.createElement('p');
  location.textContent = data.location;

  const profile = document.createElement('p');
  
  // pLink ('a')
  const pLink = document.createElement('a');
  pLink.setAttribute('src', data.html_url);
  profile.append(pLink);

  // followers count ('p')
  const followers = document.createElement('p');
  followers.textContent = data.followers;

  // following count ('p')
  const following = document.createElement('p');
  following.textContent = data.following;

  // bio ('p')
  const bio = document.createElement('p');
  bio.textContent = data.bio;

  cardInfo.append(user, username, location, profile, followers, following, bio);
  // ********************************
  
  card.append(cardInfo);

  return card;
} // closes create function

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const cards = document.querySelector('.cards');
// cards.append(createCard('easpaas'));
