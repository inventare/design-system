/**
 * All credits here goes to Chakra-UI package creators and contributors:
 *
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/core/system
 */
import { ForwardRefRenderFunction, forwardRef as forwardReactRef } from "react";
import { RightJoinProps, PropsOf, As, ComponentWithAs } from "./types";

export function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) {
  return forwardReactRef(component as any) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}
