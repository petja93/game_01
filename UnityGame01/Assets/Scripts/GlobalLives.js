static var LivesAmount : int = 3;
var InternalLives : int;
var LifeTextBox : GameObject;

function Update(){
	InternalLives = LivesAmount;
	LifeTextBox.GetComponent.<Text>().text = "" + InternalLives;

	if(InternalLives ==0){
		GameOverScene();
	}
}

function GameOverScene(){
	yield WaitForSeconds(2.9);
		Application.LoadLevel(3);
}