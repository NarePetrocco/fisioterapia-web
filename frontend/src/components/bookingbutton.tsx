// components/ReserveButton.tsx

import { DialogTrigger } from '@radix-ui/react-dialog'; 
import { Button } from '@/components/ui/button'; 
import { FaCalendarAlt } from 'react-icons/fa';

const BookingButton = () => {
  return (
    <DialogTrigger asChild>
      <Button className="w-full gap-2 bg-[var(--custom-green)] hover:bg-green-700">
        <FaCalendarAlt /> Reserva tu cita aquí
      </Button>
    </DialogTrigger>
  );
};

export default BookingButton;
