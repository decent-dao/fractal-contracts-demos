/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ConnectFourInterface extends utils.Interface {
  functions: {
    "abandonCurrentGame()": FunctionFragment;
    "challenge(address)": FunctionFragment;
    "gameId()": FunctionFragment;
    "getGame(uint256)": FunctionFragment;
    "getGameBoard(uint8)": FunctionFragment;
    "getGameIdFromAddress(address)": FunctionFragment;
    "makeMove(uint256)": FunctionFragment;
    "makeMoveById(uint8,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "abandonCurrentGame"
      | "challenge"
      | "gameId"
      | "getGame"
      | "getGameBoard"
      | "getGameIdFromAddress"
      | "makeMove"
      | "makeMoveById"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "abandonCurrentGame",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "challenge",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "gameId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameBoard",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameIdFromAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "makeMove",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "makeMoveById",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "abandonCurrentGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gameId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGameBoard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameIdFromAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeMove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makeMoveById",
    data: BytesLike
  ): Result;

  events: {
    "GameCreated(uint256,address,address)": EventFragment;
    "GameFinished(uint256,address)": EventFragment;
    "TurnTaken(uint256,address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GameCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TurnTaken"): EventFragment;
}

export interface GameCreatedEventObject {
  gameId: BigNumber;
  teamOne: string;
  teamTwo: string;
}
export type GameCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  GameCreatedEventObject
>;

export type GameCreatedEventFilter = TypedEventFilter<GameCreatedEvent>;

export interface GameFinishedEventObject {
  gameId: BigNumber;
  winner: string;
}
export type GameFinishedEvent = TypedEvent<
  [BigNumber, string],
  GameFinishedEventObject
>;

export type GameFinishedEventFilter = TypedEventFilter<GameFinishedEvent>;

export interface TurnTakenEventObject {
  gameId: BigNumber;
  team: string;
  column: number;
}
export type TurnTakenEvent = TypedEvent<
  [BigNumber, string, number],
  TurnTakenEventObject
>;

export type TurnTakenEventFilter = TypedEventFilter<TurnTakenEvent>;

export interface ConnectFour extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnectFourInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    abandonCurrentGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gameId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        teamOne: string;
        teamTwo: string;
        winner: string;
        turn: number;
      }
    >;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[][]]>;

    getGameIdFromAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    makeMove(
      _columnNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makeMoveById(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  abandonCurrentGame(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  challenge(
    opponent: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gameId(overrides?: CallOverrides): Promise<BigNumber>;

  getGame(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number] & {
      teamOne: string;
      teamTwo: string;
      winner: string;
      turn: number;
    }
  >;

  getGameBoard(
    _gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[][]>;

  getGameIdFromAddress(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  makeMove(
    _columnNumber: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makeMoveById(
    _gameId: PromiseOrValue<BigNumberish>,
    columnIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    abandonCurrentGame(overrides?: CallOverrides): Promise<void>;

    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    gameId(overrides?: CallOverrides): Promise<BigNumber>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        teamOne: string;
        teamTwo: string;
        winner: string;
        turn: number;
      }
    >;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[][]>;

    getGameIdFromAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeMove(
      _columnNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    makeMoveById(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GameCreated(uint256,address,address)"(
      gameId?: null,
      teamOne?: null,
      teamTwo?: null
    ): GameCreatedEventFilter;
    GameCreated(
      gameId?: null,
      teamOne?: null,
      teamTwo?: null
    ): GameCreatedEventFilter;

    "GameFinished(uint256,address)"(
      gameId?: null,
      winner?: null
    ): GameFinishedEventFilter;
    GameFinished(gameId?: null, winner?: null): GameFinishedEventFilter;

    "TurnTaken(uint256,address,uint8)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      team?: null,
      column?: null
    ): TurnTakenEventFilter;
    TurnTaken(
      gameId?: PromiseOrValue<BigNumberish> | null,
      team?: null,
      column?: null
    ): TurnTakenEventFilter;
  };

  estimateGas: {
    abandonCurrentGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gameId(overrides?: CallOverrides): Promise<BigNumber>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameIdFromAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeMove(
      _columnNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makeMoveById(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    abandonCurrentGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    challenge(
      opponent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gameId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGame(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameBoard(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameIdFromAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makeMove(
      _columnNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makeMoveById(
      _gameId: PromiseOrValue<BigNumberish>,
      columnIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
