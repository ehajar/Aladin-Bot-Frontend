export declare interface HistoryType {
  id: number,
  input: string,
  output: Output,
  state: string,
  lang: string
}

export declare interface Output {
  probability: number,
  category: string,
  catCode: number
}
