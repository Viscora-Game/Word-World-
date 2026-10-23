import React, { useState } from 'react';
import { getAssetUrl } from '../utils/assetUrl';
import {
  X,
  Volume2,
  VolumeX,
  Smartphone,
  Globe,
  RotateCcw,
  Check,
  Star,
  Shield,
  FileText,
  Info,
  Share2,
  ThumbsUp,
  Mail,
  ExternalLink,
  Sparkles,
  HelpCircle
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
  t = {}
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedToast, setCopiedToast] = useState(null);

  if (!isOpen) return null;

  const isTR = lang === 'tr';

  const handleShare = async () => {
    soundManager.playButton();
    const shareData = {
      title: 'Word & World',
      text: isTR 
        ? 'Word & World ile kelimeleri ve dünyayı keşfet! Viscora Games:'
        : 'Explore words and the world with Word & World by Viscora Games:',
      url: DEV_PAGE_URL
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopiedToast(t?.shareSuccess || (isTR ? 'Bağlantı kopyalandı!' : 'Link copied!'));
        setTimeout(() => setCopiedToast(null), 2500);
      } catch (e) {}
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
      setCopiedToast(isTR ? 'E-posta panoya kopyalandı!' : 'Email copied to clipboard!');
      setTimeout(() => setCopiedToast(null), 2500);
    } catch (e) {}
  };

  const tabs = [
    { id: 'settings', label: t?.settings || (isTR ? 'Ayarlar' : 'Settings') },
    { id: 'rules', label: t?.howToPlay || (isTR ? 'Nasıl Oynanır' : 'How to Play') },
    { id: 'privacy', label: t?.privacyPolicy || (isTR ? 'Gizlilik' : 'Privacy') },
    { id: 'about', label: t?.aboutGame || (isTR ? 'Hakkında' : 'About') }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-[#0a1224] border border-slate-700/80 border-b-8 border-b-slate-950 p-4 sm:p-5 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Floating Copied Toast */}
        {copiedToast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white font-black text-xs py-1.5 px-3 rounded-full shadow-lg border border-emerald-400">
            {copiedToast}
          </div>
        )}

        {/* Modal Top Header with Close */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-black text-white tracking-wide uppercase">
              {tabs.find((tab) => tab.id === activeTab)?.label || (isTR ? 'Ayarlar' : 'Settings')}
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
        <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950/80 rounded-2xl border border-slate-800 mb-3 shrink-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playKey();
                  setActiveTab(tab.id);
                }}
                className={`py-2 px-1 text-center rounded-xl text-[11px] font-black transition-all truncate cursor-pointer ${
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
        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 min-h-0 text-left">
          
          {/* TAB 1: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="flex flex-col gap-2.5">
              
              {/* Language Switcher */}
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-black text-slate-300 mb-2">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>{t?.language || (isTR ? 'Dil Seçimi' : 'Language')}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      soundManager.playKey();
                      onChangeLanguage('tr');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition cursor-pointer ${
                      lang === 'tr'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-200 text-[10px] font-black border border-indigo-500/40">TR</span>
                    <span>Türkçe</span>
                    {lang === 'tr' && <Check className="w-3.5 h-3.5 ml-auto text-emerald-400" />}
                  </button>
                  <button
                    onClick={() => {
                      soundManager.playKey();
                      onChangeLanguage('en');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition cursor-pointer ${
                      lang === 'en'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-200 text-[10px] font-black border border-purple-500/40">EN</span>
                    <span>English</span>
                    {lang === 'en' && <Check className="w-3.5 h-3.5 ml-auto text-emerald-400" />}
                  </button>
                </div>
              </div>

              {/* Sound Effects Toggle */}
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">{t?.soundEffects || (isTR ? 'Ses Efektleri' : 'Sound Effects')}</h4>
                    <p className="text-[10px] text-slate-400">{isTR ? 'Tuş ve ödül sesleri' : 'Key click and victory audio'}</p>
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
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <Smartphone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">{t?.vibration || (isTR ? 'Titreşim' : 'Vibration')}</h4>
                    <p className="text-[10px] text-slate-400">{isTR ? 'Dokunma ve cevap geri bildirimi' : 'Haptic touch feedback'}</p>
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
                  const confirmMsg = t?.confirmReset || (isTR 
                    ? 'Tüm seviye ilerlemenizi ve yıldızlarınızı sıfırlamak istediğinize emin misiniz?'
                    : 'Are you sure you want to reset all game data and stars?');
                  if (window.confirm(confirmMsg)) {
                    onResetProgress();
                  }
                }}
                className="mt-1 py-2.5 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t?.resetAllProgress || (isTR ? 'Tüm Oyun Verilerini Sıfırla' : 'Reset All Game Data')}</span>
              </button>
            </div>
          )}

          {/* TAB 2: RULES / HOW TO PLAY */}
          {activeTab === 'rules' && (
            <div className="flex flex-col gap-2.5">
              
              {/* Color Box Guide */}
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex flex-col gap-2">
                <h4 className="text-xs font-black text-white">
                  {isTR ? 'Renk Kuralları ve Anlamları' : 'Color System Guide'}
                </h4>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 border border-emerald-400 text-white font-black text-sm flex items-center justify-center shadow-md">
                    A
                  </div>
                  <div>
                    <span className="text-xs font-black text-emerald-400">{isTR ? 'Yeşil Harf (Doğru)' : 'Green Tile (Correct)'}</span>
                    <p className="text-[10px] text-slate-400">{isTR ? 'Harf kelimede var ve tam olarak doğru konumda.' : 'Letter is in the word and in the exact correct position.'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 border border-amber-300 text-slate-950 font-black text-sm flex items-center justify-center shadow-md">
                    K
                  </div>
                  <div>
                    <span className="text-xs font-black text-amber-400">{isTR ? 'Sarı Harf (Yeri Yanlış)' : 'Yellow Tile (Wrong Spot)'}</span>
                    <p className="text-[10px] text-slate-400">{isTR ? 'Harf kelimenin içinde var ancak yeri burası değil.' : 'Letter is in the word but currently in the wrong position.'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-700 border border-slate-600 text-slate-300 font-black text-sm flex items-center justify-center shadow-md">
                    M
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-400">{isTR ? 'Gri Harf (Kelime Dışı)' : 'Gray Tile (Not in Word)'}</span>
                    <p className="text-[10px] text-slate-400">{isTR ? 'Harf bu gizli kelimede hiç bulunmuyor.' : 'Letter does not appear anywhere in this word.'}</p>
                  </div>
                </div>
              </div>

              {/* Special Game Modes (Starting XI & Discoveries) */}
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex flex-col gap-1.5">
                <h4 className="text-xs font-black text-cyan-300">
                  {isTR ? 'İlk 11 Taktik Sahası & İpuçları' : 'Starting XI & Tactical Hints'}
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {isTR 
                    ? 'Spor Dünyasındaki özel seviyelerde yeşil "İLK 11 SAHASI" butonuna basarak efsane kadronun dizilişini inceleyebilir, takımı bulabilirsiniz!'
                    : 'In Sports World, tap the green "STARTING XI" button to open the tactical football pitch and study the lineup!'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="flex flex-col gap-2.5">
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-400">
                  <Shield className="w-4 h-4" />
                  <span>{t?.privacyPolicy || (isTR ? 'Gizlilik Politikası' : 'Privacy Policy')}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {t?.privacyBody || (isTR 
                    ? 'Word & World, oyuncularımızın kişisel gizliliğine mutlak saygı duyar. Oyunumuz hiçbir kişisel veri, rehber veya hassas konum bilgisi toplamaz. Google Play Aile Politikası, COPPA ve GDPR gerekliliklerine tamamen uygundur. Tüm oyun ilerlemeniz güvenle cihazınızda yerel olarak saklanır.'
                    : 'Word & World respects player privacy. We do not collect personal data, contacts, or sensitive location. The game complies with Google Play Families Policy, COPPA, and GDPR.')}
                </p>
              </div>

              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-black text-indigo-400">
                  <FileText className="w-4 h-4" />
                  <span>{t?.termsOfService || (isTR ? 'Kullanım Koşulları' : 'Terms of Service')}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {t?.termsBody || (isTR
                    ? 'Word & World, Cyber Core Interactive bünyesinde geliştirilmiş olup Viscora Games etiketiyle yayınlanmaktadır. Oyun içi tüm görsel ve işitsel telif hakları saklıdır.'
                    : 'Word & World is developed by Cyber Core Interactive and published under the Viscora Games label. All rights reserved.')}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: ABOUT, STORE & SUPPORT */}
          {activeTab === 'about' && (
            <div className="flex flex-col gap-2.5">
              
              {/* Game Badge & Version with App Icon */}
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={getAssetUrl('/assets/icons/app_icon.png')}
                    alt="Word & World App Icon"
                    className="w-12 h-12 rounded-2xl object-cover shadow-lg border border-slate-700/60"
                  />
                  <div>
                    <h4 className="text-sm font-black text-white">Word & World</h4>
                    <p className="text-[10px] text-slate-400">
                      {t?.version || (isTR ? 'Sürüm' : 'Version')} 1.0.0 • #2026.1
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
                    <Globe className="w-3.5 h-3.5" />
                    <span>{isTR ? 'Viscora Games Google Play Sayfası' : 'Viscora Games Google Play Page'}</span>
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
                  <span>{t?.rateGame || (isTR ? 'Oyunu Değerlendir' : 'Rate Game')}</span>
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
                  <span>{t?.shareGame || (isTR ? 'Oyunu Paylaş' : 'Share Game')}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </button>

              {/* Support & Developer Contact (Viscora Games Email) */}
              <div className="bg-slate-850/90 rounded-2xl p-3 border border-slate-800 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{t?.contactSupport || (isTR ? 'Destek & İletişim' : 'Support & Contact')}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] font-black text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-lg active:scale-95 transition cursor-pointer"
                  >
                    {isTR ? 'Kopyala' : 'Copy'}
                  </button>
                </div>
                <p className="text-[10px] text-slate-400">
                  {isTR
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
          {t?.close || (isTR ? 'KAPAT' : 'CLOSE')}
        </button>
      </div>
    </div>
  );
}
