var PipeEntry : GameObject;
var StoodOn: int;

var qwertz : int;

function OnTriggerEnter(col : Collider){
	StoodOn = 1;
}

function OnTriggerExit(col : Collider){
	StoodOn = 0;
}

function Update(){
	if(Input.GetButtonDown("GoDown")){
		if(StoodOn == 1){
			GameObject.Find("FPSControler").GetComponent("FirstPersonController").enabled = false;
			transform.position = Vector3(0, -1000, 0);
			WaitingforPipe();
			qwertz = 1;
		}
	}
}

function WaitingforPipe(){
	PipeEntry.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(2);
	PipeEntry.GetComponent("Animator").enabled = false;
	//GameObject.Find("FPSControler").GetComponent("FirstPersonController").enabled = true;
}