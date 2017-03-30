var Pilz : GameObject;

function OnTriggerEnter(col : Collider){
	this.GetComponent("BoxCollider").enabled = false;
	Pilz.GetComponent("PilzBewegen").enabled = false;
	Pilz.trasnform.localScale -= new Vector3(0, 0, 0.8);
	Pilz.transform.localPosition -= new Vector3(0, 0, 0.4);
	yield WaitForSeconds (1);
	Pilz.transform.position = Vector3(0, -1000, 0);
}