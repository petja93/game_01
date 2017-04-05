function Start(){
	yield WaitForSeconds(4);
	GlobalLives.LivesAmount += 3;
	Application.LoadLevel(2);
}