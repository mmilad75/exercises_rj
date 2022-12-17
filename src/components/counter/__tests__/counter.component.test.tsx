import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../counter.component";

describe("Counter component", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<Counter />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should display increment button", () => {
        render(<Counter />);
        const incrementButton = screen.getByText("Increment");

        expect(incrementButton).toBeInTheDocument();
    });

    it("should display decrement button", () => {
        render(<Counter />);
        const decrementButton = screen.getByText("Decrement");

        expect(decrementButton).toBeInTheDocument();
    });

    it("should display correct number of step options", () => {
        render(<Counter />);
        const options = screen.getAllByRole("option");

        expect(options.length).toEqual(3);
    });

    it("should set default counter correctly", () => {
        render(<Counter />);
        const counterText = screen.getByText("Counter: 0");

        expect(counterText).toBeInTheDocument();
    });

    it("should set default step correctly", () => {
        render(<Counter />);
        const firstOption = screen.getByRole<HTMLOptionElement>("option", {
            name: "1",
        });

        expect(firstOption.selected).toEqual(true);
    });

    it("should allow user to change step", () => {
        render(<Counter />);

        userEvent.selectOptions(
            screen.getByRole("combobox"),
            screen.getByRole("option", { name: "10" })
        );

        const option = screen.getByRole<HTMLOptionElement>("option", {
            name: "10",
        });

        expect(option.selected).toBe(true);
    });

    it("should increment the counter by selected step", () => {
        render(<Counter />);
        const incrementButton = screen.getByText("Increment");

        userEvent.selectOptions(
            screen.getByRole("combobox"),
            screen.getByRole("option", { name: "5" })
        );
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);

        const counterText = screen.getByText("Counter: 15");

        expect(counterText).toBeInTheDocument();
    });

    it("should decrement the counter by selected step", () => {
        render(<Counter />);
        const incrementButton = screen.getByText("Increment");
        const decrementButton = screen.getByText("Decrement");

        // select increment by 5
        userEvent.selectOptions(
            screen.getByRole("combobox"),
            screen.getByRole("option", { name: "5" })
        );

        // increment 3 times
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);

        // decrement 2 times
        userEvent.click(decrementButton);
        userEvent.click(decrementButton);

        const counterText = screen.getByText("Counter: 5");

        expect(counterText).toBeInTheDocument();
    });

    it("should not decrement when counter is 0", () => {
        render(<Counter />);
        const decrementButton = screen.getByText("Decrement");

        userEvent.click(decrementButton);

        const counterText = screen.getByText("Counter: 0");

        expect(counterText).toBeInTheDocument();
    });

    it("should not go below zero", () => {
        render(<Counter />);
        const incrementButton = screen.getByText("Increment");
        const decrementButton = screen.getByText("Decrement");

        // increment by 1, 3 times
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);

        // select step 5
        userEvent.selectOptions(
            screen.getByRole("combobox"),
            screen.getByRole("option", { name: "5" })
        );
        userEvent.click(decrementButton);

        const counterText = screen.getByText("Counter: 3");

        expect(counterText).toBeInTheDocument();
    });
});
