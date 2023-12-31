/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPancakeStableSwapDeployer,
  IPancakeStableSwapDeployerInterface,
} from "../../../contracts/interfaces/IPancakeStableSwapDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenC",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_A",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_admin_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_LP",
        type: "address",
      },
    ],
    name: "createSwapPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_A",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_admin_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_LP",
        type: "address",
      },
    ],
    name: "createSwapPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPancakeStableSwapDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): IPancakeStableSwapDeployerInterface {
    return new Interface(_abi) as IPancakeStableSwapDeployerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPancakeStableSwapDeployer {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPancakeStableSwapDeployer;
  }
}
