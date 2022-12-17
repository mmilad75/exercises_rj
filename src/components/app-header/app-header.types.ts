import { Components } from "../types";

export interface IAppHeaderProps {
    selected: Components;
    onSelect: (item: Components) => void;
}

export interface IAppHeaderItems {
    key: Components;
    title: string;
}
