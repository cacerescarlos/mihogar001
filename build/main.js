webpackJsonp([7],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busqueda/aviso/aviso.module": [
		280,
		6
	],
	"../pages/busqueda/avisos/avisos.module": [
		281,
		0
	],
	"../pages/busqueda/busqueda.module": [
		282,
		1
	],
	"../pages/busqueda/candidatos/candidatos.module": [
		283,
		5
	],
	"../pages/busqueda/config/config.module": [
		284,
		4
	],
	"../pages/busqueda/trabajadores/trabajadores.module": [
		285,
		3
	],
	"../pages/inicio/inicio.module": [
		286,
		2
	],
	"../pages/user/user.module": [
		154
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
            ],
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.root = 'InicioPage'; //pagina por defecto
    }
    HomePage.prototype.openPage = function (pagina) {
        this.root = pagina;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\home\home.html"*/'<ion-split-pane>\n<ion-menu [content]="content">\n  \n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu\n       <!-- <button ion-button small menuClose>Cerrar</button> -->\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose (click)="openPage(\'InicioPage\')">\n        Inicio\n      </button>\n      <button menuClose ion-item (click)="openPage(\'BusquedaPage\')">\n        Busqueda\n      </button>\n\n      <button ion-item menuClose (click)="openPage(\'UserPage\')" >         \n        Usuarios\n      </button>\n\n      <button ion-item menuClose (click)="openPage(\'ConfigComponent\')">\n        Opciones\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n<ion-nav [root]="root" main #content></ion-nav>\n\n</ion-split-pane>\n\n\n<!--color="fprimary"-->\n<!-- \n<ion-tabs #myTabs tabsPlacement="top">\n  <ion-tab [root]="tabInicio" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tabBuscar" tabTitle="Empleos" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tabAvisos" tabTitle="Alertas" tabIcon="notifications" \n   tabBadge="10"  tabBadgeStyle="danger" ></ion-tab>\n  <ion-tab [root]="tabCuenta" tabTitle="Mi Cuenta" tabIcon="person"></ion-tab>\n</ion-tabs>\n-->'/*ion-inline-end:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AvisoPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvisoPage = /** @class */ (function () {
    function AvisoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.avisosRoot = 'AvisosPage';
        this.candidatosRoot = 'CandidatosPage';
        this.trabajadoresRoot = 'TrabajadoresPage';
    }
    AvisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aviso',template:/*ion-inline-start:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\aviso\aviso.html"*/'<!-- tabsPlacement="top" \ntabbar-layout="icon-top"\n-->\n<ion-tabs>     \n    <ion-tab [root]="avisosRoot" tabTitle="Avisos" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="candidatosRoot" tabTitle="Candidatos" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="trabajadoresRoot" tabTitle="Trabajadores" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\aviso\aviso.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AvisoPage);
    return AvisoPage;
}());

//# sourceMappingURL=aviso.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaTrabajadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//@IonicPage()
var BusquedaTrabajadoresComponent = /** @class */ (function () {
    function BusquedaTrabajadoresComponent() {
        this.habilitar_Impresion = false;
        this.trabajadorFilter = {
            id: '',
            ci: '',
            nombre: '',
            apellidos: '',
            interes_trabajo: [],
            ciudad_residencia: '',
            modalidad_trabajo: '',
            edad: '',
            pretension: ''
        };
        // datos ficticios 
        this.trabajadores = [
            {
                id: "1",
                nombre_usuario: "chole",
                contrasena: "chole",
                nombre: "chole",
                apellidos: "chole",
                ci: "chole",
                ci_exped: "chole",
                fecha_nacimiento: "1922-07-06",
                pais_nacimiento: "chole",
                ciudad_nacimiento: "chole",
                tel_celular: "chole",
                tel_fijo: "chole",
                ciudad_residencia: "chole",
                direccion: "chole",
                email: "chole",
                facebook: "chole",
                foto: "chole",
                carnet_anverso: "chole",
                carnet_reverso: "chole",
                interes_trabajo: ["chole", "chole"],
                avisos_vistos: ["chole", "chole"],
                modalidad_trabajo: "chole",
                dpto_trabajo: ["chole", "chole", "chole"],
                pretension: 0,
                habilidades: ["chole", "chole", "chole"],
                experiencias: [{
                        cargo: "chole",
                        tipo_trabajo: "chole",
                        lugar: "chole",
                        ciudad: "chole",
                        tiempo_meses: 0,
                        tiempo_anios: 0,
                        fecha_retiro: "1922-07-06",
                        motivo_retiro: "chole",
                        nombre_jefe: "chole",
                        tel_jefe: "chole",
                        verificado: false,
                        verif_cargo: "chole",
                        verif_tiempo_meses: 0,
                        verif_tiempo_anios: 0,
                        verif_motivo_retiro: "chole",
                        verif_nombre_informante: "chole",
                        nota_honesto: 0,
                        nota_limpio: 0,
                        nota_responsable: 0,
                        nota_recomendacion: 0,
                        aspecto_mejorar: "chole" //NUEVO aspecto a mejorar en el trabajador
                    }],
                postulaciones: ["chole", "chole", "chole"],
                fecha_creacion: "1922-07-06",
                fecha_modificacion: "1922-07-06",
                contratado: false
            }
        ];
        // data					
        //Lista original de trabajadores "se carga con el servicio en ngOnInit"
        this.itemsPerPage = 50; //Número de items por página para la paginación
        this.currentPage = 1; //Página acual de la paginación
        this.totalPages = Math.ceil(this.trabajadores.length / this.itemsPerPage); //Número total de páginas para la paginación
        this.hidePagination = false; //Flag para esconder la paginación
        this.selectedTrabajadores = []; //Lista de trabajadores selecionados
        this.orderOptions = [
            { value: 'id', name: 'Id de Trabajador' },
            { value: 'nombre', name: 'Nombre del Trabajador' },
            { value: 'apellidos', name: 'Apellido del Trabajador' },
            { value: 'ciudad_residencia', name: 'Lugar de Residencia' },
            { value: 'edad', name: 'Edad' },
            { value: 'fecha_creacion', name: 'Fecha de Registro' },
            { value: 'pretension', name: 'Pretensión Salarial' },
            { value: 'verificado', name: 'Estado de Verificación' }
        ];
        this.reverseOptions = [
            { value: false, description: 'Ascendente' },
            { value: true, description: 'Descendente' }
        ];
        this.verContratados = false;
        this.csvAllCheck = false;
        this.logo = 'http://mihogarbolivia.com/assets/img/logo.png';
        //this.getTrabajadores()
        this.order = 'fecha_creacion';
        this.reverse = true;
    }
    BusquedaTrabajadoresComponent.prototype.toggleCSVALLCheck = function () {
        this.csvAllCheck = !this.csvAllCheck;
    };
    BusquedaTrabajadoresComponent.prototype.getCSV = function (f) {
        var init = f.value.init_date ? f.value.init_date : new Date();
        var end = f.value.end_date ? f.value.end_date : new Date();
        var all = f.value.allTrabajadores ? true : false;
        /*this.trabajadoresService.getCSVTrabajadores(init, end, all).subscribe(res => {
            this._csvService.download(res, 'trabajadores');
            this.csvAllCheck = false;
            f.reset();
            $('#exportTrabajadores').modal('toggle');
        });
        */
    };
    BusquedaTrabajadoresComponent.prototype.toggleContratados = function () {
        this.verContratados = !this.verContratados;
        if (this.verContratados) {
            this.setItemsPerPage(this.trabajadores.length);
            $('#pageSelect :nth-child(5)').prop('selected', true);
        }
        else {
            this.setItemsPerPage(50);
            $('#pageSelect :nth-child(1)').prop('selected', true);
        }
    };
    BusquedaTrabajadoresComponent.prototype.getTrabajadores = function () {
        /* this.trabajadoresService.getTrabajadores().subscribe(res => {
             this.trabajadores = res.map(i => {
                 i.verificado = i.experiencias.some(e => e.verificado);
                 i.experiencias = i.experiencias.map(f => {
                     if (f.fecha_retiro) {
                         let fr = f.fecha_retiro.split('-');
                         f.fecha_retiro = `${fr[1]}-${fr[0]}`;
                     }
                     return f
                 })
                 return i
             })
             this.setItemsPerPage(50);
         });
         */
    };
    BusquedaTrabajadoresComponent.prototype.ngOnInit = function () {
        //   this.userService.isAdmin().subscribe(res => this.admin = res);
        this.fecha = new Date();
        this.hidePagination = true;
        $(document).keypress(function (e) {
            var $quan = $(':input');
            $quan.on('keyup', function (e) {
                if (e.which === 13) {
                    var index = $quan.index(this);
                    $quan.eq(index + 1).focus();
                }
            });
        });
    };
    BusquedaTrabajadoresComponent.prototype.ngAfterViewInit = function () {
        this.reporteParcial = document.getElementById('reporteParcial');
        this.reporteCompleto = document.getElementById('reporteCompleto');
    };
    /**
    * Setea la cantidad de items por página,
    * Recalcula el número total de paginas,
    * Actualiza el flag para esconder o mostrar la paginación
    * @param {number} value
    */
    BusquedaTrabajadoresComponent.prototype.setItemsPerPage = function (value) {
        this.itemsPerPage = value;
        this.totalPages = Math.ceil(this.trabajadores.length / this.itemsPerPage);
        this.hidePagination = this.totalPages < 2 || isNaN(this.totalPages) ? true : false;
        this.setPageList();
    };
    /**
    * Actualiza la lista de números de pagina
    */
    BusquedaTrabajadoresComponent.prototype.setPageList = function () {
        this.pagesList = [];
        var i;
        for (i = 1; i <= this.totalPages; i++) {
            this.pagesList.push(i);
        }
    };
    /**
    * Setea el número de página actual
    * @param {number} value
    */
    BusquedaTrabajadoresComponent.prototype.setCurrentPage = function (value) {
        return this.currentPage = value;
    };
    /**
    * Verifica que un trabajador exista en la lista de trabajadores seleccionados
    * @param {} obj Objeto tipo Trabajador
    * @return {boolean}
    */
    BusquedaTrabajadoresComponent.prototype.isSelectedTrabajadoresExists = function (obj) {
        return this.selectedTrabajadores.some(function (i) { return i.id == obj.id; });
    };
    BusquedaTrabajadoresComponent.prototype.saveImageReportFotos = function () {
        /* for (let i = 0; i < this.selectedTrabajadores.length; i++) {
             this.trabajadoresService.getTrabajadorById(this.selectedTrabajadores[i].id)
                 .then(res => {
                 this.selectedTrabajadores[i].foto = res.foto;
                     this.selectedTrabajadores[i].carnet_anverso = res.carnet_anverso;
                     this.selectedTrabajadores[i].carnet_reverso = res.carnet_reverso;
                 })
         }
         */
    };
    BusquedaTrabajadoresComponent.prototype.saveImageReport = function (el) {
        /*  let ids = this.selectedTrabajadores.map(i => i.id).toString().replace(',', '-')
          let reporte;
          if (el == 'parcial')
              reporte = this.reporteParcial
          if (el == 'completo')
              reporte = this.reporteCompleto
          domtoimage.toJpeg(reporte, { quality: 1.0 })
              .then(function (dataUrl) {
                  var img = new Image();
                  img.crossOrigin = 'Anonymous';
                  img.src = dataUrl;
  
                  var link = document.createElement("a");
                  link.setAttribute("href", dataUrl);
                  link.setAttribute("download", `${ids} ${el} ${moment().format("DD-MM-YYYY")}.jpg`);
                  link.click();
              })
              .catch(function (error) {
                  console.error('oops, something went wrong!', error);
              });
              */
    };
    BusquedaTrabajadoresComponent.prototype.divToImageParcial = function () {
        var origen = document.getElementById('reporteParcial');
        /* domtoimage.toJpeg(origen, { quality: 1.0 })
             .then(dataUrl => {
                 var img = new Image();
                 img.crossOrigin = 'Anonymous';
                 img.src = dataUrl;
                 $('#destinoParcial').attr('src', dataUrl);
             })
             .catch(function (error) {
                 console.error('Error al generar la imagen', error);
             });
             */
    };
    BusquedaTrabajadoresComponent.prototype.imprimir = function (perfil) {
        this.perfil = perfil;
        this.habilitar_Impresion = true;
    };
    BusquedaTrabajadoresComponent.prototype.imprimirCandidato = function () {
        $('#contratocandidato').modal('toggle');
        var options = [
            'height=720',
            'width=1280'
        ];
        var mywindow = window.open('', 'PRINT', options.join());
        mywindow.document.write("<html><head>\n\t\t\t\t<style>\n\t\t\t\t\t\t@page {\n\t\t\t\t\t\t\tsize: letter;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbody {\n\t\t\t\t\t\t\tmargin: 1.6cm;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#contratotitle {\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\tfont-size: 24px\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#contratologo {\n\t\t\t\t\t\t\tfloat:left;\n\t\t\t\t\t\t}\n\n\n\t\t\t\t\t\t#contratotabla {\n\t\t\t\t\t\t  width: 100%;\n\t\t\t\t\t\t  border: 1px solid #000;\n\t\t\t\t\t\t  margin-bottom: 50px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#contratotabla caption {\n\t\t\t\t\t\t\tborder-top: 1px solid #000;\n\t\t\t\t\t\t\tborder-left: 1px solid #000;\n\t\t\t\t\t\t\tborder-right: 1px solid #000;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\tpadding: 5px 5px;\n\t\t\t\t\t\t\tbackground-color: grey !important;\n\t\t\t\t\t\t\t-webkit-print-color-adjust: exact;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#contratotabla tbody > tr > td:first-child {\n\t\t\t\t\t\t\twidth:250px;\n\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\tpadding-right: 30px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#contratotabla tbody > tr:nth-child(9) {\n\t\t\t\t\t\t\tborder: 1px solid #000;\n\t\t\t\t\t\t}\n\n\n\t\t\t\t\t\t#toc {\n\t\t\t\t\t\t\tfont-size: 9px;\n\t\t\t\t\t\t\ttext-align: justify;\n\t\t\t\t\t\t\tmargin-bottom: 100px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#signature {\n\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.uppercase {\n\t\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t");
        mywindow.document.write('</head><body >');
        mywindow.document.write(document.getElementById('bodyprintcandidato').innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close();
        mywindow.focus();
        mywindow.print();
        mywindow.close();
    };
    BusquedaTrabajadoresComponent.prototype.setSelectedTrabajadores = function (obj) {
        var _this = this;
        this.selectedTrabajadores = [];
        this.selectedTrabajadores.push(obj);
        this.saveImageReportFotos();
        $('#destinoParcial').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABA‌​AACAUwAOw==');
        setTimeout(function () {
            _this.foto = _this.selectedTrabajadores[0].foto ? _this.selectedTrabajadores[0].foto.length : 0;
            _this.anverso = _this.selectedTrabajadores[0].anverso ? _this.selectedTrabajadores[0].anverso.length : 0;
            _this.reverso = _this.selectedTrabajadores[0].reverso ? _this.selectedTrabajadores[0].reverso.length : 0;
        }, 1000);
        // let selectedTrabajadoresLength = this.selectedTrabajadores.length;
        // if (selectedTrabajadoresLength == 0){
        // 	this.selectedTrabajadores.push(obj);
        // }
        // else {
        // 	let index = this.selectedTrabajadores.findIndex(i=> i.id == obj.id)
        // 	if (index == -1)
        // 		this.selectedTrabajadores.push(obj);
        // 	else
        // 		this.selectedTrabajadores.splice(index,1)
        // }
    };
    BusquedaTrabajadoresComponent.prototype.updateContratado = function (value, id) {
        /*
        this.trabajadoresService.actualizarTrabajador({ contratado: !value }, id);
        this.getTrabajadores();
        */
    };
    BusquedaTrabajadoresComponent.prototype.deleteCandidatos = function () {
        /* this.selectedTrabajadores.forEach(t => {
             this.trabajadoresService.deleteTrabajador(t.id)
         })
         this.getTrabajadores();
         this.selectedTrabajadores = [];
         $('#deleteTrabajador').modal('toggle');
         */
    };
    BusquedaTrabajadoresComponent.prototype.checkCSVForm = function (f) {
        return (f.value.init_date == '' || f.value.end_date == '') && !f.value.allTrabajadores;
    };
    BusquedaTrabajadoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'busqueda-trabajadores',template:/*ion-inline-start:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\candidatos\busqueda\busqueda-trabajadores.component.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Candidatos</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n<div class="container-fluid cuerpo-busqueda">\n\n    <div class="row">\n\n        <div class="col-lg-12">\n\n            <h2 class="text-center">BUSQUEDA DE TRABAJADORES</h2>\n\n            <hr/>\n\n            <div class="form-inline">\n\n                <div class="form-group">\n\n                    <label>Items por Pagina:</label>\n\n                    <select class="form-control" id="pageSelect" (change)="setItemsPerPage($event.target.value)">\n\n                        <option value="50">50</option>\n\n                        <option value="100">100</option>\n\n                        <option value="200">200</option>\n\n                        <option value="500">500</option>\n\n                        <option value="trabajadores.length">Todos</option>\n\n                    </select>\n\n                </div>\n\n                <div class="form-group">\n\n                    <input id="contratados" type="checkbox" (click)="toggleContratados()">\n\n                    <label for="contratados">Ver Contratados &nbsp;&nbsp;&nbsp;</label>\n\n                </div>\n\n                <div class="form-group">\n\n                    <button class="btn btn-danger" [disabled]="!admin || selectedTrabajadores.length == 0" data-toggle="modal" data-backdrop="false" data-target="#deleteTrabajador">\n\n                        <i class="fa fa-trash-o" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i>Eliminar</button>\n\n                </div>\n\n                <div class="form-group">\n\n                    <button class="btn btn-primary" data-toggle="modal" data-backdrop="false" data-target="#exportTrabajadores">\n\n                        <i class="fa fa-download" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i>Exportar</button>\n\n                </div>\n\n                <div class="form-group pull-right">\n\n                    <label>Ordenar por:</label>\n\n                    <select class="form-control" [(ngModel)]="order">\n\n                        <option *ngFor="let o of orderOptions" [ngValue]="o.value">{{o.name}}</option>\n\n                    </select>\n\n                    <select class="form-control" [(ngModel)]="reverse">\n\n                        <option *ngFor="let i of reverseOptions" [ngValue]="i.value" [selected]="i.description == \'Descendente\'">{{i.description}}</option>\n\n                    </select>\n\n                </div>\n\n            </div>\n\n            <div class="modal fade" id="deleteTrabajador" role="dialog">\n\n                <div class="modal-dialog">\n\n                    <!-- Modal content-->\n\n                    <div class="modal-content">\n\n                        <div class="modal-header">\n\n                            <button class="close" type="button" data-dismiss="modal">×</button>\n\n                            <h4 class="modal-title">Eliminar Trabajadores</h4>\n\n                        </div>\n\n                        <div class="modal-body">\n\n                            <p>Esta seguro que desea borrar los perfiles seleccionados?</p>\n\n                        </div>\n\n                        <div class="modal-footer">\n\n                            <button class="btn btn-danger" (click)="deleteCandidatos()">Eliminar</button>\n\n                            <button class="btn btn-default" type="button" data-dismiss="modal">Cancelar</button>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <hr/>\n\n        </div>\n\n    </div>\n\n    <div class="row">\n\n        <div class="col-lg-12">\n\n            <table class="table table-striped table-condensed">\n\n                <thead>\n\n                    <tr>\n\n                        <th></th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" size="4" placeholder="Id" [(ngModel)]="trabajadorFilter.id">\n\n                                <br/>\n\n                                <label>Codigo</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" size="4" placeholder="# Fecha Registro" [(ngModel)]="trabajadorFilter.fecha_creacion">\n\n                                <br/>\n\n                                <label>F.Registro</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" placeholder="Nombres" [(ngModel)]="trabajadorFilter.nombre">\n\n                                <br/>\n\n                                <label>Nombres</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" placeholder="Apellidos" [(ngModel)]="trabajadorFilter.apellidos">\n\n                                <br/>\n\n                                <label>Apellido</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" placeholder="Busca trabajo de..." [(ngModel)]="trabajadorFilter.interes_trabajo">\n\n                                <br/>\n\n                                <label>Cargo</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" placeholder="Ciudad Residencia" [(ngModel)]="trabajadorFilter.ciudad_residencia">\n\n                                <br/>\n\n                                <label class="tex-center">L. Trabajo</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" placeholder="Formato de trabajo" [(ngModel)]="trabajadorFilter.modalidad_trabajo">\n\n                                <br/>\n\n                                <label>M. Trabajo</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" placeholder="Edad" size="4" [(ngModel)]="trabajadorFilter.edad">\n\n                                <br/>\n\n                                <label>Edad</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <input class="form-control placeholder-centered inputs" type="text" placeholder="Sueldo" size="4" [(ngModel)]="trabajadorFilter.pretension">\n\n                                <br/>\n\n                                <label>Pretensión</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <label>Verif.</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <label>Contr.</label>\n\n                            </div>\n\n                        </th>\n\n                        <th class="text-center">\n\n                            <div class="form-group">\n\n                                <label>Imprimir</label>\n\n                            </div>\n\n                        </th>\n\n                    </tr>\n\n                </thead>\n\n                <!--\n\n                     *ngIf="!verContratados"\n\n                     | filterBy: trabajadorFilter | orderBy: order: reverse | paginate: {itemsPerPage:itemsPerPage,currentPage:currentPage};\n\n                    let idx=index\n\n                 -->\n\n                <tbody >\n\n                    <tr *ngFor="let trabajador of trabajadores"\n\n                        [hidden]="trabajador.contratado">\n\n                        <td>\n\n                            <input type="checkbox" (change)="setSelectedTrabajadores(trabajador)" [checked]="isSelectedTrabajadoresExists(trabajador)">\n\n                        </td>\n\n                        <td class="text-center">\n\n                            <!-- [routerLink]="[\'../../editar/candidato\', trabajador.id]" routerLinkActive="active"-->\n\n                            <a >{{trabajador.id}}</a>\n\n                        </td>\n\n                        <td class="text-center">{{trabajador.fecha_creacion | date: \'dd-MM-yyyy\'}}</td>\n\n                        <td>\n\n                            <a href="#" data-toggle="modal" data-backdrop="false" data-target="#modalparcial" (click)="setSelectedTrabajadores(trabajador)">{{trabajador.nombre}}</a>\n\n                        </td>\n\n                        <td>\n\n                            <a href="#" data-toggle="modal" data-backdrop="false" data-target="#modalcompleto" (click)="setSelectedTrabajadores(trabajador)">{{trabajador.apellidos}}</a>\n\n                        </td>\n\n                        <td>{{trabajador.interes_trabajo}}</td>\n\n                        <td>{{trabajador.ciudad_residencia}}</td>\n\n                        <td>{{trabajador.modalidad_trabajo}}</td>\n\n                        <td class="text-center">{{trabajador.edad}}</td>\n\n                        <td class="text-right">Bs. {{trabajador.pretension}}</td>\n\n                        <td class="text-center">\n\n                            <i class="fa fa-check text-success" aria-hidden="true" *ngIf="trabajador.verificado"></i>\n\n                            <i class="fa fa-times text-danger" aria-hidden="true" *ngIf="!trabajador.verificado"></i>\n\n                        </td>\n\n                        <td class="text-center">\n\n                            <a class="handcursor" (click)="updateContratado(trabajador.contratado,trabajador.id)">\n\n                                <i class="fa fa-check text-success" aria-hidden="true" *ngIf="trabajador.contratado"></i>\n\n                                <i class="fa fa-times text-danger" aria-hidden="true" *ngIf="!trabajador.contratado"></i>\n\n                            </a>\n\n                        </td>\n\n                        <td class="text-center">\n\n                            <button class="btn btn-default btn-xs" data-toggle="modal" data-backdrop="false" data-target="#contratocandidato" (click)="imprimir(trabajador)">\n\n                                <i class="fa fa-print"></i>\n\n                            </button>\n\n                        </td>\n\n                    </tr>\n\n                </tbody>\n\n                <!-- *ngIf="verContratados" \n\n\n\n                 | filterBy: trabajadorFilter | orderBy: order: reverse | paginate: {itemsPerPage:itemsPerPage,currentPage:currentPage};\n\n                let idx=index\n\n                -->\n\n                <tbody >\n\n                    <tr *ngFor="let trabajador of trabajadores"\n\n                        [hidden]="!trabajador.contratado">\n\n                        <td>\n\n                            <input type="checkbox" (change)="setSelectedTrabajadores(trabajador)" [checked]="isSelectedTrabajadoresExists(trabajador)">\n\n                        </td>\n\n                        <td class="text-center">\n\n                             <!-- [routerLink]="[\'../../editar/candidato\', trabajador.id]" routerLinkActive="active" -->\n\n                            <a \n\n                            >{{trabajador.id}}</a>\n\n                        </td>\n\n                        <td class="text-center">{{trabajador.fecha_creacion | date: \'dd-MM-yyyy\'}}</td>\n\n                        <td>\n\n                            <a href="#" data-toggle="modal" data-backdrop="false" data-target="#modalparcial" (click)="setSelectedTrabajadores(trabajador)">{{trabajador.nombre}}</a>\n\n                        </td>\n\n                        <td>\n\n                            <a href="#" data-toggle="modal" data-backdrop="false" data-target="#modalcompleto" (click)="setSelectedTrabajadores(trabajador)">{{trabajador.apellidos}}</a>\n\n                        </td>\n\n                        <td>{{trabajador.interes_trabajo}}</td>\n\n                        <td>{{trabajador.ciudad_residencia}}</td>\n\n                        <td>{{trabajador.modalidad_trabajo}}</td>\n\n                        <td class="text-center">{{trabajador.edad}}</td>\n\n                        <td class="text-right">Bs. {{trabajador.pretension}}</td>\n\n                        <td class="text-center">\n\n                            <i class="fa fa-check text-success" aria-hidden="true" *ngIf="trabajador.verificado"></i>\n\n                            <i class="fa fa-times text-danger" aria-hidden="true" *ngIf="!trabajador.verificado"></i>\n\n                        </td>\n\n                        <td class="text-center">\n\n                            <a class="handcursor" (click)="updateContratado(trabajador.contratado,trabajador.id)">\n\n                                <i class="fa fa-check text-success" aria-hidden="true" *ngIf="trabajador.contratado"></i>\n\n                                <i class="fa fa-times text-danger" aria-hidden="true" *ngIf="!trabajador.contratado"></i>\n\n                            </a>\n\n                        </td>\n\n                        <td class="text-center">\n\n                            <button class="btn btn-default btn-xs" data-toggle="modal" data-backdrop="false" data-target="#contratocandidato" (click)="imprimir(trabajador)">\n\n                                <i class="fa fa-print"></i>\n\n                            </button>\n\n                        </td>\n\n                    </tr>\n\n                </tbody>\n\n            </table>\n\n            <div class="text-center">\n\n                <nav aria-label="Page navigation" [hidden]="hidePagination || trabajadores.length&lt;=itemsPerPage">\n\n                    <ul class="pagination">\n\n                        <li>\n\n                            <a (click)="setCurrentPage(1)">\n\n                                <span aria-hidden="true">&laquo;</span>\n\n                            </a>\n\n                        </li>\n\n                        <li *ngFor="let i of pagesList">\n\n                            <a [ngClass]="{\'currentPage\': i == currentPage}" (click)="setCurrentPage(i)">{{i}}</a>\n\n                        </li>\n\n                        <li>\n\n                            <a (click)="setCurrentPage(totalPages)">\n\n                                <span aria-hidden="true">&raquo;</span>\n\n                            </a>\n\n                        </li>\n\n                    </ul>\n\n                </nav>\n\n            </div>\n\n        </div>\n\n        <div class="modal fade" id="modalparcial" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n\n            <div class="modal-dialog" role="document">\n\n                <div class="modal-content">\n\n                    <div class="modal-header">\n\n                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">\n\n                            <span aria-hidden="true">×</span>\n\n                        </button>\n\n                        <h4 class="modal-title" id="myModalLabel">Informe Parcial</h4>\n\n                    </div>\n\n                    <div class="modal-body report-bg" id="reporteParcial">\n\n                        <ul class="list-no-style">\n\n                            <li *ngFor="let t of selectedTrabajadores">\n\n                                <div class="text-center">\n\n                                    <img class="imgprofile" src="{{t.foto}}">\n\n                                </div>\n\n                                <img class="logonombre" src="/assets/img/logo.png">\n\n                                <div id="bodyReporteParcial">\n\n                                    <h3 class="text-center">{{t.nombre | uppercase}}</h3>\n\n                                    <table class="table-report">\n\n                                        <caption>DATOS GENERALES</caption>\n\n                                        <tbody>\n\n                                            <tr>\n\n                                                <td>CODIGO</td>\n\n                                                <td>{{t.id}}</td>\n\n                                            </tr>\n\n                                            <tr>\n\n                                                <td>EDAD</td>\n\n                                                <td>{{t.edad}}</td>\n\n                                            </tr>\n\n                                            <tr>\n\n                                                <td>LUGAR DE NACIMIENTO</td>\n\n                                                <td>{{t.ciudad_nacimiento}}</td>\n\n                                            </tr>\n\n                                            <tr>\n\n                                                <td>BUSCA TRABAJO DE</td>\n\n                                                <td>{{t.interes_trabajo}}</td>\n\n                                            </tr>\n\n                                            <tr>\n\n                                                <td>MODALIDAD DE TRABAJO</td>\n\n                                                <td>{{t.modalidad_trabajo}}</td>\n\n                                            </tr>\n\n                                            <tr>\n\n                                                <td>PRETENSION SALARIAL</td>\n\n                                                <td>Bs. {{t.pretension}} (NEGOCIABLE)</td>\n\n                                            </tr>\n\n                                            <tr [hidden]="t.habilidades == \'\'">\n\n                                                <td>HABILIDADES</td>\n\n                                                <td>{{t.habilidades}}</td>\n\n                                            </tr>\n\n                                        </tbody>\n\n                                    </table>\n\n                                    <ul class="list-no-style">\n\n                                        <li *ngFor="let e of t.experiencias; let i of index">\n\n                                            <!-- -->\n\n                                            <table class="table-report" *ngIf="e.tipo_trabajo || e.ciudad || e.cargo || e.lugar || e.tiempo_anios || e.tiempo_meses || e.fecha_retiro || e.motivo_retiro">\n\n                                                <caption>EXPERIENCIA</caption>\n\n                                                <tbody>\n\n                                                    <tr [hidden]="!e.tipo_trabajo">\n\n                                                        <td>TRABAJÓ EN</td>\n\n                                                        <td>{{e.tipo_trabajo}}</td>\n\n                                                    </tr>\n\n                                                    <tr [hidden]="!e.ciudad">\n\n                                                        <td>CIUDAD DE TRABAJO</td>\n\n                                                        <td>{{e.ciudad}}</td>\n\n                                                    </tr>\n\n                                                    <tr [hidden]="!e.cargo">\n\n                                                        <td>CARGO DESEMPEÑADO</td>\n\n                                                        <td>{{e.cargo}}</td>\n\n                                                    </tr>\n\n                                                    <tr [hidden]="!e.lugar">\n\n                                                        <td>DESCRIPCION TRABAJO ANTERIOR</td>\n\n                                                        <td>{{e.lugar}}</td>\n\n                                                    </tr>\n\n                                                    <tr [hidden]="!e.tiempo_anios &amp;&amp;! e.tiempo_meses">\n\n                                                        <td>TIEMPO DE TRABAJO</td>\n\n                                                        <td>\n\n                                                            <span [hidden]="e.tiempo_anios == null">{{e.tiempo_anios}} Año(s)</span>\n\n                                                            <span [hidden]="e.tiempo_anios == null || e.tiempo_meses == null">&nbsp;y&nbsp;</span>\n\n                                                            <span [hidden]="e.tiempo_meses == null">{{e.tiempo_meses}} Mes(es)</span>\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                    <tr [hidden]="e.fecha_retiro == \'\'">\n\n                                                        <td>FECHA DE RETIRO</td>\n\n                                                        <td>{{e.fecha_retiro}}</td>\n\n                                                    </tr>\n\n                                                    <tr [hidden]="!e.motivo_retiro">\n\n                                                        <td>MOTIVO DE RETIRO</td>\n\n                                                        <td>{{e.motivo_retiro}}</td>\n\n                                                    </tr>\n\n                                                </tbody>\n\n                                            </table>\n\n                                            <table class="table-report" [hidden]="!e.verificado">\n\n                                                <caption>EVALUACION DE ANTERIOR EMPLEADOR</caption>\n\n                                                <tbody>\n\n                                                    <tr>\n\n                                                        <td>CARGO DESEMPEÑADO</td>\n\n                                                        <td>{{e.verif_cargo}}</td>\n\n                                                    </tr>\n\n                                                    <tr>\n\n                                                        <td>TIEMPO QUE TRABAJO</td>\n\n                                                        <td>\n\n                                                            <span [hidden]="e.verif_tiempo_anios == \'\'">{{e.verif_tiempo_anios}} Año(s)</span>\n\n                                                            <span [hidden]="e.verif_tiempo_anios == \'\' || e.verif_tiempo_meses == \'\'">&nbsp;y&nbsp;</span>\n\n                                                            <span [hidden]="e.verif_tiempo_meses == \'\'">{{e.verif_tiempo_meses}} Mes(es)</span>\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                    <tr>\n\n                                                        <td>MOTIVO DE RETIRO</td>\n\n                                                        <td>{{e.verif_motivo_retiro}}</td>\n\n                                                    </tr>\n\n                                                    <tr class="estrellas">\n\n                                                        <td>HONESTIDAD</td>\n\n                                                        <td>\n\n                                                            <!-- \n\n                                                            <bar-rating [(rate)]="e.nota_honesto" [max]="5" \n\n                                                            [titles]="[\'Malo\', \'Regular\', \'Bueno\', \'Muy Bueno\', \'Excelente\']" \n\n                                                            [showText]="true"\n\n                                                                [readOnly]="true"></bar-rating>\n\n                                                                 -->\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                    <tr class="estrellas">\n\n                                                        <td>ORDEN Y LIMPIEZA</td>\n\n                                                        <td>\n\n                                                            <!--\n\n                                                            <bar-rating [(rate)]="e.nota_limpio" [max]="5" [titles]="[\'Malo\', \'Regular\', \'Bueno\', \'Muy Bueno\', \'Excelente\']" [showText]="true"\n\n                                                                [readOnly]="true"></bar-rating>\n\n                                                            -->\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                    <tr class="estrellas">\n\n                                                        <td>RESPONSABILIDAD</td>\n\n                                                        <td> <!--\n\n                                                            <bar-rating [(rate)]="e.nota_responsable" [max]="5" [titles]="[\'Malo\', \'Regular\', \'Bueno\', \'Muy Bueno\', \'Excelente\']" [showText]="true"\n\n                                                                [readOnly]="true"></bar-rating> -->\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                    <tr class="estrellas">\n\n                                                        <td>NOTA DE RECOMENDACION</td>\n\n                                                        <td> <!--\n\n                                                            <bar-rating [(rate)]="e.nota_recomendacion" [max]="5" [titles]="[\'No lo Recomiendo\', \'Lo Recomiendo con Cuidado\', \'Bueno, Lo Recomiendo\', \'Muy Recomendado\', \'Altamente Recomendado\']"\n\n                                                                [showText]="true" [readOnly]="true"></bar-rating> -->\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                    <tr>\n\n                                                        <td>ASPECTO A MEJORAR</td>\n\n                                                        <td>{{e.aspecto_mejorar}}</td>\n\n                                                    </tr>\n\n                                                </tbody>\n\n                                            </table>\n\n                                        </li>\n\n                                    </ul>\n\n                                    <div *ngIf="t.educacion">\n\n                                        <ul class="list-no-style">\n\n                                            <li *ngFor="let e of t.educacion; let i of index">\n\n                                                <table class="table-report">\n\n                                                    <caption>FORMACION Y ESTUDIOS</caption>\n\n                                                    <tbody>\n\n                                                        <tr *ngIf="e.curso">\n\n                                                            <td>ESTUDIO O CURSO REALIZADO:</td>\n\n                                                            <td>{{e.curso}}</td>\n\n                                                        </tr>\n\n                                                        <tr *ngIf="e.lugar">\n\n                                                            <td>INSTITUTO O CENTRO:</td>\n\n                                                            <td>{{e.lugar}}</td>\n\n                                                        </tr>\n\n                                                        <tr *ngIf="e.inicio_mes || e.inicio_ano">\n\n                                                            <td>FECHA DE INICIO:</td>\n\n                                                            <td>\n\n                                                                <span *ngIf="e.inicio_mes">{{e.inicio_mes}}</span>\n\n                                                                <span *ngIf="e.inicio_mes &amp;&amp; e.inicio_ano">-</span>\n\n                                                                <span *ngIf="e.inicio_ano">{{e.inicio_ano}}</span>\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                        <tr *ngIf="e.fin_mes || e.fin_ano">\n\n                                                            <td>FECHA DE FINALIZACION:</td>\n\n                                                            <td>\n\n                                                                <span *ngIf="e.fin_mes">{{e.fin_mes}}</span>\n\n                                                                <span *ngIf="e.fin_mes &amp;&amp; e.fin_ano">-</span>\n\n                                                                <span *ngIf="e.fin_ano">{{e.fin_ano}}</span>\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                    </tbody>\n\n                                                </table>\n\n                                            </li>\n\n                                        </ul>\n\n                                    </div>\n\n                                    <br/>\n\n                                </div>\n\n                            </li>\n\n                        </ul>\n\n                        <br/>\n\n                        <br/>\n\n                        <br/>\n\n                        <br/>\n\n                    </div>\n\n                    <img id="destinoParcial">\n\n                    <div class="modal-footer">\n\n                        <button class="btn btn-primary" (click)="divToImageParcial()">Generar Imagen</button>\n\n                        <button class="btn btn-primary" (click)="saveImageReport(\'parcial\')">Guardar Imagen</button>\n\n                        <button class="btn btn-default" data-dismiss="modal">Cerrar</button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="modal fade" id="modalcompleto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n\n            <div class="modal-dialog modal-lg" role="document">\n\n                <div class="modal-content">\n\n                    <div class="modal-header">\n\n                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">\n\n                            <span aria-hidden="true">×</span>\n\n                        </button>\n\n                        <h4 class="modal-title" id="myModalLabel">Informe Completo</h4>\n\n                    </div>\n\n                    <div class="modal-body report-bg" id="reporteCompleto">\n\n                        <ul class="list-no-style">\n\n                            <li *ngFor="let t of selectedTrabajadores">\n\n                                <div class="text-center" *ngIf="anverso &amp;&amp; reverso">\n\n                                    <img src="{{t.carnet_anverso}}" width="565" heigth="250">\n\n                                    <br>\n\n                                    <br>\n\n                                    <img src="{{t.carnet_reverso}}" width="565" heigth="250">\n\n                                </div>\n\n                                <img class="logonombre" src="/assets/img/logo.png">\n\n                                <h3 class="text-center">{{t.nombre | uppercase}} {{t.apellidos | uppercase}}</h3>\n\n                                <table class="table-report">\n\n                                    <caption>DATOS GENERALES</caption>\n\n                                    <tbody>\n\n                                        <tr>\n\n                                            <td>CODIGO</td>\n\n                                            <td>{{t.id}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CARNET DE IDENTIDAD</td>\n\n                                            <td>{{t.ci}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CARNET EXPEDIDO EN</td>\n\n                                            <td>{{t.ci_exped}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>EDAD</td>\n\n                                            <td>{{t.edad}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>LUGAR DE NACIMIENTO</td>\n\n                                            <td>{{t.ciudad_nacimiento}}</td>\n\n                                        </tr>\n\n                                        <tr [hidden]="t.tel_celular == \'\'">\n\n                                            <td>TELEFONO CELULAR</td>\n\n                                            <td>{{t.tel_celular}}</td>\n\n                                        </tr>\n\n                                        <tr [hidden]="t.tel_fijo == \'\'">\n\n                                            <td>TELEFONO FIJO</td>\n\n                                            <td>{{t.tel_fijo}}</td>\n\n                                        </tr>\n\n                                        <tr [hidden]="t.direccion == \'\'">\n\n                                            <td>DIRECCION</td>\n\n                                            <td>{{t.direccion}}</td>\n\n                                        </tr>\n\n                                        <tr [hidden]="t.email == \'\'">\n\n                                            <td>EMAIL:</td>\n\n                                            <td>{{t.email}}</td>\n\n                                        </tr>\n\n                                        <tr [hidden]="true">\n\n                                            <td>FACEBOOK</td>\n\n                                            <td>{{t.facebook}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>BUSCA TRABAJO DE</td>\n\n                                            <td>{{t.interes_trabajo}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>MODALIDAD DE TRABAJO</td>\n\n                                            <td>{{t.modalidad_trabajo}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>PRETENSION SALARIAL</td>\n\n                                            <td>Bs. {{t.pretension}} (NEGOCIABLE)</td>\n\n                                        </tr>\n\n                                        <tr [hidden]="t.habilidades == \'\'">\n\n                                            <td>HABILIDADES</td>\n\n                                            <td>{{t.habilidades}}</td>\n\n                                        </tr>\n\n                                    </tbody>\n\n                                </table>\n\n                                <ul class="list-no-style">\n\n                                    <li *ngFor="let e of t.experiencias; let i of index">\n\n                                        <table class="table-report" *ngIf="e.tipo_trabajo || e.tipo_trabajo || e.ciudad || e.cargo || e.lugar || e.tiempo_anios || e.tiempo_meses || e.fecha_retiro || e.nombre_jefe || e.tel_jefe">\n\n                                            <caption>EXPERIENCIA</caption>\n\n                                            <tbody>\n\n                                                <tr [hidden]="!e.tipo_trabajo">\n\n                                                    <td>TRABAJÓ EN</td>\n\n                                                    <td>{{e.tipo_trabajo}}</td>\n\n                                                </tr>\n\n                                                <tr [hidden]="!e.ciudad">\n\n                                                    <td>CIUDAD DE TRABAJO</td>\n\n                                                    <td>{{e.ciudad}}</td>\n\n                                                </tr>\n\n                                                <tr [hidden]="!e.cargo">\n\n                                                    <td>CARGO DESEMPEÑADO</td>\n\n                                                    <td>{{e.cargo}}</td>\n\n                                                </tr>\n\n                                                <tr [hidden]="!e.lugar">\n\n                                                    <td>DESCRIPCION TRABAJO ANTERIOR</td>\n\n                                                    <td>{{e.lugar}}</td>\n\n                                                </tr>\n\n                                                <tr [hidden]="!e.tiempo_anios &amp;&amp; !e.tiempo_meses">\n\n                                                    <td>TIEMPO DE TRABAJO</td>\n\n                                                    <td>\n\n                                                        <span [hidden]="e.tiempo_anios == null">{{e.tiempo_anios}} Año(s)</span>\n\n                                                        <span [hidden]="e.tiempo_anios == null || e.tiempo_meses == null">&nbsp;y&nbsp;</span>\n\n                                                        <span [hidden]="e.tiempo_meses == null">{{e.tiempo_meses}} Mes(es)</span>\n\n                                                    </td>\n\n                                                </tr>\n\n                                                <tr [hidden]="e.fecha_retiro == \'\'">\n\n                                                    <td>FECHA DE RETIRO</td>\n\n                                                    <td>{{e.fecha_retiro}}</td>\n\n                                                </tr>\n\n                                                <tr [hidden]="!e.motivo_retiro">\n\n                                                    <td>MOTIVO DE RETIRO</td>\n\n                                                    <td>{{e.motivo_retiro}}</td>\n\n                                                </tr>\n\n                                                <tr [hidden]="!e.nombre_jefe">\n\n                                                    <td>JEFE ANTERIOR</td>\n\n                                                    <td>{{e.nombre_jefe}}</td>\n\n                                                </tr>\n\n                                                <tr [hidden]="!e.tel_jefe">\n\n                                                    <td>TELEFONO JEFE ANTERIOR</td>\n\n                                                    <td>{{e.tel_jefe}}</td>\n\n                                                </tr>\n\n                                            </tbody>\n\n                                        </table>\n\n                                        <table class="table-report" [hidden]="!e.verificado">\n\n                                            <caption>EVALUACION DE ANTERIOR EMPLEADOR</caption>\n\n                                            <tbody>\n\n                                                <tr>\n\n                                                    <td>CARGO DESEMPEÑADO</td>\n\n                                                    <td>{{e.verif_cargo}}</td>\n\n                                                </tr>\n\n                                                <tr>\n\n                                                    <td>TIEMPO QUE TRABAJO</td>\n\n                                                    <td>\n\n                                                        <span [hidden]="e.verif_tiempo_anios == \'\'">{{e.verif_tiempo_anios}} Año(s)</span>\n\n                                                        <span [hidden]="e.verif_tiempo_anios == \'\' || e.verif_tiempo_meses == \'\'">&nbsp;y&nbsp;</span>\n\n                                                        <span [hidden]="e.verif_tiempo_meses == \'\'">{{e.verif_tiempo_meses}} Mes(es)</span>\n\n                                                    </td>\n\n                                                </tr>\n\n                                                <tr>\n\n                                                    <td>MOTIVO DE RETIRO</td>\n\n                                                    <td>{{e.verif_motivo_retiro}}</td>\n\n                                                </tr>\n\n                                                <tr class="estrellas">\n\n                                                    <td>HONESTIDAD</td>\n\n                                                    <td> <!--\n\n                                                        <bar-rating [(rate)]="e.nota_honesto" [max]="5" [titles]="[\'Malo\', \'Regular\', \'Bueno\', \'Muy Bueno\', \'Excelente\']" [showText]="true"\n\n                                                            [readOnly]="true"></bar-rating> -->\n\n                                                    </td>\n\n                                                </tr>\n\n                                                <tr class="estrellas">\n\n                                                    <td>ORDEN Y LIMPIEZA</td>\n\n                                                    <td> <!--\n\n                                                        <bar-rating [(rate)]="e.nota_limpio" [max]="5" [titles]="[\'Malo\', \'Regular\', \'Bueno\', \'Muy Bueno\', \'Excelente\']" [showText]="true"\n\n                                                            [readOnly]="true"></bar-rating> -->\n\n                                                    </td>\n\n                                                </tr>\n\n                                                <tr class="estrellas">\n\n                                                    <td>RESPONSABILIDAD</td>\n\n                                                    <td>\n\n                                                        <!-- \n\n                                                        <bar-rating [(rate)]="e.nota_responsable" [max]="5" [titles]="[\'Malo\', \'Regular\', \'Bueno\', \'Muy Bueno\', \'Excelente\']" [showText]="true"\n\n                                                            [readOnly]="true"></bar-rating>\n\n                                                        -->\n\n                                                    </td>\n\n                                                </tr>\n\n                                                <tr class="estrellas">\n\n                                                    <td>NOTA DE RECOMENDACION</td>\n\n                                                    <td class="evaluacionmargen">\n\n                                                         <!--<bar-rating [(rate)]="e.nota_recomendacion" [max]="5" [titles]="[\'NO LO RECOMIENDO\', \'LO RECOMIENDO CON CUIDADO\', \'BUENO, LO RECOMIENDO\', \'MUY RECOMENDADO\', \'ALTAMENTE RECOMENDADO\']"\n\n                                                            [showText]="true" [readOnly]="true"></bar-rating> -->\n\n                                                    </td>\n\n                                                </tr>\n\n                                                <tr>\n\n                                                    <td>ASPECTO A MEJORAR</td>\n\n                                                    <td>{{e.aspecto_mejorar}}</td>\n\n                                                </tr>\n\n                                                <tr>\n\n                                                    <td>NOMBRE DEL INFORMANTE</td>\n\n                                                    <td>{{e.verif_nombre_informante}}</td>\n\n                                                </tr>\n\n                                            </tbody>\n\n                                        </table>\n\n                                    </li>\n\n                                </ul>\n\n                                <div *ngIf="t.educacion">\n\n                                    <ul class="list-no-style">\n\n                                        <li *ngFor="let e of t.educacion; let i of index">\n\n                                            <table class="table-report">\n\n                                                <caption>FORMACION Y ESTUDIOS</caption>\n\n                                                <tbody>\n\n                                                    <tr *ngIf="e.curso">\n\n                                                        <td>ESTUDIO O CURSO REALIZADO:</td>\n\n                                                        <td>{{e.curso}}</td>\n\n                                                    </tr>\n\n                                                    <tr *ngIf="e.lugar">\n\n                                                        <td>INSTITUTO O CENTRO:</td>\n\n                                                        <td>{{e.lugar}}</td>\n\n                                                    </tr>\n\n                                                    <tr *ngIf="e.inicio_mes || e.inicio_ano">\n\n                                                        <td>FECHA DE INICIO:</td>\n\n                                                        <td>\n\n                                                            <span *ngIf="e.inicio_mes">{{e.inicio_mes}}</span>\n\n                                                            <span *ngIf="e.inicio_mes &amp;&amp; e.inicio_ano">-</span>\n\n                                                            <span *ngIf="e.inicio_ano">{{e.inicio_ano}}</span>\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                    <tr *ngIf="e.fin_mes || e.fin_ano">\n\n                                                        <td>FECHA DE FINALIZACION:</td>\n\n                                                        <td>\n\n                                                            <span *ngIf="e.fin_mes">{{e.fin_mes}}</span>\n\n                                                            <span *ngIf="e.fin_mes &amp;&amp; e.fin_ano">-</span>\n\n                                                            <span *ngIf="e.fin_ano">{{e.fin_ano}}</span>\n\n                                                        </td>\n\n                                                    </tr>\n\n                                                </tbody>\n\n                                            </table>\n\n                                        </li>\n\n                                    </ul>\n\n                                </div>\n\n                                <br/>\n\n                            </li>\n\n                        </ul>\n\n                        <br/>\n\n                        <br/>\n\n                        <br/>\n\n                        <br/>\n\n                    </div>\n\n                    <div class="modal-footer">\n\n                        <button class="btn btn-primary" (click)="saveImageReport(\'completo\')">Guardar Imagen</button>\n\n                        <button class="btn btn-default" data-dismiss="modal">Cerrar</button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="impresion" *ngIf="habilitar_Impresion">\n\n            <div class="modal fade" id="contratocandidato" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n\n                <div class="modal-dialog modal-lg" role="document">\n\n                    <div class="modal-content">\n\n                        <div class="modal-header">\n\n                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">\n\n                                <span aria-hidden="true">×</span>\n\n                            </button>\n\n                            <h4 class="modal-title" id="myModalLabel">REGISTRO DE DATOS</h4>\n\n                        </div>\n\n                        <div class="modal-body">\n\n                            <div id="bodyprintcandidato">\n\n                                <img id="contratologo" [src]="logo" width="150" height="40">\n\n                                <h4 id="contratotitle">REGISTRO DE DATOS</h4>\n\n                                <table id="contratotabla">\n\n                                    <caption>DATOS GENERALES</caption>\n\n                                    <thead>\n\n                                        <tr>\n\n                                            <th></th>\n\n                                            <th></th>\n\n                                        </tr>\n\n                                    </thead>\n\n                                    <tbody>\n\n                                        <tr>\n\n                                            <td>FECHA</td>\n\n                                            <td>{{fecha | date: \'dd-MM-yyyy\'}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>NOMBRES</td>\n\n                                            <td class="uppercase">{{perfil.nombre}} {{perfil.apellidos}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CARNET DE IDENTIDAD</td>\n\n                                            <td>{{perfil.ci}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>FECHA DE NACIMIENTO</td>\n\n                                            <td>{{perfil.fecha_nacimiento | date: \'dd-MM-yyyy\'}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CIUDAD DE NACIMIENTO</td>\n\n                                            <td class="uppercase">{{perfil.ciudad_nacimiento}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>TELEFONO</td>\n\n                                            <td>{{perfil.tel_celular}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CIUDAD DE RECIDENCIA</td>\n\n                                            <td class="uppercase">{{perfil.ciudad_residencia}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>DIRECCION ACTUAL</td>\n\n                                            <td class="uppercase">{{perfil.direccion}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>BUSCA TRABAJO DE</td>\n\n                                            <td class="uppercase">{{perfil.interes_trabajo}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>MODALIDAD DE TRABAJO</td>\n\n                                            <td class="uppercase">{{perfil.modalidad_trabajo}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CIUDAD VA A TRABAJAR</td>\n\n                                            <td class="uppercase">{{perfil.dpto_trabajo}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>PRETENSION SALARIAL</td>\n\n                                            <td>Bs. {{perfil.pretension}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>HABILIDADES</td>\n\n                                            <td class="uppercase">{{perfil.habilidades}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CARGO DESEMPEÑADO</td>\n\n                                            <td class="uppercase">{{perfil.experiencias[0].cargo}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>DESCRIPCION DEL TRABAJO ANTERIOR</td>\n\n                                            <td class="uppercase">{{perfil.experiencias[0].lugar}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>TRABAJÓ EN</td>\n\n                                            <td class="uppercase">{{perfil.experiencias[0].tipo_trabajo}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>CIUDAD DE TRABAJO</td>\n\n                                            <td class="uppercase">{{perfil.experiencias[0].ciudad}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>TIEMPO DE TRABAJO</td>\n\n                                            <td class="uppercase">\n\n                                                <span [hidden]="perfil.experiencias[0].tiempo_anios == null">{{perfil.experiencias[0].tiempo_anios}} Año(s)</span>\n\n                                                <span [hidden]="perfil.experiencias[0].tiempo_anios == null || perfil.experiencias[0].tiempo_meses == null">&nbsp;y&nbsp;</span>\n\n                                                <span [hidden]="perfil.experiencias[0].tiempo_meses == null">{{perfil.experiencias[0].tiempo_meses}} Mes(es)</span>\n\n                                            </td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>FECHA DE RETIRO</td>\n\n                                            <td>{{perfil.experiencias[0].fecha_retiro}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>MOTIVO DE RETIRO</td>\n\n                                            <td class="uppercase">{{perfil.experiencias[0].motivo_retiro}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>NOMBRE JEFE DIRECTO</td>\n\n                                            <td class="uppercase">{{perfil.experiencias[0].nombre_jefe}}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td>TELEFONO JEFE DIRECTO</td>\n\n                                            <td>{{perfil.experiencias[0].tel_jefe}}</td>\n\n                                        </tr>\n\n                                    </tbody>\n\n                                </table>\n\n                                <section class="text-justify" id="toc">\n\n                                    <p>Declaro que toda la información proporcionada a Trabajo Ofertas es real y soy el único(a)\n\n                                        responsable de la veracidad y exactitud de todos los datos consignados en la información\n\n                                        y documentación presentada. Autorizo a Trabajo Ofertas a realizarla verificación\n\n                                        inopinada de la información y documentación entregada, para que por cualquier medio\n\n                                        legal se compruebe la veracidad de la misma. Asimismo, autorizo a Trabajo Ofertas\n\n                                        a usar y entregar a terceros toda la información y datos proporcionados, incluyendo\n\n                                        la evaluación recibida de mis anteriores empleadores, sea por medio físico o digital,\n\n                                        dando de esta manera mi consentimiento, según lo establece el Artículo 56 en sus\n\n                                        incisos c) y d) del Decreto Supremo 1793 del 13 de noviembre del 2013.</p>\n\n                                    <p>He sido informado y acepto que Trabajo Ofertas sólo me proporcionará información de terceros\n\n                                        que requieren contratar los servicios que ofrezco y es mi persona la que aceptará\n\n                                        o no entablar una relación laboral patronal con alguno de ellos; siendo mi obligación\n\n                                        la de verificar la información y antecedentes de mi futuro empleador. Por este motivo,\n\n                                        en caso de encontrarme frente a una actividad relacionado con la trata y tráfico\n\n                                        de personas o con actividades delictivas o tipificadas en la ley 1008, eximo a Trabajo\n\n                                        Ofertas de cualquier responsabilidad.</p>\n\n                                    <p>Acepto también que no tengo ninguna relación laboral con Trabajo Ofertas y que nuestra\n\n                                        relación es solo comercial. En caso de que a través de la información proporcionada\n\n                                        por Trabajo Ofertas, mi persona acuerde una relación laboral con un tercero, declaro\n\n                                        que conozco mis derechos y obligaciones, así como el procedimiento establecido en\n\n                                        la Ley General de Trabajo, que aplicaré con la persona con la que acuerde la relación\n\n                                        laboral, eximiendo de esta manera a Trabajo Ofertas de cualquier responsabilidad\n\n                                        y reclamo posterior</p>\n\n                                </section>\n\n                                <section id="signature">\n\n                                    <p>__________________________________</p>\n\n                                    <p>FIRMA</p>\n\n                                </section>\n\n                            </div>\n\n                        </div>\n\n                        <div class="modal-footer">\n\n                            <button class="btn btn-primary" id="print" (click)="imprimirCandidato()">Imprimir</button>\n\n                            <button class="btn btn-default" type="button" data-dismiss="modal">Cancelar</button>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="modal fade" id="exportTrabajadores" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n\n            <div class="modal-dialog" role="document">\n\n                <div class="modal-content">\n\n                    <div class="modal-header">\n\n                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">\n\n                            <span aria-hidden="true">×</span>\n\n                        </button>\n\n                        <h4 class="modal-title" id="myModalLabel">Exportar Trabajadores para Contacto de Google</h4>\n\n                    </div>\n\n                    <div class="modal-body">\n\n                        <form #csvTrabajadorForm="ngForm" (ngSubmit)="getCSV(csvTrabajadorForm)" novalidate="">\n\n                            <div class="form-group">\n\n                                <label>Fecha Inicial de Registro:</label>\n\n                                <input class="form-control" type="date" name="init_date" ngModel [disabled]="csvAllCheck">\n\n                            </div>\n\n                            <div class="form-group">\n\n                                <label>Fecha Final de Registro:</label>\n\n                                <input class="form-control" type="date" name="end_date" ngModel [disabled]="csvAllCheck">\n\n                            </div>\n\n                            <div class="form-group">\n\n                                <input id="csvCheckTrabajadores" type="checkbox" name="allTrabajadores" ngModel (click)="toggleCSVALLCheck()">\n\n                                <label for="csvCheckTrabajadores" name="all">Exportar Todos</label>\n\n                            </div>\n\n                            <button class="btn btn-primary" type="submit" [disabled]="checkCSVForm(csvTrabajadorForm)">Exportar</button>\n\n                        </form>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\candidatos\busqueda\busqueda-trabajadores.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], BusquedaTrabajadoresComponent);
    return BusquedaTrabajadoresComponent;
}());

//# sourceMappingURL=busqueda-trabajadores.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_app_config__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.urlModalidades = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/modalidad';
        this.urlModalidades2 = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/modalidad2';
        this.urlProfesiones = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/profesion';
        this.urlTrabajos = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/trabajo';
        this.urlTrabajos2 = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/trabajo2';
        this.urlRangos = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/rango';
        this.urlCiudades = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/ciudad';
        this.urlTarifas = __WEBPACK_IMPORTED_MODULE_2__server_app_config__["a" /* appConfig */].apiUrl + 'api/config/tarifa';
        console.log('servicio activo');
    }
    /* -------------------- GET DE CONFIGURACION ------------------ */
    ConfigService.prototype.getModalidad = function () {
        return this.http.get(this.urlModalidades);
    };
    ConfigService.prototype.getCiudad = function () {
        return this.http.get(this.urlCiudades);
    };
    ConfigService.prototype.getTrabajo = function () {
        return this.http.get(this.urlTrabajos);
    };
    /* -------------------- GET DE CONFIGURACION ------------------ */
    /* -------------------- SET DE CONFIGURACION ------------------ */
    ConfigService.prototype.postModalidades = function (datos) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post(this.urlModalidades, datos, { headers: headers });
    };
    ConfigService.prototype.postCiudades = function (datos) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post(this.urlCiudades, datos, { headers: headers });
    };
    ConfigService.prototype.postTrabajos = function (datos) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post(this.urlTrabajos, datos, { headers: headers });
    };
    /* -------------------- SET DE CONFIGURACION ------------------ */
    ConfigService.prototype.deleteTrabajos = function (id) {
        return this.http.delete(this.urlTrabajos + '/' + id);
    };
    ConfigService.prototype.deleteCiudades = function (id) {
        return this.http.delete(this.urlCiudades + '/' + id);
    };
    ConfigService.prototype.deleteModalidades = function (id) {
        return this.http.delete(this.urlModalidades + '/' + id);
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfigService);
    return ConfigService;
}());

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_busqueda_aviso_aviso__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_busqueda_candidatos_busqueda_busqueda_trabajadores_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__controllers_config_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user_module__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//submodulo


//import { NgClass } from '@angular/common';
//import { RouterModule, Route } from '@angular/router';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_busqueda_aviso_aviso__["a" /* AvisoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_busqueda_candidatos_busqueda_busqueda_trabajadores_component__["a" /* BusquedaTrabajadoresComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/busqueda/aviso/aviso.module#AvisoPageModule', name: 'AvisoPage', segment: 'aviso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/avisos/avisos.module#AvisosPageModule', name: 'AvisosPage', segment: 'avisos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/busqueda.module#BusquedaPageModule', name: 'BusquedaPage', segment: 'busqueda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/candidatos/candidatos.module#CandidatosPageModule', name: 'CandidatosPage', segment: 'candidatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/config/config.module#ConfigPageModule', name: 'ConfigComponent', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/trabajadores/trabajadores.module#TrabajadoresPageModule', name: 'TrabajadoresPage', segment: 'trabajadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //  NgClass
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user_module__["UserPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_busqueda_aviso_aviso__["a" /* AvisoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_busqueda_candidatos_busqueda_busqueda_trabajadores_component__["a" /* BusquedaTrabajadoresComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__controllers_config_service__["a" /* ConfigService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    apiUrl: 'http://198.58.112.163:3800/'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\user\user.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Usuarios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n<h1>ADMINISTRACION DE USUARIO</h1>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map