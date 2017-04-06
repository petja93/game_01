var Sterben : AudioSource;
var LevelMusic : GameObject;
var CamFollow : GameObject;
var ThePlayer : GameObject;

function OnTriggerEnter(col : Collider){
	GlobalLives.LivesAmount -= 1;
	LevelMusic.SetActive(false);
	Sterben.Play();
	CamFollow.GetComponent("CameraFallout").enabled = false;
	ThePlayer.GetComponent("ThirdPersonUserControl").enabled = false;
	ThePlayer.GetComponent("ThirdPersonCharakter").enabled = false;
	//ThePlayer.transform.localScale -= new Vector3(0.0, 0.7, 0.0);
	ThePlayer.GetComponent("CapsuleCollider").enabled = false;
	yield WaitForSeconds(3);
	Application.LoadLevel(0);

}