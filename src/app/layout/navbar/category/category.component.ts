import { Component, inject, Inject, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  
  categoryService = inject(CategoryService);

  categories: Category[] | undefined;

  currentActivateCategory = this.categoryService.getCategoryByDefault();

  ngOnInit(): void {
    this.fetchCategories();
  }

  private fetchCategories() {
    this.categories = this.categoryService.getCategories();
  }

}
