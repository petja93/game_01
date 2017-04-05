var Sterben : AudioSource;
var LevelMusic : GameObject;

function OnTriggerEnter(col : Collider){
	LevelMusic.SetActive(false);
	Sterben.Play();
	yield WaitForSeconds(3);
	Application.LoadLevel(0);

}