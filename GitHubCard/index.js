// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

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
  location.textContent = `Location: ${data.location}`;

  const profile = document.createElement('p');
  profile.textContent = "Profile: ";
  
  // pLink ('a')
  const pLink = document.createElement('a');
  pLink.href = data.html_url;
  pLink.textContent = `${data.html_url}`;
  profile.append(pLink);

  // followers count ('p')
  const followers = document.createElement('p');
  followers.textContent = `Followers: ${data.followers}`;

  // following count ('p')
  const following = document.createElement('p');
  following.textContent = `Following: ${data.following}`;

  // bio ('p')
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${data.bio}`;

  cardInfo.append(user, username, location, profile, followers, following, bio);
  // ********************************
  
  card.append(cardInfo);

  return card;
} // closes create function


// selector for parent of card component
const cards = document.querySelector('.cards');


/*
 * 
 * Create a function that requests the followers data from the API
 * after it has received your data and create a card for each of your followers.
 * 
 */

function myFollowers() {
  const followersArray = [];
  // axios call for my github handle 
  axios.get(`https://api.github.com/users/easpaas`)
    .then(response => {      
      cards.append(createCard(response.data));
      
    })
      // console.log(response.data.followers_url);  <= logs ()
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  // TODO store list of followers from response.data 
// followersArray.forEach(follower => {
//   let getUser = `https://api.github.com/users/${follower}`;
//   axios.get(getUser)
//     .then(response => {
//       cards.append(createCard(response.data));
//     })
//     .catch(error => {
//       console.log(error);
//     })
// });
}
console.log(myFollowers());