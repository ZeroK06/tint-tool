'use client'
import { generatePalette } from '@/services/generatePalette'
import { toast } from 'react-hot-toast'

const { create } = require('zustand')

const useColorStore = create(set => ({
  paletteColors: [],
  addColor: value =>
    set(state => {
      if (state.paletteColors.length != 9) {
        return {
          ...state,
          paletteColors: [...state.paletteColors, value],
        }
      }
      toast.error('No puedes mas de 9 colores, lo siento!')
      return state
    }),
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
  removeColorItem: id =>
    set(state => ({
      ...state,
      paletteColors: state.paletteColors.filter(e => e.id != id),
    })),
}))
export default useColorStore
