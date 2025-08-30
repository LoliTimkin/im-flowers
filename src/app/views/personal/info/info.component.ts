import { Component, OnInit } from '@angular/core';
import {DeliveryType} from "../../../../types/delivery.type";
import {PaymentType} from "../../../../types/payment.type";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  deliveryType: DeliveryType = DeliveryType.delivery

  userInfoForm =
    this.fb.group({
        firstName: [''],
        lastName: [''],
        phone: [''],
        fatherName: [''],
        paymentType: [PaymentType.cashToCourier],
        email: [''],
        street: [''],
        house: [''],
        entrance: [''],
        apartment: [''],
      }
    )

  deliveryTypes = DeliveryType
  paymentTypes = PaymentType

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeDeliveryType(deliveryType: DeliveryType) {
    this.deliveryType = deliveryType
  }

  updateUserInfo() {

  }
}
