import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    {
        path: '/rfq', title: 'Nueva RFQ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: '/panel', title: 'Panel de control', icon: 'bi bi-house-door', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: '/rfqs', title: 'RFQs', icon: 'lni lni-money-location', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: '/buys', title: 'Tus Compras', icon: 'lni lni-cart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: '/projectsz', title: 'Tus Proyectos', icon: 'lni lni-grid-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: '', title: 'Administrador ', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/admin/projectos', title: 'Proyectos', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/admin/item', title: 'Item', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/admin/cotizaciones', title: 'Cotizaciones enviadas', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/admin/usuarios', title: 'Usuarios', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    }, {
        path: '', title: 'Proveedores', icon: 'bx bx-repeat', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/proveedores/perfil', title: 'Perfil', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/proveedores/capacidad', title: 'Capacidades', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },            
        ]
    }, {
        path: '', title: 'Pantallas Registro', icon: 'bi bi-lock', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/auth/sign-in', title: 'Iniciar sesion', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/sign-up', title: 'Registro', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/forgot-password', title: 'Forgot Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/reset-password', title: 'Reiniciar Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/validtions', title: 'Admin autorizaciones', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/auth/detalle', title: 'Correo confirmado', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
    },
    {
        path: '/facturas', title: 'Facturas', icon: 'lni lni-grid-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: '/term', title: 'Term. & Condiciones', icon: 'lni lni-highlight-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: '', title: 'Preguntas frecuentes', icon: 'lni lni-question-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, {
        path: 'dashboard/eCommerce', title: 'v.2/10/24', icon: 'bi bi-headset', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
];