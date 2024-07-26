import { ClickTriggerComponentManager } from './base/ClickTriggerComponent';
import { InitializeTriggerComponentManager } from './base/InitializerTriggerComponent';
import './components';

function handleDocumentBodyClick(ev: MouseEvent) {
  ClickTriggerComponentManager.onClick(ev);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.removeEventListener('click', handleDocumentBodyClick);
  document.body.addEventListener('click', handleDocumentBodyClick);

  InitializeTriggerComponentManager.onLoad();
  // FIXME: fix here
  // const content = document.head.querySelector<HTMLMetaElement>('[name="inventare-custom-loaders"]')?.content || '';
  // const loaderEvents = content.split(',').map((item) => item.trim());
  // 
});
