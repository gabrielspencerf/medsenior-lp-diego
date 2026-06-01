import type { ReactNode } from 'react';

/** Label acima de títulos — peso e letter-spacing discretos (padrão único na LP). */
export const eyebrowClassName =
  'block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0D6B3C]';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'div';
};

export function Eyebrow({ children, className = '', as: Tag = 'span' }: Props) {
  return <Tag className={`${eyebrowClassName} ${className}`.trim()}>{children}</Tag>;
}
