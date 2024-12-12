# XPad CrossFi Memecoin Launchpad

This repository contains initial version of XPad implementation for EVM blockchains.

In essense it implements custom version of UniswapV2; Router, Factory, Pair, and custom ERC20 contracts.

Custom UniswapV2 implementation has artificial bonding curve starting at 1 XFI for new token pairs, which allows no liquidity provisioning.

The main contract is XPad.sol where users can pay a fee in XFI to launch a token with no liquidity.

After deployed token reaches certain MC (currently not enforced by code) it can transition: remove all liqudity and XFI from XPAD, and deploy it on UniswapV2 — currently it's callable by admin with no requirement for MC reached.

## Table of Contents

1. [Contracts Overview](#contracts-overview)
2. [Setup Instructions](#setup-instructions)
3. [Deployment Process](#deployment-process)
4. [Usage](#usage)
5. [Troubleshooting](#troubleshooting)

## Contracts Overview

### **Factory.sol**

The `Factory` contract is responsible for creating and managing liquidity pairs. It sets the `feeTo` address, which is where fees from transactions are sent.

- **Key Functions:**
  - `createPair`: Creates a new trading pair for two tokens.
  - `setFeeTo`: Updates the fee recipient address.

### **Router.sol**

The `Router` contract handles the logic for swapping tokens, adding/removing liquidity, and other interactions with the pairs managed by the `Factory`.

- **Key Functions:**
  - `addLiquidity`: Adds liquidity to a pair.
  - `removeLiquidity`: Removes liquidity from a pair.
  - `swapExactTokensForTokens`: Executes a token swap.

### **Pair.sol**

The `Pair` contract is the core liquidity pool implementation. It keeps track of reserves and calculates prices based on the constant product formula.

- **Key Functions:**
  - `mint`: Mints liquidity tokens.
  - `burn`: Burns liquidity tokens and returns the underlying assets.

### **ERC20.sol**

A standard ERC-20 implementation used for the tokens within the ecosystem.

- **Key Functions:**
  - `transfer`: Transfers tokens from one address to another.
  - `approve`: Approves another address to spend tokens.

### **XPad.sol**

A utility contract that interacts with the `Factory` and `Router` to introduce additional functionality, such as incentivized trading or liquidity boosts.

# XPad main Functions

- `function launch()`

  Launches a new token on XPad UniswapV2 custom fork, with zero or more liqduity needed, only fee.

- `function swapTokensForETH/swapETHForTokens()`

  Functions for users to trade tokens launched on XPad UniswapV2 custom fork.

- `function deploy()`

  Callable only by te admin, stops trading on XPad UniswapV2 custom fork, and moves liqudity to the UniswapV2.

# Notes on code

- Implements custom version of UniV2
- On launch creates a token, and creates liquidity with totalSupply and part of XFI sent, rest is taken as fee by xpad.
- Pairs created have artificial boding curve, k = supply \* 1 XFI even if XFI added to liquidity is actually 0
- It keeps track of real and artificial liquidity
- XPad admin gets all trading fees
- There is market cap limit but It’s not enforced
- Admin can stop trading, remove liquidity from xpad and deploy UniswapV2 pair in one tx.

# Future development of the code

- Code should be thoroughly tested and evaluated.
- There are some bugs and it could be written more concisely and efficiently.
- Add more configurability over the bonding curve and liquidity deployment.
- Use CrossFi native Dex instead of the custom Uniswap implementation.
- It lacks access control, some functions should only be callable by XPad.sol
