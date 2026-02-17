import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, Users, Clock, User, Phone, X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const ReservationModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    time: '',
    guests: '',
    notes: '',
  });

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast.error('Por favor, completa todos los campos obligatorios');
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(`${API}/reservations`, {
        name: formData.name,
        phone: formData.phone,
        date: format(formData.date, 'yyyy-MM-dd'),
        time: formData.time,
        guests: formData.guests,
        notes: formData.notes,
      });

      setIsSuccess(true);
      toast.success('¡Reserva confirmada!');
      
      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          phone: '',
          date: null,
          time: '',
          guests: '',
          notes: '',
        });
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error creating reservation:', error);
      toast.error('Error al crear la reserva. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setIsSuccess(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="sm:max-w-[500px] bg-[#FDFBF7] border-[#E5E0D8] p-0 overflow-hidden"
        data-testid="reservation-modal"
      >
        {/* Success State */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <div className="w-20 h-20 bg-[#B8C480] rounded-full flex items-center justify-center mb-6 animate-scale-in">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#2C2C2C] mb-2">
              ¡Reserva Confirmada!
            </h3>
            <p className="text-[#6B6B6B] text-center">
              Te esperamos el {formData.date && format(formData.date, "d 'de' MMMM", { locale: es })} a las {formData.time}
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <DialogHeader className="px-6 pt-6 pb-4 border-b border-[#E5E0D8]">
              <DialogTitle className="font-['Playfair_Display'] text-2xl font-medium text-[#2C2C2C]">
                Reservar Mesa
              </DialogTitle>
              <DialogDescription className="text-sm text-[#6B6B6B] mt-1">
                Completa el formulario y te confirmaremos tu reserva
              </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#2C2C2C] font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-[#B8C480]" />
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="bg-white border-[#E5E0D8] focus:border-[#B8C480] focus:ring-[#B8C480]/20"
                  data-testid="reservation-name"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#2C2C2C] font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B8C480]" />
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+34 600 000 000"
                  className="bg-white border-[#E5E0D8] focus:border-[#B8C480] focus:ring-[#B8C480]/20"
                  data-testid="reservation-phone"
                />
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-2">
                  <Label className="text-[#2C2C2C] font-medium flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#B8C480]" />
                    Fecha *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-white border-[#E5E0D8] hover:bg-[#FDFBF7] hover:border-[#B8C480]"
                        data-testid="reservation-date"
                      >
                        {formData.date ? (
                          format(formData.date, "d MMM yyyy", { locale: es })
                        ) : (
                          <span className="text-[#6B6B6B]">Seleccionar</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white border-[#E5E0D8]" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => setFormData({ ...formData, date })}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        locale={es}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label className="text-[#2C2C2C] font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B8C480]" />
                    Hora *
                  </Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => setFormData({ ...formData, time: value })}
                  >
                    <SelectTrigger 
                      className="bg-white border-[#E5E0D8] focus:border-[#B8C480] focus:ring-[#B8C480]/20"
                      data-testid="reservation-time"
                    >
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#E5E0D8]">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <Label className="text-[#2C2C2C] font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#B8C480]" />
                  Número de personas *
                </Label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => setFormData({ ...formData, guests: value })}
                >
                  <SelectTrigger 
                    className="bg-white border-[#E5E0D8] focus:border-[#B8C480] focus:ring-[#B8C480]/20"
                    data-testid="reservation-guests"
                  >
                    <SelectValue placeholder="Selecciona el número de comensales" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#E5E0D8]">
                    {guestOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option} {option === '1' ? 'persona' : 'personas'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-[#2C2C2C] font-medium">
                  Notas adicionales (opcional)
                </Label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Alergias, celebraciones especiales, preferencia de mesa..."
                  rows={3}
                  className="w-full px-3 py-2 bg-white border border-[#E5E0D8] rounded-md text-sm placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#B8C480] focus:ring-2 focus:ring-[#B8C480]/20 resize-none"
                  data-testid="reservation-notes"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#B8C480] text-[#2C2C2C] hover:bg-[#A5B36B] rounded-full py-6 text-base font-medium btn-primary disabled:opacity-50"
                data-testid="reservation-submit"
              >
                {isLoading ? 'Procesando...' : 'Confirmar Reserva'}
              </Button>

              <p className="text-xs text-center text-[#6B6B6B]">
                Te confirmaremos la reserva por teléfono o WhatsApp
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
