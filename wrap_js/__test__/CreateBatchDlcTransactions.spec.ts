import * as cfddlcjs from "../../index.js";
import TestHelper from "./TestHelper";
import * as TestData from "./data/TestData";
import * as CfdUtils from "../cfd_utils";

function GetRequest(
  localChange = 4899999789,
  remoteChange = 4899999789
) {
  return {
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
    fundOutputSerialIds: [0, 0],
  };
}

const testCase = [
  TestHelper.createTestCase(
    "CreateBatchDlcTransactions",
    cfddlcjs.CreateBatchDlcTransactions,
    GetRequest(),
    {
      fundTxHex: TestData.FundTxBatchHex,
      cetsHexList: [
        TestData.CetBatchHex,
        TestData.CetBatchHex2,
      ],
      refundTxHexList: [TestData.RefundBatchTransaction, TestData.RefundBatchTransaction2],
    }
  ),
];

const errorCase = [
  TestHelper.createTestCase(
    "CreateBatchDlcTransactions invalid Pubkey",
    cfddlcjs.CreateBatchDlcTransactions,
    { ...GetRequest(), localFundPubkeys: [""] },
    TestHelper.createIllegalArgumentError("Vector sizes do not match the number of pubkeys or fund_output_serial_ids is not empty and does not match the number of pubkeys.")
  ),
  TestHelper.createTestCase(
    "CreateBatchDlcTransactions invalid hex string(3 chars)",
    cfddlcjs.CreateBatchDlcTransactions,
    { ...GetRequest(), localFundPubkeys: ["000"] },
    TestHelper.createIllegalArgumentError("Vector sizes do not match the number of pubkeys or fund_output_serial_ids is not empty and does not match the number of pubkeys.")
  ),
];

TestHelper.doTest("CreateBatchDlcTransactions", testCase);
TestHelper.doTest("CreateBatchDlcTransactions ErrorCase", errorCase);
