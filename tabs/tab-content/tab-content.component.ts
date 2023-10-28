import {ChangeDetectionStrategy, Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent {
  @ViewChild(TemplateRef) template: TemplateRef<any>;
}
