const { create } = require('zustand')

const useExportCodeCss = create(set => ({
  isVisibleExportCode: false,
  setIsVisibleExportCode: value =>
    set(state => ({ ...state, isVisibleExportCode: value })),
}))
export default useExportCodeCss
