import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet.component';
import { PageLayoutComponent } from 'src/app/shared/components/page-layout.component';
import { MapComponent } from 'src/app/features/public/map/map.component';
import { DescriptionComponent } from 'src/app/features/public/description/description.component';
import { QueryComponent } from 'src/app/features/public/query/query.component';

@Component({
  standalone: true,
  imports: [PageLayoutComponent, CodeSnippetComponent, MapComponent, DescriptionComponent, QueryComponent],
  selector: 'app-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit {
  message = '';

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getPublicResource().subscribe((response) => {
      const { data, error } = response;

      if (data) {
        this.message = JSON.stringify(data, null, 2);
      }

      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });
  }
}
