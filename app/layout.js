
import BackgroundImage from "./Background/page";
import "./globals.css";



export default function RootLayout({ children })
{
  return(
          <html lang="en">

            <body>

            <BackgroundImage/>

            {children}

            </body>

          </html>
        );
}
