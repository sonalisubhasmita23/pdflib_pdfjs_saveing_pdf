import { useEffect } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fontkit from '@pdf-lib/fontkit';

function App() {


  useEffect(() => {

    async function embed(){
      // Update the document title using the browser API
    const pdfDoc = await PDFDocument.create()
    pdfDoc.registerFontkit(fontkit);
    //const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    // page.drawText('Creating PDFs in JavaScript is awesome!', {
    //   x: 50,
    //   y: height - 4 * fontSize,
    //   size: fontSize,
    //   font: timesRomanFont,
    //   color: rgb(0, 0.53, 0.71),
    // })

    function appendStringToArrayBuffer(inputString, originalArrayBuffer) {
      // Convert the input string to UTF-8 encoded bytes
      const encoder = new TextEncoder('ascii');
      const stringBytes = encoder.encode(inputString);
    
      // Create a new buffer to hold the concatenated data
      const newBuffer = new Uint8Array(originalArrayBuffer.byteLength + stringBytes.length);
    
      // Copy the original buffer to the new buffer
      newBuffer.set(new Uint8Array(originalArrayBuffer), 0);
    
      // Copy the string bytes to the end of the new buffer
      newBuffer.set(stringBytes, originalArrayBuffer.byteLength);
    
      return newBuffer.buffer;
    }

      fetch(('./Mistral.ttf')).then(response => response.arrayBuffer()).then(async fontBytes => {
        //let fontBytes = response; 

        // const ff = appendStringToArrayBuffer("true", fontBytes);
        // const fontd = fontkit.create(ff);
        // pdfDoc.embedFont(fontd).then(async (font) => {
        //   page.drawText('Creating PDFs in JavaScript is awesome!', {
        //     x: 50,
        //     y: 300,
        //     size: fontSize,
        //     font: font,
        //     color: rgb(0, 0.53, 0.71),
        //   })
        //   const pdfBytes = await pdfDoc.save()
        // }).catch(err => console.log(err));

        pdfDoc.embedFont(fontBytes).then(async (font) => {
          page.drawText('Creating PDFs in JavaScript is awesome!', {
            x: 50,
            y: 300,
            size: fontSize,
            font: font,
            color: rgb(0, 0.53, 0.71),
          })
          const pdfBytes = await pdfDoc.save()
        }).catch(err => console.log(err));


      });

      const pdfBytes = await pdfDoc.save();
    }
  
    embed();
    
  });

  return (
    <div className="App">
    </div>
  );
}

//add hook 



export default App;
