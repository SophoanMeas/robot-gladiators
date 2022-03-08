var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
  };

  var enemyInfo = [
    {
      name: "Roborto",
      attack: 12
    },
    {
      name: "Amy Android",
      attack: 13
    },
    {
      name: "Robo Trumble",
      attack: 14
    }
  ];

console.log(enemyNames);
console.log(enemyInfo.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemy.name) {
  while (playerInfo.health > 0 && enemy.health > 0) {
  
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');


    if (promptFight === "skip" || promptFight === "SKIP") {
 
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");


      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
    
        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = Math.max(0, playerInfo.money - 10);;
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');

      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// function to generate a random numeric value
var randomNumber = function() {
    var value = Math.floor(Math.random() * 21) + 40;
  
    return value;
  };

// function to start a new game
var startGame = function() {
      // reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyObj = enemyInfo[i];
  
        pickedEnemyObj.health = randomNumber(40, 60);

        fight(pickedEnemyObj);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    // startGame();
  };

  var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
  }