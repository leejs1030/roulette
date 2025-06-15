import { SkillType, SkillCooldown, SKILL_COOLDOWN_TIMES } from 'common';

interface LocalSkillCooldown {
  skillType: SkillType;
  endTime: number; // timestamp
  totalCooldownTime: number;
}

export class SkillCooldownManager {
  private cooldowns: Map<SkillType, LocalSkillCooldown> = new Map();
  private listeners: Array<(cooldowns: SkillCooldown[]) => void> = [];

  /**
   * 스킬 사용 가능 여부 확인
   */
  public canUseSkill(skillType: SkillType): boolean {
    const cooldown = this.cooldowns.get(skillType);
    if (!cooldown) return true;
    
    const now = Date.now();
    if (now >= cooldown.endTime) {
      this.cooldowns.delete(skillType);
      this.notifyListeners();
      return true;
    }
    
    return false;
  }

  /**
   * 스킬 사용 시 쿨타임 시작
   */
  public useSkill(skillType: SkillType): void {
    const cooldownDuration = SKILL_COOLDOWN_TIMES[skillType];
    const endTime = Date.now() + cooldownDuration;
    
    this.cooldowns.set(skillType, {
      skillType,
      endTime,
      totalCooldownTime: cooldownDuration,
    });
    
    this.notifyListeners();
  }

  /**
   * 특정 스킬의 남은 쿨타임 시간 가져오기
   */
  public getRemainingCooldown(skillType: SkillType): number {
    const cooldown = this.cooldowns.get(skillType);
    if (!cooldown) return 0;
    
    const remaining = Math.max(0, cooldown.endTime - Date.now());
    if (remaining === 0) {
      this.cooldowns.delete(skillType);
      this.notifyListeners();
    }
    
    return remaining;
  }

  /**
   * 모든 활성 쿨타임 정보 가져오기
   */
  public getAllCooldowns(): SkillCooldown[] {
    const now = Date.now();
    const activeCooldowns: SkillCooldown[] = [];
    const expiredSkills: SkillType[] = [];

    for (const [skillType, cooldown] of this.cooldowns.entries()) {
      const remainingTime = Math.max(0, cooldown.endTime - now);
      
      if (remainingTime > 0) {
        activeCooldowns.push({
          skillType,
          remainingTime,
          totalCooldownTime: cooldown.totalCooldownTime,
        });
      } else {
        expiredSkills.push(skillType);
      }
    }

    // 만료된 쿨타임 정리
    if (expiredSkills.length > 0) {
      expiredSkills.forEach(skillType => this.cooldowns.delete(skillType));
      this.notifyListeners();
    }

    return activeCooldowns;
  }

  /**
   * 서버에서 받은 쿨타임 정보로 동기화
   */
  public syncWithServer(serverCooldowns: SkillCooldown[]): void {
    // 기존 쿨타임 초기화
    this.cooldowns.clear();
    
    // 서버 쿨타임 정보로 업데이트
    const now = Date.now();
    serverCooldowns.forEach(cooldown => {
      if (cooldown.remainingTime > 0) {
        this.cooldowns.set(cooldown.skillType, {
          skillType: cooldown.skillType,
          endTime: now + cooldown.remainingTime,
          totalCooldownTime: cooldown.totalCooldownTime,
        });
      }
    });
    
    this.notifyListeners();
  }

  /**
   * 쿨타임 변경 리스너 등록
   */
  public addListener(listener: (cooldowns: SkillCooldown[]) => void): void {
    this.listeners.push(listener);
  }

  /**
   * 쿨타임 변경 리스너 제거
   */
  public removeListener(listener: (cooldowns: SkillCooldown[]) => void): void {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  /**
   * 모든 쿨타임 초기화
   */
  public reset(): void {
    this.cooldowns.clear();
    this.notifyListeners();
  }

  /**
   * 리스너들에게 쿨타임 변경 알림
   */
  private notifyListeners(): void {
    const cooldowns = this.getAllCooldowns();
    this.listeners.forEach(listener => listener(cooldowns));
  }

  /**
   * 쿨타임 상태를 주기적으로 업데이트하는 타이머 시작
   */
  public startUpdateTimer(intervalMs: number = 100): () => void {
    const interval = setInterval(() => {
      if (this.cooldowns.size > 0) {
        this.notifyListeners(); // 자동으로 만료된 쿨타임 정리됨
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }
}

// 싱글톤 인스턴스
export const skillCooldownManager = new SkillCooldownManager();
