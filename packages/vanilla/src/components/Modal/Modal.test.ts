import { expect, vi } from 'vitest';
import { Modal, CLASS_NAME_MODAL_SHOW } from './Modal';
import { ModalManager } from './ModalManager';

describe('Modal', () => {
  const renderModal = () => {
    const id = 'my-new-id';
    const title = 'title';
    const subtitle = 'my-new-subtitle';

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="modal modal-sm fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
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
                <label for="input-text-name">Company name</label>
                <input id="input-text-name" type="text" autofocus />
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

    document.body.appendChild(container);

    const manager = new ModalManager();
    const modal = manager.getInstance(container.querySelector('[data-toggle="modal"]') as HTMLElement) as Modal;

    return { id, container, modal };
  };

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('create a modal with a element without id should throw error', () => {
    const div = document.createElement('div');

    expect(() => new Modal(div)).toThrowError();
  });

  test('isVisible should be false if modal display is not block', () => {
    const { modal, container } = renderModal();

    (container.querySelector('.modal') as HTMLElement).style.display = 'none';

    expect(modal.isVisible).toBeFalsy();
  });

  test('isVisible should be true if modal display is block', () => {
    const { modal, container } = renderModal();

    (container.querySelector('.modal') as HTMLElement).style.display = 'block';

    expect(modal.isVisible).toBeTruthy();
  });

  test('toggle() should call hide if isVisible is true', () => {
    const { modal, container } = renderModal();

    (container.querySelector('.modal') as HTMLElement).style.display = 'block';
    modal.show = vi.fn();
    modal.hide = vi.fn();

    modal.toggle();

    expect(modal.hide).toBeCalledTimes(1);
    expect(modal.show).not.toBeCalled();
  });

  test('toggle() should call show if isVisible is false', () => {
    const { modal, container } = renderModal();

    (container.querySelector('.modal') as HTMLElement).style.display = 'none';
    modal.show = vi.fn();
    modal.hide = vi.fn();

    modal.toggle();

    expect(modal.show).toBeCalledTimes(1);
    expect(modal.hide).not.toBeCalled();
  });

  test('show() method should call handleAutoFocus()', () => {
    const { modal } = renderModal();

    const handleAutoFocus = vi.fn();
    Object.defineProperty(modal, 'handleAutoFocus', { value: handleAutoFocus });

    modal.show();

    expect(handleAutoFocus).toBeCalledTimes(1);
  });

  test('show() method should set display to block and correctly work with classes', async () => {
    const { modal, container } = renderModal();
    const modalElement = container.querySelector('.modal') as HTMLElement;
    
    modalElement.style.display = 'none';

    modal.show();
    expect(window.getComputedStyle(modalElement).display).toEqual('block');
    expect(modalElement.getAttribute('aria-hidden')).toBeNull();
    expect(modalElement.getAttribute('aria-modal')).toEqual('true');
    expect(modalElement.getAttribute('role')).toEqual('dialog');
    expect(modal.isTransitioning).toEqual(true);
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeTruthy();

    await vi.waitFor(() => {
      expect(modal.isTransitioning).toEqual(false);
    });
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeTruthy();
  });

  test('call show() two times should only trigger one behaviour', async () => {
    const { modal, container } = renderModal();
    const modalElement = container.querySelector('.modal') as HTMLElement;
    
    modalElement.style.display = 'none';

    modal.show();
    modal.show();
    expect(window.getComputedStyle(modalElement).display).toEqual('block');
    expect(modalElement.getAttribute('aria-hidden')).toBeNull();
    expect(modalElement.getAttribute('aria-modal')).toEqual('true');
    expect(modalElement.getAttribute('role')).toEqual('dialog');
    expect(modal.isTransitioning).toEqual(true);
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeTruthy();

    await vi.waitFor(() => {
      expect(modal.isTransitioning).toEqual(false);
    });
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeTruthy();
  });

  test('hide() method should work correctly with classes and then set display to none', async () => {
    const { modal, container } = renderModal();
    const modalElement = container.querySelector('.modal') as HTMLElement;
    modalElement.style.display = 'block';
    modal.show();
    await vi.waitFor(() => expect(modal.isTransitioning).toEqual(false));
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeTruthy();

    modal.hide();
    expect(window.getComputedStyle(modalElement).display).toEqual('block');
    expect(modalElement.getAttribute('aria-hidden')).toBeNull();
    expect(modalElement.getAttribute('aria-modal')).toEqual('true');
    expect(modalElement.getAttribute('role')).toEqual('dialog');
    expect(modal.isTransitioning).toEqual(true);
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeFalsy();

    await vi.waitFor(() => {
      expect(modal.isTransitioning).toEqual(false);
    });
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeFalsy();
    expect(modalElement.getAttribute('aria-hidden')).toEqual('true');
    expect(modalElement.getAttribute('aria-modal')).toBeNull();
    expect(modalElement.getAttribute('role')).toBeNull();
  });

  test('call hide() two times should only trigger one behaviour', async () => {
    const { modal, container } = renderModal();
    const modalElement = container.querySelector('.modal') as HTMLElement;
    modalElement.style.display = 'block';
    modal.show();
    await vi.waitFor(() => expect(modal.isTransitioning).toEqual(false));
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeTruthy();

    modal.hide();
    modal.hide();
    expect(window.getComputedStyle(modalElement).display).toEqual('block');
    expect(modalElement.getAttribute('aria-hidden')).toBeNull();
    expect(modalElement.getAttribute('aria-modal')).toEqual('true');
    expect(modalElement.getAttribute('role')).toEqual('dialog');
    expect(modal.isTransitioning).toEqual(true);
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeFalsy();

    await vi.waitFor(() => {
      expect(modal.isTransitioning).toEqual(false);
    });
    expect(modalElement.classList.contains(CLASS_NAME_MODAL_SHOW)).toBeFalsy();
    expect(modalElement.getAttribute('aria-hidden')).toEqual('true');
    expect(modalElement.getAttribute('aria-modal')).toBeNull();
    expect(modalElement.getAttribute('role')).toBeNull();
  });

  test('executeByClick() should call toggle', () => {
    const { modal } = renderModal();
    modal.toggle = vi.fn();

    modal.executeByClick(new Event('click'));

    expect(modal.toggle).toBeCalledTimes(1);
  });

  test('handleAutoFocus() should call focus() on the element', async () => {
    const { modal, container } = renderModal();
    const input = container.querySelector('[autofocus]') as HTMLInputElement;
    input.focus = vi.fn();

    modal.show();

    expect(input.focus).toBeCalledTimes(1);
  });
});
