import { Component, OnInit } from '@angular/core';
import { RacingService } from '../../services/racing-service.service';
import { RacingResponse, RacingItem, EventType } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public eventType =  EventType;
  private items: RacingItem[];
  private errorMsg: string;

  constructor(private service: RacingService) { }

  ngOnInit() {
    
    this.service.getRaceInfo(response => this.items = response.body!.result,
                                error => this.errorMsg = error.message);

  }
}
