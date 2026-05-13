import type { ComponentProps, MouseEvent, ReactNode } from 'react';
import { openTypebot } from '../../lib/typebot';

export type CtaVariant = 'primary' | 'secondary' | 'muted' | 'dark' | 'gradient';

/** Padding + tipografia únicos para todos os CTAs da landing (alinhado aos cartões de planos). */
export const ctaButtonSizeClass =
  'px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] sm:text-xs sm:tracking-wide';

const variantClass: Record<CtaVariant, string> = {
  primary:
    'bg-[#B8DC6F] text-[#063D24] hover:bg-[#aacf5e] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
  secondary:
    'bg-[#063D24] text-white hover:bg-[#0D6B3C] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
  muted:
    'border border-slate-300 bg-white text-[#063D24] hover:border-[#063D24]/25 hover:bg-slate-50 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
  dark:
    'border border-neutral-900 bg-neutral-950 text-white hover:bg-neutral-900 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
  gradient:
    'bg-gradient-to-r from-[#d4eb8a] via-[#B8DC6F] to-[#8fbc52] text-[#063D24] hover:brightness-[1.05] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]',
};

type Common = {
  variant?: CtaVariant;
  fullWidth?: boolean;
  className?: string;
  withGreenSheen?: boolean;
  children: ReactNode;
};

type LinkCtaProps = Common &
  Omit<ComponentProps<'a'>, 'className' | 'href'> & {
    href: string;
    typebot?: false;
  };

type TypebotCtaProps = Common &
  Omit<ComponentProps<'a'>, 'className' | 'href'> & {
    typebot: true;
    href?: string;
  };

export type CtaButtonProps = LinkCtaProps | TypebotCtaProps;

export function CtaButton(props: CtaButtonProps) {
  const { variant = 'primary', fullWidth, className = '', withGreenSheen, children, typebot, onClick, ...rest } =
    props;
  const href = typebot ? (props.href ?? '#') : props.href;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typebot) {
      e.preventDefault();
      void openTypebot();
    }
    onClick?.(e);
  };

  const base =
    'group/cta relative inline-flex transform items-center justify-center gap-2 overflow-hidden rounded-full transition-all duration-200 ease-out will-change-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6B3C]';
  const width = fullWidth ? 'w-full' : '';

  const variantStyles =
    variant === 'secondary' && withGreenSheen
      ? 'bg-[#063D24] text-white hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]'
      : variantClass[variant];

  const content =
    withGreenSheen && variant === 'secondary' ? (
      <>
        <span className="relative z-10">{children}</span>
        <span
          className="pointer-events-none absolute inset-0 translate-y-full bg-[#0D6B3C] transition-transform duration-300 group-hover/cta:translate-y-0"
          aria-hidden
        />
      </>
    ) : (
      children
    );

  return (
    <a
      className={`${base} ${variantStyles} ${ctaButtonSizeClass} ${width} ${className}`.trim()}
      {...rest}
      {...(typebot ? { role: 'button' as const, 'aria-haspopup': 'dialog' as const } : {})}
      href={href}
      onClick={handleClick}
    >
      {content}
    </a>
  );
}
