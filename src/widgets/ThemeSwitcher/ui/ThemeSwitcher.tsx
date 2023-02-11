import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from 'shared/assets/icons/dark.svg';
import LightIcon from 'shared/assets/icons/light.svg';
import { Button } from 'shared';
import { ButtonTheme } from 'shared';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
