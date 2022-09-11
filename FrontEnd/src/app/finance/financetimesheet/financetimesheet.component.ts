import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/timesheet.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';




@Component({
  selector: 'app-financetimesheet',
  templateUrl: './financetimesheet.component.html',
  styleUrls: ['./financetimesheet.component.css']
})
export class FinancetimesheetComponent implements OnInit {

  pdfs : any=[{
    Name:'',
    Email:'',
    pdf:''
  }]

  constructor(private _timesheet : TimesheetService, 
    private http : HttpClient,  private router :Router) { }

  ngOnInit(): void {
    this._timesheet.timesheetpdf().subscribe((data)=>{
      this.pdfs=JSON.parse(JSON.stringify(data));
  })
  }

  async  createPdf() {
    console.log('hi');
    
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    })
    // fs.writeFileSync('./test.pdf', await pdfDoc.save());
 const pdfBytes = await pdfDoc.save()
 console.log(pdfBytes);
   
  }

}
