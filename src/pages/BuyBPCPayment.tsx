</h3>
        <ol className="list-decimal pl-5 text-blue-700 space-y-3">
          <li>Copy the account details below</li>
          <li>Open your bank app and make a transfer</li>
          <li>Return here and click "I have made this bank Transfer"</li>
          <li>Wait for confirmation (usually within 3 minutes)</li>
        </ol>
      </div>

      <div className="bg-white m-5 p-5 rounded-lg border border-gray-200">
        <div className="mb-4">
          <p className="text-gray-500 text-sm">Amount</p>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">NGN 6500</p>
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              onClick={() => handleCopy("6500", "Amount")}
            >
              <Copy size={18} />
              Copy
            </Button>
          </div>
        </div>

        <div className="mb-4 border-t pt-4">
          <p className="text-gray-500 text-sm">Account Number</p>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">2418859179</p>
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              onClick={() => handleCopy("2418859179", "Account Number")}
            >
              <Copy size={18} />
              Copy
            </Button>
          </div>
        </div>

        <div className="mb-4 border-t pt-4">
          <p className="text-gray-500 text-sm">Bank Name</p>
          <p className="text-2xl font-bold">PAGA</p>
        </div>

        <div className="mb-4 border-t pt-4">
          <p className="text-gray-500 text-sm">Account Name</p>
          <p className="text-2xl font-bold">PRINCE OKANEZI</p>
        </div>
      </div>

      <p className="text-center px-5 mb-4 text-gray-700">
        Pay to this specific account and get your BPC code
      </p>

      <div className="px-5 mb-8">
        <Button
          className="bg-blue-600 hover:bg-blue-700 w-full py-6 text-lg font-semibold"
          onClick={handlePaymentConfirm}
        >
          I have made this bank Transfer
        </Button>
      </div>
    </div>
  );
};

export default BuyBPCPayment;
