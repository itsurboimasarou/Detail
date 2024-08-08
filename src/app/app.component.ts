import {ChangeDetectionStrategy, Component, ModuleWithProviders} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from '@angular/material/input';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIcon,
    MatButton,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    MatInputModule,
    NgOptimizedImage
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  title = 'detail';
  commentUser = [
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'John Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio sit amet nunc sollicitudin porta. Sed ac purus auctor, ultrices libero nec, luctus libero. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia. Donec nec enim auctor, lacinia purus nec, fermentum turpis. Sed nec libero sit amet libero ultricies lacinia.',
      date: '2021-Jan-01'
    }
  ];
}
