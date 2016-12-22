/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'
import it from 'react-intl/locale-data/it'
import de from 'react-intl/locale-data/de'
import af from 'react-intl/locale-data/af'

import enTranslationMessages from './translations/en.json'
import esTranslationMessages from './translations/es.json'
import frTranslationMessages from './translations/fr.json'
import itTranslationMessages from './translations/it.json'
import deTranslationMessages from './translations/de.json'
import valTranslationMessages from './translations/val.json'
import afTranslationMessages from './translations/af.json'


import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line


export const appLocales = [
  'en',
  'es',
  'fr',
  'it',
  'de',
  'af'
]

addLocaleData([...en, ...es, ...fr, ...it, ...de, ...af])

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {}
  const formattedMessages = {}
  const messageKeys = Object.keys(messages)

  for (const messageKey of messageKeys) { // eslint-disable-line
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey]
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey]
    }
  }

  return formattedMessages
}

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
  it: formatTranslationMessages('it', itTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  val: formatTranslationMessages('val', valTranslationMessages),
  af: formatTranslationMessages('af', afTranslationMessages)
}
