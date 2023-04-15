import { ForwardRefRenderFunction, forwardRef as forwardReactRef } from "react";
import {
  RightJoinProps,
  PropsOf,
  As,
  ComponentWithAs,
} from "../types/extensible.types";

export function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) {
  return forwardReactRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}
