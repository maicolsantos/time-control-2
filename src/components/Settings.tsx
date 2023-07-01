import { Cog } from 'lucide-react'

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
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Separator } from './ui/separator'

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
          <div className="md:grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="earnPerDay" className="md:text-right">
              Valor por dia
            </Label>
            <Input
              type="number"
              id="earnPerDay"
              value="10"
              className="col-span-2"
            />
          </div>
          <Separator />

          <DialogDescription>Descontos</DialogDescription>
          <div className="md:grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="discount_iva" className="md:text-right">
              IVA %
            </Label>
            <Input
              type="number"
              id="discount_iva"
              value="25"
              className="col-span-2"
            />
          </div>
          <div className="md:grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="discount_irs" className="md:text-right">
              IRS %
            </Label>
            <Input
              type="number"
              id="discount_irs"
              value="25"
              className="col-span-2"
            />
          </div>
          <Separator />

          <DialogDescription>Reembolso</DialogDescription>
          <div className="md:grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="discount_iva" className="md:text-right">
              IVA %
            </Label>
            <Input
              type="number"
              id="discount_iva"
              value="25"
              className="col-span-2"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
