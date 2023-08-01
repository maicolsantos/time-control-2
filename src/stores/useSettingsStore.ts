/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  id?: string
  name: string
  label: string
  value: number
  type?: '%' | '€' | string
}

export type SettingsStore = {
  discounts: Props[]
  refunds: Props[]
  setDiscounts: (discountName: string) => void
  setRefunds: (refunds: string) => void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  discounts: [],
  refunds: [],
  setDiscounts: (discountName) => {
    return set((state) => {
      const _discount = [
        ...state.discounts,
        {
          id: uuidv4(),
          name: discountName,
          label: discountName,
          value: 0,
          type: '%',
        },
      ]

      return { discounts: _discount }
    })
  },
  setRefunds: (refundsName) => {
    return set((state) => {
      const _refund = [
        ...state.refunds,
        {
          id: uuidv4(),
          name: refundsName,
          label: refundsName,
          value: 0,
          type: '%',
        },
      ]

      return { refunds: _refund }
    })
  },
}))
