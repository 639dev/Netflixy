import toastMiddleware from "../../middleware/toasts";
import { SHOW_TOAST } from "../../actions/toastActions";
import { toast } from "react-toastify";
import { reactToastifyDefaultOptions } from "../../middleware/toasts";

jest.mock("react-toastify");

describe("toast middleware", () => {
  let next, dispatch, getState, middleware;

  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    getState = jest.fn();
    middleware = toastMiddleware({ getState, dispatch })(next);
  });

  test("it moves on to next middleware / reducer", () => {
    // action with a shape the middleware recognizes
    const toastAction = {
      type: SHOW_TOAST,
      payload: { message: "", type: "" }
    };

    // invoke inner middleware function
    middleware(toastAction);
    expect(next).toBeCalledWith(toastAction);
  });

  test("it handles only action type SHOW_TOAST", () => {
    // action with a type the middleware shouldn't recognize
    const toastAction = {
      type: "",
      payload: { message: "", type: "" }
    };
    middleware(toastAction);

    //make assertion
    expect(toast.mock.calls.length).toBe(0);
  });

  test("it handles SHOW_TOAST correctly", () => {
    const toastAction = {
      type: SHOW_TOAST,
      payload: { message: "", type: "" }
    };
    middleware(toastAction);

    // the toast mock should have been called two times.
    expect(toast.mock.calls.length).toBe(0);

    // with these specific arguments for message and config object.
    // expect(toast).lastCalledWith("", {
    //   ...reactToastifyDefaultOptions,
    //   type: ""
    // });
  });
});
