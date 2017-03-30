var CoinSound : AudioSource;

function OnTriggerEnter(col : Collider){
	transform.position = Vector3(0, -1000, 0);
	CoinSound.Play();
	GlobalCoins.CoinCount += 1;
}