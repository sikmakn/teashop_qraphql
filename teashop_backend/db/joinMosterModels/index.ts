import ProductType from './ProductType';
import ProductSubType from "./ProductSubType";
import File from './FileLink';
import Product from "./Product";
import Order from './Order';
import ProductOrder from './ProductOrder';
import Client from "./Client";

const model = {
    ...ProductType,
    ...ProductSubType,
    ...ProductOrder,
    ...File,
    ...Product,
    ...Order,
    ...Client,
};

export default model;