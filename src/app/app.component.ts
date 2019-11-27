import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { addDays, distanceInWords } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ctpzorro';

  isVisible = false;
  visible = false;

  constructor(private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }  

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  placement = 'right';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };


}
