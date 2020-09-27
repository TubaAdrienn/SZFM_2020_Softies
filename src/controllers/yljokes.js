var get = new GetJokes();
var ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    var jokes = get.getFromLocalStorage();
    for (let i = 0; i < jokes.values.length; i++) {
        ui.createJokeCards("80vw", jokes.values[i], jokes.keysToSend[i], false, true);
    }
    addLikeListener();

})

function addLikeListener() {
    document.querySelectorAll('.like-box').forEach(item => {
        item.addEventListener('click', (e) => {
            console.log('clickity');
            let id = e.target.id;
            console.log(id);
            get.removeFromLocalStorage(id)
        });
    })
}