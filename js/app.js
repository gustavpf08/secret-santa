let namesToSort = [];

function friendsToSortOut() {
  let friendName = document.getElementById("nome-amigo");

  if (friendName.value === "") {
    return alert("Por favor, adicione um amigo!");
  } else {
    namesToSort.push(friendName.value);
    friendName.value = "";
  }
}

function includedFriends(tag, text) {
  let gettingTag = document.getElementById(tag);
  gettingTag.innerHTML = text;
}

function addFriends() {
  friendsToSortOut();
  includedFriends("lista-amigos", namesToSort);
}

function sortOut() {
  for (let i = namesToSort.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [namesToSort[i], namesToSort[j]] = [namesToSort[j], namesToSort[i]];
  }
  return namesToSort;
}

function sortear() {
  let shuffledArray = sortOut(namesToSort);
  console.log(shuffledArray);
}

document.addEventListener("keydown", function (event) {
  if (event.key === 13 || event.key == "Enter") {
    event.preventDefault();
    addFriends();
  }
});
