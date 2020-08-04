import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure:false
})
export class FilterpipePipe implements PipeTransform {

  transform(value: string, filterString: string, propertyName: string) {
    console.log('inside the filterpipe the value' + value)

if(value.length===0 || filterString===''){
  return value
}

    const serverStrArr = [];
    for (const val of value) {

      if (val[propertyName] === filterString ) {
        serverStrArr.push(val)
      }
    }

    return serverStrArr;
  }

}
