var ZylinderDeckel2 : GameObject;
var StoodOn : int;

var MainCam : GameObject;
var SecondCam : GameObject;
var MainPlayer : GameObject;

var FadeScreen : GameObject;

var ZylinderSound : AudioSource;


function OnTriggerEnter (col : Collider){
	StoodOn = 1;
}

function OnTriggerExit (col : Collider){
	StoodOn = 0;
}

function Update(){
	if(Input.GetButtonDown("GoDown")){
		if(StoodOn == 1){
			//GameObject.find("FPSController").GetComponent("FirstPersonController").enabled=false;
			transform.position = Vector3(0, -1000, 0);
			WaitingforPipe();
		}
	}
}

function WaitingforPipe(){
	ZylinderSound.Play();
	FadeScreen.SetActive(true);
	ZylinderDeckel2.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(1.5);
	FadeScreen.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator").enabled = false;
	ZylinderDeckel2.GetComponent("Animator").enabled = false;
	SecondCam.SetActive(true);
	MainCam.SetActive(false);
	MainPlayer.transform.position = Vector3(14, -19, 0.5);
	FadeScreen.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator").enabled = false;
	FadeScreen.SetActive(false);
	//GameObject.find("FPSController").GetComponent("FirstPersonController").enabled=true;
}