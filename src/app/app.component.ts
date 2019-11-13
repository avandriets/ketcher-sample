import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('ketcher', { static: false }) public  iframe: ElementRef;

  public title = 'ketchet-sample';
  private ketcherInstance: any;

  emptyMol = `
  Marvin  12270700542D          

 13 13  0  0  0  0            999 V2000
   -0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000   -0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    1.4289    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.1433    0.4126    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    1.4289    1.6501    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0002    1.6500    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7145    2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -1.4290    1.6500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7145    2.8875    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  2  1  1  0  0  0  0
  3  1  2  0  0  0  0
  4  7  1  0  0  0  0
  5  3  1  0  0  0  0
  4  5  2  0  0  0  0
 10  5  1  0  0  0  0
  6  4  1  0  0  0  0
  2  6  2  0  0  0  0
  8  7  1  0  0  0  0
  9  7  2  0  0  0  0
 11 10  1  0  0  0  0
 12 11  1  0  0  0  0
 13 11  2  0  0  0  0
M  END
                    `;

  frameLoaded() {

    if (!this.ketcherInstance) {
      const doc = this.iframe.nativeElement.contentWindow;
      this.ketcherInstance = doc.ketcher;
    }

    this.ketcherInstance.setMolecule(this.emptyMol);

  }

}
