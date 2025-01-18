import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'executorNameFormat',
})
export class ExecutorNameFormatPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';
        const surnameInitial: string = value.charAt(0);
        return `${surnameInitial}.`;
    }
}
