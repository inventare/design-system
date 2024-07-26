import { ComponentManager } from './ComponentManager'

type TWithId = { id: string };

export type InitializeTriggerManager = ComponentManager<TWithId, any> & {
  initializeInstanceList(element?: HTMLElement): void;
};

export class InitializeTriggerComponentManager {
  private static registered: Array<InitializeTriggerManager> = [];

  static register(manager: InitializeTriggerManager) {
    const already = InitializeTriggerComponentManager.registered;
    const newRegistered = Array.from(new Set([...already, manager]));
    InitializeTriggerComponentManager.registered = newRegistered;
  }

  static onLoad(element?: HTMLElement) {
    for (const manager of InitializeTriggerComponentManager.registered) {
      manager.initializeInstanceList(element);
    }
  }
}
