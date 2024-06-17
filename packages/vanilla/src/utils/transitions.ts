const MILLISECONDS_MULTIPLIER = 1000
const TRANSITION_END = 'transitionend'

export function getTransitionDuration(element?: HTMLElement | null) {
  if (!element) {
    return 0;
  }

  let { transitionDuration, transitionDelay } = window.getComputedStyle(element)
  const floatTransitionDuration = Number.parseFloat(transitionDuration)
  const floatTransitionDelay = Number.parseFloat(transitionDelay)

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0
  }

  transitionDuration = transitionDuration.split(',')[0]
  transitionDelay = transitionDelay.split(',')[0]

  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
};

export function triggerTransitionEnd(element: HTMLElement) {
  element.dispatchEvent(new Event(TRANSITION_END))
}

export function executeAfterTransition(
  callback: () => void,
  transitionElement: HTMLElement,
  waitForTransition: boolean = true,
) {
  if (!waitForTransition) {
    callback();
    return
  }

  const durationPadding = 5
  const emulatedDuration = getTransitionDuration(transitionElement) + durationPadding

  let called = false

  const handler = ({ target }) => {
    if (target !== transitionElement) {
      return
    }

    called = true
    transitionElement.removeEventListener(TRANSITION_END, handler)
    callback();
  }

  transitionElement.addEventListener(TRANSITION_END, handler)
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement)
    }
  }, emulatedDuration)
}
