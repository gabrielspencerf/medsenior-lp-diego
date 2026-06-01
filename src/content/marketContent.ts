import { curitibaMarketContent } from './markets/curitiba';
import { recifeMarketContent } from './markets/recife';
import type { MarketContent, MarketSlug } from './types';

const marketsBySlug: Record<MarketSlug, MarketContent> = {
  curitiba: curitibaMarketContent,
  recife: recifeMarketContent,
};

const requestedMarket = (import.meta.env.VITE_MARKET as string | undefined)?.toLowerCase() as
  | MarketSlug
  | undefined;

export const marketContent = (requestedMarket && marketsBySlug[requestedMarket]) || curitibaMarketContent;
