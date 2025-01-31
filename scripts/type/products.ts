
export interface Product {
    productName: ReactI18NextChildren | Iterable<ReactI18NextChildren>;

    _id : string;
    title: string,
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
