import { NgModule } from '@angular/core';
import { PatternComponent } from './pattern.component';
import { PatternService } from './pattern.service';

@NgModule({
  declarations: [PatternComponent],
  imports: [],
  exports: [PatternComponent, PatternService],
  providers: [PatternService]
})
export class PatternModule { }
