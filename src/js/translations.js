import $ from 'jquery'
import { getCommonTranslations } from '../data/common'

const localization = [
  {
    lang: 'en',
    fontFamily: `'ClashGrotesk-Variable', sans-serif`
  },
  {
    lang: 'ru',
    fontFamily: `'Inter Tight Variable', sans-serif`
  }
]

$('#lang-switcher').on('click', () => {
  const currentLang = getCurrentLang()
  const newLang = currentLang.lang === 'en' ? 'ru' : 'en'
  localStorage.setItem('lang', newLang)
  translate(getCurrentLang())
})

const getCurrentLang = () => {
  let lang = localStorage.getItem('lang')
  if (!lang) {
    localStorage.setItem('lang', 'ru')
    lang = 'ru'
  }
  return localization.find((item) => item.lang === lang)
}

const translate = (lang) => {
  const commonTranslations = getCommonTranslations(lang.lang)
  $('[translatable-value]').each((index, element) => {
    const $element = $(element)
    element.innerText = getValueByKeyPath(commonTranslations, $element.attr('translatable-value'))
    const value = lang.fontFamily
    console.log(value)
    $element.css('font-family', value)
  })
}

translate(getCurrentLang())

function getValueByKeyPath(obj, keyPath) {
  const keys = keyPath.split('.')
  return keys.reduce((acc, key) => acc && acc[key], obj)
}
