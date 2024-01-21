import * as cfddlcjs from "../../index.js";
import * as CfdUtils from "../cfd_utils";
import TestHelper from "./TestHelper";
import * as TestData from "./data/TestData";

const testCase = [
  TestHelper.createTestCase(
    "CreateDlcTransactions",
    cfddlcjs.CreateBatchDlcTransactions,
    {
      localPayouts: [TestData.WinAmount, TestData.LoseAmount],
      remotePayouts: [TestData.LoseAmount, TestData.WinAmount],
      localFundPubkeys: [TestData.LocalFundPubkey, TestData.LocalFundPubkey2],
      remoteFundPubkeys: [TestData.RemoteFundPubkey, TestData.RemoteFundPubkey2],
      localInputAmount: TestData.LocalInputAmount,
      localCollateralAmounts: [TestData.LocalCollateralAmount, TestData.LocalCollateralAmount2],
      localPayoutSerialIds: [0, 0],
      localChangeSerialId: 0,
      remoteInputAmount: TestData.RemoteInputAmount,
      remoteCollateralAmounts: [TestData.RemoteCollateralAmount, TestData.RemoteCollateralAmount2],
      remotePayoutSerialIds: [0, 0],
      remoteChangeSerialId: 0,
      cetLockTime: 0,
      fundLockTime: 0,
      refundLocktimes: [100, 100],
      localInputs: [
        {
          txid: TestData.LocalInputs[0].txid,
          vout: TestData.LocalInputs[0].vout,
          maxWitnessLength: 108,
        },
      ],
      localChangeScriptPubkey: CfdUtils.GetAddressScript(TestData.LocalChangeAddress),
      remoteInputs: [
        {
          txid: TestData.RemoteInputs[0].txid,
          vout: TestData.RemoteInputs[0].vout,
          maxWitnessLength: 108,
        },
      ],
      remoteChangeScriptPubkey: CfdUtils.GetAddressScript(TestData.RemoteChangeAddress),
      feeRate: 1,
      localFinalScriptPubkeys: [
        CfdUtils.GetAddressScript(TestData.LocalFinalAddress),
        CfdUtils.GetAddressScript(TestData.LocalFinalAddress2),
      ],
      remoteFinalScriptPubkeys: [
        CfdUtils.GetAddressScript(TestData.RemoteFinalAddress),
        CfdUtils.GetAddressScript(TestData.RemoteFinalAddress2),
      ],
    },
    {
      fundTxHex: TestData.FundTxHexUnsigned,
      cetsHexList: [
        TestData.CetHexUnsigned,
        "02000000019246862ea34db0833bd4bd9e657d61e2e5447d0438f6f6181d1cd329e8cf71c30000000000ffffffff02a0860100000000001600145dedfbf9ea599dd4e3ca6a80b333c472fd0b3f69603bea0b000000001600149652d86bedf43ad264362e6e6eba6eb76450812700000000",
        TestData.CetHexUnsigned,
        "02000000019246862ea34db0833bd4bd9e657d61e2e5447d0438f6f6181d1cd329e8cf71c30000000000ffffffff02a0860100000000001600145dedfbf9ea599dd4e3ca6a80b333c472fd0b3f69603bea0b000000001600149652d86bedf43ad264362e6e6eba6eb76450812700000000",
      ],
      refundTxHexList: [TestData.RefundTransactionUnsigned, TestData.RefundTransactionUnsigned],
    }
  ),
];

TestHelper.doTest("CreateDlcTransactions", testCase);
