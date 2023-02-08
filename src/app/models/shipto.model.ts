export class ShipTo {

    public shipToId : number;
    public custId : number;
    public shipToName : string;
    public shipToCity : string;
    public shipToState : string;
    public shipToZip : string;   

    constructor(shipToId : number, custId : number, shipToName : string, shipToCity : string, shipToState : string, shipToZip : string){
        this.shipToId = shipToId;
        this.custId = custId;
        this.shipToName = shipToName;
        this.shipToCity = shipToCity;
        this.shipToState = shipToState;
        this.shipToZip = shipToZip;      
    }
}