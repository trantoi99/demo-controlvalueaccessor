import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: '[app-input-base]',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef (() => InputBaseComponent)
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef (() => InputBaseComponent)
    }
  ]
})
export default class InputBaseComponent implements OnInit,ControlValueAccessor,Validator,AfterViewInit {

  value: any;
  protected onChange!: (value: any) => void;
  protected onTouched!: () => void;

  @Input() name: string = '';
  @ViewChild('input') input: ElementRef | undefined;
  
  // set value khi input thay đổi giá trị
  setValue(value: any) {
    this.onChange(value);
    value = value;
  }

  // viết lại giá trị
  writeValue(value: any): void {
    this.value = value;
  }

  // report sự thay đổi của input cho form cha
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  // report thao tác của input cho form cha
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // validate input
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;    
    if(value === '' || value === null || value === undefined){
      return {require : true}
    }else{
      return null;
    }
  }

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
