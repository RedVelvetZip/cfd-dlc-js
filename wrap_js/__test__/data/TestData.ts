import * as CfdUtils from "../../cfd_utils";

export const OraclePrivkey =
  "ded9a76a0a77399e1c2676324118a0386004633f16245ad30d172b15c1f9e2d3";
export const OraclePubkey = CfdUtils.GetSchnorrPubkeyFromPrivkey(
  OraclePrivkey
);
export const OracleKValue =
  "be3cc8de25c50e25f69e2f88d151e3f63e99c3a44fed2bdd2e3ee70fe141c5c3";
export const OracleRPoint = CfdUtils.GetSchnorrPubkeyFromPrivkey(OracleKValue);
export const LocalFundPrivkey =
  "0000000000000000000000000000000000000000000000000000000000000001";
export const LocalFundPubkey = CfdUtils.GetPubkeyFromPrivkey(LocalFundPrivkey);
export const RemoteFundPrivkey =
  "0000000000000000000000000000000000000000000000000000000000000002";
export const RemoteFundPubkey = CfdUtils.GetPubkeyFromPrivkey(
  RemoteFundPrivkey
);
export const LocalSweepPrivkey =
  "0000000000000000000000000000000000000000000000000000000000000003";
export const LocalSweepPubkey = CfdUtils.GetPubkeyFromPrivkey(
  LocalSweepPrivkey
);
export const RemoteSweepPrivkey =
  "0000000000000000000000000000000000000000000000000000000000000004";
export const RemoteSweepPubkey = CfdUtils.GetPubkeyFromPrivkey(
  RemoteSweepPrivkey
);
export const LocalInputPrivkey =
  "0000000000000000000000000000000000000000000000000000000000000005";
export const LocalInputPubkey = CfdUtils.GetPubkeyFromPrivkey(
  LocalInputPrivkey
);
export const RemoteInputPrivkey =
  "0000000000000000000000000000000000000000000000000000000000000006";
export const RemoteInputPubkey = CfdUtils.GetPubkeyFromPrivkey(
  RemoteInputPrivkey
);
export const LocalInputAmount = 5000000000;
export const RemoteInputAmount = 5000000000;
export const LocalCollateralAmount = 100000000;
export const RemoteCollateralAmount = 100000000;
export const FundInputAmount = 200000170;
export const WinAmount = 199900000;
export const LoseAmount = 100000;
export const Payouts = [
  {
    local: WinAmount,
    remote: LoseAmount,
  },
  {
    local: LoseAmount,
    remote: WinAmount,
  },
];
export const WinMessage = "WIN";
export const LoseMessage = "LOSE";
export const OracleSignature = CfdUtils.SchnorrSign(
  WinMessage,
  OraclePrivkey,
  OracleKValue,
  false,
  true
);
export const Messages = [WinMessage, LoseMessage];
export const LocalInputs = [
  {
    txid: "83266d6b22a9babf6ee469b88fd0d3a0c690525f7c903aff22ec8ee44214604f",
    vout: 0,
  },
];
export const RemoteInputs = [
  {
    txid: "bc92a22f07ef23c53af343397874b59f5f8c0eb37753af1d1a159a2177d4bb98",
    vout: 0,
  },
];
export const LocalChangeAddress =
  "bcrt1qlgmznucxpdkp5k3ktsct7eh6qrc4tju7ktjukn";
export const RemoteChangeAddress =
  "bcrt1qvh2dvgjctwh4z5w7sc93u7h4sug0yrdz2lgpqf";
export const LocalFinalAddress =
  "bcrt1qthklh702txwafc72d2qtxv7ywt7sk0mfv7esk7";
export const RemoteFinalAddress =
  "bcrt1qjefds6ld7sadyepk9ehxawnwkaj9pqf8wnz54j";
export const MaturityTime = 1579072156;
export const FundTxId =
  "c371cfe829d31c1d18f6f638047d44e5e2617d659ebdd43b83b04da32e864692";
export const CetTxId =
  "453a36e55bb2576387e86377d07e02e4c7ed1ca0e12090a4fb61d0d87f2b1ed8";

export const FundTxHexUnsigned =
  "02000000024f601442e48eec22ff3a907c5f5290c6a0d3d08fb869e46ebfbaa9226b6d26830000000000ffffffff98bbd477219a151a1daf5377b30e8c5f9fb574783943f33ac523ef072fa292bc0000000000ffffffff03aac2eb0b000000002200209b984c7bae3efddc3a3f0a20ff81bfe89ed1fe07ff13e562149ee654bed845db2d10102401000000160014fa3629f3060b6c1a5a365c30bf66fa00f155cb9e2d1010240100000016001465d4d622585baf5151de860b1e7af58710f20da200000000";
export const FundTxHexLocalSigned =
  "020000000001024f601442e48eec22ff3a907c5f5290c6a0d3d08fb869e46ebfbaa9226b6d26830000000000ffffffff98bbd477219a151a1daf5377b30e8c5f9fb574783943f33ac523ef072fa292bc0000000000ffffffff03aac2eb0b000000002200209b984c7bae3efddc3a3f0a20ff81bfe89ed1fe07ff13e562149ee654bed845db2d10102401000000160014fa3629f3060b6c1a5a365c30bf66fa00f155cb9e2d1010240100000016001465d4d622585baf5151de860b1e7af58710f20da20247304402206d7181ec4d126c5e6bbf5ae65ee0297610f4f0d28a03ba6d782e651b136a6bd502200458622a92e2df148f90df85a2ebc402dd3aef43a10821c16e8739426ba808a00121022f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe40000000000";
export const FundTxLocalRawSignature =
  "6d7181ec4d126c5e6bbf5ae65ee0297610f4f0d28a03ba6d782e651b136a6bd50458622a92e2df148f90df85a2ebc402dd3aef43a10821c16e8739426ba808a0";
export const FundTxWithPremium =
  "02000000024f601442e48eec22ff3a907c5f5290c6a0d3d08fb869e46ebfbaa9226b6d26830000000000ffffffff98bbd477219a151a1daf5377b30e8c5f9fb574783943f33ac523ef072fa292bc0000000000ffffffff04aac2eb0b000000002200209b984c7bae3efddc3a3f0a20ff81bfe89ed1fe07ff13e562149ee654bed845db6e890e2401000000160014fa3629f3060b6c1a5a365c30bf66fa00f155cb9e2d1010240100000016001465d4d622585baf5151de860b1e7af58710f20da2a0860100000000001600143104041af39ddcb0976f9ab6522001f096afe2ce00000000";
export const CetHexUnsigned =
  "02000000019246862ea34db0833bd4bd9e657d61e2e5447d0438f6f6181d1cd329e8cf71c30000000000ffffffff02603bea0b000000001600145dedfbf9ea599dd4e3ca6a80b333c472fd0b3f69a0860100000000001600149652d86bedf43ad264362e6e6eba6eb76450812700000000";
export const CetHexSigned =
  "020000000001019246862ea34db0833bd4bd9e657d61e2e5447d0438f6f6181d1cd329e8cf71c30000000000ffffffff02603bea0b000000001600145dedfbf9ea599dd4e3ca6a80b333c472fd0b3f69a0860100000000001600149652d86bedf43ad264362e6e6eba6eb7645081270400483045022100b0a0876530b9e844d520cf115d415211ec389242ce50bc61103581b8f91dc92d02203410d2f2b24fce882cdf3ee6d082439ca7824dfb60741727310097fea6f1784e01473044022036d971f3da54303facb5fbf8dc7e9eef452cd94723eb6dc52f7aeee454791a0002204cf335114c47bae5e6dc2e00f566d1e37ec6fe25350fe797d48bff2573eeb548014752210279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817982102c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee552ae00000000";
export const CetLocalAdaptorSignature =
  "00b0a0876530b9e844d520cf115d415211ec389242ce50bc61103581b8f91dc92d588bd7d524c0a21bde854feed9b3fbf78ba043a618f8b2876456216a7e1eec87";
export const CetLocalAdaptorProof =
  "01746bd31e93719866a19a73986c71d7676cf8ba8a31a80eb3c1d583af75abcf96b695d3ec270a1e1c294fe5135580246a32a5b6efe0570c83246ba0145288d314b2d19ed6d6f6231ca660c5a0dc8ce271aa66f00e4d92f9b4690272505f7553cf";
export const CetRemoteAdaptorSignature =
  "01e5db75ebd81749c2b5329b399e2c0fb5864011115e484b7f2f8162fa98f86ee89451080e0692cbc6dd9a280bd8aa4ee8ea99a5bfeafaa6147a1f195cb5d1889c";
export const CetRemoteAdaptorProof =
  "00228dc90189f3c23f154f6cd18b342954d357d72bde8d729a502facf9f00c55ed1b8bc0b44f38b6032df66dd650ce48961288ee21d78a019458d054165c83cfa67775d8a52187fe02aa566e7af76e8d7e2d648cf50b01f447683d07819cae73fa";

export const RefundTransactionUnsigned =
  "02000000019246862ea34db0833bd4bd9e657d61e2e5447d0438f6f6181d1cd329e8cf71c30000000000feffffff0200e1f505000000001600145dedfbf9ea599dd4e3ca6a80b333c472fd0b3f6900e1f505000000001600149652d86bedf43ad264362e6e6eba6eb76450812764000000";
export const RefundTransactionSigned =
  "020000000001019246862ea34db0833bd4bd9e657d61e2e5447d0438f6f6181d1cd329e8cf71c30000000000feffffff0200e1f505000000001600145dedfbf9ea599dd4e3ca6a80b333c472fd0b3f6900e1f505000000001600149652d86bedf43ad264362e6e6eba6eb764508127040047304402204d7d24af8714835eead1143e5f589675c9e3b68d911ed5cbaaaa207586dac8e7022059a1febe7e12864a9ac59167510ffddfeed0f75920f611263e90b2068df52dbe014730440220325b227c84d65a29d6f932f149af7fd6849237bc9d5dec09771d68f75dacb85e02202b8b0074f0804850ae4bdca21d139681d971117a669aae3385fb72acaa2feaee014752210279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817982102c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee552ae64000000";
export const RefundTransactionLocalRawSignature =
  "4d7d24af8714835eead1143e5f589675c9e3b68d911ed5cbaaaa207586dac8e759a1febe7e12864a9ac59167510ffddfeed0f75920f611263e90b2068df52dbe";
export const RefundTransactionRemoteRawSignature =
  "325b227c84d65a29d6f932f149af7fd6849237bc9d5dec09771d68f75dacb85e2b8b0074f0804850ae4bdca21d139681d971117a669aae3385fb72acaa2feaee";
