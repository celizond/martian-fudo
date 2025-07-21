import type { ChangeEventHandler, MouseEventHandler } from "react";

export type childrenType = React.ReactNode;
export type onClickType = MouseEventHandler<HTMLButtonElement>;
export type onChangeType = ChangeEventHandler<HTMLTextAreaElement>;
export type onInputChangeType = ChangeEventHandler<HTMLInputElement>
export type eventType = React.FormEvent;

export type reactChildrenProps = {
    children: React.ReactNode;
};

export type keyValueType = {
    [key: string]: any;
}
