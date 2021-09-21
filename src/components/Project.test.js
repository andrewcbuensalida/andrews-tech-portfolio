import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Project from "./Project";

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

it("renders an IMG or not", () => {
	act(() => {
		render(<Project filters={["js"]} data={{ stack: ["js"] }} />, container);
	});
	expect(container.contains(document.getElementsByTagName("IMG")[0])).toBe(
		true
	);
});
