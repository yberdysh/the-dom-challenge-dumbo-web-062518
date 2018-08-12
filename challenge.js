const init = () => {
	let paused = false;
	let text = Number(document.querySelector('#counter').innerText)
	const pauseButton = document.querySelector('#pause')



// setInterval(function(){ alert("Hello"); }, 3000);


// function to_start(){

// tm=window.setInterval('disp()',1000);


	const startCounter = function(){
		start = setInterval(() => {
			document.querySelector('#counter').innerText = (text += 1)
		}, 1000)
	}

	const stopCounter = function(){
		clearInterval(start)
	}

	const pauseToggle = function(){
		pauseButton.addEventListener("click", () => {
			paused = paused ? false : true
			console.log ("paused", paused)
			if (pauseButton.innerText === "pause"){
				pauseButton.innerText = "resume"
			} else {
				pauseButton.innerText = "pause"
			}

			if (paused){
				stopCounter()
			} else {
				startCounter()
			}
		})
	}

	debugger;



	startCounter()
	pauseToggle()

}

init()