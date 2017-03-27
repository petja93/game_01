var ZylinderDeckel2 : GameObject;
var StoodOn : int;

var MainCam : GameObject;
var SecondCam: GameObject;
var MainPlayer : GameObject;


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
	ZylinderDeckel2.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(2);
	ZylinderDeckel2.GetComponent("Animator").enabled = false;
	SecondCam.setActive(true);
	MainCam.setActive(false);
	MainPlayer.transform.position = Vector3(14.49, -19.13, 0.5);
	//GameObject.find("FPSController").GetComponent("FirstPersonController").enabled=true;
}