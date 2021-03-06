import { PersonalData } from 'src/app/models/personal-data';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ResponseBody} from '../models/response/response-body';
import {Affiliate} from '../models/affiliate';
import { InvoiceData } from '../models/invoice-data';
import {DateRange, StatisticsAffiliate} from '../models/statistics-affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private readonly affiliatePath = environment.affiliatesApiUrl + 'affiliates';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getByCode(code: string): Observable<ResponseBody<Affiliate>> {
    return this.http.get<ResponseBody<Affiliate>>(this.affiliatePath + '/getByCode/' + code);
  }

  updatePersonalData(id: number, data: PersonalData): Observable<ResponseBody<Affiliate>> {
    const _URL = this.affiliatePath + '/PersonalData/' + id;
    return this.http.put<ResponseBody<Affiliate>>(_URL, data, this.httpOptions);
  }

  updateInvoiceData(id: number, data: InvoiceData): Observable<ResponseBody<Affiliate>> {
    const _URL = this.affiliatePath + '/InvoiceData/' + id;
    return this.http.put<ResponseBody<Affiliate>>(_URL, data, this.httpOptions);
  }

  getStatistics(code: string, userCountryCode: string, rangeDate: DateRange): Observable<ResponseBody<StatisticsAffiliate>> {
    const params = new HttpParams()
        .set('userCountryCode', userCountryCode)
        .set('fromDate', rangeDate.from)
        .set('toDate', rangeDate.to);
    return this.http.get<ResponseBody<StatisticsAffiliate>>(this.affiliatePath + '/getStatistics/' + code, { params });
  }

}
