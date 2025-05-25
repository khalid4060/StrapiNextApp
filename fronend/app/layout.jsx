export const metadata = {
  title: 'Strapi Blog',
  description: 'A blog powered by Strapi and Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}