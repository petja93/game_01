var FadeScreen : GameObject;
var ThePlayer : GameObject;

function OnTriggerEnter(){
	FadeScreen.SetActive(true);
	FadeScreen.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator").enabled = false;
	Application.LoadLevel(4);	
}