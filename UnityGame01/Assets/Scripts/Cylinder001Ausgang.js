var ZylinderSound : AudioSource;
var FadeScreen : GameObject;
var MainCam : GameObject;
var SecondCam : GameObject;
var ZylinderDeckel2 : GameObject;
var MainPlayer : GameObject;

function OnTriggerEnter(col : Collider){
	ZylinderSound.Play();
	FadeScreen.SetActive(true);
	FadeScreen.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator"). enabled = false;
	MainCam.SetActive(true);
	SecondCam.SetActive(false);
	MainPlayer.transform.position = Vector3(29, 1, 0.5);
	ZylinderDeckel2.GetComponent("Animator").enabled = true;
	FadeScreen.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator"). enabled = false;
	yield WaitForSeconds(1);
	ZylinderDeckel2.GetComponent("Animator").enabled = false;
	FadeScreen.SetActive(false);
}