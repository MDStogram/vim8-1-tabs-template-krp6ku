import {
  ChangeDetectionStrategy,
  Component,
  ContentChild
} from '@angular/core';
import {TabTitleComponent} from "../tab-title/tab-title.component";
import {TabContentComponent} from "../tab-content/tab-content.component";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {

  @ContentChild(TabTitleComponent) title: TabTitleComponent;
  @ContentChild(TabContentComponent) content: TabContentComponent;

}
