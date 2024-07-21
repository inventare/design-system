import { ComponentManager } from './ComponentManager'

export interface ClickTriggerComponent {
  executeByClick(): void;
}

type TWithId = { id: string };

export class ClickTriggerComponentManager {
  private static registered: Array<ComponentManager<TWithId, ClickTriggerComponent>> = [];

  static register(manager: ComponentManager<TWithId, ClickTriggerComponent>) {
    const already = ClickTriggerComponentManager.registered;
    const newRegistered = Array.from(new Set([...already, manager]));
    ClickTriggerComponentManager.registered = newRegistered;
  }

  static onClick(ev: Event) {
    for (const manager of ClickTriggerComponentManager.registered) {
      const instance = manager.getInstance(ev.target as HTMLElement);
      if (!instance) {
        continue;
      }
      instance.executeByClick();
    }
  }
}
