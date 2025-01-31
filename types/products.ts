



export interface Product {
      _id: string;
        title: string;
        _type: "product";
        productImage?: string; // Direct URL of the image
        tags: string[];        // Array of tags
        price: number;         // Product price
        description: string;   // Product description
      

}