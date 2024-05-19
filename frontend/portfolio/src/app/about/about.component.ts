import {Component, ElementRef, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { UserProfile } from "../register/register.component";
import { ImageUploadService } from "../common/image.service";
import {ToastService} from "../utils/toast-global/toast-service.service";
import {ToastsContainer} from "../utils/toast-global/toasts-container.component";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { MatDialog, MatDialogClose } from "@angular/material/dialog";
import { MatIcon, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AuthenticationService } from "../auth/authentication.service";


const BACKEND_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
      </svg>`
const FRONTEND_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
      </svg>`

export interface UserAbout {
  title: string;
  description: string;
  photoUrl: string;
  technology: {
    backend: string;
    frontend: string;
  }
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    ToastsContainer,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatIcon,
    MatDialogClose,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  protected userProfile: UserProfile ;
  @ViewChild('closeModal')
  protected closeModal: ElementRef | undefined;
  @ViewChild('successToast')
  protected successToastTemplate: any;

  @ViewChild('dialogContent')
  protected dialogContent: any;

  private toastService = inject(ToastService);


  constructor (
    protected authService: AuthenticationService,
    private iuSvc: ImageUploadService,
    public dialog: MatDialog,
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer
  ) {
    this.userProfile = {} as UserProfile;
    this.authService.userProfile.subscribe(userProfile => {
      if(userProfile) {
        this.userProfile = userProfile;
      }
    });
    iconRegistry.addSvgIconLiteral('backend', sanitizer.bypassSecurityTrustHtml(BACKEND_ICON));
    iconRegistry.addSvgIconLiteral('frontend', sanitizer.bypassSecurityTrustHtml(FRONTEND_ICON));
  }

  ngOnInit(): void { }

  uploadFile (event: any) {
    let file = event.target.files[0];
    if( file.size > 100000) {
      console.log("File is too big for upload");
    } else {
      // TODO set user key something
      this.iuSvc.uploadImage(file, `/profile-avatars/${this.userProfile.id}`).subscribe(
        data => {
          if(data) {
            this.userProfile.aboutUser.photoUrl = data;
            this.authService.updateUser(this.userProfile).subscribe(data => {
              this.showSuccess(this.successToastTemplate);
            });
          }
        }
      )
    }
  }

  submit (ngForm: NgForm) {
    ngForm.form.markAllAsTouched();
    if(ngForm.valid) {
      if(this.closeModal) {
        this.closeModal.nativeElement.click();
      }

      let value = ngForm.value;

      if(!this.userProfile.aboutUser) {
        this.userProfile.aboutUser = {} as UserAbout;
      }

      this.userProfile.aboutUser.description = value.description;
      this.userProfile.aboutUser.title = value.title;
      this.userProfile.aboutUser.technology.backend = value.backend;
      this.userProfile.aboutUser.technology.frontend = value.frontend;
      this.authService.updateUser(this.userProfile).subscribe( data => {
        this.showSuccess(this.successToastTemplate);
      })
    }
  }

  showSuccess(template: TemplateRef<any>) {
    this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.dialogContent, { maxWidth: 900 });
  }
}
