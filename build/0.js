webpackJsonp([0],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosPageModule", function() { return AvisosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avisos__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_filter_pipe__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Pipes
// import { CapitalizePipe } from '../../../pipes/capitalize.pipe';



var AvisosPageModule = /** @class */ (function () {
    function AvisosPageModule() {
    }
    AvisosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__avisos__["a" /* AvisosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__avisos__["a" /* AvisosPage */]),
            ],
            exports: [
                //CapitalizePipe,
                __WEBPACK_IMPORTED_MODULE_3_ng2_filter_pipe__["Ng2FilterPipeModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe__["Ng2OrderModule"]
            ]
        })
    ], AvisosPageModule);
    return AvisosPageModule;
}());

//# sourceMappingURL=avisos.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/06/16.
 */
var core_1 = __webpack_require__(0);
var Ng2FilterPipe = (function () {
    function Ng2FilterPipe() {
    }
    Ng2FilterPipe.prototype.filterByString = function (filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) {
            return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
        };
    };
    Ng2FilterPipe.prototype.filterByBoolean = function (filter) {
        return function (value) {
            return Boolean(value) === filter;
        };
    };
    Ng2FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var key in filter) {
                if (key === '$or') {
                    if (!_this.filterByOr(filter.$or)(_this.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                if (!value.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(Object.getPrototypeOf(value), key)) {
                    return false;
                }
                var val = _this.getValue(value[key]);
                var filterType = typeof filter[key];
                var isMatching = void 0;
                if (filterType === 'boolean') {
                    isMatching = _this.filterByBoolean(filter[key])(val);
                }
                else if (filterType === 'string') {
                    isMatching = _this.filterByString(filter[key])(val);
                }
                else if (filterType === 'object') {
                    isMatching = _this.filterByObject(filter[key])(val);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(val);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * Filter value by $or
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    Ng2FilterPipe.prototype.filterByOr = function (filter) {
        return function (value) {
            var hasMatch = false;
            var length = filter.length;
            var isArray = value instanceof Array;
            var arrayComparison = function (i) {
                return value.indexOf(filter[i]) !== -1;
            };
            var otherComparison = function (i) {
                return value === filter[i];
            };
            var comparison = isArray ? arrayComparison : otherComparison;
            for (var i = 0; i < length; i++) {
                if (comparison(i)) {
                    hasMatch = true;
                    break;
                }
            }
            return hasMatch;
        };
    };
    /**
     * Checks function's value if type is function otherwise same value
     * @param value
     * @returns {any}
     */
    Ng2FilterPipe.prototype.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    /**
     * Defatul filterDefault function
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    Ng2FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return filter === undefined || filter == value;
        };
    };
    Ng2FilterPipe.prototype.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    Ng2FilterPipe.prototype.transform = function (array, filter) {
        var type = typeof filter;
        if (!array) {
            return array;
        }
        if (type === 'boolean') {
            return array.filter(this.filterByBoolean(filter));
        }
        if (type === 'string') {
            if (this.isNumber(filter)) {
                return array.filter(this.filterDefault(filter));
            }
            return array.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return array.filter(this.filterByObject(filter));
        }
        if (type === 'function') {
            return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    return Ng2FilterPipe;
}());
Ng2FilterPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'filterBy',
                pure: false
            },] },
    { type: core_1.Injectable },
];
/** @nocollapse */
Ng2FilterPipe.ctorParameters = function () { return []; };
exports.Ng2FilterPipe = Ng2FilterPipe;
//# sourceMappingURL=ng2-filter.pipe.js.map

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var Ng2OrderPipe = Ng2OrderPipe_1 = (function () {
    function Ng2OrderPipe() {
    }
    Ng2OrderPipe.prototype.transform = function (value, expression, reverse) {
        if (!value) {
            return value;
        }
        var isArray = value instanceof Array;
        if (isArray) {
            return this.sortArray(value, expression, reverse);
        }
        if (typeof value === 'object') {
            return this.transformObject(value, expression, reverse);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    Ng2OrderPipe.prototype.sortArray = function (value, expression, reverse) {
        var array = value.sort(function (a, b) {
            if (!expression) {
                return a > b ? 1 : -1;
            }
            return a[expression] > b[expression] ? 1 : -1;
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    Ng2OrderPipe.prototype.transformObject = function (value, expression, reverse) {
        var parsedExpression = Ng2OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);
        if (!(oldValue instanceof Array)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        var newValue = this.transform(oldValue, lastPredicate, reverse);
        Ng2OrderPipe_1.setValue(value, newValue, parsedExpression);
        return value;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    Ng2OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    Ng2OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    Ng2OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    return Ng2OrderPipe;
}());
Ng2OrderPipe = Ng2OrderPipe_1 = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    })
], Ng2OrderPipe);
exports.Ng2OrderPipe = Ng2OrderPipe;
var Ng2OrderPipe_1;
//# sourceMappingURL=ng2-order.pipe.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisosPage; });
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


var AvisosPage = /** @class */ (function () {
    function AvisosPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /*OK*/
        this.avisos = [{
                id: "1",
                nombre: "juan",
                apellido: "perez",
                ci: "00000",
                ci_exped: "sc",
                direccion: "",
                ciudad: "",
                numero_celular: 100,
                personal_requerido: ["CAMARERO", "JARDINERO", "ZAPATERO"],
                modalidad: "CAMA ADENTRO",
                sueldo: 100,
                pasaje: 100,
                hora_semanal: "",
                hora_inicio: "",
                hora_final: "",
                adultos_casa: 100,
                ninos_casa: 100,
                descripcion_trabajo: "",
                hora_entrevista: "",
                aviso_atendido: false,
                fecha_creacion: "1999-09-07"
            },
            {
                id: "2",
                nombre: "choleche",
                apellido: "for-ever",
                ci: "",
                ci_exped: "",
                direccion: "",
                ciudad: "",
                numero_celular: 100,
                personal_requerido: ["CAMARERO", "JARDINERO", "ZAPATERO"],
                modalidad: "CAMA ADENTRO",
                sueldo: 100,
                pasaje: 100,
                hora_semanal: "",
                hora_inicio: "",
                hora_final: "",
                adultos_casa: 100,
                ninos_casa: 100,
                descripcion_trabajo: "",
                hora_entrevista: "",
                aviso_atendido: false,
                fecha_creacion: ""
            }
        ];
        this.orderOptions = [
            { value: 'id', name: 'Id de Aviso' },
            { value: 'nombre', name: 'Nombre del Cliente' },
            { value: 'apellidos', name: 'Apellido del Cliente' },
            { value: 'ciudad_nacimiento', name: 'Ciudad de Requerimiento' },
            { value: 'fecha_creacion', name: 'Fecha de Registro' },
            { value: 'modalidad', name: 'Modalidad de Trabajo' },
            { value: 'personal_requerido', name: 'Personal Requerido' },
            { value: 'pretension', name: 'Pretensión Salarial' }
        ];
        this.reverseOptions = [
            { value: false, description: 'Ascendente' },
            { value: true, description: 'Descendente' }
        ];
        //FILTRO DE BUSQUEDA
        this.avisosFilter = {
            id: '',
            fecha_creacion: '',
            nombre: '',
            apellido: '',
            ciudad: '',
            modalidad: '',
            personal_requerido: '',
            sueldo: ''
        };
        this.verAtendidos = false;
        this.tableBodyView = 0;
        this.itemsPerPage = 50;
        this.currentPage = 1;
        this.totalPages = Math.ceil(this.avisos.length / this.itemsPerPage);
        this.hidePagination = false;
        this.csvAllCheck = false;
        this.listaCI = [];
        this.listaModalidades = [];
        this.listaIntereses = [];
        this.order = 'fecha_creacion';
        this.reverse = true;
        //this.getAvisos();
        this.setPageList();
        this.hidePagination = true;
        setTimeout(function () {
            _this.setItemsPerPage(50);
            _this.hidePagination = false;
        }, 2000);
        //this.configuracion.getModalidades().subscribe(res => this.listaModalidades = res);
        //this.configuracion.getTrabajos().subscribe(res => this.listaIntereses = res);
    }
    /*funciones */
    // 1
    AvisosPage.prototype.toggleAtendidos = function () {
        this.verAtendidos = !this.verAtendidos;
    };
    // 2
    AvisosPage.prototype.setPageList = function () {
        this.pagesList = [];
        var i;
        for (i = 1; i <= this.totalPages; i++) {
            this.pagesList.push(i);
        }
    };
    // 3
    AvisosPage.prototype.setItemsPerPage = function (value) {
        this.itemsPerPage = value;
        this.totalPages = Math.ceil(this.avisos.length / this.itemsPerPage);
        this.hidePagination = this.totalPages < 2 || isNaN(this.totalPages) ? true : false;
        this.setPageList();
    };
    // 4
    AvisosPage.prototype.setCurrentPage = function (value) {
        return this.currentPage = value;
    };
    // 5
    AvisosPage.prototype.setSelectedAviso = function (aviso) {
        if (aviso) {
            this.selectedAviso = aviso;
            this.avisoID = aviso.id;
        }
    };
    //6
    AvisosPage.prototype.resetSelectedAviso = function () {
        this.selectedAviso = {};
        this.avisoID = '';
    };
    //7
    AvisosPage.prototype.toggleBodyView = function (value) {
        switch (parseInt(value)) {
            case 0:
                this.tableBodyView = 0;
                this.setItemsPerPage(50);
                $('#pageSelect :nth-child(1)').prop('selected', true);
                break;
            case 1:
                this.tableBodyView = 1;
                this.setItemsPerPage(this.avisos.length);
                $('#pageSelect :nth-child(5)').prop('selected', true);
                break;
            case 2:
                this.tableBodyView = 2;
                this.setItemsPerPage(this.avisos.length);
                $('#pageSelect :nth-child(5)').prop('selected', true);
                break;
        }
    };
    //8
    AvisosPage.prototype.toggleCSVALLCheck = function () {
        this.csvAllCheck = !this.csvAllCheck;
    };
    //9
    AvisosPage.prototype.checkCSVForm = function (f) {
        return (f.value.init_date == '' || f.value.end_date == '')
            && !f.value.allTrabajadores;
    };
    //--
    AvisosPage.prototype.getAvisos = function () {
        /*  this.avisoService.getAvisos().subscribe(res => {
            this.avisos = res.map(a => {
              a.personal_requerido = a.personal_requerido.toString()
              return a
            })
          });
          */
    };
    AvisosPage.prototype.deleteAviso = function () {
        /* if (this.avisoID) {
           this.avisoService.deleteAviso(this.avisoID);
           this.resetSelectedAviso();
           this.getAvisos();
         }
         */
        $('#deleteAviso').modal('toggle');
    };
    AvisosPage.prototype.updateEstado = function (aviso) {
        /* let id = aviso.id;
         let estado = { aviso_atendido: !aviso.aviso_atendido };
         if (id) {
           this.avisoService.actualizarEstado(estado, id);
           this.getAvisos();
         }
         */
    };
    AvisosPage.prototype.updateArchivado = function (aviso) {
        /*  let id = aviso.id;
          let estado = { aviso_archivado: !aviso.aviso_archivado };
          if (id) {
            this.avisoService.actualizarEstado(estado, id);
            this.getAvisos();
          
          */ 
    };
    AvisosPage.prototype.getCSV = function (f) {
        var init = f.value.init_date ? f.value.init_date : new Date();
        var end = f.value.end_date ? f.value.end_date : new Date();
        var all = f.value.allTrabajadores ? true : false;
        /*  this.avisoService.getCSVClientes(init, end, all).subscribe(res => {
            this._csvService.download(res, 'clientes');
            this.csvAllCheck = false;
            f.reset();
            $('#exportClientes').modal('toggle');
          });
      
          */
    };
    AvisosPage.prototype.editarAviso = function (f) {
        var aviso = f.value;
        var id = this.avisoID;
        if (id) {
            /*    this.avisoService.actualizarEstado(aviso, id);
                this.getAvisos();
                this.resetSelectedAviso();
                f.reset();
                */
        }
        $('#editaviso').modal('toggle');
    };
    /*funciones */
    AvisosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvisosPage');
    };
    AvisosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-avisos',template:/*ion-inline-start:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\avisos\avisos.html"*/'<ion-header>\n  <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Avisos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <!-- ITEM 1 DE BUSQUEDAS-->\n<div class="container-fluid cuerpo-busqueda">\n  <div class="row">\n    <div class="col-lg-12">\n      <h2 class="text-center">BUSQUEDA DE AVISOS</h2>\n      <hr/>\n      <div class="form-inline">\n        <div class="form-group">\n          <label>Items por Pagina:</label>\n          <select class="form-control" id="pageSelect" \n           (change)="setItemsPerPage($event.target.value)">\n          <!--(change)="setItemsPerPage($event.target.value)"-->\n            <option value="50">50</option>\n            <option value="100">100</option>\n            <option value="200">200</option>\n            <option value="500">500</option>\n            <option value="avisos.length" >Todos</option>            \n          </select>&nbsp;&nbsp;&nbsp;\n        </div>\n\n        <div class="form-group">\n          <label>Ver Avisos:</label>\n          <select class="form-control" >\n            <!--(change)="toggleBodyView($event.target.value)"-->\n            <option value="0">No Atendidos</option>\n            <option value="1">Atendidos</option>\n            <option value="2">Arvhivados</option>\n          </select>&nbsp;&nbsp;&nbsp;\n        </div>\n        <div class="form-group">\n          <button class="btn btn-primary" data-toggle="modal" data-backdrop="false" data-target="#exportClientes">\n            <i class="fa fa-download" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i>Exportar</button>\n        </div>\n        <div class="form-group pull-right">\n          <label>Ordenar por:</label>\n          <select class="form-control" [(ngModel)]="order">\n            <option *ngFor="let o of orderOptions" [ngValue]="o.value">{{o.name}}</option>\n          </select>\n          <select class="form-control" [(ngModel)]="reverse">\n            <option *ngFor="let i of reverseOptions" [ngValue]="i.value" \n            [selected]="i.description == \'Descendente\'">\n              {{i.description}}\n            </option>\n          </select>\n        </div>\n      </div>\n      <hr/>\n    </div>\n  </div>\n  <!-- ITEM 1 DE BUSQUEDAS-->\n  \n  <!-- ITEM 2 DE BUSQUEDAS-->\n  <div class="row">\n    <div class="col-lg-12">\n      <table class="table table-striped">\n        <!--OK-->\n        <thead>\n          <tr>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" size="4" placeholder="ID" \n                [(ngModel)]="avisosFilter.id">\n                <br/>\n                <label>Codigo</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" size="4" placeholder="Fecha" \n                [(ngModel)]="avisosFilter.fecha_creacion">\n                <br/>\n                <label>Fecha</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" placeholder="Nombre Cliente"\n                 [(ngModel)]="avisosFilter.nombre">\n                <br/>\n                <label>Nombre</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" placeholder="Apellido Cliente"\n                 [(ngModel)]="avisosFilter.apellido">\n                <br/>\n                <label>Apellido</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" placeholder="Ciudad" \n                [(ngModel)]="avisosFilter.ciudad">\n                <br/>\n                <label>Ciudad</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" placeholder="Cargo" \n                [(ngModel)]="avisosFilter.personal_requerido">\n                <br/>\n                <label>Cargo</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" placeholder="Modalidad" \n                [(ngModel)]="avisosFilter.modalidad">\n                <br/>\n                <label>Modalidad</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <input class="form-control placeholder-centered" type="text" size="4" placeholder="Sueldo" \n                [(ngModel)]="avisosFilter.sueldo">\n                <br/>\n                <label>Sueldo</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <label>Archivado</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <label>Atendido</label>\n              </div>\n            </th>\n            <th class="text-center">\n              <div class="form-group">\n                <label>Acciones</label>\n              </div>\n            </th>\n          </tr>\n        </thead>\n        <!--OK-->\n\n\n<!-- LISTADO DE AVISOS \n*ngIf="tableBodyView == 0"\nEN EL TR AVISOS \n| filterBy: avisosFilter | orderBy: order: reverse | paginate: {itemsPerPage:itemsPerPage,currentPage:currentPage}" [hidden]="aviso.aviso_atendido\n|| aviso.aviso_archivado\n-->\n<tbody >\n  <tr *ngFor="let aviso of avisos" [hidden]="aviso.aviso_atendido\n  || aviso.aviso_archivado">\n    <!--| paginate: {itemsPerPage:itemsPerPage,currentPage:currentPage} -->\n    <td class="text-center">\n      <a href="#" data-toggle="modal" data-target="#editaviso" data-backdrop="false" (click)="setSelectedAviso(aviso)">{{aviso.id}}</a>\n    </td>\n    <td class="text-center">{{aviso.fecha_creacion | date: \'dd-MM-yyyy\'}}</td>\n    <td>\n      <a href="#" data-toggle="modal" data-target="#avisoParcial" data-backdrop="false" (click)="setSelectedAviso(aviso)">\n        {{aviso.nombre }}</a>\n    </td>\n    <td>\n      <a href="#" data-toggle="modal" data-target="#avisoCompleto" data-backdrop="false" (click)="setSelectedAviso(aviso)">{{aviso.apellido }}</a>\n    </td>\n    <td>{{aviso.ciudad }}</td>\n    <td>{{aviso.personal_requerido }}</td>\n    <td>{{aviso.modalidad }}</td>\n    <td class="text-right">Bs. {{aviso.sueldo}}</td>\n    <td class="text-center">\n      <a class="handcursor" (click)="updateArchivado(aviso)">\n        <i class="fa fa-check text-success" aria-hidden="true" *ngIf="aviso.aviso_archivado"></i>\n        <i class="fa fa-times text-danger" aria-hidden="true" *ngIf="!aviso.aviso_archivado"></i>\n      </a>\n    </td>\n    <td class="text-center">\n      <a class="handcursor" (click)="updateEstado(aviso)">\n        <i class="fa fa-check text-success" aria-hidden="true" *ngIf="aviso.aviso_atendido"></i>\n        <i class="fa fa-times text-danger" aria-hidden="true" *ngIf="!aviso.aviso_atendido"></i>\n      </a>\n    </td>\n    <td class="text-center">\n      <button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteAviso" (click)="setSelectedAviso(aviso)" [disabled]="!admin">\n        <i class="fa fa-trash-o" aria-hidden="true"></i>\n      </button>\n    </td>\n  </tr>\n</tbody>\n<!--LISTADO DE AVISOS-->\n\n      </table>\n      </div>\n    </div>\n  <!-- ITEM 2 DE BUSQUEDAS-->\n\n<!-- ITEM MODALES -->\n <div class="text-center">\n        <nav aria-label="Page navigation" [hidden]="hidePagination || avisos.length&lt;=itemsPerPage">\n          <ul class="pagination">\n            <li><a (click)="setCurrentPage(1)"><span aria-hidden="true">&laquo;</span></a></li>\n            <li *ngFor="let i of pagesList"><a [ngClass]="{\'currentPage\': i == currentPage}" (click)="setCurrentPage(i)">{{i}}</a></li>\n            <li><a (click)="setCurrentPage(totalPages)"><span aria-hidden="true">&raquo;</span></a></li>\n          </ul>\n        </nav>\n      </div>\n      <div class="modal fade" id="deleteAviso" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\n              <h4 class="modal-title" id="myModalLabel">Eliminar Aviso</h4>\n            </div>\n            <div class="modal-body">Esta Seguro de que desea eliminar el siguiente aviso:<br><br>\n              <div *ngIf="selectedAviso"><b>CODIGO: </b><small>{{selectedAviso.id}}</small><br><b>CLIENTE: </b><small>{{selectedAviso.nombre | uppercase}} {{selectedAviso.nombre | uppercase}}</small><br><b>FECHA: </b><small>{{selectedAviso.fecha_creacion | date: \'dd-MM-yyyy\'}}</small><br><b>CIUDAD: </b><small>{{selectedAviso.ciudad | uppercase}}</small><br><b>CARGO: </b><small>{{selectedAviso.personal_requerido}}</small><br><b>MODALIDAD: </b><small>{{selectedAviso.modalidad | uppercase}}</small><br><b>SUELDO: </b><small>{{selectedAviso.sueldo}}</small><br>\n              </div>\n            </div>\n            <div class="modal-footer">\n              <button class="btn btn-danger" type="button" (click)="deleteAviso()">Eliminar</button>\n              <button class="btn btn-default" type="button" data-dismiss="modal">Cancelar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class="modal fade" id="avisoParcial" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\n              <h4 class="modal-title" id="myModalLabel"> Aviso Parcial</h4>\n            </div>\n            <div class="modal-body">\n              <div id="bodyavisoparcial" *ngIf="selectedAviso">\n                <div *ngIf="selectedAviso.nombre"><b>EMPLEADOR: </b><small>{{selectedAviso.nombre }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.personal_requerido"><b>SE REQUIERE: </b><small>{{selectedAviso.personal_requerido }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.modalidad"><b>MODALIDAD: </b><small>{{selectedAviso.modalidad }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.sueldo"><b>SUELDO (Bs): </b><small>{{selectedAviso.sueldo}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.pasaje"><b>PASAJE: (Bs/Día): </b><small>{{selectedAviso.pasaje}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.direccion"><b>DIRECCION: </b><small>{{selectedAviso.direccion}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_inicio"><b>DE HORAS: </b><small>{{selectedAviso.hora_inicio}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_final"><b>A HORAS: </b><small>{{selectedAviso.hora_final}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_semanal"><b>SALE FIN SEMANA: </b><small>{{selectedAviso.hora_semanal}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.adultos_casa"><b>ADULTOS: </b><small>{{selectedAviso.adultos_casa}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.ninos_casa"><b>NIÑOS: </b><small>{{selectedAviso.ninos_casa}} </small><br>\n                </div>\n                <div *ngIf="selectedAviso.descripcion_trabajo"><b>TAREAS: </b><small>{{selectedAviso.descripcion_trabajo}}</small><br>\n                </div>\n              </div>\n              <hr/>\n              <div id="bodywhatsappparcial" *ngIf="selectedAviso">\n                <div *ngIf="selectedAviso.nombre"><b>*EMPLEADOR:* </b><small>{{selectedAviso.nombre }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.personal_requerido"><b>*SE REQUIERE:* </b><small>{{selectedAviso.personal_requerido }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.modalidad"><b>*MODALIDAD:* </b><small>{{selectedAviso.modalidad }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.sueldo"><b>*SUELDO (Bs):* </b><small>{{selectedAviso.sueldo}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.pasaje"><b>*PASAJE: (Bs/Día):* </b><small>{{selectedAviso.pasaje}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.direccion"><b>*DIRECCION:* </b><small>{{selectedAviso.direccion}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_inicio"><b>*DE HORAS:* </b><small>{{selectedAviso.hora_inicio}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_final"><b>*A HORAS:* </b><small>{{selectedAviso.hora_final}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_semanal"><b>*SALE FIN SEMANA:* </b><small>{{selectedAviso.hora_semanal}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.adultos_casa"><b>*ADULTOS:* </b><small>{{selectedAviso.adultos_casa}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.ninos_casa"><b>*NIÑOS:* </b><small>{{selectedAviso.ninos_casa}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.descripcion_trabajo"><b>*TAREAS:* </b><small>{{selectedAviso.descripcion_trabajo}}</small><br>\n                </div>\n              </div>\n            </div>\n            <div class="modal-footer">\n              <button class="btn btn-default" type="button" data-dismiss="modal" (click)="resetSelectedAviso()">Cerrar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="avisoCompleto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\n              <h4 class="modal-title" id="myModalLabel">Aviso Completo</h4>\n            </div>\n            <div class="modal-body">\n              <div id="bodyavisocompleto" *ngIf="selectedAviso">\n                <div *ngIf="selectedAviso.nombre"><b>EMPLEADOR: </b><small>{{selectedAviso.nombre }} {{selectedAviso.apellido }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.numero_celular"><b>TELEFONO CELULAR: </b><small>{{selectedAviso.numero_celular}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.direccion"><b>DIRECCION: </b><small>{{selectedAviso.direccion}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.email"><b>EMAIL: </b><small>{{selectedAviso.email}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.ciudad"><b>CIUDAD DE RESIDENCIA ACTUAL: </b><small>{{selectedAviso.ciudad }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.personal_requerido"><b>PERSONAL QUE REQUIERE: </b><small>{{selectedAviso.personal_requerido }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.modalidad"><b>MODALIDAD DE CONTRATACION: </b><small>{{selectedAviso.modalidad }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.sueldo"><b>SUELDO OFERTADO (Bs): </b><small>{{selectedAviso.sueldo}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.pasaje"><b>PASAJE DIARIO: (Bs/Día): </b><small>{{selectedAviso.pasaje}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_inicio"><b>HORA DE INICO DE LA JORNADA DIARIA: </b><small>{{selectedAviso.hora_inicio}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_final"><b>HORA DE FINALIZACION DE LA JORNADA DIARIA: </b><small>{{selectedAviso.hora_final}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.adultos_casa"><b>CUANTOS ADULTOS EN LA CASA: </b><small>{{selectedAviso.adultos_casa}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.ninos_casa"><b>CUANTOS NIÑOS EN LA CASA: </b><small>{{selectedAviso.ninos_casa}} </small><br>\n                </div>\n                <div *ngIf="selectedAviso.descripcion_trabajo"><b>DESCRIPCIÓN GENERAL DEL TRABAJO A REALIZAR: </b><small>{{selectedAviso.descripcion_trabajo}}</small><br>\n                </div>\n              </div>\n              <hr/>\n              <div id="bodywhatsappcompleto" *ngIf="selectedAviso">\n                <div *ngIf="selectedAviso.nombre"><b>*EMPLEADOR:* </b><small>{{selectedAviso.nombre }} {{selectedAviso.apellido }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.numero_celular"><b>*TELEFONO CELULAR:* </b><small>{{selectedAviso.numero_celular}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.direccion"><b>*DIRECCION:* </b><small>{{selectedAviso.direccion}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.email"><b>*EMAIL:* </b><small>{{selectedAviso.email}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.ciudad"><b>*CIUDAD DE RESIDENCIA ACTUAL:* </b><small>{{selectedAviso.ciudad }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.personal_requerido"><b>*PERSONAL QUE REQUIERE:* </b><small>{{selectedAviso.personal_requerido }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.modalidad"><b>*MODALIDAD DE CONTRATACION:* </b><small>{{selectedAviso.modalidad }}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.sueldo"><b>*SUELDO OFERTADO (Bs):* </b><small>{{selectedAviso.sueldo}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.pasaje"><b>*PASAJE DIARIO: (Bs/Día):* </b><small>{{selectedAviso.pasaje}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_inicio"><b>*HORA DE INICO DE LA JORNADA DIARIA:* </b><small>{{selectedAviso.hora_inicio}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.hora_final"><b>*HORA DE FINALIZACION DE LA JORNADA DIARIA:* </b><small>{{selectedAviso.hora_final}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.adultos_casa"><b>*CUANTOS ADULTOS EN LA CASA:* </b><small>{{selectedAviso.adultos_casa}}</small><br>\n                </div>\n                <div *ngIf="selectedAviso.ninos_casa"><b>*CUANTOS NIÑOS EN LA CASA:* </b><small>{{selectedAviso.ninos_casa}} </small><br>\n                </div>\n                <div *ngIf="selectedAviso.descripcion_trabajo"><b>*DESCRIPCIÓN GENERAL DEL TRABAJO A REALIZAR:* </b><small>{{selectedAviso.descripcion_trabajo}}</small><br>\n                </div>\n              </div>\n            </div>\n            <div class="modal-footer">\n              <button class="btn btn-default" type="button" data-dismiss="modal" (click)="resetSelectedAviso()">Cerrar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="exportClientes" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\n              <h4 class="modal-title" id="myModalLabel">Exportar Clientes para Contacto de Google</h4>\n            </div>\n            <div class="modal-body">\n              <form #csvClienteForm="ngForm" (ngSubmit)="getCSV(csvClienteForm)" novalidate>\n                <div class="form-group">\n                  <label>Fecha Inicial de Registro:</label>\n                  <input class="form-control" type="date" name="init_date" ngModel [disabled]="csvAllCheck">\n                </div>\n                <div class="form-group">\n                  <label>Fecha Final de Registro:</label>\n                  <input class="form-control" type="date" name="end_date" ngModel [disabled]="csvAllCheck">\n                </div>\n                <div class="form-group">\n                  <input id="csvCheckCliente" type="checkbox" name="allTrabajadores" ngModel (click)="toggleCSVALLCheck()">\n                  <label for="csvCheckCliente" name="all">Exportar Todos</label>\n                </div>\n                <button class="btn btn-primary" type="submit" [disabled]="checkCSVForm(csvClienteForm)">Exportar</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="editaviso" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <form #editarAvisoForm="ngForm" (ngSubmit)="editarAviso(editarAvisoForm)" novalidate>\n              <div class="modal-header">\n                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\n                <h4 class="modal-title" id="myModalLabel">Editar Aviso</h4>\n              </div>\n              <div class="modal-body" *ngIf="selectedAviso">\n                <div class="container-fluid">\n                  <div class="row">\n                    <div class="col-lg-6">\n                      <div class="form-group">\n                        <label>Nombre:</label>\n                        <input class="form-control" type="text" autocomplete="off" name="nombre" [(ngModel)]="selectedAviso.nombre">\n                      </div>\n                    </div>\n                    <div class="col-lg-6">\n                      <div class="form-group">\n                        <label>Apellido:</label>\n                        <input class="form-control" type="text" autocomplete="off" name="apellido" [(ngModel)]="selectedAviso.apellido">\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="col-lg-6">\n                      <div class="form-group">\n                        <label>Carnet de Identidad:</label>\n                        <input class="form-control" type="number" autocomplete="off" name="ci" [(ngModel)]="selectedAviso.ci">\n                      </div>\n                    </div>\n                    <div class="col-lg-6">\n                      <div class="form-group">\n                        <label>Expedido en:</label>\n                        <select class="form-control" name="ci_exped" [(ngModel)]="selectedAviso.ci_exped">\n                          <option *ngFor="let item of listaCI">{{item}}</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="col-lg-4">\n                      <div class="form-group">\n                        <label>Número Celular</label>\n                        <input class="form-control" type="number" autocomplete="off" name="numero_celular" [(ngModel)]="selectedAviso.numero_celular">\n                      </div>\n                    </div>\n                    <div class="col-lg-8">\n                      <div class="form-group">\n                        <label>Ciudad de Residencia:</label>\n                        <input class="form-control" type="text" autocomplete="off" name="ciudad" [(ngModel)]="selectedAviso.ciudad">\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="col-lg-12">\n                      <div class="form-group">\n                        <label>Dirección:</label>\n                        <input class="form-control" type="text" autocomplete="off" name="direccion" [(ngModel)]="selectedAviso.direccion">\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="col-lg-5">\n                      <div class="from-group">\n                        <label>Personal que Requiere:</label>\n                        <select class="form-control" name="personal_requerido" [(ngModel)]="selectedAviso.personal_requerido">\n                          <option *ngFor="let item of listaIntereses">{{item }}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class="col-lg-4">\n                      <div class="from-group">\n                        <label>Modalidad:</label>\n                        <select class="form-control" name="modalidad" [(ngModel)]="selectedAviso.modalidad">\n                          <option *ngFor="let item of listaModalidades">{{item }}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class="col-lg-3">\n                      <div class="from-group">\n                        <label>Sueldo:</label>\n                        <input class="form-control" type="number" autocomplete="off" name="sueldo" [(ngModel)]="selectedAviso.sueldo">\n                      </div>\n                    </div>\n                  </div><br>\n                  <div class="row">\n                    <div class="col-lg-4">\n                      <div class="from-group">\n                        <label>Pasaje Diario:</label>\n                        <input class="form-control" type="number" autocomplete="off" name="pasaje" [(ngModel)]="selectedAviso.pasaje">\n                      </div>\n                    </div>\n                    <div class="col-lg-4">\n                      <div class="from-group">\n                        <label>Inicio de Jornada :</label>\n                        <input class="form-control" type="text" autocomplete="off" name="hora_inicio" [(ngModel)]="selectedAviso.hora_inicio">\n                      </div>\n                    </div>\n                    <div class="col-lg-4">\n                      <div class="from-group">\n                        <label>Fin de Jornada:</label>\n                        <input class="form-control" type="text" autocomplete="off" name="hora_final" [(ngModel)]="selectedAviso.hora_final">\n                      </div>\n                    </div>\n                  </div><br>\n                  <div class="row">\n                    <div class="col-lg-12">\n                      <div class="form-group">\n                        <label>Dia y hora de salida el fin de semana:</label>\n                        <input class="form-control" type="text" autocomplete="off" name="hora_semanal" [(ngModel)]="selectedAviso.hora_semanal">\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="col-lg-6">\n                      <div class="form-group">\n                        <label>Adulto en Casa:</label>\n                        <input class="form-control" type="number" autocomplete="off" name="adultos_casa" [(ngModel)]="selectedAviso.adultos_casa">\n                      </div>\n                    </div>\n                    <div class="col-lg-6">\n                      <div class="form-group">\n                        <label>Niños en Casa:</label>\n                        <input class="form-control" type="number" autocomplete="off" name="ninos_casa" [(ngModel)]="selectedAviso.ninos_casa">\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="col-lg-12">\n                      <div class="form-group">\n                        <label>Descripción del trabajo a realizar:</label>\n                        <textarea class="form-control" rows="4" autocomplete="off" name="descripcion_trabajo" [(ngModel)]="selectedAviso.descripcion_trabajo"></textarea>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="modal-footer">\n                <button class="btn btn-primary" type="submit">Guardar Cambios</button>\n                <button class="btn btn-default" type="button" data-dismiss="modal" (click)="resetSelectedAviso()">Cancelar</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n<!--ITEM MODALES -->\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\avisos\avisos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AvisosPage);
    return AvisosPage;
}());

//# sourceMappingURL=avisos.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/11/2016.
 */
__export(__webpack_require__(291));
__export(__webpack_require__(287));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/11/2016.
 */
var core_1 = __webpack_require__(0);
var ng2_filter_pipe_1 = __webpack_require__(287);
var Ng2FilterPipeModule = (function () {
    function Ng2FilterPipeModule() {
    }
    return Ng2FilterPipeModule;
}());
Ng2FilterPipeModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [ng2_filter_pipe_1.Ng2FilterPipe],
                exports: [ng2_filter_pipe_1.Ng2FilterPipe]
            },] },
];
/** @nocollapse */
Ng2FilterPipeModule.ctorParameters = function () { return []; };
exports.Ng2FilterPipeModule = Ng2FilterPipeModule;
//# sourceMappingURL=ng2-filter.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'responsive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * Created by vadimdez on 20/01/2017.
 */
__export(__webpack_require__(294));
__export(__webpack_require__(288));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vadimdez on 20/01/2017.
 */
var core_1 = __webpack_require__(0);
var ng2_order_pipe_1 = __webpack_require__(288);
var Ng2OrderModule = (function () {
    function Ng2OrderModule() {
    }
    return Ng2OrderModule;
}());
Ng2OrderModule = __decorate([
    core_1.NgModule({
        declarations: [ng2_order_pipe_1.Ng2OrderPipe],
        exports: [ng2_order_pipe_1.Ng2OrderPipe]
    })
], Ng2OrderModule);
exports.Ng2OrderModule = Ng2OrderModule;
//# sourceMappingURL=ng2-order.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map