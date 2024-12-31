import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
  useRef,
  createElement,
} from 'react';
import { HTMLProps, forwardRef } from '../../core';
import { useComposedRefs } from '../../hooks';
import {
  getCollapseContentSize,
  executeAfterTransition,
  reflow
} from '@inventare/core';

export interface CollapseContextValue {
  isOpen: boolean;
  isDisabled?: boolean;
  onOpenToggle(): void;
}

export const CollapseContext = createContext({} as CollapseContextValue);

export const useCollapseContext = () => useContext(CollapseContext);

export interface  CollapseProps extends PropsWithChildren<{
  isOpen?: boolean;
  isDisabled?: boolean;
}> {};

export const Collapse = ({ children, isOpen: rawIsOpen, isDisabled }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(rawIsOpen || false);

  const onOpenToggle = () => {
    setIsOpen(prev => {
      return !prev;
    });
  };

  return (
    <CollapseContext.Provider value={{ isOpen, onOpenToggle, isDisabled }}>
      {children}
    </CollapseContext.Provider>
  )
};

export type CollapseTriggerProps = Omit<HTMLProps<"button">, 'onClick' | 'disabled'>;

export const CollapseTrigger = forwardRef<CollapseTriggerProps, "button">((props, ref) => {
  const { as, ...rest } = props;
  const { onOpenToggle, isDisabled, isOpen } = useCollapseContext();

  return createElement(as || 'button', {
    ...rest,
    ref,
    disabled: isDisabled,
    onClick: () => onOpenToggle(),
    'aria-expanded': isOpen
  });
});

export type CollapseContentProps = HTMLProps<"div">;

export const CLASS_NAME_SHOW = 'show';
export const CLASS_NAME_COLLAPSE = 'collapse';
export const CLASS_NAME_COLLAPSING = 'collapsing';
export const CLASS_NAME_COLLAPSED = 'collapsed';
export const CLASS_NAME_HORIZONTAL = 'horizontal';

export const CollapseContent = forwardRef<CollapseContentProps, 'div'>((props, forwardedRef) => {
  const { as, style, className, ...rest } = props;
  const { isOpen } = useCollapseContext();

  const ref = useRef<HTMLDivElement>(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const content = ref.current;
      if (!content) {
        return;
      }
      if (content.classList.contains(CLASS_NAME_SHOW) && isOpen) {
        return;
      }
      const { value, property } = getCollapseContentSize(content, false, !isOpen);

      content.style[property] = value;
      reflow(content);

      content.classList.add(CLASS_NAME_COLLAPSING);
      content.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)
      content.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);

      const complete = () => {
        content.classList.remove(CLASS_NAME_COLLAPSING);
        content.classList.add(CLASS_NAME_COLLAPSE);
        if (isOpen) {
          content.classList.add(CLASS_NAME_SHOW);
        }
      };
      executeAfterTransition(complete, content);

      const { value: destValue } = getCollapseContentSize(content, false, isOpen);

      content.style[property] = destValue;
    }, 100);

    return () => clearTimeout(debounce);
  }, [isOpen]);

  const [defaultOpen] = useState(isOpen);

  return createElement(as || 'div', {
    ...rest,
    className: `${className || ''} collapse ${defaultOpen ? CLASS_NAME_SHOW : ''}`,
    ref: composedRefs,
  });
});
