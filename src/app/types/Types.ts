export declare interface HistoryType{
  id: number,
  input:string,
  output : Output
}

export declare interface Output{
  probability: number,
  category : string,
  catCode: number
}
