export interface ModalProps {
  id: string;
  center?: boolean;
}

export const createModal = ({
  id,
  center,
}: ModalProps) => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog ${center && 'modal-dialog-centered'} ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Hello
          </div>
          <div class="modal-footer">
            <button class="btn danger" data-dismiss="modal">Close</button>
            <button class="btn primary" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>

    <button class="btn primary" data-toggle="modal" data-target="#${id}">Open</button>
  `;

  return container;
};