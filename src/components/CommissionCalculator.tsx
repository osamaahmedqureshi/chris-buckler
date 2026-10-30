import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { openDiscoveryCall } from '../data/links';

/**
 * CALCULATOR 1 — Your Earnings with TAUK (homepage)
 * Client formulas + check figures: fees £120k, 30 sales, salary £35k, commission 10%
 * → Employed £47k · TAUK £76.8k · Extra £29.8k
 */
export const CommissionCalculator: React.FC = () => {
  const [annualFees, setAnnualFees] = useState(120000);
  const [salesPerYear, setSalesPerYear] = useState(30);
  const [basicSalary, setBasicSalary] = useState(35000);
  const [commissionPct, setCommissionPct] = useState(10);

  const employedEarnings = basicSalary + annualFees * (commissionPct / 100);
  const yourShare = annualFees * 0.7;
  const subscription = 3600;
  const transactionFees = salesPerYear * 120;
  const taukEarnings = yourShare - subscription - transactionFees;
  const extraInPocket = taukEarnings - employedEarnings;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal from="left" className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#B59A6D] font-medium tracking-wide">
            <span>Interactive Fee Simulator</span>
            <span aria-hidden="true">•</span>
            <span>Your Earnings with TAUK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight">
            Calculate How Much More You'd Keep with{' '}
            <span className="font-editorial italic font-normal text-[#B59A6D]">TAUK.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Enter your current numbers. Compare employed earnings against the TAUK 70% model after subscription and transaction fees.
          </p>
        </Reveal>

        <div className="bg-[#0c1016] border border-white/10 rounded-[1.8rem] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <Reveal from="left" className="lg:col-span-7 space-y-5">
              {(
                [
                  {
                    label: 'A — Annual fees you generate',
                    value: annualFees,
                    set: setAnnualFees,
                    min: 20000,
                    max: 500000,
                    step: 5000,
                    display: formatCurrency(annualFees),
                  },
                  {
                    label: 'B — Number of sales per year',
                    value: salesPerYear,
                    set: setSalesPerYear,
                    min: 1,
                    max: 120,
                    step: 1,
                    display: `${salesPerYear} sales`,
                  },
                  {
                    label: 'C — Current basic salary',
                    value: basicSalary,
                    set: setBasicSalary,
                    min: 0,
                    max: 120000,
                    step: 1000,
                    display: formatCurrency(basicSalary),
                  },
                  {
                    label: 'D — Current commission (% of fees)',
                    value: commissionPct,
                    set: setCommissionPct,
                    min: 0,
                    max: 40,
                    step: 0.5,
                    display: `${commissionPct.toFixed(1)}%`,
                  },
                ] as const
              ).map((row) => (
                <div
                  key={row.label}
                  className="bg-[#0E0E0F] p-4 sm:p-5 rounded-2xl border border-[#2A2A2A]/80 space-y-2"
                >
                  <div className="flex justify-between items-center text-sm gap-3">
                    <span className="text-[#F5F5F5] font-semibold">{row.label}</span>
                    <span className="text-[#B59A6D] font-mono font-bold text-base shrink-0">
                      {row.display}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={row.min}
                    max={row.max}
                    step={row.step}
                    value={row.value}
                    onChange={(e) => row.set(Number(e.target.value))}
                    className="w-full h-2 bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-[#B59A6D]"
                  />
                </div>
              ))}
            </Reveal>

            <Reveal
              from="right"
              className="lg:col-span-5 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <span className="text-xs uppercase tracking-wider text-[#B59A6D] font-semibold block">
                Result
              </span>

              <div className="space-y-2.5 text-xs border border-[#2A2A2A] rounded-xl p-4">
                <p className="text-[11px] uppercase tracking-wider text-[#6B6B6B] font-semibold">
                  Employed today
                </p>
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Employed earnings (C + A × D)</span>
                  <span className="font-mono text-rose-300">{formatCurrency(employedEarnings)}</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs border border-[#2A2A2A] rounded-xl p-4">
                <p className="text-[11px] uppercase tracking-wider text-[#6B6B6B] font-semibold">
                  With TAUK
                </p>
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Your share (A × 70%)</span>
                  <span className="font-mono text-white">{formatCurrency(yourShare)}</span>
                </div>
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Monthly subscription (£3,600 / yr)</span>
                  <span className="font-mono text-[#6B6B6B]">−{formatCurrency(subscription)}</span>
                </div>
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Transaction fees (B × £120)</span>
                  <span className="font-mono text-[#6B6B6B]">−{formatCurrency(transactionFees)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#2A2A2A] text-[#F5F5F5] font-semibold">
                  <span>TAUK earnings</span>
                  <span className="font-mono text-[#B59A6D]">{formatCurrency(taukEarnings)}</span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-xs text-[#A3A3A3] block">Extra in your pocket every year</span>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono block mt-1">
                  {formatCurrency(extraInPocket)}
                </span>
              </div>

              <p className="text-[11px] text-[#6B6B6B] leading-relaxed">
                Figures are before tax. Conveyancing and mortgage referral income is 100% yours and is
                not included.
              </p>

              <button
                onClick={openDiscoveryCall}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm cursor-pointer"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
