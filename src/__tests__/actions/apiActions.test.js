import * as actions from "../../actions/apiActions";

beforeEach(() => {
  // moxios works by intercepting actual requests made to axios, but it doesn’t stop there.
  // moxios.install();
});

afterEach(() => {
  // moxios.uninstall();
});

describe("test apiActions", () => {
  test("apiStart", () => {
    const expectedVal = {
      type: "API_START"
    };
    expect(actions.apiStart()).toEqual(expectedVal);
  });

  test("apiStart with payload", () => {
    const expectedVal = { type: "API_START", payload: 22 };
    expect(actions.apiStart(22)).toEqual(expectedVal);
  });

  test("apiEnd", () => {
    const expectedVal = {
      type: "API_END"
    };
    expect(actions.apiEnd()).toEqual(expectedVal);
  });

  test("apiEnd with payload", () => {
    const expectedVal = { type: "API_END", payload: 22 };
    expect(actions.apiEnd(22)).toEqual(expectedVal);
  });
});
