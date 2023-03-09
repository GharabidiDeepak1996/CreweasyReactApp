
export default class JobScheduleModel{
    constructor({
        TotalDutyCost,TotalDutyLengthinMin,PairingLastSyncDate,ReservationLastSyncDate,IropLastSyncDate,ShowGMTTime,ScheduleList
    }){
        this.TotalDutyCost=TotalDutyCost,
        this.TotalDutyLengthinMin=TotalDutyLengthinMin
        this.PairingLastSyncDate=PairingLastSyncDate
        this.ReservationLastSyncDate=ReservationLastSyncDate
        this.IropLastSyncDate=IropLastSyncDate
        this.ShowGMTTime=ShowGMTTime
        this.ScheduleList=ScheduleList
    }
}
