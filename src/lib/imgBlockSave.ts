import type { ImgHTMLAttributes } from 'react';

/** Impede arrastar imagem, abrir menu “Guardar imagem…” e comportamentos semelhantes do browser. */
export const imgBlockSaveAttrs: Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  'draggable' | 'onDragStart' | 'onContextMenu'
> = {
  draggable: false,
  onDragStart: (e) => {
    e.preventDefault();
  },
  onContextMenu: (e) => {
    e.preventDefault();
  },
};
