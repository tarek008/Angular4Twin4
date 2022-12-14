import { Component, Injectable, OnInit } from '@angular/core';
import { etudiants } from '../../../../../src/app/core/model/etudiants';
import { EtudiantService } from '../../../../../src/app/core/services/etudiant.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-etudiant',
  templateUrl: './nav-etudiant.component.html',
  styleUrls: ['./nav-etudiant.component.css']
})

export class NavEtudiantComponent implements OnInit {
  public filtredlist: etudiants[];
  critereage: number;
  form: FormGroup;
  constructor(private etudiantService: EtudiantService, private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['', [Validators.required, Validators.maxLength(2)]],
      photo: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  submitcritere() {

  }





}