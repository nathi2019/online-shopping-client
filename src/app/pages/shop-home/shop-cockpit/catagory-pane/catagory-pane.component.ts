import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

// TODO: add category model instead of string

export interface DialogData {
    selectedCategories: string[];
    selectedCategoryList: { category: string, checked: boolean }[];
}

@Component({
    selector: 'app-catagory-pane',
    templateUrl: './catagory-pane.component.html',
    styleUrls: ['./catagory-pane.component.css']
})
export class CatagoryPaneComponent implements OnInit {
    price = this.sharedService.price;


    categoryList: string[] = this.sharedService.categoryList;
    selectedCategoryList: { category: string, checked: boolean }[] = this.sharedService.selectedCategoryList;
    selectedCategories: string[] = this.sharedService.selectedCategories;

    minLabel(value: number): any {

        return value + '$ ';
    }

    maxLabel(value: number): any {

        return value + '$';

    }

    onChangeMin(event: any): void {
        this.price.minPrice = event.value;
    }

    onChangeMax(event: any): void {
        this.price.maxPrice = event.value;
    }

    onRemoveClick(category): void {
        this.removeItem(this.selectedCategories.indexOf(category));
        this.selectedCategoryList
            .filter((item) => item.category == category)
            .forEach((item) => {
                item.checked = false
            });
    }

    removeItem(index): void {
        this.selectedCategories.splice(index, 1);
    }

    constructor(public dialog: MatDialog, private sharedService: SharedService) {
    }
    onApply(): void {

    }

    onReset(): void {
        this.sharedService.resetFilters();
     }
    ngOnInit(): void {

    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CategoryListDialogComponent, {
            width: '70%',
            height: '50%',
            data: {selectedCategories: this.selectedCategories, selectedCategoryList: this.selectedCategoryList}
        });

    }
}

@Component({
    templateUrl: 'category-list-dialog.html',
    styleUrls: ['./category-list-dialog.css']
})
export class CategoryListDialogComponent {
    onChange(item: any): void {
        item.checked = !item.checked;
        if (item.checked === true) {
            this.data.selectedCategories.push(item.category);

        } else {
            this.removeItem(this.data.selectedCategories.indexOf(item.category));
        }

    }

    removeItem(index): void {
        this.data.selectedCategories.splice(index, 1);
    }

    constructor(
        public dialogRef: MatDialogRef<CategoryListDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }


}
