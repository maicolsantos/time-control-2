import { ChangeEvent, useState } from 'react'

import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'

type InputSettingsProps = {
  name: string
  label: string
  value: number | string
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: number) => void
}

export function InputSettings({ name, label, value }: InputSettingsProps) {
  const [inputValue, setInputValue] = useState(value)

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="md:grid md:grid-cols-3 items-center gap-4">
      <Label htmlFor={name} className="md:text-right">
        {label}
      </Label>
      <Input
        type="number"
        id={name}
        value={inputValue}
        className="col-span-1 mb-2 md:mb-0"
        onChange={handleOnchange}
      />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo</SelectLabel>
            <SelectItem value="percentage">%</SelectItem>
            <SelectItem value="currency">€</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
