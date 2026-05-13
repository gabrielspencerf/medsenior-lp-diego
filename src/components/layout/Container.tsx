import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Largura máxima estreita (FAQ, CTA final). */
  narrow?: boolean;
  /** Coluna dentro de grelha já com `max-w-7xl` + padding no pai (ex.: hero em 2 colunas). */
  bleed?: boolean;
};

export function Container({ children, className = '', narrow, bleed }: Props) {
  if (bleed) {
    return <div className={`min-w-0 ${className}`.trim()}>{children}</div>;
  }
  const max = narrow ? 'max-w-4xl' : 'max-w-7xl';
  return (
    <div className={`${max} mx-auto px-4 sm:px-6 ${className}`.trim()}>{children}</div>
  );
}
