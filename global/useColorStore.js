'use client'
import { generatePalette } from '@/services/generatePalette'

const { create } = require('zustand')

const useColorStore = create(set => ({
  paletteColors: [],
  addColor: value =>
    set(state => ({
      ...state,
      paletteColors: [...state.paletteColors, value],
    })),
  setAllColors: arr => set({ paletteColors: arr }),
  editOneColor: (value, id) => {
    set(state => ({
      paletteColors: state.paletteColors.map(e => {
        if (e.id == id) {
          return { ...e, color: value.color }
        }
        return e
      }),
    }))
  },
  setAllColorGenerate: () =>
    set({ paletteColors: generatePalette({ empty: false, number: 5 }) }),
}))
export default useColorStore
