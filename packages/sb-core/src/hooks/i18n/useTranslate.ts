import { useTranslation } from 'react-i18next';
import { TranslateProps } from '../../types';

const useTranslate = (): TranslateProps => {
  const { t: translate, i18n } = useTranslation();

  return { translate, i18n };
};

export default useTranslate;
