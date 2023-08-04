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
  updateDiscounts: (discount: Props) => void
  updateRefunds: (refund: Props) => void
  setRefunds: (refunds: string) => void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  discounts: JSON.parse(localStorage.getItem('@tc/discounts' || '[]') as never),
  refunds: JSON.parse(localStorage.getItem('@tc/refunds' || '[]') as never),
  setDiscounts: (discountName) => {
    return set((state) => {
      const _discount = state.discounts || []
      _discount.push({
        id: uuidv4(),
        name: discountName,
        label: discountName,
        value: 0,
        type: '%',
      })

      localStorage.setItem('@tc/discounts', JSON.stringify(_discount))

      return { discounts: _discount }
    })
  },
  updateDiscounts: (discountUpdate) => {
    return set((state) => {
      console.log('💀 ~ useSettingsStore ~ discountUpdate:', discountUpdate)
      const newData = state.discounts.map((discount) => {
        if (discount.id === discountUpdate.id) {
          return {
            ...discount,
            ...discountUpdate,
          }
        }

        return discount
      })

      localStorage.setItem('@tc/discounts', JSON.stringify(newData))

      return { discounts: newData }
    })
  },
  updateRefunds: (refundUpdate) => {
    return set((state) => {
      const newData = state.refunds.map((refund) => {
        if (refund.id === refundUpdate.id) {
          return refundUpdate
        }

        return refund
      })

      localStorage.setItem('@tc/refunds', JSON.stringify(newData))

      return { refunds: newData }
    })
  },
  setRefunds: (refundsName) => {
    return set((state) => {
      const _refund = state.refunds || []
      _refund.push({
        id: uuidv4(),
        name: refundsName,
        label: refundsName,
        value: 0,
        type: '%',
      })

      localStorage.setItem('@tc/refunds', JSON.stringify(_refund))

      return { refunds: _refund }
    })
  },
}))
