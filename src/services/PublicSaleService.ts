import {BigNumber, Contract, ethers} from "ethers";
import {PalConstant, PalProvider} from "@/common/Constant";
import publicSaleAbi from "@/abi/PublicSale.json";
import type {Signer} from "vue-dapp";

export interface Round {
    totalRaised_: string;
    pricePerToken_: string;
    totalAllocation_: string;
    maxAllocation_: string;
    minAllocation_: string;
    startDate_: string;
    endDate_: string;
    vestingLength_: string;
    vestingPercentOfFirst_: string;
}

export class PublicSaleService {
    private contract: Contract;

    constructor(signer: Signer | null) {
        let providerOrSigner = signer ? signer : PalProvider.TESTNET.BSC;
        this.contract = new ethers.Contract(
            PalConstant.TESTNET.PUBLIC_SALE,
            publicSaleAbi,
            providerOrSigner
        );
    }

    public getId(): Promise<BigNumber> {
        return this.contract.getCurrentRound();
    }

    public getRound(id: number): Promise<Round> {
        return this.contract.getRound(id);
    }
}
