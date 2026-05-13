/** Placeholder mínimo enquanto carrega chunk das rotas legais (evita flash vazio). */
export function LegalPageFallback() {
  return (
    <div
      className="flex min-h-[45vh] items-center justify-center bg-[#FDFDFD]"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-1 w-28 animate-pulse rounded-full bg-[#063D24]/20" />
    </div>
  );
}
