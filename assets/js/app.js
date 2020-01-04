// variables
const tweetList = document.getElementById('tweet-list')

// event listeners

eventListeners()

function eventListeners () {
  document.querySelector('#form').addEventListener('submit', newTweet)

  tweetList.addEventListener('click', removeTweet)
}

// function

function newTweet (e) {
  e.preventDefault()

  // get the tweet value
  const tweet = document.getElementById('tweet').value

  // create the remove button
  const removeBtn = document.createElement('a')
  removeBtn.classList = 'remove-tweet'
  removeBtn.textContent = 'x'

  // creat an <li></li> element
  const li = document.createElement('li')
  li.textContent = tweet

  // Add remove button to each tweet
  li.appendChild(removeBtn)

  //  add to the list
  tweetList.appendChild(li)

  // Add to the list
  tweetList.appendChild(li)  

  // add tweet to local storage
  addTweetLocalStorage(tweet);

};

// Removes the tweet from the dom
function removeTweet (e) {
  if (e.target.classList.contains('remove-tweet')) {
    e.target.parentElement.remove();
  }
}

// Adds tweet to local storage
function addTweetLocalStorage (tweet) {
  let tweets = getTweetsFromStorage();

  // Add tweets into the array
  tweets.push(tweet);

  // Convert tweet array into string
  localStorage.setItem('tweets', JSON.stringify('tweets'));
}

function getTweetsFromStorage () {
  let tweets
  const tweetsLS = localStorage.getItem('tweets');
  // Get the values, if null is returned then we create an empty array[]
  if (tweetsLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS)
  }
  return tweets;
}
