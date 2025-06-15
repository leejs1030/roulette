import React from 'react';
import { SkillType } from 'common';
import { useSkillCooldown } from '../hooks/useSkillCooldown';
import './SkillCooldownIndicator.css';

interface SkillCooldownIndicatorProps {
  skillType: SkillType;
  className?: string;
  showText?: boolean;
}

export const SkillCooldownIndicator: React.FC<SkillCooldownIndicatorProps> = ({
  skillType,
  className = '',
  showText = true,
}) => {
  const { skillInfo } = useSkillCooldown(skillType);

  if (skillInfo.canUse) {
    return null; // 쿨타임이 없으면 표시하지 않음
  }

  const remainingSeconds = Math.ceil(skillInfo.remainingTime / 1000);
  const progressPercentage = skillInfo.progress * 100;

  return (
    <div className={`skill-cooldown-indicator ${className}`}>
      <div className="cooldown-overlay">
        <div
          className="cooldown-progress"
          style={{ 
            width: `${progressPercentage}%`,
            transition: 'width 0.1s ease-out'
          }}
        />
        {showText && (
          <div className="cooldown-text">
            {remainingSeconds}s
          </div>
        )}
      </div>
    </div>
  );
};

interface SkillButtonProps {
  skillType: SkillType;
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const SkillButton: React.FC<SkillButtonProps> = ({
  skillType,
  selected,
  onClick,
  children,
  className = '',
}) => {
  const { skillInfo } = useSkillCooldown(skillType);

  const handleClick = () => {
    if (skillInfo.canUse) {
      onClick();
    }
  };

  return (
    <div className={`skill-button-container ${className}`}>
      <button
        className={`skill-button ${selected ? 'selected' : ''} ${!skillInfo.canUse ? 'disabled' : ''}`}
        onClick={handleClick}
        disabled={!skillInfo.canUse}
      >
        {children}
        {!skillInfo.canUse && (
          <SkillCooldownIndicator 
            skillType={skillType} 
            className="button-cooldown-overlay"
            showText={true}
          />
        )}
      </button>
    </div>
  );
};
