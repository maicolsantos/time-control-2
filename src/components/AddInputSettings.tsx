import { useState } from 'react'
import { Plus } from 'lucide-react'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from './ui/dialog'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'

export function AddInputSettings({
  type,
  onAddSettings,
}: {
  type: 'Desconto' | 'Reembolso'
  // eslint-disable-next-line no-unused-vars
  onAddSettings: (name: string) => void
}) {
  const [name, setName] = useState('')
  const handleAddSettings = () => {
    onAddSettings(name)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
        <div className="bg-red overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Adicionar {type}</DialogTitle>
            <DialogDescription>
              Configure os {type.toLowerCase()}s por nome, valor e tipo
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 px-1">
            <Label htmlFor="name" className="md:text-right">
              Nome do {type.toLowerCase()}
            </Label>
            <div className="pt-2">
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              disabled={name.length === 0}
              onClick={() => {
                handleAddSettings()
                setName('')
              }}
            >
              Adicionar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
