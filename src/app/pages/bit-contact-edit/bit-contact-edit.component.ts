import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bit-contact-edit',
  templateUrl: './bit-contact-edit.component.html',
  styleUrls: ['./bit-contact-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BitContactEditComponent implements OnInit {
  contact: Contact;
  constructor(
    private location: Location,
    private cd: ChangeDetectorRef,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // (err: any) => {
  //   console.log('error=', err);
  // }

  async ngOnInit() {
    this.route.data.subscribe(
      (data: any) => {
        // console.log('data=', data);
        // if (!data.contact.name) {
        //   this.contact = this.contactService.getEmptyContact();
        //   console.log('Empty contact!');
        //   return;
        // }
        console.log('dataaaaa');
        console.log('data=', data);
        if (!data) {
          console.log('this data is empty');
        }
        this.contact = data.contact;
      },
      // (err) => {
      //   console.log('error=', err);
      // }
      (err) => {
        console.log('HTTP Error', err);
      },
      () => console.log('HTTP request completed.')
    );
  }
  onBack() {
    // this.router.navigateByUrl('');
    this.location.back();
  }
  onSave() {
    this.contactService.saveContact(this.contact);
    this.router.navigateByUrl('contacts');
  }
}
