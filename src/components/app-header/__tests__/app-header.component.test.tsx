import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppHeader from "../app-header.component";

describe("AppHeader component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(
            <AppHeader selected="counter" onSelect={jest.fn()} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("should display all items", () => {
        render(<AppHeader selected="counter" onSelect={jest.fn()} />);

        const items = screen.getAllByRole("button");

        expect(items.length).toEqual(3);
    });

    it("should call onSelect when clicking on items", () => {
        const mockOnSelect = jest.fn();
        render(<AppHeader selected="counter" onSelect={mockOnSelect} />);

        const items = screen.getAllByRole("button");

        userEvent.click(items[0]);

        expect(mockOnSelect).toBeCalled();
    });
});
