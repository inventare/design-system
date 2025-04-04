import { ModalManager } from "../../../../packages/vanilla/src/components/Modal/ModalManager";

export interface SheetProps {
  position: 'left' | 'right';
  id: string;
  title?: string;
  subtitle?: string;
}

export interface SheetRenderOptions {
  addEvents?: boolean;
}

export const renderSheet = (props: SheetProps, options: SheetRenderOptions) => {
  const { id, title, subtitle, position = 'right' } = props;
  const { addEvents } = options;

  const container = document.createElement('div');

  container.innerHTML = `
    <div class="sheet-${position} modal modal-sm fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog sheet-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">${title}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="icon-ui-close"></i>
            </button>
            <p class="modal-subtitle">${subtitle}</p>
          </div>
          <div class="modal-body">
            <div class="form-control">
              <label for="input-text-name" autofocus>Company name</label>
              <input id="input-text-name" type="text" />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn danger outline" data-dismiss="modal">Back</button>
            <button class="btn primary" data-dismiss="modal">Payment detail</button>
          </div>
        </div>
      </div>
    </div>

    <button class="btn primary" data-toggle="modal" data-target="#${id}">Open</button>
  `;

  if (addEvents) {
    const manager = new ModalManager();
    container.addEventListener('click', (ev) => manager.getInstance(ev.target as HTMLElement)?.executeByClick(ev));
  }

  return container;
}
