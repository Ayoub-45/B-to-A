import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTitleCase',
  standalone: true,
})
export class ToTitleCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    if (!value) return null;
    let newStr = value.replace(/[^a-z 0-9]/g, '').split(' ');
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join('');
  }
}
