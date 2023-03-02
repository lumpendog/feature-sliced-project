import { memo } from 'react';
import { type LinkProps, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className = '',
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props;

  return (
    <Link
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      to={to}
      {...restProps}
    >
      {children}
    </Link>
  );
});
