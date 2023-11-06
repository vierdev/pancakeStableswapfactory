/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface LiquidityAmountsTestInterface extends utils.Interface {
  functions: {
    "getAmount0ForLiquidity(uint160,uint160,uint128)": FunctionFragment;
    "getAmount1ForLiquidity(uint160,uint160,uint128)": FunctionFragment;
    "getAmountsForLiquidity(uint160,uint160,uint160,uint128)": FunctionFragment;
    "getGasCostOfGetAmount0ForLiquidity(uint160,uint160,uint128)": FunctionFragment;
    "getGasCostOfGetAmount1ForLiquidity(uint160,uint160,uint128)": FunctionFragment;
    "getGasCostOfGetAmountsForLiquidity(uint160,uint160,uint160,uint128)": FunctionFragment;
    "getGasCostOfGetLiquidityForAmount0(uint160,uint160,uint256)": FunctionFragment;
    "getGasCostOfGetLiquidityForAmount1(uint160,uint160,uint256)": FunctionFragment;
    "getGasCostOfGetLiquidityForAmounts(uint160,uint160,uint160,uint256,uint256)": FunctionFragment;
    "getLiquidityForAmount0(uint160,uint160,uint256)": FunctionFragment;
    "getLiquidityForAmount1(uint160,uint160,uint256)": FunctionFragment;
    "getLiquidityForAmounts(uint160,uint160,uint160,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAmount0ForLiquidity"
      | "getAmount1ForLiquidity"
      | "getAmountsForLiquidity"
      | "getGasCostOfGetAmount0ForLiquidity"
      | "getGasCostOfGetAmount1ForLiquidity"
      | "getGasCostOfGetAmountsForLiquidity"
      | "getGasCostOfGetLiquidityForAmount0"
      | "getGasCostOfGetLiquidityForAmount1"
      | "getGasCostOfGetLiquidityForAmounts"
      | "getLiquidityForAmount0"
      | "getLiquidityForAmount1"
      | "getLiquidityForAmounts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAmount0ForLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmount1ForLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsForLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetAmount0ForLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetAmount1ForLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetAmountsForLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetLiquidityForAmount0",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetLiquidityForAmount1",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetLiquidityForAmounts",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityForAmount0",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityForAmount1",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityForAmounts",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmount0ForLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmount1ForLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsForLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetAmount0ForLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetAmount1ForLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetAmountsForLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetLiquidityForAmount0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetLiquidityForAmount1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetLiquidityForAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityForAmount0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityForAmount1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityForAmounts",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LiquidityAmountsTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidityAmountsTestInterface;

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
    getAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount0: BigNumber }>;

    getAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount1: BigNumber }>;

    getAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    getGasCostOfGetAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { liquidity: BigNumber }>;

    getLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { liquidity: BigNumber }>;

    getLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { liquidity: BigNumber }>;
  };

  getAmount0ForLiquidity(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmount1ForLiquidity(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmountsForLiquidity(
    sqrtRatioX96: PromiseOrValue<BigNumberish>,
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
  >;

  getGasCostOfGetAmount0ForLiquidity(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetAmount1ForLiquidity(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetAmountsForLiquidity(
    sqrtRatioX96: PromiseOrValue<BigNumberish>,
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    liquidity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetLiquidityForAmount0(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    amount0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetLiquidityForAmount1(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    amount1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetLiquidityForAmounts(
    sqrtRatioX96: PromiseOrValue<BigNumberish>,
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    amount0: PromiseOrValue<BigNumberish>,
    amount1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLiquidityForAmount0(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    amount0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLiquidityForAmount1(
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    amount1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLiquidityForAmounts(
    sqrtRatioX96: PromiseOrValue<BigNumberish>,
    sqrtRatioAX96: PromiseOrValue<BigNumberish>,
    sqrtRatioBX96: PromiseOrValue<BigNumberish>,
    amount0: PromiseOrValue<BigNumberish>,
    amount1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    getGasCostOfGetAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetAmount0ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetAmount1ForLiquidity(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetAmountsForLiquidity(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      liquidity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityForAmount0(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityForAmount1(
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityForAmounts(
      sqrtRatioX96: PromiseOrValue<BigNumberish>,
      sqrtRatioAX96: PromiseOrValue<BigNumberish>,
      sqrtRatioBX96: PromiseOrValue<BigNumberish>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}