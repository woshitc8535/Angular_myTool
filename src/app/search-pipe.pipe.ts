import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(toDoList: any[], searchEvent: string): any[] {
    if (toDoList == null || toDoList.length === 0 || !searchEvent) {
      return toDoList;
    }
    searchEvent = searchEvent.toLowerCase();
    return toDoList.filter(it => {
      return it.toLowerCase().includes(searchEvent);
    });
  }

}
