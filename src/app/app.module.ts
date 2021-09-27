import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { MaxCharPipe } from './shared/pipes.pipe';
import { TaskService } from './shared/task.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SnackBarHelperService } from './shared/snackbar-helper.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { AppConfig } from './app.config';
import { LoaderHelperService } from './_services/loader-helper.service';
import { HomeComponent } from './home';
import { LoginFormComponent } from './login-form';
import { RegistrationFormComponent } from './registration-form';
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormCreateComponent,
    ConfirmDialogComponent,
    FormEditComponent,
    MaxCharPipe,
    SnackBarComponent,
    HomeComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    MatSpinnerOverlayComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
     
  ],
  providers: [
    TaskService,
    SnackBarHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    AppConfig,
    LoaderHelperService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
