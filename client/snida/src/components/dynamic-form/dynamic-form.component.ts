// table-form.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class TableFormComponent implements OnChanges {
  @Input() fields: { key: string; label: string; type: string }[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  
  form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) {}
  
  ngOnChanges(): void {
    console.log("her111")
    const group: any = {};
    this.fields.forEach(field => {
      group[field.key] = new FormControl('');
    });
    this.form = this.fb.group(group);
  }
  
  onSubmit(): void {
    this.formSubmit.emit(this.form.value);
  }
}
