import { ModalManager } from "../../../../packages/vanilla/src/components/Modal";

export interface ModalProps {
  id: string;
  title?: string;
  subtitle?: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  buttonText?: string;
}

export interface ModalRenderOptions {
  addEvents?: boolean;
}

export const renderModal = (props: ModalProps, options: ModalRenderOptions) => {
  const { id, title, subtitle, center, size = 'md', buttonText = 'Open' } = props;
  const { addEvents } = options;

  const container = document.createElement('div');

  container.innerHTML = `
    <div class="modal modal-${size} fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog ${center && 'modal-dialog-centered'} ">
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

    <button class="btn primary" data-toggle="modal" data-target="#${id}">${buttonText}</button>
  `;

  if (addEvents) {
    const manager = new ModalManager();
    container.addEventListener('click', (ev) => manager.getInstance(ev.target as HTMLElement)?.executeByClick(ev));
  }

  return container;
};
