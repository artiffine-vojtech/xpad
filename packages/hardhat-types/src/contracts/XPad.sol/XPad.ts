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
  PayableOverrides,
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
} from "../../common";

export declare namespace XPad {
  export type DataStruct = {
    token: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    ticker: PromiseOrValue<string>;
    supply: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    marketCap: PromiseOrValue<BigNumberish>;
    liquidity: PromiseOrValue<BigNumberish>;
    _liquidity: PromiseOrValue<BigNumberish>;
    volume: PromiseOrValue<BigNumberish>;
    volume24H: PromiseOrValue<BigNumberish>;
    prevPrice: PromiseOrValue<BigNumberish>;
    lastUpdated: PromiseOrValue<BigNumberish>;
  };

  export type DataStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    token: string;
    name: string;
    ticker: string;
    supply: BigNumber;
    price: BigNumber;
    marketCap: BigNumber;
    liquidity: BigNumber;
    _liquidity: BigNumber;
    volume: BigNumber;
    volume24H: BigNumber;
    prevPrice: BigNumber;
    lastUpdated: BigNumber;
  };

  export type TokenStruct = {
    creator: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    pair: PromiseOrValue<string>;
    data: XPad.DataStruct;
    description: PromiseOrValue<string>;
    image: PromiseOrValue<string>;
    twitter: PromiseOrValue<string>;
    telegram: PromiseOrValue<string>;
    youtube: PromiseOrValue<string>;
    website: PromiseOrValue<string>;
    trading: PromiseOrValue<boolean>;
    tradingOnUniswap: PromiseOrValue<boolean>;
  };

  export type TokenStructOutput = [
    string,
    string,
    string,
    XPad.DataStructOutput,
    string,
    string,
    string,
    string,
    string,
    string,
    boolean,
    boolean
  ] & {
    creator: string;
    token: string;
    pair: string;
    data: XPad.DataStructOutput;
    description: string;
    image: string;
    twitter: string;
    telegram: string;
    youtube: string;
    website: string;
    trading: boolean;
    tradingOnUniswap: boolean;
  };
}

export interface XPadInterface extends utils.Interface {
  functions: {
    "approval(address,address,uint256)": FunctionFragment;
    "deploy(address)": FunctionFragment;
    "feeTo()": FunctionFragment;
    "feeToSetter()": FunctionFragment;
    "getTokens()": FunctionFragment;
    "getUserTokens()": FunctionFragment;
    "launch(string,string,string,string,string[4],uint256,uint256)": FunctionFragment;
    "launchFee()": FunctionFragment;
    "liquidityFee()": FunctionFragment;
    "marketCapLimit()": FunctionFragment;
    "profile(address)": FunctionFragment;
    "profiles(uint256)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "swapETHForTokens(address,address,address)": FunctionFragment;
    "swapTokensForETH(uint256,address,address,address)": FunctionFragment;
    "token(address)": FunctionFragment;
    "tokens(uint256)": FunctionFragment;
    "updateLaunchFee(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approval"
      | "deploy"
      | "feeTo"
      | "feeToSetter"
      | "getTokens"
      | "getUserTokens"
      | "launch"
      | "launchFee"
      | "liquidityFee"
      | "marketCapLimit"
      | "profile"
      | "profiles"
      | "setFeeTo"
      | "swapETHForTokens"
      | "swapTokensForETH"
      | "token"
      | "tokens"
      | "updateLaunchFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeToSetter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTokens", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getUserTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "launch",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
      ],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "launchFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidityFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketCapLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "profile",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "profiles",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapETHForTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForETH",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "token",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLaunchFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "approval", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeToSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "launch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "launchFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketCapLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "profile", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "profiles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateLaunchFee",
    data: BytesLike
  ): Result;

  events: {
    "Deployed(address,uint256,uint256)": EventFragment;
    "Launched(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Launched"): EventFragment;
}

export interface DeployedEventObject {
  token: string;
  amount0: BigNumber;
  amount1: BigNumber;
}
export type DeployedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DeployedEventObject
>;

export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;

export interface LaunchedEventObject {
  token: string;
  pair: string;
  arg2: BigNumber;
}
export type LaunchedEvent = TypedEvent<
  [string, string, BigNumber],
  LaunchedEventObject
>;

export type LaunchedEventFilter = TypedEventFilter<LaunchedEvent>;

export interface XPad extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: XPadInterface;

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
    approval(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deploy(
      tk: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    feeToSetter(overrides?: CallOverrides): Promise<[string]>;

    getTokens(overrides?: CallOverrides): Promise<[XPad.TokenStructOutput[]]>;

    getUserTokens(
      overrides?: CallOverrides
    ): Promise<[XPad.TokenStructOutput[]]>;

    launch(
      _name: PromiseOrValue<string>,
      _ticker: PromiseOrValue<string>,
      desc: PromiseOrValue<string>,
      img: PromiseOrValue<string>,
      urls: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
      ],
      _supply: PromiseOrValue<BigNumberish>,
      maxTx: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    launchFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidityFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    marketCapLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    profile(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { user: string }>;

    profiles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { user: string }>;

    setFeeTo(
      fee_to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapETHForTokens(
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokensForETH(
      amountIn: PromiseOrValue<BigNumberish>,
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        XPad.DataStructOutput,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        boolean
      ] & {
        creator: string;
        token: string;
        pair: string;
        data: XPad.DataStructOutput;
        description: string;
        image: string;
        twitter: string;
        telegram: string;
        youtube: string;
        website: string;
        trading: boolean;
        tradingOnUniswap: boolean;
      }
    >;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        XPad.DataStructOutput,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        boolean
      ] & {
        creator: string;
        token: string;
        pair: string;
        data: XPad.DataStructOutput;
        description: string;
        image: string;
        twitter: string;
        telegram: string;
        youtube: string;
        website: string;
        trading: boolean;
        tradingOnUniswap: boolean;
      }
    >;

    updateLaunchFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approval(
    _user: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deploy(
    tk: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  feeToSetter(overrides?: CallOverrides): Promise<string>;

  getTokens(overrides?: CallOverrides): Promise<XPad.TokenStructOutput[]>;

  getUserTokens(overrides?: CallOverrides): Promise<XPad.TokenStructOutput[]>;

  launch(
    _name: PromiseOrValue<string>,
    _ticker: PromiseOrValue<string>,
    desc: PromiseOrValue<string>,
    img: PromiseOrValue<string>,
    urls: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ],
    _supply: PromiseOrValue<BigNumberish>,
    maxTx: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  launchFee(overrides?: CallOverrides): Promise<BigNumber>;

  liquidityFee(overrides?: CallOverrides): Promise<BigNumber>;

  marketCapLimit(overrides?: CallOverrides): Promise<BigNumber>;

  profile(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  profiles(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  setFeeTo(
    fee_to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapETHForTokens(
    tk: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    referree: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokensForETH(
    amountIn: PromiseOrValue<BigNumberish>,
    tk: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    referree: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      XPad.DataStructOutput,
      string,
      string,
      string,
      string,
      string,
      string,
      boolean,
      boolean
    ] & {
      creator: string;
      token: string;
      pair: string;
      data: XPad.DataStructOutput;
      description: string;
      image: string;
      twitter: string;
      telegram: string;
      youtube: string;
      website: string;
      trading: boolean;
      tradingOnUniswap: boolean;
    }
  >;

  tokens(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      XPad.DataStructOutput,
      string,
      string,
      string,
      string,
      string,
      string,
      boolean,
      boolean
    ] & {
      creator: string;
      token: string;
      pair: string;
      data: XPad.DataStructOutput;
      description: string;
      image: string;
      twitter: string;
      telegram: string;
      youtube: string;
      website: string;
      trading: boolean;
      tradingOnUniswap: boolean;
    }
  >;

  updateLaunchFee(
    _fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approval(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deploy(
      tk: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    feeToSetter(overrides?: CallOverrides): Promise<string>;

    getTokens(overrides?: CallOverrides): Promise<XPad.TokenStructOutput[]>;

    getUserTokens(overrides?: CallOverrides): Promise<XPad.TokenStructOutput[]>;

    launch(
      _name: PromiseOrValue<string>,
      _ticker: PromiseOrValue<string>,
      desc: PromiseOrValue<string>,
      img: PromiseOrValue<string>,
      urls: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
      ],
      _supply: PromiseOrValue<BigNumberish>,
      maxTx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber]>;

    launchFee(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityFee(overrides?: CallOverrides): Promise<BigNumber>;

    marketCapLimit(overrides?: CallOverrides): Promise<BigNumber>;

    profile(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    profiles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    setFeeTo(
      fee_to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapETHForTokens(
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swapTokensForETH(
      amountIn: PromiseOrValue<BigNumberish>,
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    token(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        XPad.DataStructOutput,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        boolean
      ] & {
        creator: string;
        token: string;
        pair: string;
        data: XPad.DataStructOutput;
        description: string;
        image: string;
        twitter: string;
        telegram: string;
        youtube: string;
        website: string;
        trading: boolean;
        tradingOnUniswap: boolean;
      }
    >;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        XPad.DataStructOutput,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        boolean
      ] & {
        creator: string;
        token: string;
        pair: string;
        data: XPad.DataStructOutput;
        description: string;
        image: string;
        twitter: string;
        telegram: string;
        youtube: string;
        website: string;
        trading: boolean;
        tradingOnUniswap: boolean;
      }
    >;

    updateLaunchFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Deployed(address,uint256,uint256)"(
      token?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null
    ): DeployedEventFilter;
    Deployed(
      token?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null
    ): DeployedEventFilter;

    "Launched(address,address,uint256)"(
      token?: PromiseOrValue<string> | null,
      pair?: PromiseOrValue<string> | null,
      arg2?: null
    ): LaunchedEventFilter;
    Launched(
      token?: PromiseOrValue<string> | null,
      pair?: PromiseOrValue<string> | null,
      arg2?: null
    ): LaunchedEventFilter;
  };

  estimateGas: {
    approval(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deploy(
      tk: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    feeToSetter(overrides?: CallOverrides): Promise<BigNumber>;

    getTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getUserTokens(overrides?: CallOverrides): Promise<BigNumber>;

    launch(
      _name: PromiseOrValue<string>,
      _ticker: PromiseOrValue<string>,
      desc: PromiseOrValue<string>,
      img: PromiseOrValue<string>,
      urls: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
      ],
      _supply: PromiseOrValue<BigNumberish>,
      maxTx: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    launchFee(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityFee(overrides?: CallOverrides): Promise<BigNumber>;

    marketCapLimit(overrides?: CallOverrides): Promise<BigNumber>;

    profile(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    profiles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeeTo(
      fee_to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapETHForTokens(
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokensForETH(
      amountIn: PromiseOrValue<BigNumberish>,
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLaunchFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approval(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deploy(
      tk: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    launch(
      _name: PromiseOrValue<string>,
      _ticker: PromiseOrValue<string>,
      desc: PromiseOrValue<string>,
      img: PromiseOrValue<string>,
      urls: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
      ],
      _supply: PromiseOrValue<BigNumberish>,
      maxTx: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    launchFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidityFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketCapLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    profile(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    profiles(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      fee_to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapETHForTokens(
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForETH(
      amountIn: PromiseOrValue<BigNumberish>,
      tk: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      referree: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateLaunchFee(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
