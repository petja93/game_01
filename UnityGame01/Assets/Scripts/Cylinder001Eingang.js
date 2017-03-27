var ZylinderDeckel2 : GameObject;
var StoodOn : int;


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
	//GameObject.find("FPSController").GetComponent("FirstPersonController").enabled=true;
}