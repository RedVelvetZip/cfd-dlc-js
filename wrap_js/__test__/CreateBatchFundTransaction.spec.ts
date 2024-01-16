import * as cfddlcjs from "../../index.js";
import TestHelper from "./TestHelper";
import * as TestData from "./data/TestData";

console.log('TestData.LocalFundPubkey', TestData.LocalFundPubkey);

console.log('testing cfddlcjs', cfddlcjs);

function GetRequest(
  optionPremium = 0,
  optionDest = "",
  localChange = 4899999789,
  remoteChange = 4899999789
) {
  return {
    localPubkeys: [TestData.LocalFundPubkey, TestData.LocalFundPubkey2],
    remotePubkeys: [TestData.RemoteFundPubkey, TestData.RemoteFundPubkey2],
    outputAmounts: [TestData.FundInputAmount1, TestData.FundInputAmount2],
    feeRate: 1,
    localInputs: TestData.LocalInputs.map((input) => {
      return {
        ...input,
        maxWitnessLength: 108,
      }
    }),
    localChange: {
      amount: localChange,
      address: TestData.LocalChangeAddress,
    },
    remoteInputs: TestData.RemoteInputs.map((input) => {
      return {
        ...input,
        maxWitnessLength: 108,
      }
    }),
    remoteChange: {
      amount: remoteChange,
      address: TestData.RemoteChangeAddress,
    },
    outputSerialIds: [0, 1],
    nLockTime: 0,
  };
}

const testCase = [
  TestHelper.createTestCase(
    "CreateBatchFundTransaction",
    cfddlcjs.CreateBatchFundTransaction,
    GetRequest(),
    {
      hex: TestData.FundTxHexUnsigned,
    }
  ),
];

const errorCase = [
  TestHelper.createTestCase(
    "CreateBatchFundTransaction invalid Pubkey",
    cfddlcjs.CreateBatchFundTransaction,
    { ...GetRequest(), localPubkeys: [""] },
    TestHelper.createIllegalArgumentError("Invalid Pubkey data.")
  ),
  TestHelper.createTestCase(
    "CreateBatchFundTransaction invalid hex string(3 chars)",
    cfddlcjs.CreateBatchFundTransaction,
    { ...GetRequest(), localPubkeys: ["000"] },
    TestHelper.createIllegalArgumentError("hex to byte convert error.")
  ),
];

TestHelper.doTest("CreateBatchFundTransaction", testCase);
TestHelper.doTest("CreateBatchFundTransaction ErrorCase", errorCase);
