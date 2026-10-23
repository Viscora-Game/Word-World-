// Web Audio API Synthesizer - 100% standalone, ultra-rich mobile casual game audio
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.vibrationEnabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  vibrate(pattern = 15) {
    if (this.vibrationEnabled && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {
        // ignore vibration errors
      }
    }
  }

  // Playful, cheerful bubble pop keystroke with slight random pitch
  playKey() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    this.vibrate(8);
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Slight random pitch for organic marimba/bubble feel (380Hz - 440Hz)
    const baseFreq = 380 + Math.random() * 60;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.45, this.ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  // Tactile button tap
  playButton() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    this.vibrate(12);
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(460, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(240, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.14, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // Staggered letter reveal sounds
  playTileReveal(index = 0, status = 'absent') {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (status === 'correct') {
      // Golden bell chime chord
      const freq = 523.25 + index * 65.4; // C5 climbing
      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc2.frequency.setValueAtTime(freq * 1.5, this.ctx.currentTime); // Perfect fifth harmonic

      gain.gain.setValueAtTime(0.24, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.28);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(this.ctx.currentTime + 0.28);
      osc2.stop(this.ctx.currentTime + 0.28);
      this.vibrate(25);
    } else if (status === 'present') {
      // Warm marimba pop
      const freq = 440 + index * 55;
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.16, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      osc1.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc1.stop(this.ctx.currentTime + 0.2);
      this.vibrate(15);
    } else {
      // Soft muffled tap
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc1.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc1.stop(this.ctx.currentTime + 0.12);
    }
  }

  // Sparkling magic star reveal
  playStar(starIndex = 1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    this.vibrate([25, 20, 35]);
    const freqs = [659.25, 783.99, 987.77, 1318.51]; // E5, G5, B5, E6 (Sparkling E major triad)
    const freq = freqs[Math.min(starIndex - 1, freqs.length - 1)] || 783.99;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(freq * 2, this.ctx.currentTime); // Octave sparkle

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + 0.6);
    osc2.stop(this.ctx.currentTime + 0.6);
  }

  // Magical ascending sparkle for hints & power-ups
  playHint() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    this.vibrate([30, 20, 40]);
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, High C
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
      }, idx * 60);
    });
  }

  // Celebratory triumphant fanfare
  playWin() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    this.vibrate([40, 40, 50, 40, 100]);
    // C Major Arpeggio Fanfare (C4, E4, G4, C5, E5, G5)
    const melody = [
      { f: 523.25, d: 0.12, delay: 0 },
      { f: 659.25, d: 0.12, delay: 90 },
      { f: 783.99, d: 0.14, delay: 180 },
      { f: 1046.5, d: 0.45, delay: 280 }
    ];

    melody.forEach((note) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(note.f, this.ctx.currentTime);
        osc2.frequency.setValueAtTime(note.f * 1.002, this.ctx.currentTime); // Warm chorus detune

        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + note.d);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(this.ctx.currentTime + note.d);
        osc2.stop(this.ctx.currentTime + note.d);
      }, note.delay);
    });
  }

  // Soft cartoon-style invalid input buzz
  playError() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    this.vibrate([45, 30, 45]);
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(95, this.ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }
}

export const soundManager = new SoundManager();
