import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-bit-transfer-fund',
  templateUrl: './bit-transfer-fund.component.html',
  styleUrls: ['./bit-transfer-fund.component.scss'],
})
export class BitTransferFundComponent implements OnInit {
  user: User;
  amount: number;
  @Input() contactData: any;
  @Output() onTransferFund: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(
    private userService: UserService,
    private contactService: ContactService
  ) {}

  onTransferCoins = () => {
    this.contactService.depositToContact(this.contactData, this.amount);
    this.onTransferFund.emit();
  };

  onClose = () => {
    this.close.emit();
  };
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
