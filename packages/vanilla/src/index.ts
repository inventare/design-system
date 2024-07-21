import { ClickTriggerComponentManager } from './base/ClickTriggerComponent';
import './components';

function handleDocumentBodyClick(ev: MouseEvent) {
  ClickTriggerComponentManager.onClick(ev);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.removeEventListener('click', handleDocumentBodyClick);
  document.body.addEventListener('click', handleDocumentBodyClick);
});
