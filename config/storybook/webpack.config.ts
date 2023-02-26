import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { type Configuration, DefinePlugin, type RuleSetRule } from 'webpack';
import { BuildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.extensions.push('.tsx', '.ts');
  config.resolve.modules.unshift(paths.src);
  config.module.rules.push(BuildCssLoader(true));
  config.plugins.push(new DefinePlugin({
    GLOBAL_IS_DEV: JSON.stringify(true),
  }));
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/.svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/ };
    }

    return rule;
  });
  config.module.rules.push(buildSvgLoader());

  return config;
};