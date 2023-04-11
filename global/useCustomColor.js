const { create } = require('zustand')
const useCustomColor = create(set => ({
  color: { color: '', setColor: () => {} },
  isVisibleCustomColor: false,
  setIsVisibleCustomColor: value =>
    set(state => ({ ...state, isVisibleCustomColor: value })),
  setColorState: params => set(state => ({ ...state, color: params })),
}))
export default useCustomColor
