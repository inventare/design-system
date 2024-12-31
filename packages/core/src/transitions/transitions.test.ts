import { vi } from 'vitest';
import { getTransitionDuration, triggerTransitionEnd, executeAfterTransition } from './transitions';

describe('transitions utils', () => {
  it('getTransitionDuration() should return 0 if element is null', () => {
    expect(getTransitionDuration(null)).toBe(0);
  });

  it('getTransitionDuration() should return 0 if transitionDuration and transitionDelay is not present', () => {
    (window as any).getComputedStyle = vi.fn(() => ({}));
    const node = {} as HTMLElement;

    expect(getTransitionDuration(node)).toBe(0);
  });

  it('getTransitionDuration() should return 0 if transitionDuration and transitionDelay is 0', () => {
    (window as any).getComputedStyle = vi.fn(() => ({
      transitionDuration: '0',
      transitionDelay: '0',
    }));
    const node = {} as HTMLElement;

    expect(getTransitionDuration(node)).toBe(0);
  });

  it('getTransitionDuration() should compute in ms', () => {
    (window as any).getComputedStyle = vi.fn(() => ({
      transitionDuration: '100',
      transitionDelay: '200',
    }));
    const node = {} as HTMLElement;

    expect(getTransitionDuration(node)).toBe(300000);
  });

  it('triggerTransitionEnd() should trigger "transitionend" event', () => {
    const eventFn = vi.fn();
    const node = document.createElement('div');
    node.addEventListener('transitionend', eventFn);

    triggerTransitionEnd(node);

    expect(eventFn).toHaveBeenCalledOnce();
  });

  it('executeAfterTransition() should run callback if waitForTransition = false', () => {
    const callbackFn = vi.fn();
    const node = document.createElement('div');

    executeAfterTransition(callbackFn, node, false);

    expect(callbackFn).toHaveBeenCalledOnce();
  })
});
