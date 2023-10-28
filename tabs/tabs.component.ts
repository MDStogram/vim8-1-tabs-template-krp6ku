import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import {TabComponent} from "./tab/tab.component";
import {tap} from "rxjs";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {
  activeTabIndex: number = 0;
  activeTab: any;

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    this.initTabs();
    this.initTabChanges();
  }

  private initTabs() {
    const hasItems = this.tabs.length > 0;
    // если есть элементы выбрать первый
    if (hasItems) {
      this.selectFirst();
    }
  }

  private initTabChanges() {
    this.tabs.changes
      .pipe(
        tap(() => this.cdr.detectChanges())
      )
      .subscribe({
        next: tabs => {
          this.outOfBoundsCheck(tabs.length)
        }
      })
  }

  public selectTab(i: number) {
    this.activeTabIndex = i;
    this.activeTab = this.tabs.get(i);
  }

  private selectFirst() {
    this.selectTab(0);
  }

  private outOfBoundsCheck(length: number) {
    const lastItemIndex = length - 1;
    const lastItemDeleted = lastItemIndex < this.activeTabIndex;
    const isSingeItem = lastItemIndex === 0;

    if (lastItemDeleted) {
      this.selectFirst();
      this.cdr.detectChanges();
    }

    if (isSingeItem) {
      this.selectFirst();
      this.cdr.detectChanges();
    }
  }

}
