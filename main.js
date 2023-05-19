//Déclaration de la variable contenant les citations:
var quotes = [
    '“Le point de vue le plus simple est toujours le meilleur.”',
    '“Rien n\'est plus simple que de poser une question difficile.”',
    '“Le secret pour être un bon père est simple : écoutez toujours vos enfants...”',
    '“La vie serait beaucoup plus simple si l\on ne retenait que l\essentiel des choses.”',
    '“Il est impossible d\éviter les secousses quotidiennes. Elles font partie de la vie.”',
    '“Ne priez pas pour une vie facile, priez pour avoir la force d\endurer la difficulté.”',
    '“Plus grand est l\obstacle, et plus grande est la joie de le surmonter.”',
    '“Le meilleur remède pour tous les problèmes, c\est la patience.”'
];

//Fonction de renvoie des citations
function generateQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));

    //Récupérer de manière aléatoire une citation dans le tableau des citations
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


window.onload = function(){
    generateQuote()
  }
