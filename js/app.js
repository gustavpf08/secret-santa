let sortedList = document.getElementById("lista-sorteio");
let friendsList = document.getElementById("lista-amigos");
let namesToSort = [];

function friendsToSortOut() {
  let friendName = document.getElementById("nome-amigo");

  if (friendName.value === "") {
    return alert("Por favor, adicione um amigo!");
  } else {
    namesToSort.push(friendName.value);
    friendsList.textContent = namesToSort;
    friendName.value = "";
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // Desestruturando um array, fazendo justamente a função de swap
    // O array no index i se transforma no array de index j e vice-versa, trocando as posições
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function sortear() {
  let shuffledArray = shuffle(namesToSort);
  console.log(shuffledArray);

  for (let i = 0; i < namesToSort.length; i++) {
    sortedList.innerHTML += `${namesToSort[i]} -> ${namesToSort[i + 1]} <br>`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === 13 || event.key == "Enter") {
    event.preventDefault();
    friendsToSortOut();
  }
});
