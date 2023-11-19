export const localeCodes = ["en","de-DE","es-ES","ja","zh-CN","pt-PT","pt-BR"]

export const localeMessages = {
  "en": [{ key: "../internationalization/en.json", load: () => import("../internationalization/en.json" /* webpackChunkName: "lang_en_json_en_json" */) }],
  "de-DE": [{ key: "../internationalization/de-DE.json", load: () => import("../internationalization/de-DE.json" /* webpackChunkName: "lang_de_DE_json_de_DE_json" */) }],
  "es-ES": [{ key: "../internationalization/es-ES.json", load: () => import("../internationalization/es-ES.json" /* webpackChunkName: "lang_es_ES_json_es_ES_json" */) }],
  "ja": [{ key: "../internationalization/ja.json", load: () => import("../internationalization/ja.json" /* webpackChunkName: "lang_ja_json_ja_json" */) }],
  "zh-CN": [{ key: "../internationalization/zh-CN.json", load: () => import("../internationalization/zh-CN.json" /* webpackChunkName: "lang_zh_CN_json_zh_CN_json" */) }],
  "pt-PT": [{ key: "../internationalization/pt-PT.json", load: () => import("../internationalization/pt-PT.json" /* webpackChunkName: "lang_pt_PT_json_pt_PT_json" */) }],
  "pt-BR": [{ key: "../internationalization/pt-BR.json", load: () => import("../internationalization/pt-BR.json" /* webpackChunkName: "lang_pt_BR_json_pt_BR_json" */) }],
}

export const additionalMessages = Object({"en":[],"de-DE":[],"es-ES":[],"ja":[],"zh-CN":[],"pt-PT":[],"pt-BR":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  nuxtI18nOptions.experimental = Object({"jsTsFormatResource":false})
  nuxtI18nOptions.precompile = Object({"strictMessage":true,"escapeHtml":false})
 const vueI18nConfigLoader = async (loader) => {
            const config = await loader().then(r => r.default || r)
            return typeof config === 'object'
              ? config
              : typeof config === 'function'
                ? await config()
                : {}
          }
  nuxtI18nOptions.vueI18n = Object({})
  nuxtI18nOptions.locales = [Object({"code":"en","name":"English","file":"en.json","hash":"df10e90a","type":"static"}),Object({"code":"de-DE","name":"Deutsch","file":"de-DE.json","hash":"0846b46e","type":"static"}),Object({"code":"es-ES","name":"Español","file":"es-ES.json","hash":"58ca7b02","type":"static"}),Object({"code":"ja","name":"日本語","file":"ja.json","hash":"3f9dd3b0","type":"static"}),Object({"code":"zh-CN","name":"简体中文","file":"zh-CN.json","hash":"74c7f42f","type":"static"}),Object({"code":"pt-PT","name":"Português","file":"pt-PT.json","hash":"a2bb6d83","type":"static"}),Object({"code":"pt-BR","name":"Português do Brasil","file":"pt-BR.json","hash":"fa40db6f","type":"static"})]
  nuxtI18nOptions.defaultLocale = "en"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "no_prefix"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "internationalization"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"en","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.types = "composition"
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({experimental: Object({"jsTsFormatResource":false}),precompile: Object({"strictMessage":true,"escapeHtml":false}),vueI18n: "",locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,types: "composition",debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","name":"English","file":"en.json","hash":"df10e90a","type":"static"}),Object({"code":"de-DE","name":"Deutsch","file":"de-DE.json","hash":"0846b46e","type":"static"}),Object({"code":"es-ES","name":"Español","file":"es-ES.json","hash":"58ca7b02","type":"static"}),Object({"code":"ja","name":"日本語","file":"ja.json","hash":"3f9dd3b0","type":"static"}),Object({"code":"zh-CN","name":"简体中文","file":"zh-CN.json","hash":"74c7f42f","type":"static"}),Object({"code":"pt-PT","name":"Português","file":"pt-PT.json","hash":"a2bb6d83","type":"static"}),Object({"code":"pt-BR","name":"Português do Brasil","file":"pt-BR.json","hash":"fa40db6f","type":"static"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const NUXT_I18N_PRECOMPILE_ENDPOINT = "/__i18n__/precompile"
export const NUXT_I18N_PRECOMPILED_LOCALE_KEY = "i18n-locales"
export const NUXT_I18N_PRERENDERED_PATH = "/__i18n__/prerender"
export const NULL_HASH = "00000000"
export const isSSG = false
