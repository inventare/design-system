export interface ModalProps {
  id: string;
}

export const createModal = ({
  id,
}: ModalProps) => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="modal fade show" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Hello
          </div>
          <div class="modal-footer">
            FOOTER
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  `;

  return container;
};