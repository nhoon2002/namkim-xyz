import "./globals.css";

export const metadata = {
  title: "Nam Kim - Senior Full Stack Developer",
  description: "Portfolio of Nam Kim, a Senior Full Stack Developer with 8+ years of experience building scalable web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
