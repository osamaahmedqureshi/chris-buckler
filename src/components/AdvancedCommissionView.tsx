import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from './Reveal';
import { LINKS, openDiscoveryCall, openExternal } from '../data/links';

/**
 * CALCULATOR 2 — Advanced Commission (dedicated page)
 * Check (£10,000 fee): listing £1,584 with / £0 without; total £5,664 vs £6,880
 */
export const AdvancedCommissionView: React.FC = () => {
  const [fee, setFee] = useState(10000);

  const withShare = fee * 0.6;
  const withoutShare = fee * 0.7;
  const rawAdvance = withShare * 0.3;
  const advance = Math.min(rawAdvance, 3500);
  const adminFee = advance * 0.12;
  const withListing = advance - adminFee;
  const withCompletion = withShare - advance - 120;
  const withTotal = withListing + withCompletion;
  const withoutListing = 0;
  const withoutCompletion = withoutShare - 120;
  const withoutTotal = withoutCompletion;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val);

  const formatDiff = (val: number) => {
    const sign = val > 0 ? '+' : '';
    return `${sign}${formatCurrency(val)}`;
  };

  return (
    <div className="pt-32 pb-24 bg-[#0E0E0F] text-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal className="space-y-4 max-w-3xl">
          <p className="text-xs tracking-[0.28em] uppercase text-[#B59A6D]">Advanced Commission</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08]">
            Growth cashflow,{' '}
            <span className="font-editorial italic font-normal text-[#B59A6D]">on day one.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Advanced Commission is a growth tool. Win the instruction, meet the criteria, and 30% of
            your commission arrives that week.
          </p>
        </Reveal>

        <Reveal className="bg-[#121212] border border-white/10 rounded-[1.8rem] p-6 sm:p-10 space-y-8">
          <div className="bg-[#0E0E0F] p-4 sm:p-5 rounded-2xl border border-[#2A2A2A]/80 space-y-2 max-w-xl">
            <div className="flex justify-between items-center text-sm gap-3">
              <span className="text-[#F5F5F5] font-semibold">Fee (£)</span>
              <span className="text-[#B59A6D] font-mono font-bold text-lg">{formatCurrency(fee)}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="250"
              value={fee}
              onChange={(e) => setFee(Number(e.target.value))}
              className="w-full h-2 bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-[#B59A6D]"
            />
            <div className="flex justify-between text-[11px] text-[#6B6B6B]">
              <span>£1,000</span>
              <span>£10,000</span>
              <span>£50,000</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-[#6B6B6B] border-b border-[#2A2A2A]">
                  <th className="py-3 pr-4 font-semibold"> </th>
                  <th className="py-3 pr-4 font-semibold text-[#B59A6D]">With Advanced Commission</th>
                  <th className="py-3 pr-4 font-semibold">Without</th>
                  <th className="py-3 font-semibold">Difference</th>
                </tr>
              </thead>
              <tbody className="text-[#A3A3A3]">
                <tr className="border-b border-[#2A2A2A]/70">
                  <td className="py-3 pr-4 text-[#F5F5F5]">Agent share</td>
                  <td className="py-3 pr-4 font-mono text-white">{formatCurrency(withShare)}</td>
                  <td className="py-3 pr-4 font-mono">{formatCurrency(withoutShare)}</td>
                  <td className="py-3 font-mono text-[#6B6B6B]">
                    {formatDiff(withShare - withoutShare)}
                  </td>
                </tr>
                <tr className="border-b border-[#2A2A2A]/70">
                  <td className="py-3 pr-4 text-[#F5F5F5]">Received at listing</td>
                  <td className="py-3 pr-4 font-mono text-white">{formatCurrency(withListing)}</td>
                  <td className="py-3 pr-4 font-mono">{formatCurrency(withoutListing)}</td>
                  <td className="py-3 font-mono text-[#B59A6D]">
                    {formatDiff(withListing - withoutListing)}
                  </td>
                </tr>
                <tr className="border-b border-[#2A2A2A]/70">
                  <td className="py-3 pr-4 text-[#F5F5F5]">Received at completion</td>
                  <td className="py-3 pr-4 font-mono text-white">{formatCurrency(withCompletion)}</td>
                  <td className="py-3 pr-4 font-mono">{formatCurrency(withoutCompletion)}</td>
                  <td className="py-3 font-mono text-rose-300/90">
                    {formatDiff(withCompletion - withoutCompletion)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-[#F5F5F5] font-semibold">Total received</td>
                  <td className="py-3 pr-4 font-mono text-[#B59A6D] font-semibold">
                    {formatCurrency(withTotal)}
                  </td>
                  <td className="py-3 pr-4 font-mono font-semibold text-white">
                    {formatCurrency(withoutTotal)}
                  </td>
                  <td className="py-3 font-mono font-semibold text-rose-300/90">
                    {formatDiff(withTotal - withoutTotal)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[11px] sm:text-xs text-[#6B6B6B] leading-relaxed max-w-3xl">
            All properties remain on a 60% split until the total outstanding advanced commission
            balance has been cleared in full. The balance can be repaid from other completions or by
            transfer at any time. Advances are capped at £3,500 per month across all listings.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => openExternal(LINKS.advancedCommissionGuide)}
              className="btn-primary flex-1 px-6 py-3.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download the free Advanced Commission guide
            </button>
            <button
              onClick={openDiscoveryCall}
              className="btn-ghost flex-1 px-6 py-3.5 rounded-full border font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
