import bn from 'bignumber.js'
import { Contract, ContractFactory, utils, BigNumber } from 'ethers'
import { ethers, waffle } from 'hardhat'

const WBNB = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd' // BSC TESTNET

type ContractJson = { abi: any; bytecode: string }
const artifacts: { [name: string]: ContractJson } = {
  // eslint-disable-next-line global-require
  PancakeStableswapfactory: require('../artifacts/contracts/PancakeStableSwapFactory.sol/PancakeStableSwapFactory.json'),
  IPancakeStableSwapLPFactory: require('../artifacts/contracts/interfaces/IPancakeStableSwapLPFactory.sol/IPancakeStableSwapLPFactory.json'),
  IPancakeStableSwapDeployer: require('../artifacts/contracts/interfaces/IPancakeStableSwapDeployer.sol/IPancakeStableSwapDeployer.json'),
}

async function main() {
  const [owner] = await ethers.getSigners()
  const provider = waffle.provider
  console.log('owner', owner.address)

  // console.log("abi: ", artifacts.PancakeStableswapFactory);

  const IPancakeStableSwapLPFactory = new ContractFactory(
    artifacts.IPancakeStableSwapLPFactory.abi,
    artifacts.IPancakeStableSwapLPFactory.bytecode,
    owner
  )

  const IPancakeStableSwapLPFactoryDeploy = await IPancakeStableSwapLPFactory.deploy()

  console.log('IPancakeStableSwapLPFactory: ', IPancakeStableSwapLPFactoryDeploy.address)

  const IPancakeStableSwapDeployer = new ContractFactory(
    artifacts.IPancakeStableSwapDeployer.abi,
    artifacts.IPancakeStableSwapDeployer.bytecode,
    owner
  )

  const IPancakeStableSwapDeploy = await IPancakeStableSwapDeployer.deploy()

  console.log('IPancakeStableSwapDeployer: ', IPancakeStableSwapDeploy.address)

  const PancakeStableSwapFactory = new ContractFactory(
    artifacts.PancakeStableswapfactory.abi,
    artifacts.PancakeStableswapfactory.bytecode,
    owner
  )
  const pancakeStableswapfactory = await PancakeStableSwapFactory.deploy(
    IPancakeStableSwapLPFactoryDeploy.address,
    IPancakeStableSwapDeploy.address,
    IPancakeStableSwapDeploy.address
  )
  console.log('PancakeStableswapfactory', pancakeStableswapfactory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
