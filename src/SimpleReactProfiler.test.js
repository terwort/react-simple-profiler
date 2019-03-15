import React from "react";
import { mount } from "enzyme";
import SimpleReactProfiler from "./SimpleReactProfiler";

describe("SimpleReactProfiler", () => {
	let wrapper;
	const mountComponent = (props = {}) => {
		wrapper = mount(<SimpleReactProfiler {...props} />);
	};

	afterEach(() => {
		// ensure that each test explicitly calls mountComponent
		wrapper = null;
	});

	it("expects to do something", () => {
		mountComponent();
		expect(true).toBe(true);
	});
});
