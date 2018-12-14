declare interface Item {
  id: number;
  text: string;
  date: string;
  userId: number;
  active: boolean;
}

declare type Action<T = void> = T extends void
  ? () => { type: string }
  : (payload: T) => { type: string; payload: T };

declare type Reducer<S, T = void> = T extends void
  ? (state: S) => S
  : (state: S, payload?: T) => S;

declare interface ItemState {
  updating: number[];
  failed: number[];
}

declare type ItemReducer<T = void> = Reducer<ItemState, T>;

declare interface RequestState {
  openRequests: number;
  errors: string[];
  users: string[];
  items: Item[];
}

declare type RequestReducer<T = void> = Reducer<RequestState, T>;

declare interface TableState {
  name: string;
  direction: string;
  rows: number;
  page: number;
}

declare type TableReducer<T = void> = Reducer<TableState, T>;
