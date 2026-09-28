"use client";

import { useState } from "react";
import {
  Download,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Music2,
  Clock,
  RefreshCw,
  X,
} from "lucide-react";

const FORMAT_OPTIONS = [
  { label: "MP3 320 kbps", quality: "Best Quality" },
  { label: "MP3 192 kbps", quality: "Standard" },
  { label: "MP3 128 kbps", quality: "Compact" },
];

export default function Converter({
  locale = "en",
  initialUrl = "",
  initialFormat = "MP3 320 kbps",
}) {
  const [url, setUrl] = useState(initialUrl);
  const [format, setFormat] = useState(initialFormat);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState(null);

  const cleanUrl = url.trim();

  const handleConvert = async (e) => {
    e.preventDefault();
    if (!cleanUrl) return;

    setStatus("loading");
    setErrorMsg("");
    setResult(null);

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/info?url=${encodeURIComponent(cleanUrl)}`
      );

      if (!res.ok) {
        throw new Error("Unable to fetch video details. Please verify your YouTube link.");
      }

      const data = await res.json();

      setResult({
        title: data.title || "YouTube Audio",
        duration: data.duration || 0,
        thumbnail: data.thumbnail,
        channel: data.channel || "YouTube Creator",
        downloadUrl: `http://127.0.0.1:8000/api/download?url=${encodeURIComponent(cleanUrl)}`,
        format: format,
      });

      setStatus("ready");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setResult(null);
    setErrorMsg("");
    setUrl("");
  };

  const handleDownload = () => {
    if (result?.downloadUrl) {
      window.location.href = result.downloadUrl;
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        {/* Glow effect */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-600/10 blur-3xl pointer-events-none rounded-full" />

        <form onSubmit={handleConvert} className="space-y-6 relative">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              YouTube Video Link
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                disabled={status === "loading"}
                className="w-full pl-4 pr-24 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition text-sm sm:text-base disabled:opacity-50"
              />
              {url && status !== "loading" && (
                <button
                  type="button"
                  onClick={() => setUrl("")}
                  className="absolute right-4 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quality Options */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Audio Bitrate
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {FORMAT_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setFormat(opt.label)}
                  disabled={status === "loading"}
                  className={`py-2.5 px-3 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                    format === opt.label
                      ? "border-red-500 bg-red-500/10 text-red-600 dark:text-red-400 font-semibold"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium">{opt.label}</span>
                  <span className="text-[10px] text-slate-400">{opt.quality}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            disabled={!cleanUrl || status === "loading"}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold text-base shadow-lg shadow-red-500/25 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Audio...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Convert to MP3</span>
              </>
            )}
          </button>
        </form>

        {/* Error message */}
        {status === "error" && (
          <div className="mt-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-sm font-medium">{errorMsg}</div>
          </div>
        )}

        {/* Result Card */}
        {status === "ready" && result && (
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              {result.thumbnail && (
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-full sm:w-48 h-28 object-cover rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md"
                />
              )}
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Ready to download
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg line-clamp-2">
                  {result.title}
                </h3>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Music2 className="w-3.5 h-3.5" /> {result.format}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {formatDuration(result.duration)}
                  </span>
                  <span>{result.channel}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <Download className="w-5 h-5" />
                <span>Download MP3</span>
              </button>
              <button
                onClick={handleReset}
                className="py-3.5 px-6 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium transition flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Convert Another</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}