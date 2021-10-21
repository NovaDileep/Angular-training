import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (value.length == 0 || filterString == '') {
      return value;
    }
    const users = [];
    for (var user of value) {
      if (
        user['id'] == filterString ||
        user['name'] == filterString ||
        user.email == filterString
      ) {
        users.push(user);
      }
    }
    return users;
  }
}
