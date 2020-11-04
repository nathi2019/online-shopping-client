import {Component, Input, OnInit} from '@angular/core';
import {Product, Vendor} from '../../../models';

@Component({
  selector: 'app-status-pane',
  templateUrl: './status-pane.component.html',
  styleUrls: ['./status-pane.component.css']
})
export class StatusPaneComponent implements OnInit {
  @Input() vendor: Vendor;
  constructor() { }

  ngOnInit(): void {
  }

}
