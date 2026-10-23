import React, { useState } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Smartphone,
  Globe,
  RotateCcw,
  HelpCircle,
  Check,
  Star,
  Shield,
  FileText,
  Info,
  Share2,
  ThumbsUp,
  Mail,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { soundManager } from '../utils/audio';

const DEV_PAGE_URL = 'https://play.google.com/store/apps/dev?id=5656382228588702142';
const DEV_EMAIL = 'viscoragames@gmail.com';

export default function SettingsModal({
  isOpen,
  onClose,
  soundEnabled,
  onToggleSound,
  vibrationEnabled,
  onToggleVibration,
  lang,
  onChangeLanguage,
  onResetProgress,
  onReplayIntro,
  initialTab = 'settings',
  t
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedToast, setCopiedToast] = useState(null);

  if (!isOpen) return null;

  const handleShare = async () => {
    soundManager.playButton();
    const shareData = {
      title: 'Word & World',
      text: lang === 'tr' 
        ? 'Word & World ile kelimeleri ve dünyayı keşfet! Viscora Games:'
        : 'Explore words and the world with Word & World by Viscora Games:',
      url: DEV_PAGE_URL
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopiedToast(t.shareSuccess);
        setTimeout(() => setCopiedToast(null), 2500);
      } catch (e) {
        // ignore
      }
    }
  };

  const handleRate = () => {
    soundManager.playButton();
    window.open(DEV_PAGE_URL, '_blank');
  };

  const handleCopyEmail = () => {
    soundManager.playButton();
    try {
      navigator.clipboard.writeText(DEV_EMAIL);
      setCopiedToast(lang === 'tr' ? 'E-posta kopyalandı!' : 'Email copied!');
      setTimeout(() => setCopiedToast(null), 2500);
    } catch (e) {}
  };

  const tabs = [
    { id: 'settings', label: t.settings },
    { id: 'rules', label: t.howToPlay },
    { id: 'privacy', label: t.privacyPolicy },
    { id: 'about', label: t.aboutGame }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-slate-900 border border-slate-700/80 border-b-8 border-b-slate-950 p-4 sm:p-5 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Floating Copied Toast */}
        {copiedToast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white font-black text-xs py-1.5 px-3 rounded-full shadow-lg border border-emerald-400">
            {t.shareSuccess}
          </div>
        )}

        {/* Modal Top Header with Close */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-black text-white tracking-wide">
              {tabs.find((tab) => tab.id === activeTab)?.label || t.settings}
            </h3>
          </div>

          <button
            onClick={() => {
              soundManager.playKey();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center active:scale-90 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex items-center justify-between gap-1 p-1 bg-slate-950/80 rounded-2xl border border-slate-800 mb-3 shrink-0 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playKey();
                  setActiveTab(tab.id);
                }}
                className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-black transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 min-h-0">
          
          {/* TAB 1: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="flex flex-col gap-2.5">
              
              {/* Language Switcher */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-black text-slate-300 mb-2">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>{t.language}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      soundManager.playKey();
                      onChangeLanguage('tr');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 border transition cursor-pointer ${
                      lang === 'tr'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🇹🇷 Türkçe</span>
                    {lang === 'tr' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => {
                      soundManager.playKey();
                      onChangeLanguage('en');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 border transition cursor-pointer ${
                      lang === 'en'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🇬🇧 English</span>
                    {lang === 'en' && <Check className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Sound Effects Toggle */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">{t.sound}</h4>
                    <p className="text-[10px] text-slate-400">{t.keyAndStarSounds}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onToggleSound();
                    if (!soundEnabled) soundManager.playKey();
                  }}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 flex items-center cursor-pointer ${
                    soundEnabled ? 'bg-emerald-600' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      soundEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Vibration / Haptics Toggle */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <Smartphone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">{t.vibration}</h4>
                    <p className="text-[10px] text-slate-400">{t.touchVibration}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    soundManager.playKey();
                    onToggleVibration();
                  }}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 flex items-center cursor-pointer ${
                    vibrationEnabled ? 'bg-amber-600' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      vibrationEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Reset Game Progress */}
              <button
                onClick={() => {
                  soundManager.playKey();
                  if (window.confirm(t.resetConfirm)) {
                    onResetProgress();
                  }
                }}
                className="mt-1 py-2.5 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.resetProgress}</span>
              </button>
            </div>
          )}

          {/* TAB 2: RULES / HOW TO PLAY */}
          {activeTab === 'rules' && (
            <div className="flex flex-col gap-2.5 text-left">
              
              {/* Color Box Guide */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800 flex flex-col gap-2">
                <h4 className="text-xs font-black text-white">
                  {t.colorRules}
                </h4>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 border border-emerald-300/40 border-b-2 border-b-emerald-800 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                    A
                  </div>
                  <p className="text-xs text-slate-200">{t.howToPlayRule1}</p>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 border border-amber-200/50 border-b-2 border-b-amber-700 text-slate-950 font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                    B
                  </div>
                  <p className="text-xs text-slate-200">{t.howToPlayRule2}</p>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 border-b-2 border-b-slate-950 text-slate-400 font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                    C
                  </div>
                  <p className="text-xs text-slate-200">{t.howToPlayRule3}</p>
                </div>
              </div>

              {/* Star Rating Guide */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800">
                <h4 className="text-xs font-black text-amber-400 mb-2 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{t.starScoring}</span>
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span className="font-bold">1 - 2 {t.attempts}</span>
                    <div className="flex text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span className="font-bold">3 - 4 {t.attempts}</span>
                    <div className="flex text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-bold">5 - 6 {t.attempts}</span>
                    <div className="flex text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <Star className="w-3.5 h-3.5 text-slate-600" />
                      <Star className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY POLICY & TERMS OF SERVICE (GOOGLE PLAY STORE COMPLIANT) */}
          {activeTab === 'privacy' && (
            <div className="flex flex-col gap-2.5 text-left text-xs leading-relaxed text-slate-300">
              
              {/* Privacy Policy Block */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800">
                <div className="flex items-center gap-1.5 text-amber-400 font-black mb-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>{t.privacyPolicy}</span>
                </div>
                <p className="text-[11px] text-slate-300 mb-2">
                  {lang === 'tr'
                    ? 'Viscora Games tarafından geliştirilen Word & World, kullanıcı gizliliğine azami önem verir. Oyunumuz hiçbir kişisel veri, cihaz kimliği veya konum bilgisi toplamaz ve harici sunuculara iletmez.'
                    : 'Word & World, developed by Viscora Games, prioritizes user privacy. Our game does not collect personal data, device IDs, or location info, nor does it transmit them to external servers.'}
                </p>
                <div className="bg-slate-900/80 rounded-xl p-2 border border-slate-800 space-y-1 text-[10px]">
                  <p className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Check className="w-3 h-3 text-emerald-400" />
                    {lang === 'tr' ? 'Veriler Yalnızca Cihazınızda Saklanır (LocalStorage)' : 'Data is Stored Locally on Device (LocalStorage)'}
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Check className="w-3 h-3 text-emerald-400" />
                    {lang === 'tr' ? 'Aile ve Çocuk Güvenliğine Uygundur (COPPA Uyumlu)' : 'Family & Child Safe (COPPA Compliant)'}
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Check className="w-3 h-3 text-emerald-400" />
                    {lang === 'tr' ? 'İstenmeyen Reklam Takibi Bulunmaz' : 'No Invasive Ad Trackers'}
                  </p>
                </div>
              </div>

              {/* Terms of Service Block */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800">
                <div className="flex items-center gap-1.5 text-indigo-400 font-black mb-1.5">
                  <FileText className="w-4 h-4" />
                  <span>{t.termsOfService}</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  {lang === 'tr'
                    ? 'Word & World, Viscora Games tarafından sunulan ücretsiz bir kelime ve genel kültür bulmaca oyunudur. İçerikler eğitim ve eğlence amaçlıdır. Oyunun tüm hakları Viscora Games\'e aittir.'
                    : 'Word & World is a free-to-play word and trivia puzzle game provided by Viscora Games. Content is intended for educational and entertainment purposes. All rights reserved by Viscora Games.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: ABOUT, STORE & SUPPORT */}
          {activeTab === 'about' && (
            <div className="flex flex-col gap-2.5 text-left">
              
              {/* Game Badge & Version with App Icon */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/icons/app_icon.png"
                    alt="Word & World App Icon"
                    className="w-12 h-12 rounded-2xl object-cover shadow-lg border border-slate-700/60"
                  />
                  <div>
                    <h4 className="text-sm font-black text-white">Word & World</h4>
                    <p className="text-[10px] text-slate-400">
                      {t.version} 1.0.0 • {t.build} #2026.1
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
                  Play Store Ready
                </span>
              </div>

              {/* Cyber Core Interactive & Viscora Games Studio Showcase Card */}
              <div className="bg-gradient-to-r from-indigo-950/90 via-slate-900 to-cyan-950/90 rounded-2xl p-3 border border-cyan-500/40 border-b-[3px] border-b-cyan-950 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 p-0.5 shadow-md">
                      <div className="w-full h-full bg-[#0a1428] rounded-[10px] flex items-center justify-center font-black text-cyan-300 text-xs tracking-wider">
                        CI
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        CYBER CORE
                      </h4>
                      <p className="text-[10px] text-cyan-300 font-bold">
                        Interactive • Viscora Games
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    Studio
                  </span>
                </div>

                <a
                  href={DEV_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playButton()}
                  className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex items-center justify-between transition cursor-pointer shadow-md active:translate-y-0.5"
                >
                  <span className="flex items-center gap-1.5">
                    <span>🎮</span>
                    <span>{t.developerPage || 'Viscora Games Google Play Sayfası'}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Rate on Google Play */}
              <button
                onClick={handleRate}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-black text-xs flex items-center justify-between transition cursor-pointer active:scale-98"
              >
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-amber-400" />
                  <span>{t.rateGame}</span>
                </div>
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
              </button>

              {/* Share Game */}
              <button
                onClick={handleShare}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/10 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 font-black text-xs flex items-center justify-between transition cursor-pointer active:scale-98"
              >
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-indigo-400" />
                  <span>{t.shareGame}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </button>

              {/* Support & Developer Contact (Viscora Games Email) */}
              <div className="bg-slate-850 rounded-2xl p-3 border border-slate-800 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{t.contactSupport}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] font-black text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-lg active:scale-95 transition cursor-pointer"
                  >
                    {lang === 'tr' ? 'Kopyala' : 'Copy'}
                  </button>
                </div>
                <p className="text-[10px] text-slate-400">
                  {lang === 'tr'
                    ? 'Soru, öneri ve geri bildirimleriniz için geliştirici ekibimize ulaşın:'
                    : 'Contact the development team for feedback, questions and suggestions:'}
                </p>
                <a
                  href={`mailto:${DEV_EMAIL}?subject=Word%20%26%20World%20Destek%20%2F%20Geri%20Bildirim`}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-300 hover:text-cyan-200 transition bg-slate-900/80 p-2 rounded-xl border border-slate-800"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{DEV_EMAIL}</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Close Button */}
        <button
          onClick={() => {
            soundManager.playKey();
            onClose();
          }}
          className="w-full mt-3 py-3 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-850 hover:to-slate-800 text-white font-black text-xs uppercase tracking-wider transition border border-slate-700 border-b-4 border-b-slate-950 active:border-b-2 active:translate-y-0.5 cursor-pointer shrink-0"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
}
