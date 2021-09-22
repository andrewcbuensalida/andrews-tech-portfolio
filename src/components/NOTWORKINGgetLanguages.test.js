import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import getLanguages from "./getLanguages";

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("gets languages or not", () => {
	const fakeLanguages = {
		Javascript: 80,
		HTML: 20,
	};
	jest.spyOn(global, "fetch").mockImplementation(() => {
		Promise.resolve({
			json: () => Promise.resolve(fakeLanguages),
		});
	});
});
// act(()=>{
//     getLanguages()
// })
expect(getLanguages).toBe();
