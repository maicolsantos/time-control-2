/* eslint-disable no-unused-vars */
import { ChangeEvent, useState } from 'react'

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

type InputSettingsProps = {
  name: string
  label: string
  value: number | string
  onChange?: (value: number) => void
}

export function InputSettings({ name, label, value }: InputSettingsProps) {
  const [inputValue, setInputValue] = useState(value)

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="md:flex items-center gap-4">
      <Label htmlFor={name} className="md:text-right w-fit md:w-4/12">
        {label}
      </Label>
      <div className="flex gap-4 w-full">
        <Input
          type="number"
          id={name}
          value={inputValue}
          className="col-span-1 mb-2 md:mb-0"
          onChange={handleOnchange}
        />
        <div className="w-6/12 md:w-8/12">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="percentage">%</SelectItem>
                <SelectItem value="currency">€</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
