import { Component,ViewChild, TemplateRef, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @ViewChild(TemplateRef) detailsTemplate!: TemplateRef<any>;
  @Input() title: string = '';
  showDetails = false;

  showMore() {
    this.showDetails = true;
  }
}


