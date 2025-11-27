import { BankingProvider } from '../lib/BankingContext';
import './global.css';

export const metadata = {
  title: 'iO Bank',
  description: 'iO Bank - Technical Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BankingProvider>
          {children}
        </BankingProvider>
      </body>
    </html>
  );
}
