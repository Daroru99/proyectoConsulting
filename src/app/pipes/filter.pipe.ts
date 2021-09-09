import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {





  transform(value: any, arg: any): any {
    if(arg=== '' || arg.length < 3) return value;
    const resultPosts = [];
    for(const post of value){
      console.log("value",post);
      if(post.idMov.toString().indexOf(arg.toString()) > -1){
        resultPosts.push(post);
      }
      if(post.apoderado.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}

 