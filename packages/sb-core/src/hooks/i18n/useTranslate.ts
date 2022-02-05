import { useCallback } from 'react';
import i18n from 'i18next';
import { TranslateProps } from '../../types';

/**
 * Translate a string using the current locale and the translations from the i18nProvider
 *
 *
 * @return {Object} A translation function and i18n, accepting two arguments
 *   - a string used as key in the translations
 *   - an interpolationOptions object
 *
 * @example
 *
 * import { useTranslate } from 'story-bootstrap';
 *
 * const Setting = () => {
 *     const { translate , i18n } = useTranslate();
 *     return <MenuItem>{translate('settings')}</MenuItem>;
 * }
 */

const useTranslate = (): TranslateProps => {
  const translate = useCallback((key: string, options: any) => {
    return i18n.t(key, options);
  }, []);

  return { translate, i18n };
};

export default useTranslate;
