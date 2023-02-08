import { ShipTo } from "./shipto.model";

export class Customer {

    public custId : number;
    public custName : string;
    public custAddr : string;
    public custCity : string;
    public custState : string;
    public custZip : string;
    public custCountry : string;
    public termsId : number;
    public creditLimit : number;
    public shipTo : ShipTo;

    constructor(custId : number, custName : string, custAddr : string, custCity : string, custState : string, custZip : string, custCountry : 
        string, termsId : number, creditLimit : number, shipTo : ShipTo){
        this.custId = custId;
        this.custName = custName;
        this.custAddr = custAddr;
        this.custCity = custCity;
        this.custState = custState;
        this.custZip = custZip;
        this.custCountry = custCountry;
        this.termsId = termsId;
        this.creditLimit = creditLimit;
        this.shipTo = shipTo;
    }

}
