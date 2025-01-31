
import { ReactNode } from 'react';

export interface Product {
    productName: ReactNode | Iterable<ReactNode>;

    _id : string;
    title: string;
    type: "product";
    image? : {

        asset : {

            _raf : string;
            type : "image";
            
        }
    };
    price : number;
    description: string;
    


}
