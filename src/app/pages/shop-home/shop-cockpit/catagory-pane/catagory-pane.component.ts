import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

// TODO: add category model instead of string

export interface DialogData {
  selectedCategories: string[];
  selectedCategoryList: { category: string, checked: boolean}[];
}
@Component({
  selector: 'app-catagory-pane',
  templateUrl: './catagory-pane.component.html',
  styleUrls: ['./catagory-pane.component.css']
})
export class CatagoryPaneComponent implements OnInit {
  minValue = 0;
  maxValue = 2000;
  minMin = 0;
  maxMin = 2000;
  minMax = 0;
  categoryList: string[] = [ 'elecronic', 'laptop' , 'health' , 'sport' ,
    'elecronic1', 'laptop1' , 'health1' , 'sport1'];
  selectedCategoryList: { category: string, checked: boolean}[] = this.categoryList.map(this.initSelectCategoryList);
  selectedCategories: string[] = new Array();
  initSelectCategoryList(item): any{
    return {category: item , checked : false};
  }
  minLabel(value: number): any {

    return  value + '$ ';
  }
  maxLabel(value: number): any {

    return value + '$';

  }
  onChangeMin(event: any): void{
      this.minValue = event.value;
  }
  onChangeMax(event: any): void{
        this.maxValue = event.value;
  }
  onRemoveClick(category): void{
    this.removeItem(this.selectedCategories.indexOf(category));
    this.selectedCategoryList.splice(this.selectedCategoryList.map((item)=>{return item.category}).indexOf( category),1);
    this.selectedCategoryList.push({'category': category, 'checked': false})
  }
  removeItem(index): void{
    this.selectedCategories.splice(index, 1);
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryListDialogComponent, {
      width: '70%',
      height: '50%',
      data : {selectedCategories: this.selectedCategories, selectedCategoryList: this.selectedCategoryList}
    });

}}
@Component({
  templateUrl: 'category-list-dialog.html',
  styleUrls: ['./category-list-dialog.css']
})
export class CategoryListDialogComponent {
  onChange(item: any): void{
    item.checked = !item.checked;
    if (item.checked === true){
      this.data.selectedCategories.push(item.category);
    }
    else {
      this.removeItem(this.data.selectedCategories.indexOf(item.category));
    }
}

  removeItem(index): void{
    this.data.selectedCategoryList.splice(index, 1);
  }

  constructor(
      public dialogRef: MatDialogRef<CategoryListDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
