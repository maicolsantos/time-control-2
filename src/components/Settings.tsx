import { Cog, Plus } from 'lucide-react'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Separator } from './ui/separator'
import { InputSettings } from './InputSettings'

export function Settings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Cog />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configurar</DialogTitle>
          <DialogDescription>
            Configure os valores ganho por dia, descontos e reembolsos
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <InputSettings name="earnPerDay" label="Valor por dia" value={10} />
          <Separator />

          <div className="flex justify-between items-center">
            <DialogDescription>Descontos</DialogDescription>
            <Button variant="outline" size="icon" className="w-7 h-7">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <InputSettings name="iva" label="IVA %" value={25} />
          <InputSettings name="irs" label="IRS %" value={25} />
          <Separator />

          <div className="flex justify-between items-center">
            <DialogDescription>Reembolso</DialogDescription>
            <Button variant="outline" size="icon" className="w-7 h-7">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <InputSettings name="iva" label="IVA %" value={25} />
        </div>
        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
