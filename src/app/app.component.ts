import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  export class AppComponent {
    title = 'onetruth';
  //   @ViewChild(MatSidenav)
  //   sidenav!: MatSidenav;

  //   constructor(private observer: BreakpointObserver){}

  //   ngAfterViewInit() {
  //     setTimeout(() => {
  //       this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
  //       if (res.matches) {
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close();
  //       } else {
  //         this.sidenav.mode = 'side';
  //         this.sidenav.open();
  //       }
  //     });
  //   },1);
  // }
}
