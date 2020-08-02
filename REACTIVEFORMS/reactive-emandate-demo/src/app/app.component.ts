import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  emandateForm: FormGroup


  amountTypeAr = ['Fixed', 'Variable']

  ngOnInit(): void {

    this.emandateForm = new FormGroup({

      'bankinfoForm': new FormGroup({
        'originatorId': new FormControl(null, [Validators.required], this.originatorForBidden),
        'originatorName': new FormControl(null, [Validators.required], this.originatorNameForBidden),
        'sponserBankCode': new FormControl(null, [Validators.required], this.sponserBankCodeForBidden),
        'amountType': new FormControl(null),
        'amount': new FormControl(null),
        'loanNumber': new FormControl(null,[Validators.required],this.loanRefNumberForBiden),
        'emiStartDate': new FormControl(null),
        'emiEndDate': new FormControl(null),
        'mandateCatogory': new FormControl(null)


      }),
      'customerInfoForm': new FormGroup({

        'payerName': new FormControl(null,[Validators.required],this.originatorNameForBidden),
        'accountType': new FormControl(null),
        'accountNumber': new FormControl(null,[Validators.required],this.loanRefNumberForBiden),
        'email': new FormControl(null,[Validators.email]),
        'mobileNumber': new FormControl(null,[Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')]),
        'destbankIFSC': new FormControl(null,[Validators.required],this.payeeBankCodeForBidden)

      })

    })

  }
  changeCity(e) {
    console.log('on chnage' + e)
    this.emandateForm.get('bankinfoForm.amountType').setValue(e.target.value, {
      onlySelf: true
    })
  }
  title = 'reactive-emandate-demo';

  onSubmit() {
    console.log(this.emandateForm)

    this.emandateForm.reset()

    console.log('submitted' + this.emandateForm.get('bankinfoForm.originatorId').value)
  }


  originatorForBidden(formControel: FormControl): Promise<any> | Observable<any> {

    var v = formControel.value.substr(0, 4);
    console.log(v)

    const promise = new Promise<any>((resolve, reject) => {

      setTimeout(() => {


        if (formControel.value.substr(0, 4) !== 'NACH') {
          resolve({ 'orgForBidden': true })
        } else {
          resolve(null)
        }

      }, 1000)


    })

    return promise
  }
  sponserBankCodeForBidden(formControl: FormControl): Promise<any> | Observable<any> {


    const promise = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        var reg = /^[A-Za-z]{4}\d{7}$/
        if (!formControl.value.match(reg)) {
          console.log('valid spon code')

          resolve({ 'sponserBankCodeForBidden': true })
        } else {

          resolve(null)
        }

      }, 1000)

    })

    return promise



  }

  originatorNameForBidden(formControle: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        var reg = /^[a-zA-Z ]*$/;

        if (!formControle.value.match(reg)) {
          console.log('valid originator code')

          resolve({ 'originatorForBiden': true })

        } else {

          resolve(null)
        }
      }, 1000)
    })

    return promise
  }

  loanRefNumberForBiden(formcontrole: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {

setTimeout(()=>{

if(formcontrole.value.toString().substr(0,4)!=='1000'){

  resolve({'loanrefNumForBiden':true})
}else{

  resolve(null)

}


},1000)
      
    })

    return promise

  }


  payeeBankCodeForBidden(formControl: FormControl): Promise<any> | Observable<any> {


    const promise = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        var reg = /^[A-Za-z]{4}\d{7}$/
        if (!formControl.value.match(reg)) {
          console.log('valid payeeBankCode')

          resolve({ 'payeeBankCodeForBidden': true })
        } else {

          resolve(null)
        }

      }, 1000)

    })

    return promise



  }

}
