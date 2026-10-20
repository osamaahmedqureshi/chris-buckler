import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

interface CommissionCalculatorProps {
  onOpenBooking: () => void;
}

export const CommissionCalculator: React.FC<CommissionCalculatorProps> = ({ onOpenBooking }) => {
  const [avgPrice, setAvgPrice] = useState(650000);
  const [feePercent, setFeePercent] = useState(1.5);
  const [monthlyDeals, setMonthlyDeals] = useState(2.5);
  const [employedBaseSalary, setEmployedBaseSalary] = useState(35000);

  // Financial calculations
  const feePerDeal = avgPrice * (feePercent / 100);
  const grossMonthlyPipeline = feePerDeal * monthlyDeals;
  const grossAnnualPipeline = grossMonthlyPipeline * 12;

  // Employed split (typical 10% - 15% commission + basic salary)
  const employedCommissionRate = 0.12;
  const employedAnnualEarnings = employedBaseSalary + grossAnnualPipeline * employedCommissionRate;

  // Self-Employed Model (up to 70% retention)
  const selfEmployedSplit = 0.7;
  const selfEmployedAnnualEarnings = grossAnnualPipeline * selfEmployedSplit;

  // Extra net income kept in pocket
  const netEarningsDifference = Math.max(0, selfEmployedAnnualEarnings - employedAnnualEarnings);

  // Advanced Commission (up to 30% unlocked upfront on listing)
  const upfrontCashPerListing = feePerDeal * 0.3;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#10151c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal from="left" className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C9A66B] font-medium tracking-wide">
            <span>Interactive Fee Simulator</span>
            <span aria-hidden="true">•</span>
            <span>70% Commission Retention vs Employed Salary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8F7F3] leading-tight">
            Calculate How Much More You'd Keep as a{' '}
            <span className="font-editorial italic font-normal text-[#C9A66B]">
              Self-Employed Partner.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Move the sliders below to model your local property values and monthly deal volume. See the stark difference between keeping up to 70% vs working for a capped corporate salary.
          </p>
        </Reveal>

        {/* Calculator Main Container */}
        <div className="bg-[#0c1016] border border-white/10 rounded-[1.8rem] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal from="left" className="lg:col-span-7 space-y-5">
              {/* Slider 1: Average Property Price */}
              <div className="bg-[#0B1423] p-4 sm:p-5 rounded-2xl border border-[#1E3352]/80 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#F8F7F3] font-semibold">Average Sale Price in Your Patch</span>
                  <span className="text-[#C9A66B] font-mono font-bold text-base sm:text-lg">
                    {formatCurrency(avgPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="250000"
                  max="2000000"
                  step="25000"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#1E3352] rounded-lg appearance-none cursor-pointer accent-[#0E827C]"
                />
                <div className="flex justify-between text-[11px] text-[#718096]">
                  <span>£250k (Regional)</span>
                  <span>£650k (National Avg Mid)</span>
                  <span>£2M+ (Prime London / Home Counties)</span>
                </div>
              </div>

              {/* Slider 2: Average Sole Agency Fee */}
              <div className="bg-[#0B1423] p-4 sm:p-5 rounded-2xl border border-[#1E3352]/80 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#F8F7F3] font-semibold">Typical Agency Fee Percentage</span>
                  <span className="text-[#0E827C] font-mono font-bold text-base sm:text-lg">
                    {feePercent.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="2.5"
                  step="0.1"
                  value={feePercent}
                  onChange={(e) => setFeePercent(Number(e.target.value))}
                  className="w-full h-2 bg-[#1E3352] rounded-lg appearance-none cursor-pointer accent-[#0E827C]"
                />
                <div className="flex justify-between text-[11px] text-[#718096]">
                  <span>1.0%</span>
                  <span>1.5% (Standard UK Sole Agency)</span>
                  <span>2.5% (Bespoke / Multi-Agent)</span>
                </div>
              </div>

              {/* Slider 3: Completed Deals Per Month */}
              <div className="bg-[#0B1423] p-4 sm:p-5 rounded-2xl border border-[#1E3352]/80 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#F8F7F3] font-semibold">Completed Sales Per Month</span>
                  <span className="text-white font-mono font-bold text-base sm:text-lg">
                    {monthlyDeals} {monthlyDeals === 1 ? 'sale' : 'sales'} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={monthlyDeals}
                  onChange={(e) => setMonthlyDeals(Number(e.target.value))}
                  className="w-full h-2 bg-[#1E3352] rounded-lg appearance-none cursor-pointer accent-[#0E827C]"
                />
                <div className="flex justify-between text-[11px] text-[#718096]">
                  <span>1 sale / mo</span>
                  <span>2.5 sales / mo (Typical Performer)</span>
                  <span>6+ sales / mo (High Velocity)</span>
                </div>
              </div>

              {/* Advanced Commission Feature Note */}
              <div className="p-4 rounded-xl bg-[#0E827C]/10 border border-[#0E827C]/30 flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#0E827C] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-white block">
                    Plus: Up to 30% Advanced Commission on Day 1 of Listing
                  </span>
                  <p className="text-[#94A3B8] leading-relaxed">
                    Under the Advanced Commission scheme, you can unlock up to{' '}
                    <span className="text-[#0E827C] font-semibold font-mono">
                      {formatCurrency(upfrontCashPerListing)}
                    </span>{' '}
                    per listing upon taking the instruction, solving the 4–6 month conveyancing lag.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal from="right" className="lg:col-span-5 bg-[#121820] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C9A66B] font-semibold block">
                  Your Projected Annual Net Take-Home
                </span>
                
                <div className="pt-3 pb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono block">
                    {formatCurrency(selfEmployedAnnualEarnings)}
                  </span>
                  <span className="text-xs text-[#0E827C] font-semibold block mt-1">
                    At 70% Self-Employed Partner Fee Retention
                  </span>
                </div>

                {/* Direct Comparison Comparison Pill */}
                <div className="mt-4 p-4 rounded-xl bg-[#132238] border border-[#1E3352] space-y-2.5 text-xs">
                  <div className="flex justify-between items-center text-[#94A3B8]">
                    <span>Employed Annual Package (Salary + 12%):</span>
                    <span className="text-rose-300 font-mono font-medium line-through">
                      {formatCurrency(employedAnnualEarnings)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#1E3352]/70">
                    <span className="text-[#F8F7F3] font-semibold">Extra In Your Pocket Every Year:</span>
                    <span className="text-[#C9A66B] font-mono font-extrabold text-sm sm:text-base">
                      +{formatCurrency(netEarningsDifference)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-breakdown details */}
              <div className="space-y-2 text-xs text-[#718096] pt-2 border-t border-[#1E3352]/70">
                <div className="flex justify-between">
                  <span>Gross Deal Value (per sale):</span>
                  <span className="text-white font-mono">{formatCurrency(feePerDeal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Your Cut per Deal (70%):</span>
                  <span className="text-[#0E827C] font-mono font-semibold">
                    {formatCurrency(feePerDeal * 0.7)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Traditional Agency Retains (30%):</span>
                  <span className="text-[#718096] font-mono">{formatCurrency(feePerDeal * 0.3)}</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0E827C] hover:bg-[#12a39c] text-white font-semibold text-sm shadow-lg shadow-[#0E827C]/25 cursor-pointer"
                >
                  <span>Discuss Your Exact Transition Numbers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-[#718096] text-center mt-2.5">
                  Confidential, pressure-free commercial assessment with Chris Buckler.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
