import { render, screen, waitFor } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import React from "react";
import UsersList from "../users-list.component";
import users from "../mockUsersList";

describe("UsersList component", () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it("should render correctly", () => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});
        const { asFragment } = render(<UsersList />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should display loading message when there is no usersFetched", () => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});
        render(<UsersList />);

        const messageElement = screen.getByText("Loading users...");

        expect(messageElement).toBeInTheDocument();
    });

    it("should display correct number of users", async () => {
        mockAxios.get.mockResolvedValue({ data: users });
        jest.spyOn(React, "useEffect").mockImplementationOnce((callback) => {
            callback();
        });

        render(<UsersList />);

        await waitFor(() => {
            expect(screen.getAllByRole("listitem").length).toBe(users.length);
        });
    });
});
