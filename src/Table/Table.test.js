import React from "react";
import { mount } from "enzyme";
import Table from "./Table";

describe("Table", () => {
	let wrapper;
	const mountComponent = (props = {}) => {
		wrapper = mount(<Table {...props} />);
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
