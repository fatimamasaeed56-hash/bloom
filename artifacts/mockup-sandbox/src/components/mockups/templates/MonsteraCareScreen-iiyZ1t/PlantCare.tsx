import './fonts.css';
import asset0 from "./assets/mob-22-monstera.png";

import React, { useState } from 'react';
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Droplets,
  Home,
  Leaf,
  Plus,
  Search,
  Sprout,
  Sun,
} from 'lucide-react';

export function PlantCare() {
  const [watered, setWatered] = useState(false);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="relative overflow-hidden bg-[#f7f8f3] font-['Outfit'] text-[#19342b] antialiased"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#d9ebbd]/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 top-[44%] h-64 w-64 rounded-full bg-[#e8e4c7]/65 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <header className="flex shrink-0 items-center justify-between px-6 pb-4 pt-7">
          <button
            aria-label="Open notifications"
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#21483a] shadow-[0_8px_24px_rgba(30,73,54,0.08)] transition-transform active:scale-95"
          >
            <Bell className="h-[19px] w-[19px]" strokeWidth={2.1} />
            <span className="absolute right-[9px] top-[8px] h-2 w-2 rounded-full border-2 border-white bg-[#e07c62]" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <div className="flex items-center gap-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#234f3c] text-white">
                <Leaf className="h-4 w-4 fill-current" strokeWidth={1.8} />
              </span>
              <span className="font-['Fraunces'] text-[22px] font-semibold tracking-[-0.03em] text-[#234f3c]">
                bloom
              </span>
            </div>
          </div>

          <button
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#dae5d5] bg-[#eef4e9] text-[#527261] transition-transform active:scale-95"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto px-6 pb-28">
          <section className="mb-6 pt-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#769080]">
              Wednesday, September 23
            </p>
            <h1 className="font-['Fraunces'] text-[34px] leading-[1.07] tracking-[-0.04em] text-[#183a2d]">
              Good morning,
              <br />
              Maya.
            </h1>
          </section>

          <section className="relative mb-5 min-h-[214px] overflow-hidden rounded-[30px] bg-[#dce9c7] p-5 shadow-[0_18px_34px_rgba(58,95,48,0.12)]">
            <div className="relative z-10 max-w-[52%]">
              <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#52704b]">
                <Sprout className="h-3.5 w-3.5" />
                Your garden
              </div>
              <h2 className="font-['Fraunces'] text-[27px] leading-[1.08] tracking-[-0.04em] text-[#244d36]">
                A little care
                <br />
                goes a long way.
              </h2>
              <p className="mt-3 text-[12px] font-medium leading-relaxed text-[#5b7658]">
                Keep your plants happy, one simple ritual at a time.
              </p>
            </div>
            <div className="absolute -bottom-8 -right-2 h-[238px] w-[190px] overflow-hidden rounded-[50%]">
              <img
                src={asset0}
                alt="Healthy monstera plant"
                className="h-full w-full object-cover object-[54%_center] mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-9 right-14 h-28 w-28 rounded-full bg-[#b6cf93]/45 blur-2xl" />
          </section>

          <section className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-['Fraunces'] text-[21px] font-semibold tracking-[-0.03em] text-[#1d4031]">
                Today&apos;s care
              </h2>
              <button className="flex items-center gap-1 text-[12px] font-bold text-[#63826d]">
                View all <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="rounded-[24px] border border-[#e8eee3] bg-white p-4 shadow-[0_12px_30px_rgba(43,79,53,0.06)]">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e7f2f4] text-[#5495a1]">
                  <Droplets className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[14px] font-bold text-[#214534]">Water Monstera</p>
                      <p className="mt-1 text-[11px] font-medium text-[#8b9d91]">About 200 ml · Today</p>
                    </div>
                    <span className="rounded-full bg-[#fff2d8] px-2.5 py-1 text-[10px] font-bold text-[#b07a2c]">
                      {watered ? 'Done' : 'Due'}
                    </span>
                  </div>
                  <button
                    onClick={() => setWatered((value) => !value)}
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[12px] font-bold transition-all active:scale-[0.98] ${
                      watered
                        ? 'bg-[#eaf3e3] text-[#397052]'
                        : 'bg-[#2b7655] text-white shadow-[0_8px_18px_rgba(43,118,85,0.18)]'
                    }`}
                  >
                    <Check className="h-4 w-4" strokeWidth={2.7} />
                    {watered ? 'Marked as watered' : 'Mark as watered'}
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-2">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-['Fraunces'] text-[21px] font-semibold tracking-[-0.03em] text-[#1d4031]">
                Your collection
              </h2>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f1df] text-[#477357]">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-3 overflow-hidden">
              <div className="min-w-[143px] rounded-[22px] bg-[#f1dfc6] p-3.5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/65 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#a07852]">Thriving</span>
                  <Sun className="h-4 w-4 text-[#c68f49]" />
                </div>
                <p className="font-['Fraunces'] text-[18px] font-semibold text-[#6d4b2c]">Fiddle Leaf</p>
                <p className="mt-1 text-[10px] font-medium text-[#9a7550]">Last checked 2d ago</p>
              </div>
              <div className="min-w-[143px] rounded-[22px] bg-[#dcebe3] p-3.5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/65 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#47745d]">Growing</span>
                  <Leaf className="h-4 w-4 text-[#5c9872]" />
                </div>
                <p className="font-['Fraunces'] text-[18px] font-semibold text-[#2d654a]">Little Fern</p>
                <p className="mt-1 text-[10px] font-medium text-[#6d947c]">Last checked 4d ago</p>
              </div>
            </div>
          </section>
        </main>

        <nav className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-[#e8eee4]/90 bg-[#fdfefb]/95 px-5 pb-5 pt-3 backdrop-blur-xl">
          <button className="flex flex-col items-center gap-1.5 text-[#2c7053]" aria-label="Home">
            <Home className="h-[19px] w-[19px] fill-current" strokeWidth={1.8} />
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-[#a0afa5]" aria-label="Calendar">
            <CalendarDays className="h-[19px] w-[19px]" strokeWidth={1.8} />
            <span className="text-[10px] font-semibold">Schedule</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-[#a0afa5]" aria-label="Plants">
            <Leaf className="h-[19px] w-[19px]" strokeWidth={1.8} />
            <span className="text-[10px] font-semibold">Plants</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
