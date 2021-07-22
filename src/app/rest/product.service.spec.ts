import { TestBed } from "@angular/core/testing";
import { ProductService } from "./product.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { IProduct } from "../interfaces/iproduct";
import { environment } from "src/environments/environment";

describe('ProductService', () => {
    
    let productService: ProductService;
    let testController : HttpTestingController;
    let productosDummy : IProduct[];
    
    beforeEach(() => { 
        TestBed.configureTestingModule({ 
            imports: [ 
                HttpClientTestingModule,
            ],
            providers: [
                ProductService,
            ] 
        });
        productService = TestBed.inject(ProductService);
        testController = TestBed.inject(HttpTestingController);
        productosDummy = [
            {
                id: 1,
                name: "PS5",
                description: "Descripcion de PS5"
            }
        ]
    });

    afterEach(() => {
        testController.verify();
    });

    it('getProducts debe devolver data', () => {
        let productos : IProduct[] = [];
        productService.getProducts().subscribe( response => { 
            productos = response;
        });

        const req = testController.expectOne({
            method: "GET",
            url: environment.backendUrl + "products"
        });
        req.flush(productosDummy);
        expect(productos).toEqual(productosDummy);
    });
  
  });