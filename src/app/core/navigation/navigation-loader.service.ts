import { Injectable } from '@angular/core';
import { VexLayoutService } from '@vex/services/vex-layout.service';
import { NavigationItem } from './navigation-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationLoaderService {
  private readonly _items: BehaviorSubject<NavigationItem[]> =
    new BehaviorSubject<NavigationItem[]>([]);

  get items$(): Observable<NavigationItem[]> {
    return this._items.asObservable();
  }

  constructor(private readonly layoutService: VexLayoutService) {
    this.loadNavigation();
  }

  loadNavigation(): void {
    this._items.next([            
      {
        type: 'subheading',
        label: 'Registro',
        children: [
          {
            type: 'dropdown',
            label: 'Authentication',
            icon: 'mat:lock',
            children: [
              {
                type: 'link',
                label: 'Login',
                route: '/login'
              },
              {
                type: 'link',
                label: 'Register',
                route: '/register'
              },
              {
                type: 'link',
                label: 'Forgot Password',
                route: '/forgot-password'
              }
            ]
          },
          {
            type: 'link',
            label: 'Coming Soon',
            icon: 'mat:watch_later',
            route: '/coming-soon'
          },
          {
            type: 'dropdown',
            label: 'Errors',
            icon: 'mat:error',
            badge: {
              value: '4',
              bgClass: 'bg-green-600',
              textClass: 'text-white'
            },
            children: [
              {
                type: 'link',
                label: '404',
                route: '/pages/error-404'
              },
              {
                type: 'link',
                label: '500',
                route: '/pages/error-500'
              }
            ]
          }          
        ]
      },
      {
        type: 'subheading',
        label: 'Dashboard',
        children: [
          
          {
            type: 'dropdown',            
            label: 'Componentes',//label: 'Forms',-LDRG
            icon: 'mat:format_color_text',
            children: [
              /*{
                type: 'link',
                label: 'Form Elements1',
                route: '/ui/forms/form-elements'
              },
              {
                type: 'link',
                label: 'Form Wizard2',
                route: '/ui/forms/form-wizard'
              },*/
              {
                type: 'link',
                label: 'Registro Cliente N',
                route: '/ui/forms/registro-cliente'
              },
              {
                type: 'link',
                label: 'Registro Proveedor',
                route: '/ui/forms/registro-proveedor'
              },
              {
                type: 'link',
                label: 'Equipamiento proveedor ',
                route: '/ui/forms/registro-proveedor'
              },
              {
                type: 'link',
                label: 'Scrumboard ',
                route: '/apps/scrumboard'
              }
            ]
          }                  
        ]
      },
      
      {
        type: 'subheading',
        label: 'Edicion',
        children: []
      },
      {
        type: 'link',
        label: 'ConfiguraCionES',
        route: () => this.layoutService.openConfigpanel(),
        icon: 'mat:settings'
      }
    ]);
  }
}
