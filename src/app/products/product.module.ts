import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'product/:id', canActivate: [ProductGuardService], component: ProductDetailComponent},
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent ,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    RouterModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }