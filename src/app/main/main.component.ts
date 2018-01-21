// ANGULAR MODULES
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// IMPORTS
import { Product } from '../model/products';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
    myform: FormGroup;
    
    title = 'angularApp';
    model = new Product(['medium', 'large', 'x-large'], 1,'ProductA');
    // model = this.getJSON();
    // model = new Product(this.value.options, this.value.id, this.value.name);

    constructor(private http: Http, formBuilder: FormBuilder) { 
    }

    ngOnInit() { 
        this.myform = new FormGroup ({
            options: new FormControl({value: '', disabled: false}, Validators.required),
            id: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required)
        });
        
        console.log('this.model');
        console.log(this.model);
    }

    getJSON(): Observable<any> {
        var jsonFile = this.http
                        .get("../data/data.json")
                        .map((res:any) => res.json());

        return jsonFile
    }

}