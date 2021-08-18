module.exports = {
  locales: ['en', 'ka'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) => {
    // need logic to get langauges from firebase resources
    console.log(lang, ns, 123);
    return {};
  },
};
