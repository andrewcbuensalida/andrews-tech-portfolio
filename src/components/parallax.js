function parallax() {
	// Add event listener
	document.addEventListener("mousemove", parallax);
	const elem = document.querySelector("#parallax");
	// Magic happens here
	function parallax(e) {
		let _w = window.innerWidth / 2;
		let _h = window.innerHeight / 2;
		let _mouseX = e.clientX;
		let _mouseY = e.clientY;
		let _depth1 = `${5 - (_mouseX - _w) * 0.01}em ${
			5 - (_mouseY - _h) * 0.01
		}em`;
		let _depth2 = `${5 - (_mouseX - _w) * 0.02}em ${
			5 - (_mouseY - _h) * 0.02
		}em`;
		let _depth3 = `${5 - (_mouseX - _w) * 0.06}em ${
			5 - (_mouseY - _h) * 0.06
		}em`;
		let _depth4 = `${5 - (_mouseX - _w) * 0.06}em ${
			5 - (_mouseY - _h) * 0.06
		}em`;

		let x = `${_depth3}, ${_depth2}, ${_depth1}, ${_depth4}`;
		console.log(x);
		elem.style.backgroundPosition = x;
	}
}

export default parallax;
