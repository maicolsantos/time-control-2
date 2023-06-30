import { useState } from 'react'

import { Calendar } from './components/ui/calendar'
import { Card } from './components/ui/card'

function App() {
  const [selectedDate, setSelectedDate] = useState<Date[]>()

  const handleDayClick = (event: any) => {
    console.log(event)
  }

  return (
    <div className="w-full flex justify-center flex-col items-center space-y-4 py-4">
      <h3 className="font-bold text-sm">Time Control 2</h3>
      <Calendar
        mode="multiple"
        selected={selectedDate}
        onSelect={setSelectedDate}
        onDayClick={handleDayClick}
        className="rounded-md border"
      />

      <div className="w-full max-w-[278px]">
        <Card className="p-4">
          <h3 className="mb-2 font-bold text-sm">Subtotal</h3>
          <div className="w-full pt-2">
            <div className="flex justify-between w-full items-start text-xs">
              <strong className="leading-none">
                Dias{' '}
                <small className="text-[9px] font-bold text-gray-400">
                  (21)
                </small>
              </strong>
              <span className="font-bold leading-none">4200€</span>
            </div>
            <div className="flex justify-between w-full items-start text-sm text-gray-400">
              <small className="leading-1">Previsão</small>
              <small className="font-bold leading-1">4200€</small>
            </div>
          </div>

          <h3 className=" mt-4 mb-2 font-bold text-sm">Descontos</h3>
          <div className="w-full py-2 border-b border-stone-200">
            <div className="flex justify-between w-full items-start text-xs">
              <strong className="leading-none">
                IVA{' '}
                <small className="text-[9px] font-bold text-gray-400">
                  (25%)
                </small>
              </strong>
              <span className="font-bold leading-none">1000€</span>
            </div>
            <div className="flex justify-between w-full items-start text-xs text-gray-400">
              <small className="leading-1">Previsão</small>
              <small className="font-bold leading-1">4200€</small>
            </div>
          </div>
          <div className="w-full pt-2">
            <div className="flex justify-between w-full items-start text-xs">
              <strong className="leading-none">
                IRS{' '}
                <small className="text-[9px] font-bold text-gray-400">
                  (25%)
                </small>
              </strong>
              <span className="font-bold leading-none">1000€</span>
            </div>
            <div className="flex justify-between w-full items-start text-xs text-gray-400">
              <small className="leading-1">Previsão</small>
              <small className="font-bold leading-1">4200€</small>
            </div>
          </div>

          <h3 className="mt-4 mb-2 font-bold text-sm">Reembolso</h3>
          <div className="w-full pt-2">
            <div className="flex justify-between w-full items-start text-xs">
              <strong className="leading-none">
                IVA{' '}
                <small className="text-[9px] font-bold text-gray-400">
                  (25%)
                </small>
              </strong>
              <span className="font-bold leading-none">1000€</span>
            </div>
            <div className="flex justify-between w-full items-start text-xs text-gray-400">
              <small className="leading-1">Previsão</small>
              <small className="font-bold leading-1">4200€</small>
            </div>
          </div>
        </Card>
      </div>

      <div className="w-full max-w-[278px]">
        <Card className="p-4">
          <h3 className="mb-2 font-bold text-sm">Total</h3>
          <div className="w-full pt-2">
            <div className="flex justify-between w-full items-start text-xs">
              <strong className="leading-none">
                Saldo{' '}
                <small className="text-[9px] font-bold text-gray-400">
                  (+Descontos)
                </small>
              </strong>
              <span className="font-bold leading-none">3000€</span>
            </div>
            <div className="flex justify-between w-full items-start text-xs text-gray-400">
              <small className="leading-1">Previsão</small>
              <small className="font-bold leading-1">3000€</small>
            </div>
          </div>
        </Card>
      </div>

      <div className="w-full max-w-[278px]">
        <Card className="p-4">
          <h3 className="mb-2 font-bold text-sm">IVA Trimestre</h3>
          <div className="w-full pt-2">
            <div className="flex justify-between w-full items-start text-xs">
              <strong className="leading-none">
                IVA{' '}
                <small className="text-[9px] font-bold text-gray-400">
                  (25%)
                </small>
              </strong>
              <span className="font-bold leading-none">3000€</span>
            </div>
            <div className="flex justify-between w-full items-start text-xs text-gray-400">
              <small className="leading-1">Previsão</small>
              <small className="font-bold leading-1">3000€</small>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
