/* eslint-disable no-unused-vars */
import { ChangeEvent, useRef, useState } from 'react'

import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { useSettingsStore } from '../stores/useSettingsStore'

type InputSettingsProps = {
  item: {
    id?: string
    name: string
    label: string
    value: number
    type?: '%' | '€' | string
  }
  type?: 'discounts' | 'refunds'
  onChange?: (value: number) => void
}

export function InputSettings({ item, type }: InputSettingsProps) {
  const { updateDiscounts, updateRefunds } = useSettingsStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<any>(null)

  const [formValue, setFormValue] = useState({
    input: item.value,
    select: item.type,
  })

  const handleDiscountsValues = (value: any) => {
    updateDiscounts({
      ...item,
      value: value.input,
      type: value.select,
    })
  }

  const handleRefundsValues = (value: any) => {
    updateRefunds({
      ...item,
      value: value.input,
      type: value.select,
    })
  }

  const handleOnchange = (value: any) => {
    console.log(11, inputRef.current?.value)

    setFormValue((prev) => ({
      ...prev,
      ...value,
    }))

    if (type === 'discounts') {
      handleDiscountsValues(value)
    }

    if (type === 'refunds') {
      handleRefundsValues(value)
    }
  }

  return (
    <div className="md:flex items-center gap-4">
      <Label htmlFor={item.name} className="md:text-right w-fit md:w-4/12">
        {item.label}
      </Label>
      <div className="flex gap-4 w-full">
        <Input
          type="number"
          id={item.id}
          ref={inputRef}
          value={formValue.input}
          className="col-span-1 mb-2 md:mb-0"
          onChange={(event: any) =>
            handleOnchange({ input: Number(event.target.value) })
          }
        />
        <div className="w-6/12 md:w-8/12">
          <Select
            value={formValue.select}
            onValueChange={(value) => handleOnchange({ select: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="%">%</SelectItem>
                <SelectItem value="€">€</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
