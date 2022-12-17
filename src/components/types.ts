import { CSSProperties } from "react";

export type Components = "users" | "counter" | "login";

export interface Styles {
    [key: string]: CSSProperties;
}
