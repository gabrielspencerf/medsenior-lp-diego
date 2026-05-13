import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  center?: boolean;
};

/** H2 de secção — escala alinhada aos cards e ao FAQ. */
export function SectionTitle({ children, className = '', center }: Props) {
  return (
    <h2
      className={`font-display text-2xl font-bold leading-snug tracking-tight text-[#063D24] md:text-3xl lg:text-4xl ${center ? 'text-center' : ''} ${className}`.trim()}
    >
      {children}
    </h2>
  );
}
