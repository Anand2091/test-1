import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { CatalogService } from '../../../shared/services/api/catalog.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryData:any[] = [];
  constructor(
              private catalogService: CatalogService,
              private route:ActivatedRoute,
              private titleService: Title,
              ) {
    this.titleService.setTitle(this.route.snapshot.data['breadcrumb'] +' : '+ this.route.snapshot.data['title']);
   }

  ngOnInit() {
    this.getAllCategory();
  }


  displayedColumns: string[] = ['select', 'id', 'name', 'parent', 'alias','status','action'];
  dataSource = new MatTableDataSource<any>(this.categoryData);
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  getAllCategory(){
    this.catalogService.getAllCategory().subscribe(data => {
  
      if(data.status == true)
      {
        this.categoryData = data.category;
        this.dataSource = new MatTableDataSource<any>(this.categoryData);
      }
});
}

}
