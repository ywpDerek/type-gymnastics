// 提交测试
type GetArrRest<T> = T extends []
  ? []
  : T extends [...infer Rest, unknown]
  ? Rest
  : never;
type GetRestValue = GetArrRest<[]>;
