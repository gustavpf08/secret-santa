let namesToSort = [];

function friendsToSortOut() {
  let friendName = document.getElementById("nome-amigo");
  namesToSort.push(friendName.value);
}

function includedFriends(tag, text) {
  let gettingTag = document.getElementById(tag);
  gettingTag.innerHTML = text;
}

function addFriends() {
  friendsToSortOut();
  includedFriends("lista-amigos", namesToSort);
}

function sortOut() {}

document.addEventListener("keydown", function (event) {
  if (event.key === 13 || event.key == "Enter") {
    event.preventDefault();
    addFriends();
  }
});
