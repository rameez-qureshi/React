import "./globals.css";

export const metadata = {
  title: "ToDoList",
  description: "save your info here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
