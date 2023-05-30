var hs = JSON.parse(window.localStorage.getItem('highscores'));
if (hs.length){


var shscore = hs.sort((a, b) => b - a);
for (let i = 0; i < shscore.length; i++) {
    const element = shscore[i];
    var listItem = document.createElement('li');
    listItem.textContent = element.initials + ' - ' + element.score;
document.getElementById('high-score-list').append(listItem);

    
}  
}