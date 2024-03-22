import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true,
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number): any {
    if (!value) return null;
    let actualLimit: number = limit ? limit : 50;
    return value.substring(0, actualLimit) + ' ... ';
  }
}
