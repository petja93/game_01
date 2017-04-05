static var LivesAmount : int = 3;
var InternalLives : int;
var LifeTextBox : GameObject;

function Update(){
	InternalLives = LivesAmount;
	LifeTextBox.GetComponent.<Text>().text = "" + InternalLives;
}