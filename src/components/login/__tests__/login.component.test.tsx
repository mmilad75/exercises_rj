import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../login.component";

describe("Login component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<Login />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should allow user to type username", () => {
        render(<Login />);
        const testEmail = "mmilad@gmail.com";

        userEvent.type(
            screen.getByPlaceholderText("your-email@email.com"),
            testEmail
        );

        expect(screen.getByPlaceholderText("your-email@email.com")).toHaveValue(
            testEmail
        );
    });

    it("should allow user to type password", () => {
        render(<Login />);
        const testPassword = "1234$";

        userEvent.type(
            screen.getByPlaceholderText("Enter your password"),
            testPassword
        );

        expect(screen.getByPlaceholderText("Enter your password")).toHaveValue(
            testPassword
        );
    });

    it("should show alert on form submit", () => {
        render(<Login />);
        const mockAlert = jest.fn();
        jest.spyOn(window, "alert").mockImplementation(mockAlert);
        window.HTMLFormElement.prototype.submit = () => {};

        const testEmail = "mmilad@gmail.com";
        const testPassword = "1234$";

        userEvent.type(
            screen.getByPlaceholderText("your-email@email.com"),
            testEmail
        );
        userEvent.type(
            screen.getByPlaceholderText("Enter your password"),
            testPassword
        );
        userEvent.click(screen.getByRole("button"));

        expect(mockAlert).toBeCalledWith(
            `Login submitted: ${testEmail}, ${testPassword}`
        );
    });

    it("should show help alert after 5 seconds", () => {
        jest.useFakeTimers();

        render(<Login />);
        const mockAlert = jest.fn();
        jest.spyOn(window, "alert").mockImplementation(mockAlert);

        jest.advanceTimersByTime(6000);

        expect(mockAlert).toBeCalledWith("Do you need help?");
    });
});
