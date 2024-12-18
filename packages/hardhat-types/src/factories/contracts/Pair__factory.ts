/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Pair, PairInterface } from "../../contracts/Pair";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lp",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lp",
        type: "address",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reserve0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserve1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_lp",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityProvider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reserve0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserve1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_lp",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "priceALast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceBLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenA",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferETH",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080346100cb57601f61096d38819003918201601f19168301916001600160401b038311848410176100d0578084926060946040528339810103126100cb57610047816100e6565b906100606040610059602084016100e6565b92016100e6565b6001600055916001600160a01b0390811691819061007f8415156100fa565b169261008c8415156100fa565b16916100998315156100fa565b60018060a01b031991826001541617600155816002541617600255600354161760035560405161082690816101478239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100cb57565b1561010157565b60405162461bcd60e51b815260206004820152601f60248201527f5a65726f2061646472657373657320617265206e6f7420616c6c6f7765642e006044820152606490fdfe6080604081815260049182361015610022575b505050361561002057600080fd5b005b600090813560e01c9081630902f1ac1461068d575080630e06dfc9146106695780630fc63d10146106405780635673b02d146105795780635b8bec55146105515780635c52a5f21461045f5780635c9d6938146104345780635f64b55b1461040b5780637464fc3d146103ec578063749388c4146102bd5780637b1a490914610226578063b69ef8a81461020b578063ba9a7a56146101e8578063c45a0155146101bb5763e7d3fe6b0361001257346101b8576100de366106d6565b85546001600160a01b0319166001600160a01b0382161786559092670de0b6b3a7640000838102918415858404831417156101a5576020877f8334f87aeaf76e52b061d93ee968e51fdd3ad53ca04e80271249227997aab3a0888861019b898989875161014a81610750565b858152868a82015281898201528260608201526080429101528460055585600655600755600855426009558551938493849192604091949360608401958452602084015260018060a01b0316910152565b0390a15160018152f35b634e487b7160e01b815260118852602490fd5b80fd5b5090346101e457816003193601126101e45760015490516001600160a01b039091168152602090f35b5080fd5b5090346101e457816003193601126101e45760209051670de0b6b3a76400008152f35b5090346101e457816003193601126101e45751478152602090f35b5090346101e457806003193601126101e457818080806001600160a01b0361024c6106bb565b166102588115156107a4565b602435905af1913d156102b3573d9067ffffffffffffffff82116102a05782516020955091610290601f8201601f1916870184610782565b8252843d92013e5b519015158152f35b634e487b7160e01b815260418552602490fd5b5060209250610298565b508290346101b857506102cf366106d6565b90926001600160a01b03808316906102e88215156107a4565b82541603610399576020857f254cba6bcaacd15ef1bba85e06c1d71c8cf7a3e036ad089903ba04bad25aaccc868661019b8761032683600554610743565b61033285600654610743565b61033e86600754610743565b9160085489519061034e82610750565b828252838c830152848b8301526060820152608042910152600555600655600755426009558551938493849192604091949360608401958452602084015260018060a01b0316910152565b608490602086519162461bcd60e51b8352820152602760248201527f4f6e6c79204c7020686f6c646572732063616e2063616c6c20746869732066756044820152663731ba34b7b71760c91b6064820152fd5b5090346101e457816003193601126101e4576020906008549051908152f35b5090346101e457816003193601126101e45760035490516001600160a01b039091168152602090f35b5090346101e457816003193601126101e45760209061045860065460055490610700565b9051908152f35b5091346105255760603660031901126105255761047a6106bb565b6001600160a01b0360243581811693929084900361054d57600286541461053d57602092916044916002885516916104b38315156107a4565b6104be8515156107a4565b868651958694859363095ea7b360e01b8552840152833560248401525af18015610531576104f5575b506001602092555160018152f35b6020813d602011610529575b8161050e60209383610782565b810103126105255751801515036101e457386104e7565b8280fd5b3d9150610501565b505051903d90823e3d90fd5b8451633ee5aeb560e01b81528390fd5b8580fd5b5091346105255782600319360112610525575490516001600160a01b03909116815260209150f35b50346101b85760803660031901126101b857507f298c349c742327269dc8de6ad66687767310c948ea309df826f5bd103e19d207608060209335602435604435606435916105d2816105cd86600554610720565b610743565b6105e2846105cd85600654610720565b6105f2856105cd86600754610720565b916008548a519061060282610750565b828252838d830152848c8301526060820152884291015260055560065560075542600955865193845287840152858301526060820152a15160018152f35b5090346101e457816003193601126101e45760025490516001600160a01b039091168152602090f35b5090346101e457816003193601126101e45760209061045860055460065490610700565b9050823461052557826003193601126105255760609250600554906006546007549284526020840152820152f35b600435906001600160a01b03821682036106d157565b600080fd5b60609060031901126106d15760043590602435906044356001600160a01b03811681036106d15790565b811561070a570490565b634e487b7160e01b600052601260045260246000fd5b9190820180921161072d57565b634e487b7160e01b600052601160045260246000fd5b9190820391821161072d57565b60a0810190811067ffffffffffffffff82111761076c57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761076c57604052565b156107ab57565b60405162461bcd60e51b815260206004820152601f60248201527f5a65726f2061646472657373657320617265206e6f7420616c6c6f7765642e006044820152606490fdfea2646970667358221220da785d7d24e0e4d71e5aed5b5462565a067292acb946969e714bc4ab15c1f34664736f6c63430008180033";

type PairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pair__factory extends ContractFactory {
  constructor(...args: PairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    factory_: PromiseOrValue<string>,
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Pair> {
    return super.deploy(
      factory_,
      token0,
      token1,
      overrides || {}
    ) as Promise<Pair>;
  }
  override getDeployTransaction(
    factory_: PromiseOrValue<string>,
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      factory_,
      token0,
      token1,
      overrides || {}
    );
  }
  override attach(address: string): Pair {
    return super.attach(address) as Pair;
  }
  override connect(signer: Signer): Pair__factory {
    return super.connect(signer) as Pair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PairInterface {
    return new utils.Interface(_abi) as PairInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Pair {
    return new Contract(address, _abi, signerOrProvider) as Pair;
  }
}
