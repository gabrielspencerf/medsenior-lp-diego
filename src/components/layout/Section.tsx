import type { ReactNode } from 'react';

export type SectionVariant = 'default' | 'muted' | 'white' | 'dark';

const variantClass: Record<SectionVariant, string> = {
  default: 'bg-[#FDFDFD]',
  muted: 'bg-[#F9FAF6]',
  white: 'bg-white',
  dark: 'bg-[#02160E] text-white',
};

type Props = {
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  className?: string;
  /** false = sem padding vertical extra (ex.: hero composto). */
  padded?: boolean;
};

export function Section({
  children,
  id,
  variant = 'default',
  className = '',
  padded = true,
}: Props) {
  const padding = padded ? 'py-12 sm:py-16 md:py-24' : '';
  return (
    <section
      id={id}
      className={`${variantClass[variant]} ${padding} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
