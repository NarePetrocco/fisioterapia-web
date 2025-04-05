// components/ReserveButton.tsx

import { DialogTrigger } from '@radix-ui/react-dialog'; // Solo necesitamos DialogTrigger
import { Button } from '@/components/ui/button'; // El botón personalizado que estás usando
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
