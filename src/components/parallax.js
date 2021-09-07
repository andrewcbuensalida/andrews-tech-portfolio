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
		// console.log(elem.style.backgroundPosition);
		let _depth1 = `${40 - (_mouseX - _w) * 0.01}% ${
			100 - (_mouseY - _h) * 0.01
		}%`;
		let _depth2 = `${60 - (_mouseX - _w) * 0.03}% ${
			100 - (_mouseY - _h) * 0.02
		}%`;
		let _depth3 = `${30 - (_mouseX - _w) * 0.05}% ${
			120 - (_mouseY - _h) * 0.06
		}%`;
		let _depth4 = `${70 - (_mouseX - _w) * 0.08}% ${
			120 - (_mouseY - _h) * 0.06
		}%`;

		let x = `${_depth3}, ${_depth2}, ${_depth1}, ${_depth4}`;
		// console.log(x);
		elem.style.backgroundPosition = x;
	}
}

export default parallax;
