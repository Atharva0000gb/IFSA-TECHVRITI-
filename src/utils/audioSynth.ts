/**
 * Audio Synthesizer disabled per user preference.
 * Zero sounds, no AudioContext creation, clean silent UI.
 */

class CyberSoundEngine {
  public init(): void {}
  public toggle(): boolean {
    return false;
  }
  public getIsPlaying(): boolean {
    return false;
  }
  public playClick(_pitch = 880): void {}
  public playHover(_pitch = 480): void {}
  public stop(): void {}
}

export const cyberAudio = new CyberSoundEngine();
