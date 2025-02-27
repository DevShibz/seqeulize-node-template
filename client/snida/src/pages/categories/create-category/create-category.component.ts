import { Component } from '@angular/core';
import { TableFormComponent } from '../../../components/dynamic-form/dynamic-form.component';


@Component({
  selector: 'app-create-category',
  imports: [
    TableFormComponent
  ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  public fields = [
    {
      "key": "name",
      "label": "Product Name",
      "type": "text"
    },
    {
      "key": "parentId2",
      "label": "Parent ID",
      "type": "dropdown",
      "options": [
        { "value": 1, "label": "1" },
        { "value": 2, "label": "2" },
        { "value": 3, "label": "3" },
        { "value": 4, "label": "4" },
        { "value": 5, "label": "5" }
      ]
    }
  ]

  onSubmit(value: any) {
    console.log(value);
  }

  
}
