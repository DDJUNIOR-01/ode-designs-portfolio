import "./globals.css";

export const metadata = {
  title: "ODE Designs — Visual Design Portfolio",
  description: "ODE Designs portfolio by David Emenike — visual design, branding and web-focused graphics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
