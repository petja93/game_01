var FragezeichenBlock : GameObject;
var NormalerBlock : GameObject;
var Pilz : GameObject;

function OnTriggerEnter(col: Collider){
	FragezeichenBlock.SetActive(false);
	NormalerBlock.SetActive(true);
	yield WaitForSeconds(0.2);
	Pilz.SetActive(true);
}