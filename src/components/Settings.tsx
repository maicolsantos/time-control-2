import { Cog } from 'lucide-react'

import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Separator } from './ui/separator'
import { InputSettings } from './InputSettings'
import { AddInputSettings } from './AddInputSettings'
import { useSettingsStore } from '../stores/useSettingsStore'

export function Settings() {
  // eslint-disable-next-line object-curly-newline
  const { discounts, refunds, setDiscounts, setRefunds } = useSettingsStore()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Cog />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
        <div className="bg-red overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Configurar</DialogTitle>
            <DialogDescription>
              Configure os valores ganho por dia, descontos e reembolsos
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <InputSettings
              item={{ name: 'earnPerDay', label: 'Valor por dia', value: 10 }}
            />
            <Separator />

            <div className="flex justify-between items-center">
              <DialogDescription>Descontos</DialogDescription>
              <AddInputSettings type="Desconto" onAddSettings={setDiscounts} />
            </div>
            {discounts?.map((discount) => (
              <InputSettings
                key={discount.id}
                type="discounts"
                item={discount}
              />
            ))}
            <Separator />

            <div className="flex justify-between items-center">
              <DialogDescription>Reembolso</DialogDescription>
              <AddInputSettings type="Reembolso" onAddSettings={setRefunds} />
            </div>
            {refunds?.map((refund) => (
              <InputSettings key={refund.id} type="refunds" item={refund} />
            ))}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Salvar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
