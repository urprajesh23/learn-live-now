
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Calendar = ({ classes, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(date);
    onDateSelect(date);
  };

  // Check if a specific date has any classes
  const dateHasClasses = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split('T')[0];
    return classes.some(cls => new Date(cls.date).toISOString().split('T')[0] === date);
  };

  // Generate calendar grid
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const monthName = currentMonth.toLocaleString('default', { month: 'long' });
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Create empty cells for days before the first day of the month
    const blanks = Array(firstDay).fill(null).map((_, i) => (
      <div key={`blank-${i}`} className="calendar-day opacity-0"></div>
    ));
    
    // Create cells for each day in the month
    const daysArray = Array(days).fill(null).map((_, i) => {
      const day = i + 1;
      const date = new Date(year, month, day);
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
      const hasClasses = dateHasClasses(day);
      
      return (
        <button
          key={`day-${day}`}
          className={`calendar-day ${hasClasses ? 'has-class' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'border border-brand-400' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          <span>{day}</span>
          {hasClasses && <div className="w-1 h-1 bg-brand-600 rounded-full mt-1"></div>}
        </button>
      );
    });
    
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {monthName} {year}
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={handlePrevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {blanks}
          {daysArray}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {generateCalendarDays()}
    </div>
  );
};

export default Calendar;
