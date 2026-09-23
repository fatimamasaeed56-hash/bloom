import './fonts.css';

import React, { useState } from 'react';
import {
  Bell,
  CalendarDays,
  Check,
  Circle,
  ChevronRight,
  Droplets,
  Home,
  Leaf,
  Plus,
  Search,
  Sprout,
  Sun,
  Thermometer,
  Wind,
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
          </section>

          <section className="relative mb-5 min-h-[402px] overflow-hidden rounded-[30px] bg-[#dce9c7] p-5 shadow-[0_18px_34px_rgba(58,95,48,0.12)]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#52704b]">
                <Sprout className="h-3.5 w-3.5" />
                Your garden
              </div>
            </div>
            <div className="absolute left-1/2 top-[46px] h-[192px] w-[192px] -translate-x-1/2 overflow-hidden rounded-[28px]">
              <img
                src="/__mockup/images/bloom-home-spathiphyllum.png"
                alt="Healthy spathiphyllum plant"
                className="h-full w-full object-cover object-[54%_center] mix-blend-multiply"
              />
            </div>
            <div className="absolute left-1/2 top-[156px] h-28 w-28 -translate-x-1/2 rounded-full bg-[#b6cf93]/45 blur-2xl" />
            <div className="absolute inset-x-5 top-[258px] z-10">
              <h2 className="font-['Fraunces'] text-[27px] leading-[1.08] tracking-[-0.04em] text-[#244d36]">
                A little care
                <br />
                goes a long way.
              </h2>
              <p className="mt-3 max-w-[250px] text-[12px] font-medium leading-relaxed text-[#5b7658]">
                Keep your plants happy, one simple ritual at a time.
              </p>
            </div>
          </section>

          <section className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-['Fraunces'] text-[21px] font-semibold tracking-[-0.03em] text-[#1d4031]">
                Plant conditions
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8aa092]">Ideal range</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="rounded-[20px] border border-[#e6eee1] bg-white p-3 shadow-[0_10px_24px_rgba(43,79,53,0.05)]">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[#fff1d8] text-[#c48a3d]">
                  <Sun className="h-4 w-4" strokeWidth={2} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#8a9b90]">Light</p>
                <p className="mt-1 text-[11px] font-bold leading-[1.2] text-[#315543]">Bright<br />Indirect</p>
              </div>
              <div className="rounded-[20px] border border-[#e6eee1] bg-white p-3 shadow-[0_10px_24px_rgba(43,79,53,0.05)]">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[#f8e3e0] text-[#c8736a]">
                  <Thermometer className="h-4 w-4" strokeWidth={2} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#8a9b90]">Temperature</p>
                <p className="mt-1 text-[11px] font-bold leading-[1.2] text-[#315543]">65–85°F</p>
              </div>
              <div className="rounded-[20px] border border-[#e6eee1] bg-white p-3 shadow-[0_10px_24px_rgba(43,79,53,0.05)]">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[#e1eff0] text-[#5d9ca2]">
                  <Wind className="h-4 w-4" strokeWidth={2} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#8a9b90]">Humidity</p>
                <p className="mt-1 text-[11px] font-bold leading-[1.2] text-[#315543]">60%+</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-['Fraunces'] text-[21px] font-semibold tracking-[-0.03em] text-[#1d4031]">
                Task schedule
              </h2>
              <button className="flex items-center gap-1 text-[12px] font-bold text-[#63826d]">
                View all <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="rounded-[24px] border border-[#e8eee3] bg-white p-4 shadow-[0_12px_30px_rgba(43,79,53,0.06)]">
              <div className="mb-3 flex items-center gap-2 px-1">
                <CalendarDays className="h-4 w-4 text-[#6a8b76]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#75907f]">Today</p>
              </div>
              <div className="flex items-center gap-3.5 rounded-2xl bg-[#f8fbf5] px-3 py-3">
                <button
                  aria-label={watered ? 'Mark watering as due' : 'Mark watering as complete'}
                  onClick={() => setWatered((value) => !value)}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                    watered ? 'bg-[#2b7655] text-white' : 'border border-[#c9d9c8] bg-white text-transparent'
                  }`}
                >
                  <Check className="h-4 w-4" strokeWidth={2.8} />
                </button>
                <div className="min-w-0 flex-1">
                  <p className={`text-[14px] font-bold ${watered ? 'text-[#72917d] line-through' : 'text-[#214534]'}`}>
                    Water Spathiphyllum
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-[#8b9d91]">About 200 ml</p>
                </div>
                <Droplets className="h-5 w-5 shrink-0 text-[#6da7b0]" />
              </div>

              <div className="mb-3 mt-5 flex items-center gap-2 px-1">
                <CalendarDays className="h-4 w-4 text-[#a1a992]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#929b87]">Tomorrow</p>
              </div>
              <div className="flex items-center gap-3.5 rounded-2xl border border-[#edf1e9] px-3 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d7e1d4] bg-[#fbfcf9] text-[#c4d0c0]">
                  <Circle className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-bold text-[#365646]">Check soil moisture</p>
                  <p className="mt-1 text-[11px] font-medium text-[#9aa99d]">Before watering</p>
                </div>
                <Droplets className="h-5 w-5 shrink-0 text-[#b8c7bd]" />
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
