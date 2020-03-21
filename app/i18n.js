/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl'
import bg from 'react-intl/locale-data/bg'
import en from 'react-intl/locale-data/en'
import nl from 'react-intl/locale-data/nl'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'
import it from 'react-intl/locale-data/it'
import de from 'react-intl/locale-data/de'
import pt from 'react-intl/locale-data/pt'
import he from 'react-intl/locale-data/he'
import hr from 'react-intl/locale-data/hr'
import hu from 'react-intl/locale-data/hu'
import ca from 'react-intl/locale-data/ca'
import gl from 'react-intl/locale-data/gl'
import sk from 'react-intl/locale-data/sk'
import ro from 'react-intl/locale-data/ro'
import ru from 'react-intl/locale-data/ru'
import ar from 'react-intl/locale-data/ar'
import eu from 'react-intl/locale-data/eu'
import zh from 'react-intl/locale-data/zh'
import af from 'react-intl/locale-data/af'

import { DEFAULT_LOCALE, appLocales } from './containers/App/constants'
import enTranslationMessages from './translations/en.json'
import bgTranslationMessages from './translations/bg.json'
import nlTranslationMessages from './translations/nl.json'
import esTranslationMessages from './translations/es.json'
import frTranslationMessages from './translations/fr.json'
import itTranslationMessages from './translations/it.json'
import deTranslationMessages from './translations/de.json'
import ptTranslationMessages from './translations/pt.json'
import heTranslationMessages from './translations/he.json'
import hrTranslationMessages from './translations/hr.json'
import huTranslationMessages from './translations/hu.json'
import caTranslationMessages from './translations/ca.json'
import glTranslationMessages from './translations/gl.json'
import skTranslationMessages from './translations/sk.json'
import roTranslationMessages from './translations/ro.json'
import ruTranslationMessages from './translations/ru.json'
import arTranslationMessages from './translations/ar.json'
import euTranslationMessages from './translations/eu.json'
import valTranslationMessages from './translations/val.json'
import zhTranslationMessages from './translations/zh.json'
import afTranslationMessages from './translations/af.json'

addLocaleData([
  ...en,
  ...bg,
  ...es,
  ...fr,
  ...it,
  ...de,
  ...pt,
  ...he,
  ...hr,
  ...hu,
  ...ca,
  ...gl,
  ...sk,
  ...ro,
  ...ru,
  ...ar,
  ...eu,
  ...zh,
  ...af
])

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {}
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key]
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key]
    }
    return Object.assign(formattedMessages, { [key]: message })
  }, {})
}

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  bg: formatTranslationMessages('bg', bgTranslationMessages),
  br: formatTranslationMessages('br', ptTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
  it: formatTranslationMessages('it', itTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  nl: formatTranslationMessages('nl', nlTranslationMessages),
  pt: formatTranslationMessages('pt', ptTranslationMessages),
  he: formatTranslationMessages('he', heTranslationMessages),
  hr: formatTranslationMessages('hr', hrTranslationMessages),
  hu: formatTranslationMessages('hu', huTranslationMessages),
  ca: formatTranslationMessages('ca', caTranslationMessages),
  gl: formatTranslationMessages('gl', glTranslationMessages),
  ro: formatTranslationMessages('ro', roTranslationMessages),
  ru: formatTranslationMessages('ru', ruTranslationMessages),
  sk: formatTranslationMessages('sk', skTranslationMessages),
  ar: formatTranslationMessages('ar', arTranslationMessages),
  eu: formatTranslationMessages('eu', euTranslationMessages),
  val: formatTranslationMessages('val', valTranslationMessages),
  zh: formatTranslationMessages('zh', zhTranslationMessages),
  af: formatTranslationMessages('af', afTranslationMessages),
}
