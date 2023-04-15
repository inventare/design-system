import { ElementType } from "react";

export type As = ElementType;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type HTMLProps<T extends As> = Omit<PropsOf<T>, "ref"> & {
  as?: As;
};
