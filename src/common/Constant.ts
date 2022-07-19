import { ethers } from "ethers";
import type { BaseProvider } from "@ethersproject/providers/src.ts/base-provider";

export class PalConstant {
  static TESTNET = class {
    static SPAL: string = "0xcBb944FF163B3B82DEC7D01E33756D1aD3c1Db0a";
    static BUSD: string = "0x4Fe586B21673736518E9f5fABc1f4A6dA15B2e2a";
    static PUBLIC_SALE: string = "0x5a2d42aB5d2AFe692360350B6235ba5406f04674";
  };
  static MAINNET = class {
    static SPAL: string = "0x1bb4e86Bd9E0cC4bCA5B559f07D63fA8D5ac68d1";
    static BUSD: string = "0x7D229E13E7266969Aa53c143996908C4A91744ae";
    static PUBLIC_SALE: string = "0xCC9DEd96B4D53B54Af5dAfE5E20Aa1424863034f";
  };
}

export class PalProvider {
  static TESTNET = class {
    static BSC: BaseProvider = new ethers.providers.JsonRpcProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );
  }

  static MAINNET = class {
    static BSC: BaseProvider = new ethers.providers.JsonRpcProvider(
        "https://bsc-dataseed.binance.org/"
    );
  }
}
