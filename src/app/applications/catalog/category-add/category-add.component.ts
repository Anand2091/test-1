import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Utilities } from '../../../shared/helpers/utilities';
import { Router } from "@angular/router"
import { CatalogService } from '../../../shared/services/api/catalog.service';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm: FormGroup;
  userLoginError : any;
  parentCategory : any[] = [];
  constructor(
              private catalogService : CatalogService,
              private router : Router,
              ) { }

  ngOnInit() {
    this.createForm();
    this.getParentCategory();
  }


  private createForm()
  {
   
      this.categoryAddForm = new FormGroup({     
        category_name: new FormControl('', [ Validators.required]),
        parent_category: new FormControl('', ),
        alias: new FormControl('',),
        meta_title: new FormControl('',),
        meta_description: new FormControl('',),
        status: new FormControl('',),

    });
  } 

  categoryAddSubmit(){
    const categoryData = this.categoryAddForm.value;
    console.log(categoryData);

    this.catalogService.categoryAdd(categoryData).subscribe(data => {
        if(data.status == true)
        {
          this.router.navigate(['/catalog/categorylist'])
        }
    });
  }

  getParentCategory(){
        this.catalogService.getParentCategory().subscribe(data => {
      console.log(data);
          if(data.status == true)
          {
            this.parentCategory = data.category;
          }
    });
  }

}
