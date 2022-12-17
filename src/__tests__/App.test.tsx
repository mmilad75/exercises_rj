import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";

describe("App", () => {
    it("should render correctly", () => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should navigate to counter", () => {
        render(<App />);
        const counterButton = screen.getByText("Counter");

        userEvent.click(counterButton);

        expect(screen.getByText("Counter: 0")).toBeInTheDocument();
    });

    it("should navigate to login", () => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});

        render(<App />);
        const counterButton = screen.getByText("Login");

        userEvent.click(counterButton);

        expect(
            screen.getByPlaceholderText("your-email@email.com")
        ).toBeInTheDocument();
    });
});
