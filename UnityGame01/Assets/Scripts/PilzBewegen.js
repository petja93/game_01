var leftPoint : float = 13;
var rightPoint : float = 28;
var direction : int = 1;

function Update(){
	if(direction == 1){
		transform.Translate(Vector3.right * 2 * Time.deltaTime, Space.World);
		direction = 1;
	}

	if(this.transform.position.x > rightPoint){
		direction = 2;
	}

	if(direction == 2){
		transform.Translate(Vector3.right * -2 * Time.deltaTime, Space.World);
		direction = 2;
	}

	if(this.transform.position.x < leftPoint){
		direction = 1;
	}
}