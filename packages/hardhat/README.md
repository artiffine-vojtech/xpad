# PumpFun on EVM

This repository contains initial version of PumpFun implementation for EVM blockchains. 

In essense it implements custom version of UniswapV2; Router, Factory, Pair, and custom ERC20 contracts.

Custom UniswapV2 implementation has artificial bonding curve starting at 1 ETH for new token pairs, which allows no liquidity provisioning. 

The main contract is PumpFun.sol where users can pay a fee in ETH to launch a token with no liquidity.

After deployed token reaches certain MC (currently not enforced by code) it can transition: remove all liqudity and ETH from PumpFun, and deploy it on UniswapV2 — currently it's callable by admin with no requirement for MC reached. 

# PumpFun main Functions

- `function launch()`

    Launches a new token on PumpFun UniswapV2 custom fork, with zero or more liqduity needed, only fee.

- `function swapTokensForETH/swapETHForTokens()`

    Functions for users to trade tokens launched on PumpFun UniswapV2 custom fork. 

- `function deploy()`

    Callable only by te admin, stops trading on PumpFun UniswapV2 custom fork, and moves liqudity to the UniswapV2. 

# Notes on code
- Implements custom version of UniV2
- On launch creates a token, and creates liquidity with totalSupply and part of ETH sent, rest is taken as fee by pumpFun.
- Pairs created have artificial boding curve, k = supply * 1 ETH even if ETH added to liquidity is actually 0
- It keeps track of real and artificial liquidity 
- PumpFun admin gets all trading fees
- There is market cap limit but It’s not enforced
- Admin can stop trading, remove liquidity from pumpFun and deploy UniswapV2 pair in one tx.

# Notes on quality
- Code should be thoroughly tested and evaluated.
- There are some bugs and it could be written more concisely and efficiently, it’s not a great code rn. 
- It lacks access control, some functions should only be callable by PumpFun.sol