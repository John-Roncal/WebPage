import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { documentType } from '../../../../data/documentType';
import { PrimeElementsModule } from '../../../../shared/prime-elements/prime-elements.module';
import { CommonModule } from '@angular/common';
import { EventBusService } from '../../../../service/event-bus.service';
import { InvoiceService } from '../../../../service/invoice.service';
import { forkJoin } from 'rxjs';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '../../../../../environments/environment.development';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FooterComponent } from '../../footer/footer.component';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-comprobante',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PrimeElementsModule,
    CommonModule,
    NgxCaptchaModule, FooterComponent
  ],
  templateUrl: './comprobante.component.html',
  styleUrl: './comprobante.component.css'
})

export class ComprobanteComponent {
  form: FormGroup = new FormGroup({});
  @ViewChild('invoiceSection', { static: false }) invoiceSection!: ElementRef;
  @Output() loading = new EventEmitter<boolean>();

  tipos = documentType
  isSuccess = false
  downloadMessage: string = ''
  pdfUrl: string | null = null;
  xml: any = null
  cdr: any = null
  filename = ''
  siteKey = environment.siteKey
  errorMessage: string = '';
  pdfLoading = false;
  xmlLoading = false;
  cdrLoading = false;

  pdfErrorMessage: string = '';
  xmlErrorMessage: string = '';
  cdrErrorMessage: string = '';

  constructor(
    private eventBusService: EventBusService,
    private invoiceService: InvoiceService
  ) {
    this.form = new FormGroup({
      'ruc': new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      'tipo': new FormControl('03', { nonNullable: true, validators: [Validators.required] }),
      'serie': new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      'correlativo': new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      'captcha': new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      // 'importe': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
    });

    //console.log(this.form);

  }

  showInvoice = false
  activateLoading(status: boolean) {
    this.loading.emit(status); // Emitimos los datos al padre
  }

  scrollToInvoice() {
    if (!this.invoiceSection) return;

    const isMobile = window.innerWidth < 768; // solo móvil

    if (!isMobile) return; // en pantallas grandes no hace nada

    const element = this.invoiceSection.nativeElement as HTMLElement;
    const y = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: y - 80,
      behavior: 'smooth'
    });
  }

  submit(e: Event) {
    this.form.markAllAsTouched();

    const tipoDocumentoMap: { [key: string]: string } = {
      "03": "Boleta",
      "01": "Factura",
      "07": "Nota de crédito"
    };

    const tipoDocumento = tipoDocumentoMap[this.form.value.tipo] || this.form.value.tipo;

    e.preventDefault();
    if (this.form.invalid) return
    this.filename = `${this.form.value.ruc}-${tipoDocumento}-${this.form.value.serie}-${this.form.value.correlativo}`;
    //console.log('nombre de archivo'+ this.filename);

    this.getAllDocuments();

  }

  getAllDocuments() {
    const formValue = this.form.value;

    // Reiniciar estados
    this.pdfLoading = true;
    this.xmlLoading = true;
    this.cdrLoading = true;

    this.pdfErrorMessage = '';
    this.xmlErrorMessage = '';
    this.cdrErrorMessage = '';

    this.pdfUrl = null;
    this.xml = null;
    this.cdr = null;

    this.isSuccess = false;
    this.showInvoice = true;
    if (window.innerWidth < 768) {
      setTimeout(() => {
        this.scrollToInvoice();
      }, 250);
    }
    // =====================
    // PDF
    // =====================
    this.invoiceService.getPdf(formValue)
      .pipe(
        catchError(err =>
          of({ statusCode: err.status, message: err.error?.message || 'No se pudo obtener el PDF' })
        )
      )
      .subscribe((res: any) => {
        this.pdfLoading = false;

        if (res.statusCode === 200) {
          this.pdfUrl = this.convertBase64ToBlob(res.data);
        } else {
          this.pdfErrorMessage = res.message;
        }

        this.updateSuccessState();
      });

    // =====================
    // XML
    // =====================
    this.consultarXmlCdrConRetry('XML')
      .subscribe((res: any) => {
        this.xmlLoading = false;

        if (res.statusCode === 200) {
          this.xml = { value: res.data, fileName: this.filename };
        } else {
          this.xmlErrorMessage =
            res.details || (res.message + '. Puede intentar en 5 minutos');
        }

        this.updateSuccessState();
      });

    // =====================
    // CDR
    // =====================
    this.consultarXmlCdrConRetry('CDR')
      .subscribe((res: any) => {
        this.cdrLoading = false;

        if (res.statusCode === 200) {
          this.cdr = { value: res.data, fileName: this.filename };
        } else {
          this.cdrErrorMessage =
            res.details || res.message;
        }

        this.updateSuccessState();
      });
  }

  private updateSuccessState() {
    const hasAtLeastOne = !!(this.pdfUrl || this.xml || this.cdr);

    this.isSuccess = hasAtLeastOne;

    if (hasAtLeastOne) {
      this.downloadMessage = this.getDownloadMessage();
      this.errorMessage = '';
    } else {
      if (!this.pdfLoading && !this.xmlLoading && !this.cdrLoading && !hasAtLeastOne) {
        this.isSuccess = false;
        this.downloadMessage = '';
        this.errorMessage = 'Documento no encontrado';
      }
    }
  }

  getDownloadMessage(): string {
    const parts = [];
    if (this.pdfUrl) parts.push('PDF');
    if (this.xml) parts.push('XML');
    if (this.cdr) parts.push('CDR');

    if (parts.length === 0) return '';
    if (parts.length === 1) return `Puedes descargar tu ${parts[0]} en el siguiente enlace`;
    if (parts.length === 2) return `Puedes descargar tu ${parts[0]} y ${parts[1]} en los siguientes enlaces`;
    return `Puedes descargar tu CDR, XML y PDF en los siguientes enlaces`;
  }


  convertBase64ToBlob(base64: string): string {
    try {
      const cleanedBase64 = base64.replace(/^data:application\/pdf;base64,/, '');
      const byteCharacters = atob(cleanedBase64);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error al convertir Base64 a Blob:", error);
      return '';
    }
  }

  openPdf() {
    if (this.pdfUrl) {
      window.open(this.pdfUrl, '_blank');
    }
  }

  downloadFileFromUrl(url: string, prefix: string) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = `${prefix}-${this.filename}.zip`;
    link.click();
  }


  onCaptchaSuccess(token: string): void {
    //console.log("Token de reCAPTCHA:", token); // Verifica que realmente se genere un token válido
    this.form.get('captcha')?.setValue(token); // Asignar el token al campo captcha
  }

  onCaptchaExpired(): void {
    this.form.get('captcha')?.reset(); // Reiniciar el campo si el CAPTCHA expira
  }



  private mapTipoDocumentoId(tipo: string): number {
    // tu form usa '01','03','07'
    const map: Record<string, number> = {
      '01': 1, // Factura
      '03': 3, // Boleta
      '07': 7, // Nota de crédito
    };
    return map[tipo] ?? 0;
  }

  private buildXmlCdrPayload(tipoDescarga: 'XML' | 'CDR') {
    const v = this.form.value;

    return {
      ruc: (v.ruc ?? '').toString().trim(),
      tipoDocumentoId: this.mapTipoDocumentoId((v.tipo ?? '').toString()),
      serie: (v.serie ?? '').toString().trim(),
      correlativo: Number((v.correlativo ?? '').toString().trim()), // Postman lo manda num
      tipoDescarga, // "XML" o "CDR"
      captcha: (v.captcha ?? '').toString().trim(), // ✅ token string como antes
    };
  }

  private consultarXmlCdrConRetry(
    tipo: 'XML' | 'CDR',
    intentos = 3
  ): Observable<any> {
    const payload = this.buildXmlCdrPayload(tipo);

    return this.invoiceService.consultarDocumentoXmlCdr(payload).pipe(
      catchError(err =>
        of({ statusCode: err.status, message: err.error?.message })
      ),
      switchMap((res: any) => {

        // 🔁 Si backend responde 91, reintenta
        if (res.statusCode === 91 && intentos > 0) {
          console.log(`Reintentando ${tipo}... Intentos restantes: ${intentos}`);
          return timer(2000).pipe(
            switchMap(() => this.consultarXmlCdrConRetry(tipo, intentos - 1))
          );
        }

        return of(res);
      })
    );
  }


}
