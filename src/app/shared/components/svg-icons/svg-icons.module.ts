import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsComponent } from '../svg-icons/svg-icons.component';

@NgModule({
	imports: [CommonModule],
	declarations: [SvgIconsComponent],
	exports: [SvgIconsComponent]
})
export class SvgIconsModule { }
