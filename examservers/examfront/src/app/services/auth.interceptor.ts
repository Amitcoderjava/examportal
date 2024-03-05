import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    
    Observable<HttpEvent<any>> {

       // add karege jwt Token ko jo hamara localstorage me he or hm usko request marge ge jab jab koi evant fairup hoga
       let authreq=req;
       const token=this.login.gettoken();
       if(token!=null){
  
        authreq=authreq.clone({
            setHeaders :{Authorization : `Bearer ${token}`}
        });

       }
       return next.handle(authreq);
    }

}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];