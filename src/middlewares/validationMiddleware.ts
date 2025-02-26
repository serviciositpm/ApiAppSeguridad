import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { HttpResponse } from '../utils/httpResponse';

import { PUBLIC_KEY } from '../environments/env';
import { CodesHttpEnum } from '../enums/codesHttpsEnums';


export const validatioToken = (req: Request,res:Response,nxt: NextFunction) =>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return HttpResponse.fail(res,CodesHttpEnum.forbidden,null, 'Debe Enviar un Token');
        }
        if(Array.isArray(token)){
            return HttpResponse.fail(res,CodesHttpEnum.forbidden,null, 'Debe Enviar un Formato de Token Valido');
        }
        let tokenModificado = token.split(' ')[1];
        let decoded = jwt.verify(tokenModificado, PUBLIC_KEY);
        nxt();

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Server Error'});
    }
    
}