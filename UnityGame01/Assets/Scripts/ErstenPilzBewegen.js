var AktuellerPilz : GameObject;
var DerPilz : GameObject;

function Update(){
	transform.parent = null;
	transform.Translate(Vector3.up * 2 * Time.deltatime, Space.World);
	BeendeAnimation();
}

function BeendeAnimation(){
	yield WaitForSeconds(1);
	AktuellerPilz.SetActive(true);
	DerPilz.SetActive(false);

}