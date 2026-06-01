import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  center?: boolean;
  tone?: 'dark' | 'light';
};

/** H2 de secção — escala alinhada aos cards e ao FAQ. */
export function SectionTitle({ children, className = '', center, tone = 'dark' }: Props) {
  return (
    <h2
      className={`font-display text-2xl font-bold leading-snug tracking-tight md:text-3xl lg:text-4xl ${tone === 'light' ? 'text-[#F7F8F1]' : 'text-[#063D24]'} ${center ? 'text-center' : ''} ${className}`.trim()}
    >
      {children}
    </h2>
  );
}
