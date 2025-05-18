
export type Locale = 'en' | 'es' | 'id'; // Add more languages as needed

export const defaultLocale: Locale = 'en';

export const locales: Locale[] = ['en', 'es', 'id'];

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    'app.name': 'Analog Clock',
    'theme.toggle.dark': 'Switch to Dark Mode',
    'theme.toggle.light': 'Switch to Light Mode',
    'weekday.0': 'Sunday',
    'weekday.1': 'Monday',
    'weekday.2': 'Tuesday',
    'weekday.3': 'Wednesday',
    'weekday.4': 'Thursday',
    'weekday.5': 'Friday',
    'weekday.6': 'Saturday',
    'month.0': 'January',
    'month.1': 'February',
    'month.2': 'March',
    'month.3': 'April',
    'month.4': 'May',
    'month.5': 'June',
    'month.6': 'July',
    'month.7': 'August',
    'month.8': 'September',
    'month.9': 'October',
    'month.10': 'November',
    'month.11': 'December',
    'notfound.title': '404 - Page Not Found',
    'notfound.message': 'Sorry, the page you are looking for does not exist or may have been moved.',
    'notfound.button.home': 'Back to Home',
  },
  es: {
    'app.name': 'Analog Clock', // For brand consistency, keeping it as "Analog Clock"
    'theme.toggle.dark': 'Cambiar a Modo Oscuro',
    'theme.toggle.light': 'Cambiar a Modo Claro',
    'weekday.0': 'Domingo',
    'weekday.1': 'Lunes',
    'weekday.2': 'Martes',
    'weekday.3': 'Miércoles',
    'weekday.4': 'Jueves',
    'weekday.5': 'Viernes',
    'weekday.6': 'Sábado',
    'month.0': 'Enero',
    'month.1': 'Febrero',
    'month.2': 'Marzo',
    'month.3': 'Abril',
    'month.4': 'Mayo',
    'month.5': 'Junio',
    'month.6': 'Julio',
    'month.7': 'Agosto',
    'month.8': 'Septiembre',
    'month.9': 'Octubre',
    'month.10': 'Noviembre',
    'month.11': 'Diciembre',
    'notfound.title': '404 - Página No Encontrada',
    'notfound.message': 'Lo sentimos, la página que busca no existe o ha sido movida.',
    'notfound.button.home': 'Volver al Inicio',
  },
  id: {
    'app.name': 'Analog Clock', // For brand consistency, keeping it as "Analog Clock"
    'theme.toggle.dark': 'Beralih ke Mode Gelap',
    'theme.toggle.light': 'Beralih ke Mode Terang',
    'weekday.0': 'Minggu',
    'weekday.1': 'Senin',
    'weekday.2': 'Selasa',
    'weekday.3': 'Rabu',
    'weekday.4': 'Kamis',
    'weekday.5': 'Jumat',
    'weekday.6': 'Sabtu',
    'month.0': 'Januari',
    'month.1': 'Februari',
    'month.2': 'Maret',
    'month.3': 'April',
    'month.4': 'Mei',
    'month.5': 'Juni',
    'month.6': 'Juli',
    'month.7': 'Agustus',
    'month.8': 'September',
    'month.9': 'Oktober',
    'month.10': 'November',
    'month.11': 'Desember',
    'notfound.title': '404 - Halaman Tidak Ditemukan',
    'notfound.message': 'Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.',
    'notfound.button.home': 'Kembali ke Beranda',
  }
};

export function getFormatter(locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
