
// Format currency in Indian Rupees
export const formatIndianPrice = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format date in Indian format
export const formatIndianDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

// Format time in 12-hour format with IST
export const formatIndianTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  
  return new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date) + ' IST';
};
