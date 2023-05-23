import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Nav from '@/app/nav';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider profileUrl="/api/page-router-auth/me">
        <body>
          <header>
            <Nav />
          </header>
          <div className="container">{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
