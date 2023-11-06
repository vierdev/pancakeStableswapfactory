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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace TestMulticall {
  export type TupleStruct = {
    a: PromiseOrValue<BigNumberish>;
    b: PromiseOrValue<BigNumberish>;
  };

  export type TupleStructOutput = [BigNumber, BigNumber] & {
    a: BigNumber;
    b: BigNumber;
  };
}

export interface TestMulticallInterface extends utils.Interface {
  functions: {
    "functionThatReturnsTuple(uint256,uint256)": FunctionFragment;
    "functionThatRevertsWithError(string)": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "paid()": FunctionFragment;
    "pays()": FunctionFragment;
    "returnSender()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "functionThatReturnsTuple"
      | "functionThatRevertsWithError"
      | "multicall"
      | "paid"
      | "pays"
      | "returnSender"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "functionThatReturnsTuple",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "functionThatRevertsWithError",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: "paid", values?: undefined): string;
  encodeFunctionData(functionFragment: "pays", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "returnSender",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "functionThatReturnsTuple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "functionThatRevertsWithError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pays", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnSender",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestMulticall extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestMulticallInterface;

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
    functionThatReturnsTuple(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [TestMulticall.TupleStructOutput] & {
        tuple: TestMulticall.TupleStructOutput;
      }
    >;

    functionThatRevertsWithError(
      error: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paid(overrides?: CallOverrides): Promise<[BigNumber]>;

    pays(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnSender(overrides?: CallOverrides): Promise<[string]>;
  };

  functionThatReturnsTuple(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<TestMulticall.TupleStructOutput>;

  functionThatRevertsWithError(
    error: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<void>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paid(overrides?: CallOverrides): Promise<BigNumber>;

  pays(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnSender(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    functionThatReturnsTuple(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<TestMulticall.TupleStructOutput>;

    functionThatRevertsWithError(
      error: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    paid(overrides?: CallOverrides): Promise<BigNumber>;

    pays(overrides?: CallOverrides): Promise<void>;

    returnSender(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    functionThatReturnsTuple(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    functionThatRevertsWithError(
      error: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paid(overrides?: CallOverrides): Promise<BigNumber>;

    pays(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnSender(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    functionThatReturnsTuple(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    functionThatRevertsWithError(
      error: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pays(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}