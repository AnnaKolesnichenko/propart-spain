import { Roboto, Inter, Square_Peg } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400','500', '700'],
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '---font-inter',
});
export const SquarePeg = Square_Peg({
  subsets: ['latin'],
  weight: ['400'],
});
