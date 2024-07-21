export abstract class ComponentManager<
  TElement extends { id: string },
  TInstance,
> {
  private instances: Record<string, TInstance> = {};

  protected abstract getElement(target?: HTMLElement | null): TElement | null;

  protected abstract createInstance(element: TElement): TInstance;

  isInitialized(element: TElement) {
    return !!(this.instances[element.id])
  }

  getInstance(target?: HTMLElement | null): TInstance | null {
    const element = this.getElement(target);
    if (!element) {
      return null;
    }
    if (this.instances[element.id]) {
      return this.instances[element.id];
    }
    const instance = this.createInstance(element);
    this.instances[element.id] = instance;
    return instance;
  }
}
